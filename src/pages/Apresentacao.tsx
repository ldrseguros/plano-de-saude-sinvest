import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Shield,
  Users,
  Heart,
  Award,
  TrendingUp,
  Building,
  UserCheck,
  Target,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Apresentacao = () => {
  const stats = [
    { number: "24", label: "Anos de experiência" },
    { number: "100%", label: "Transparência" },
    { number: "3", label: "Estados de atuação" },
    { number: "24/7", label: "Suporte disponível" },
  ];

  const benefits = [
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: "Atração de Talentos",
      description:
        "Diferencial competitivo que valoriza sua empresa como marca empregadora no mercado.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Retenção de Colaboradores",
      description:
        "Reduz o turnover e os custos associados a processos de desligamento e recrutamento.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Aumento da Produtividade",
      description:
        "Colaboradores saudáveis faltam menos, produzem mais e se engajam com o propósito da empresa.",
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Valorização da Empresa",
      description:
        "Demonstra cuidado com as pessoas, fortalecendo a imagem organizacional no mercado.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Benefícios Fiscais",
      description:
        "Em alguns casos, permite dedução de custos e melhora no planejamento tributário.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Clima Organizacional",
      description:
        "Gera satisfação e bem-estar, promovendo um ambiente mais saudável e colaborativo.",
    },
  ];

  const services = [
    {
      title: "Planos de Saúde Coletivos",
      description:
        "Elaboração de propostas estratégicas para empresas que buscam atrair e reter talentos.",
      features: [
        "Redução do turnover",
        "Valorização da marca empregadora",
        "Soluções personalizadas",
      ],
    },
    {
      title: "Seguro Garantia",
      description:
        "Instrumento essencial para empresas que necessitam de respaldo em contratos.",
      features: [
        "Contratos públicos",
        "Contratos privados",
        "Proteção patrimonial",
      ],
    },
    {
      title: "Responsabilidade Civil",
      description:
        "Proteção patrimonial contra riscos relacionados à atividade empresarial.",
      features: [
        "Proteção patrimonial",
        "Cobertura de riscos",
        "Tranquilidade empresarial",
      ],
    },
  ];

  const differentials = [
    "Atendimento consultivo e humanizado",
    "Expertise em propostas estratégicas de benefícios corporativos",
    "Atuação em Goiás, Distrito Federal e São Paulo",
    "Estrutura enxuta e ágil com respostas rápidas",
    "Foco na transformação pessoal e empresarial",
    "24 anos de experiência sólida no mercado",
  ];

  const values = [
    {
      title: "Integridade",
      description: "Atuamos com ética e transparência em todas as relações.",
    },
    {
      title: "Responsabilidade",
      description:
        "Comprometidos com a qualidade e segurança de nossos serviços.",
    },
    {
      title: "Valorização das Pessoas",
      description: "Priorizamos o bem-estar e desenvolvimento humano.",
    },
    {
      title: "Inovação",
      description: "Buscamos constantemente soluções modernas e eficientes.",
    },
    {
      title: "Transparência",
      description: "Mantemos comunicação clara e honesta com nossos parceiros.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Martins & Pimenta
                  <span className="block text-blue-200">
                    Corretora de Seguros
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed mb-6 sm:mb-8">
                  24 anos oferecendo soluções inteligentes e humanizadas em
                  seguros e planos de saúde, promovendo segurança, bem-estar e
                  tranquilidade para empresas e famílias.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Fale Conosco
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                  <div className="text-center">
                    <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Segurança & Confiança
                    </h3>
                    <p className="text-blue-100 text-sm sm:text-base">
                      Mais de duas décadas cuidando do que é mais importante
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Quem Somos
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A Martins & Pimenta é uma empresa especializada na
                comercialização de planos de saúde, seguro garantia e
                responsabilidade civil, com 24 anos de atuação sólida no
                mercado.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Atuamos com foco em{" "}
                    <strong className="text-blue-600">
                      segurança, transparência e empatia
                    </strong>
                    , sempre buscando construir relacionamentos duradouros com
                    nossos clientes e parceiros.
                  </p>
                  <p>
                    Nos destacamos pela combinação de{" "}
                    <strong className="text-blue-600">
                      inovação, acessibilidade e engajamento comunitário
                    </strong>
                    , garantindo soluções personalizadas e de alto valor para
                    empresas e famílias.
                  </p>
                  <p>
                    Nossa atuação abrange{" "}
                    <strong className="text-blue-600">
                      Goiás, Distrito Federal e São Paulo
                    </strong>
                    , com forte presença e conhecimento regional, oferecendo
                    estrutura enxuta e ágil que garante respostas rápidas e
                    acompanhamento próximo.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 sm:p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {values.slice(0, 4).map((value, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/60 rounded-lg"
                      >
                        <h4 className="font-bold text-blue-800 text-sm mb-1">
                          {value.title}
                        </h4>
                        <p className="text-xs text-blue-700">
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que Planos de Saúde são Importantes */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Por que Planos de Saúde são Fundamentais para Empresas?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Oferecer plano de saúde aos colaboradores é uma estratégia
                fundamental para empresas que desejam se manter competitivas,
                atrativas e sustentáveis no mercado.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Nossos Serviços e Especialidades
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Soluções completas e personalizadas para atender às necessidades
                específicas da sua empresa.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 sm:p-8"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-blue-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Nossos Diferenciais
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                O que nos torna únicos no mercado de seguros e planos de saúde.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {differentials.map((differential, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 sm:p-6 shadow-md flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {differential}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Pronto para Transformar sua Empresa?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed">
              Junte-se aos sindicatos que já confiam na Martins & Pimenta para
              oferecer os melhores benefícios aos seus associados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Phone className="w-5 h-5 mr-2" />
                Entre em Contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Solicite uma Proposta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Entre em Contato
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Estamos prontos para atender sua empresa em toda nossa região de
                atuação.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6 sm:p-8 bg-blue-50 rounded-xl">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  Goiás
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Atendimento completo em todo o estado
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-green-50 rounded-xl">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  Distrito Federal
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Cobertura total na capital federal
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-purple-50 rounded-xl">
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  São Paulo
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Presença forte no maior mercado do país
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apresentacao;
