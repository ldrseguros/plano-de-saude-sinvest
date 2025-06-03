import {
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
  Network,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description:
        "Empresas garantem planos acessíveis e otimizam investimentos em saúde.",
    },
    {
      icon: Users,
      title: "Retenção e Atração de Talentos",
      description:
        "Benefícios de saúde aumentam a satisfação e o engajamento dos colaboradores.",
    },
    {
      icon: TrendingUp,
      title: "Maior Produtividade",
      description:
        "Funcionários saudáveis reduzem o absenteísmo e aumentam a eficiência no trabalho.",
    },
    {
      icon: BarChart3,
      title: "Gestão Estratégica",
      description:
        "Relatórios personalizados para acompanhamento da saúde corporativa.",
    },
    {
      icon: Network,
      title: "Rede de Atendimento Personalizada",
      description:
        "Estrutura de postos para atendimento personalizada, com rede própria e convênios desenhados para a melhor experiência do beneficiário final.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Benefícios para Empresas Filiadas à SINVEST
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vantagens exclusivas pensadas para fortalecer o setor de vestuário e
            proporcionar o melhor cuidado aos colaboradores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
