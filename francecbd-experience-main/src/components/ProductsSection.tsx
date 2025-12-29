import ProductCard from './ProductCard';
import productAmnesia from '@/assets/product-amnesia.jpg';
import productOgkush from '@/assets/product-ogkush.jpg';
import productOil from '@/assets/product-oil.jpg';
import productPurple from '@/assets/product-purple.jpg';
import productCheese from '@/assets/product-cheese.jpg';
import productFrenchtouch from '@/assets/product-frenchtouch.jpg';

const wholesaleProducts = [
  {
    name: 'Amnesia Haze',
    category: 'Fleurs CBD',
    price: '8.90',
    thc: '< 0.3%',
    cbd: '18%',
    image: productAmnesia
  },
  {
    name: 'OG Kush',
    category: 'Fleurs CBD',
    price: '9.90',
    thc: '< 0.3%',
    cbd: '22%',
    image: productOgkush
  },
  {
    name: 'Huile CBD 10%',
    category: 'Huiles',
    price: '39.90',
    thc: '< 0.2%',
    cbd: '10%',
    image: productOil
  },
];

const homegrownProducts = [
  {
    name: 'Purple Queen',
    category: 'Édition Limitée',
    price: '14.90',
    thc: '< 0.3%',
    cbd: '25%',
    image: productPurple,
    isHomegrown: true,
    isBio: true
  },
  {
    name: 'Royal Cheese',
    category: 'Collection Premium',
    price: '16.90',
    thc: '< 0.3%',
    cbd: '28%',
    image: productCheese,
    isHomegrown: true,
    isBio: true
  },
  {
    name: 'French Touch',
    category: 'Exclusivité',
    price: '19.90',
    thc: '< 0.2%',
    cbd: '30%',
    image: productFrenchtouch,
    isHomegrown: true,
    isBio: true
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="content-container space-y-24">
        {/* Wholesale Products */}
        <div>
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <span className="text-rose-light text-sm tracking-[0.2em] uppercase mb-4 block">
                Sélection Partenaires
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Produits <span className="gradient-text">Certifiés</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Une sélection rigoureuse de produits CBD issus de nos partenaires grossistes certifiés, 
                avec traçabilité complète et analyses en laboratoire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {wholesaleProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </div>

        {/* Homegrown Products */}
        <div>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-rose/5 to-yellow/10 rounded-3xl" />
            <div className="glass-card rounded-3xl p-8 md:p-12 relative">
              <div className="text-center mb-12">
                <span className="text-yellow text-sm tracking-[0.2em] uppercase mb-4 block">
                  Culture Maison FranceCBD
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  Notre <span className="gradient-text">Savoir-Faire</span>
                </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Des variétés exclusives cultivées avec passion dans nos installations françaises. 
                Un savoir-faire artisanal pour une qualité d'exception.
              </p>
              <div className="flex justify-center mt-4">
                <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-sm px-4 py-2 rounded-full border border-green-500/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  🌿 Culture 100% Bio · Engrais naturels
                </span>
              </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {homegrownProducts.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
