import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Shield,
  Users,
  Heart,
  Award,
  Clock,
  MapPin,
  Building2,
  Phone,
  Mail,
  TrendingUp,
  Globe,
} from "lucide-react";

const SobreNos = () => {
  const stats = [
    { number: "4+", label: "Anos de atuação" },
    { number: "40.000+", label: "Vidas cobertas" },
    { number: "5", label: "Estados de atuação" },
    { number: "24/7", label: "Atendimento disponível" },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Segurança",
      description:
        "Operadora regulamentada pela ANS, oferecendo segurança e proteção a todos os nossos beneficiários com planos de saúde confiáveis.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Atenção Primária",
      description:
        "Foco em Atenção Primária à Saúde, proporcionando atendimento humanizado e personalizado com modelo mais sustentável.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Compromisso",
      description:
        "Compromisso com a saúde corporativa, oferecendo soluções especializadas para empresas e seus colaboradores.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Inovação",
      description:
        "Healthtech inovadora que combina tecnologia e cuidado humanizado, oferecendo telemedicina e soluções digitais.",
    },
  ];

  const differentials = [
    "Modelo de Atenção Primária à Saúde inovador",
    "Redução de custos para operadoras e melhor custo-benefício",
    "Médico da família altamente capacitado para acompanhamento integral",
    "Telemedicina integrada com atendimento presencial",
    "Encaminhamentos especializados apenas quando necessário",
    "Mensalidades acessíveis com qualidade de atendimento",
    "Crescimento de 104% em faturamento (2023)",
    "Expansão geográfica em andamento",
    "Foco em sustentabilidade financeira para empresas",
    "Diminuição de desperdícios e otimização de recursos",
  ];

  const coverage = [
    "Bahia (sede principal)",
    "Rio Grande do Norte",
    "Goiás",
    "Pernambuco",
    "Sergipe",
  ];

  const expansion = ["Alagoas", "Distrito Federal", "Minas Gerais", "Paraíba"];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Sobre o Plano Brasil Saúde
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Healthtech especializada em saúde corporativa com 4 anos de
              atuação no mercado, atendendo mais de 40 mil vidas com foco em
              Atenção Primária à Saúde.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-100">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Fundada em 2019</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Crescimento 104% em 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Nossa História */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    O Plano Brasil Saúde foi criado em 2019 como uma healthtech
                    inovadora especializada em serviços de saúde corporativa. Em
                    apenas 4 anos de atuação, conquistamos a confiança de mais
                    de 40 mil vidas nos planos médico-hospitalar e odontológico.
                  </p>
                  <p>
                    Nossa empresa nasceu com o propósito de revolucionar o
                    modelo de saúde suplementar tradicional, focando na Atenção
                    Primária à Saúde. Este modelo mais enxuto e saudável
                    financeiramente oferece às empresas uma alternativa aos
                    custos exorbitantes dos planos tradicionais, sem abrir mão
                    da qualidade e humanização no atendimento.
                  </p>
                  <p>
                    Em 2023, registramos um crescimento expressivo de 104% no
                    faturamento, fechando o ano com mais de R$ 24 milhões em
                    receitas. Nossa projeção para 2024 é ambiciosa: alcançar R$
                    120 milhões, consolidando nossa posição como referência em
                    saúde corporativa inovadora.
                  </p>
                  <p>
                    Atualmente, nossa atuação abrange 5 estados brasileiros, e
                    já iniciamos estudos para expansão geográfica, demonstrando
                    a solidez e o potencial de crescimento de nosso modelo de
                    negócio.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center justify-center h-48 sm:h-64 lg:h-80">
                    <div className="text-center">
                      <Globe className="w-16 h-16 sm:w-20 sm:h-20 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
                        Healthtech Inovadora
                      </h3>
                      <p className="text-blue-700 text-sm sm:text-base">
                        Tecnologia + Cuidado Humanizado
                      </p>
                      <div className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-lg text-sm">
                        Fundada em 2019
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Os princípios que guiam nossa atuação como healthtech
                especializada em Atenção Primária à Saúde corporativa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">
                  Nossa Missão
                </h3>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Revolucionar o modelo de saúde suplementar através da Atenção
                  Primária à Saúde, oferecendo soluções tecnológicas e
                  humanizadas para empresas, com foco na sustentabilidade
                  financeira, redução de desperdícios e experiência
                  personalizada para cada beneficiário.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-4 sm:mb-6">
                  Nossa Visão
                </h3>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Ser a healthtech líder em saúde corporativa no Brasil,
                  reconhecida pela excelência em Atenção Primária, inovação
                  tecnológica e modelo sustentável que beneficia empresas,
                  colaboradores e o sistema de saúde como um todo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abrangência Geográfica */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Nossa Abrangência
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Presente em 5 estados brasileiros e em expansão para novos
                mercados.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  Estados de Atuação Atual
                </h3>
                <div className="grid gap-3">
                  {coverage.map((state, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                    >
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="font-medium text-gray-800">{state}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-green-600" />
                  Expansão Planejada para 2024
                </h3>
                <div className="grid gap-3">
                  {expansion.map((state, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                    >
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="font-medium text-gray-800">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Nossos Diferenciais
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                O que nos torna únicos como healthtech especializada em Atenção
                Primária à Saúde corporativa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {differentials.map((differential, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-blue-800 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">
                    {differential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Localização e Contato */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Building2 className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Nossa Sede Principal
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Localizada na Bahia, nossa sede centraliza as operações que
                atendem a 5 estados brasileiros, com expansão em andamento.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  Plano Brasil Saúde
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Bahia - Brasil
                      <br />
                      Healthtech em Saúde Corporativa
                      <br />
                      Especializada em Atenção Primária
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>0800 971 9777</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span>planobrasilsaude.com.br</span>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">
                  Crescimento e Resultados
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Crescimento 2023:</span>
                    <span className="text-green-600 font-bold">+104%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Faturamento 2023:</span>
                    <span className="text-blue-600 font-bold">R$ 24M+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Meta 2024:</span>
                    <span className="text-purple-600 font-bold">R$ 120M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Vidas Cobertas:</span>
                    <span className="text-orange-600 font-bold">40.000+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-blue-600 text-white rounded-xl p-6 inline-block">
                <h4 className="font-bold mb-2">Healthtech Inovadora</h4>
                <p className="text-2xl font-bold">4 Anos de Atuação</p>
                <p className="text-sm text-blue-100 mt-2">
                  Especializada em Atenção Primária à Saúde Corporativa
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

export default SobreNos;
