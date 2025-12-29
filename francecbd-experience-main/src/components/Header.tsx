import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useCartContext } from '@/contexts/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { itemCount } = useCartContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Notre Vision' },
    { href: '#products', label: 'Nos Produits' },
    { href: '#legal', label: 'CBD Légal' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 glass-card' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="content-container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl font-semibold text-white tracking-wide">
            France<span className="gradient-text">CBD</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            {/* Cart indicator */}
            <button className="relative text-white/80 hover:text-white transition-colors">
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-white/70 text-sm hidden lg:block">
                  {user.email}
                </span>
                <Button 
                  variant="glass" 
                  size="sm"
                  onClick={() => signOut()}
                >
                  <LogOut size={16} className="mr-2" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="hero" size="sm">
                  <User size={16} className="mr-2" />
                  Connexion
                </Button>
              </Link>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card animate-fade-in">
          <nav className="content-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 py-2 text-sm tracking-wide uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex items-center gap-4 pt-4 border-t border-border/30">
              <button className="relative text-white/80 hover:text-white transition-colors">
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              
              {user ? (
                <Button 
                  variant="glass" 
                  className="flex-1"
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogOut size={16} className="mr-2" />
                  Déconnexion
                </Button>
              ) : (
                <Link to="/auth" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="hero" className="w-full">
                    <User size={16} className="mr-2" />
                    Connexion
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
