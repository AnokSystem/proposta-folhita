import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import folhitaLogo from "@/assets/folhita-logo.png";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5573999827391", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+5573999827391", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-dark via-brand-dark-light to-brand-dark flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={folhitaLogo} 
              alt="Folhita Comunicação Visual" 
              className="h-20 md:h-24 w-auto"
            />
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-brand-green">SUA EMPRESA</span><br />
              <span className="text-foreground">MERECE</span><br />
              <span className="text-brand-cyan">COISA BOA</span>
            </h1>
            
            <div className="inline-block bg-gradient-to-r from-brand-green to-brand-cyan text-transparent bg-clip-text">
              <p className="text-lg md:text-xl font-semibold">
                O MAIOR OUTDOOR DE LED DA BAHIA
              </p>
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Faça sua empresa ser <span className="text-brand-green font-semibold">conhecida</span> e vender 
            <span className="text-brand-cyan font-semibold"> muito MAIS!</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-base md:text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Proposta
            </Button>
            
            <Button 
              variant="outline-brand" 
              size="lg" 
              onClick={handleCall}
              className="w-full sm:w-auto text-base md:text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              (73) 99982-7391
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-brand-green/20">
              <div className="text-2xl md:text-3xl font-bold text-brand-green">10 mil</div>
              <div className="text-sm text-muted-foreground">pessoas alcançadas por dia</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-brand-cyan/20">
              <div className="text-2xl md:text-3xl font-bold text-brand-cyan">262x</div>
              <div className="text-sm text-muted-foreground">exibições da sua marca por dia</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-brand-green/20">
              <div className="text-2xl md:text-3xl font-bold text-brand-green">Estratégico</div>
              <div className="text-sm text-muted-foreground">local de alta visibilidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;