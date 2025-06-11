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
  DollarSign,
  Hospital,
  MessageCircle,
  Star,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Apresentacao = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Preços abaixo do mercado",
      description: "Preços abaixo do mercado, negociados coletivamente",
    },
    {
      icon: <Hospital className="w-8 h-8 text-blue-600" />,
      title: "Rede credenciada nacional",
      description: "Rede credenciada nacional com foco em Goiás",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Redução de carência",
      description:
        "Isenção ou redução de carência conforme regras da operadora",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Atendimento humanizado",
      description:
        "Atendimento humanizado e consultoria empresarial especializada",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Redução de absenteísmo",
      description: "Redução de absenteísmo, afastamentos e rotatividade",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Valorização da marca",
      description:
        "Valorização da marca empregadora com benefício de alto valor percebido",
    },
  ];

  const eligibleCompanies = [
    "Indústrias de confecção e vestuário",
    "Empresas prestadoras de serviços",
    "Lojas e comércios do setor",
    "Associações e cooperativas do segmento",
  ];

  const contractSteps = [
    {
      number: "1",
      title: "Clique no botão 'Solicitar Proposta'",
      description: "Acesse nosso formulário de solicitação",
    },
    {
      number: "2",
      title: "Preencha os dados da sua empresa",
      description: "Informe os dados necessários para análise",
    },
    {
      number: "3",
      title: "Aguarde o contato da nossa equipe em até 48h",
      description: "Receba uma proposta sob medida para sua empresa",
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
                  Plano de Saúde Corporativo Exclusivo
                  <span className="block text-blue-200">
                    para Filiados ao Sinvest Goiás
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-blue-100 mb-4">
                  Aureum Soluções em Saúde + Sinvest Goiás: Cuidando das pessoas
                  com estratégia
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-6 sm:mb-8">
                  Condições especiais para empresas goianas que valorizam seus
                  colaboradores e desejam reduzir custos com saúde, absenteísmo
                  e turnover.
                </p>
                <Button
                  size="lg"
                  className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold"
                >
                  👉 Solicitar Proposta Personalizada
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                  <div className="text-center">
                    <BadgeCheck className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Parceria Oficial
                    </h3>
                    <p className="text-blue-100 text-sm sm:text-base">
                      Plano validado pelo Sinvest Goiás
                    </p>
                    <p className="text-blue-100 text-xs mt-2">
                      Registro nº 2025/01-AU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do Plano */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Principais Benefícios
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Vantagens exclusivas para empresas filiadas ao Sinvest Goiás
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem Pode Contratar */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Empresas Elegíveis
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                Este plano é exclusivo para empresas filiadas ao Sinvest Goiás,
                independentemente do porte (pequeno, médio ou grande). É ideal
                para:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {eligibleCompanies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md flex items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-800">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como Contratar */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Como Contratar em 3 Passos
              </h2>
            </div>

            <div className="space-y-8">
              {contractSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-blue-50 rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 p-6 bg-yellow-50 rounded-xl">
              <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-gray-700">
                📲 Atendimento via WhatsApp, E-mail ou ligação, com suporte
                completo antes e após a adesão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Empresas Satisfeitas com Resultados Reais
              </h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "Após contratar o plano da Aureum com apoio do Sinvest,
                conseguimos reduzir faltas por motivos de saúde e aumentamos o
                engajamento interno. O plano foi bem aceito por todos os
                colaboradores."
              </blockquote>
              <cite className="text-blue-600 font-semibold">
                — Nome do gestor, Empresa XYZ, Goiânia
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Selo de Credibilidade */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Parceria Oficial Reconhecida
              </h2>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
              <BadgeCheck className="w-16 h-16 mx-auto mb-6" />
              <div className="space-y-3">
                <p className="text-xl font-bold">
                  ✔ Plano de Saúde validado pelo Sinvest Goiás
                </p>
                <p className="text-lg">
                  Parceria oficial registrada sob o nº 2025/01-AU
                </p>
                <p className="text-lg">
                  Oferecido exclusivamente pela Aureum Soluções em Saúde
                </p>
              </div>
              <div className="mt-6 text-sm text-blue-200">
                (inserir o logotipo da Aureum e o selo do Sinvest nessa área)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Final */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Quer saber quanto sua empresa pode economizar com saúde?
            </h2>

            <Button
              size="lg"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold mb-8"
            >
              👉 Quero minha proposta personalizada
            </Button>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <p className="font-bold mb-2">WhatsApp</p>
                <p className="text-blue-100">(62) 9 9999-9999</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <p className="font-bold mb-2">E-mail</p>
                <p className="text-blue-100">contato@aureumsaude.com.br</p>
              </div>
            </div>

            <p className="mt-8 text-blue-200">
              Atendimento exclusivo para empresas filiadas ao Sinvest Goiás
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apresentacao;
