import { Button } from "@/components/ui/button";
import { AlertCircle, Heart, Calendar, DollarSign } from "lucide-react";

const CoverageSection = () => {
  const coparticipacaoItems = [
    {
      icon: AlertCircle,
      title: "Urgência e Emergência",
      percentage: "20%",
      description: "Exceto internação e cirurgias",
      detail:
        "Média de R$70,00 a R$80,00 (Mediante histórico dos usuários) e tomografia/Ressonância - Média R$70,00 a R$80,00",
    },
    {
      icon: Heart,
      title: "Terapias",
      percentage: "40%",
      description:
        "Fisioterapeuta, fonoaudiólogo, psicólogo, nutricionista e terapeuta ocupacional",
      detail:
        "Básicas por sessão (psico, fono, Nutrição): Média R$40,00 • Especiais por sessão (TEA): Média R$72,00",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Coparticipações
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Produto com coparticipação parcial - Transparência total nos custos
            compartilhados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {coparticipacaoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-2xl font-bold text-blue-600">
                    {item.percentage}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-3 font-medium">
                {item.description}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              NÃO TEMOS COPARTICIPAÇÃO NO ELETIVO
            </h3>
            <p className="text-green-700 text-lg">
              Consultas e exames, cirurgia e internação sem coparticipação
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="font-semibold text-green-800">Consultas</div>
              <div className="text-sm text-green-600 mt-1">
                Sem custo adicional
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="font-semibold text-green-800">Exames</div>
              <div className="text-sm text-green-600 mt-1">
                Sem custo adicional
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="font-semibold text-green-800">Cirurgias</div>
              <div className="text-sm text-green-600 mt-1">
                Sem custo adicional
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="font-semibold text-green-800">Internação</div>
              <div className="text-sm text-green-600 mt-1">
                Sem custo adicional
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold text-lg">
            <a href="/planos">Conhecer todos os planos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
