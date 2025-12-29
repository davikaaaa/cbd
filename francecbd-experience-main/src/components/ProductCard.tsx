import { Button } from '@/components/ui/button';
import { useCartContext } from '@/contexts/CartContext';

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  thc: string;
  cbd: string;
  image: string;
  isHomegrown?: boolean;
  isBio?: boolean;
}

const ProductCard = ({ name, category, price, thc, cbd, image, isHomegrown, isBio }: ProductCardProps) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart({
      name,
      category,
      price: parseFloat(price),
      isHomegrown,
    });
  };

  return (
    <div className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
      isHomegrown ? 'gradient-border' : ''
    }`}>
      <div className="glass-card h-full">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {isHomegrown && (
            <span className="bg-gradient-to-r from-violet to-rose text-white text-xs px-3 py-1 rounded-full font-medium">
              Culture Maison
            </span>
          )}
          {isBio && (
            <span className="bg-green-500/90 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
              🌿 Bio
            </span>
          )}
        </div>
        
        <div className="aspect-square overflow-hidden bg-muted/30">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="p-6">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
          <h3 className="font-display text-xl text-foreground mt-2 mb-3">
            {name}
          </h3>
          
          <div className="flex gap-3 mb-4">
            <span className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
              THC {thc}
            </span>
            <span className="text-xs bg-violet/10 px-2 py-1 rounded-md text-violet">
              CBD {cbd}
            </span>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <span className="font-display text-2xl text-foreground">
              {price}€
            </span>
            <Button 
              variant={isHomegrown ? "hero" : "default"} 
              size="sm"
              onClick={handleAddToCart}
            >
              Ajouter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
