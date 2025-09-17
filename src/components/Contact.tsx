import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import folhitaLogo from "@/assets/folhita-logo.png";

const Contact = () => {
  const handleWhatsApp = (number: string) => {
    window.open(`https://wa.me/55${number}`, "_blank");
  };

  const handleCall = (number: string) => {
    window.open(`tel:+55${number}`, "_blank");
  };

  const handleSocial = (platform: string) => {
    const urls = {
      instagram: "https://instagram.com/folhita_cv",
      facebook: "https://facebook.com/folhita.cv",
      linkedin: "https://linkedin.com/company/folhita-cv"
    };
    window.open(urls[platform as keyof typeof urls] || "#", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark via-brand-dark-light to-brand-dark">
      <div className="container mx-auto px-4">
        {/* Thank you message */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-green">
            Obrigado
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Agradecemos imensamente por nos permitir apresentar a <span className="text-brand-green font-semibold">Folhita Comunicação Visual!</span>
            </p>
            <p>
              Estamos prontos para transformar sua marca com nossa comunicação de impacto, seja 
              nos maiores outdoors de LED da Bahia ou com nossos materiais personalizados que 
              deixam sua marca presente no dia a dia do seu público.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* WhatsApp Cards */}
          <Card className="bg-card/50 border-brand-green/20 hover:border-brand-green/40 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="bg-green-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">WhatsApp Comercial</h3>
              <p className="text-2xl font-bold text-brand-green mb-4">(73) 99921-9292</p>
              <Button 
                variant="whatsapp" 
                onClick={() => handleWhatsApp("73999219292")}
                className="w-full"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="bg-green-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                <Phone className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Telefone Direto</h3>
              <p className="text-2xl font-bold text-brand-cyan mb-4">(73) 99982-7391</p>
              <Button 
                variant="cta" 
                onClick={() => handleCall("73999827391")}
                className="w-full"
              >
                <Phone className="w-4 h-4" />
                Ligar Agora
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Media */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Siga-nos nas Redes Sociais</h3>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleSocial("facebook")}
              className="bg-card/30 hover:bg-brand-cyan/20 border border-brand-cyan/20 hover:border-brand-cyan/40"
            >
              <Facebook className="w-5 h-5 text-brand-cyan" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleSocial("instagram")}
              className="bg-card/30 hover:bg-brand-green/20 border border-brand-green/20 hover:border-brand-green/40"
            >
              <Instagram className="w-5 h-5 text-brand-green" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleSocial("linkedin")}
              className="bg-card/30 hover:bg-brand-cyan/20 border border-brand-cyan/20 hover:border-brand-cyan/40"
            >
              <Linkedin className="w-5 h-5 text-brand-cyan" />
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-6">
          <img 
            src={folhitaLogo} 
            alt="Folhita Comunicação Visual" 
            className="h-16 w-auto mx-auto"
          />
          <p className="text-sm text-muted-foreground">
            Copyright © 2024 @folhita_cv, all rights reserved.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => handleWhatsApp("73999827391")}
            className="text-lg px-12 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            Transforme Sua Marca Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;