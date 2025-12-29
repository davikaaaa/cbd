import { Helmet } from 'react-helmet-async';
import VideoBackground from '@/components/VideoBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import LegalSection from '@/components/LegalSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FranceCBD | CBD Premium Légal en France</title>
        <meta 
          name="description" 
          content="Découvrez FranceCBD, votre boutique de CBD premium 100% légal en France. Fleurs, huiles et produits CBD de qualité avec THC ≤ 0,3%. Livraison rapide et discrète." 
        />
        <meta name="keywords" content="CBD France, CBD légal, fleurs CBD, huile CBD, cannabidiol, THC 0.3%, CBD premium" />
        <meta property="og:title" content="FranceCBD | CBD Premium Légal en France" />
        <meta property="og:description" content="Boutique de CBD premium 100% légal. Qualité française, THC ≤ 0,3%." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://francecbd.fr" />
      </Helmet>

      <VideoBackground />
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
      </main>
      
      <Footer />
      <LegalSection />
    </>
  );
};

export default Index;
