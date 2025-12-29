import { Leaf, Shield, Award, FlaskConical } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Culture Responsable',
    description: 'Nos plants sont cultivés en France avec des méthodes respectueuses de l\'environnement.'
  },
  {
    icon: Shield,
    title: '100% Légal',
    description: 'Tous nos produits respectent la législation française avec un taux de THC ≤ 0,3%.'
  },
  {
    icon: FlaskConical,
    title: 'Analyses Certifiées',
    description: 'Chaque lot est analysé en laboratoire indépendant pour garantir sa qualité.'
  },
  {
    icon: Award,
    title: 'Qualité Premium',
    description: 'Nous sélectionnons uniquement les meilleures génétiques pour nos clients.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="content-container">
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-violet-light text-sm tracking-[0.2em] uppercase mb-4 block">
              Notre Vision
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              L'Art du CBD <span className="gradient-text">d'Exception</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              FranceCBD incarne l'excellence du CBD français. Notre engagement : vous offrir 
              des produits d'une qualité irréprochable, en toute transparence et dans le respect 
              total de la législation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group text-center p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-violet/20 to-rose/20 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-violet" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
