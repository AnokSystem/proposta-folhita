import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Check, Calendar, MapPin } from "lucide-react";

const Pricing = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5573999827391", "_blank");
  };

  const packages = [
    {
      duration: "30 dias",
      price: "R$ 1.650",
      period: "único",
      description: "Ideal para campanhas específicas",
      popular: false,
      features: [
        "Vídeo de 10 segundos",
        "Localização estratégica",
        "262 exibições por dia",
        "10 mil pessoas alcançadas"
      ]
    },
    {
      duration: "6 meses",
      price: "R$ 1.400",
      period: "por mês",
      description: "Melhor custo-benefício",
      popular: true,
      features: [
        "Vídeo de 10 segundos",
        "Localização estratégica", 
        "262 exibições por dia",
        "10 mil pessoas alcançadas",
        "Desconto especial"
      ]
    },
    {
      duration: "12 meses",
      price: "R$ 1.200",
      period: "por mês",
      description: "Máximo investimento em marca",
      popular: false,
      features: [
        "Vídeo de 10 segundos",
        "Localização estratégica",
        "262 exibições por dia", 
        "10 mil pessoas alcançadas",
        "Melhor preço",
        "Fidelização da marca"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark-light to-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            <span className="text-brand-green">Proposta</span> <span className="text-brand-cyan">Comercial</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Direcionada para <span className="text-brand-green font-semibold">Itamaraju - BA</span>
          </p>

          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-brand-cyan" />
              <span>Praça Castelo Branco</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-brand-green" />
              <span>Orçamento válido até 30 de Setembro</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'border-brand-green border-2 shadow-brand' : 'border-border hover:border-brand-cyan/40'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-brand-green text-white px-4 py-1">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-brand-green mb-2">
                  {pkg.duration}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pkg.period}
                  </div>
                  <p className="text-sm text-brand-cyan">
                    {pkg.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "hero" : "cta"}
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-4 h-4" />
                  Contratar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment methods */}
        <div className="text-center bg-card/30 rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-brand-green">Formas de Pagamento</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-brand-green/10 px-3 py-1 rounded-full">PIX (SEM JUROS)</span>
            <span className="bg-brand-cyan/10 px-3 py-1 rounded-full">CARTÃO DE CRÉDITO COM JUROS</span>
            <span className="bg-brand-green/10 px-3 py-1 rounded-full">BOLETO (3,5% TAXA)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;