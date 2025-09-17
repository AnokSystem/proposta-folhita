import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, TrendingUp, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-brand-green">Quem somos?</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A <span className="text-brand-green font-semibold">Folhita Comunicação Visual</span> é especialista em visibilidade 
              para marcas e negócios, com os <span className="text-brand-cyan font-semibold">maiores e mais impactantes 
              outdoors de LED da Bahia</span>.
            </p>
            
            <p>
              Nossa tecnologia de última geração em painéis de LED permite que sua mensagem se destaque, 
              alcance mais pessoas e gere resultados reais. Quando se trata de comunicação visual de alto impacto, 
              a Folhita é a escolha certa para transformar sua marca em uma referência.
            </p>
            
            <div className="inline-block bg-gradient-to-r from-brand-green to-brand-cyan text-transparent bg-clip-text">
              <p className="text-xl font-bold">
                Folhita - Visibilidade que move seu negócio!
              </p>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card/50 border-brand-green/20 hover:border-brand-green/40 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/10 p-3 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                  <Eye className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-green">10 mil pessoas alcançadas por dia</h3>
                  <p className="text-muted-foreground">
                    Sua marca será vista por milhares de pessoas diariamente em pontos estratégicos de alto fluxo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-cyan/10 p-3 rounded-lg group-hover:bg-brand-cyan/20 transition-colors">
                  <Target className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-cyan">Exibição da sua marca 262x por dia</h3>
                  <p className="text-muted-foreground">
                    Máxima exposição com repetições estratégicas que fixam sua marca na mente do consumidor.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-brand-green/20 hover:border-brand-green/40 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/10 p-3 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-green">Locais estratégicos</h3>
                  <p className="text-muted-foreground">
                    Posicionamento em pontos de grande circulação para maximizar o impacto da sua comunicação.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-cyan/10 p-3 rounded-lg group-hover:bg-brand-cyan/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-cyan">Aumento da taxa de vendas</h3>
                  <p className="text-muted-foreground">
                    Comunicação visual eficaz que gera resultados mensuráveis para o seu negócio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;