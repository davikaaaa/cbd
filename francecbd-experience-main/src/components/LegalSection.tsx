import { CheckCircle, AlertCircle, FileCheck } from 'lucide-react';
import labTestingImage from '@/assets/lab-testing.jpg';

const LegalSection = () => {
  return (
    <section id="legal" className="py-24 md:py-32">
      <div className="content-container">
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-violet-light text-sm tracking-[0.2em] uppercase mb-4 block">
                Conformité
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Le CBD <span className="gradient-text">Légal en France</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Depuis la décision de la Cour de Justice de l'Union Européenne en 2020 et l'arrêté 
                français de 2022, le CBD est légal en France sous certaines conditions strictes 
                que nous respectons scrupuleusement.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">THC ≤ 0,3%</h4>
                    <p className="text-sm text-muted-foreground">
                      Tous nos produits contiennent un taux de THC inférieur ou égal à 0,3%, 
                      conformément à la réglementation en vigueur.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-violet" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Traçabilité Complète</h4>
                    <p className="text-sm text-muted-foreground">
                      Chaque produit dispose d'un certificat d'analyse réalisé par un laboratoire 
                      indépendant et accrédité.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-yellow" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Aucune Allégation Médicale</h4>
                    <p className="text-sm text-muted-foreground">
                      Nos produits ne sont pas des médicaments et ne peuvent se substituer à un 
                      traitement médical. Consultez votre médecin en cas de doute.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src={labTestingImage}
                  alt="Laboratoire d'analyse CBD FranceCBD"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 max-w-xs">
                <p className="text-sm text-muted-foreground">
                  "La transparence et la conformité sont au cœur de notre engagement envers nos clients."
                </p>
                <p className="text-xs text-violet mt-2 font-medium">— Équipe FranceCBD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
