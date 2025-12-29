import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export interface CartItem {
  name: string;
  category: string;
  price: number;
  quantity: number;
  isHomegrown?: boolean;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const savedCart = localStorage.getItem('francecbd_cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('francecbd_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => 
          i.name === item.name 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast.success(`${item.name} ajouté au panier`);
  };

  const removeFromCart = (name: string) => {
    setCartItems(prev => prev.filter(i => i.name !== name));
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(name);
      return;
    }
    setCartItems(prev => prev.map(i => 
      i.name === name ? { ...i, quantity } : i
    ));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('francecbd_cart');
  };

  const getTotalAmount = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const placeOrder = async () => {
    if (!user) {
      toast.error('Veuillez vous connecter pour passer une commande');
      return null;
    }

    if (cartItems.length === 0) {
      toast.error('Votre panier est vide');
      return null;
    }

    try {
      const orderData = {
        user_id: user.id,
        total_amount: getTotalAmount(),
        items: cartItems as unknown as import('@/integrations/supabase/types').Json,
        status: 'pending',
      };

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = cartItems.map(item => ({
        order_id: order.id,
        product_name: item.name,
        product_category: item.category,
        quantity: item.quantity,
        unit_price: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      clearCart();
      toast.success('Commande passée avec succès !');
      return order;
    } catch (error) {
      toast.error('Erreur lors de la commande');
      return null;
    }
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalAmount,
    placeOrder,
    itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
  };
};
