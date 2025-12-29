const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16">
      <div className="content-container">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <span className="font-display text-2xl text-foreground mb-4 block">
                France<span className="gradient-text">CBD</span>
              </span>
              <p className="text-muted-foreground text-sm max-w-md mb-6">
                L'excellence du CBD français. Des produits premium, 100% légaux et 
                conformes à la réglementation européenne.
              </p>
              <p className="text-xs text-muted-foreground">
                Produits réservés aux personnes majeures. Le CBD n'est pas un médicament.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
                Légal
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    CGV
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@francecbd.fr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    contact@francecbd.fr
                  </a>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    France
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} FranceCBD. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground">
              THC ≤ 0,3% • Conforme à la législation française
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
