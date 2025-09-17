import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const Location = () => {
  const handleViewMap = () => {
    window.open("https://maps.app.goo.gl/Ym22bL7yegXDmjft8", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-brand-green">Localização</span> <span className="text-brand-cyan">Estratégica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nosso outdoor está posicionado em um dos pontos de maior movimento de Itamaraju, 
            garantindo máxima visibilidade para sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Map Card */}
          <Card className="bg-card/50 border-brand-green/20 overflow-hidden group hover:border-brand-green/40 transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-brand-dark-light to-brand-dark flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="bg-brand-green/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                      <MapPin className="w-8 h-8 text-brand-green" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Praça Castelo Branco</h3>
                      <p className="text-sm text-muted-foreground">Itamaraju - Bahia</p>
                    </div>
                    <Button 
                      variant="outline-brand" 
                      size="sm"
                      onClick={handleViewMap}
                      className="mt-4"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver no Mapa
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-green">Localização Premium</h3>
                  <p className="text-muted-foreground">
                    Posicionado na Praça Castelo Branco, um dos pontos de maior circulação de pessoas 
                    e veículos em Itamaraju.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-cyan/10 p-3 rounded-lg">
                  <Navigation className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-cyan">Alto Fluxo de Pessoas</h3>
                  <p className="text-muted-foreground">
                    Localização estratégica que garante que sua mensagem seja vista por milhares 
                    de pessoas todos os dias.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/10 p-3 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-green">Fácil Acesso</h3>
                  <p className="text-muted-foreground">
                    Ponto de referência conhecido na cidade, facilitando a associação da sua marca 
                    com um local familiar para os moradores.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-green/10 to-brand-cyan/10 p-6 rounded-lg border border-brand-green/20">
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-brand-green">Endereço Completo</h4>
                <p className="text-foreground font-medium">
                  Praça Castelo Branco<br />
                  Itamaraju - BA
                </p>
                <Button 
                  variant="cta" 
                  onClick={handleViewMap}
                  className="w-full"
                >
                  <Navigation className="w-4 h-4" />
                  Como Chegar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;