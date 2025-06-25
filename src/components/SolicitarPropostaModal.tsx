import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageCircle,
  Phone,
  Building,
  User,
  Mail,
  AlertCircle,
} from "lucide-react";
import { validateCNPJ, applyCNPJMask } from "@/utils/validators";

interface SolicitarPropostaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SolicitarPropostaModal = ({
  isOpen,
  onClose,
}: SolicitarPropostaModalProps) => {
  const [formData, setFormData] = useState({
    nomeResponsavel: "",
    telefone: "",
    email: "",
    nomeEmpresa: "",
    cnpj: "",
    numeroFuncionarios: "",
    observacoes: "",
  });

  const [cnpjError, setCnpjError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCNPJChange = (value: string) => {
    const maskedValue = applyCNPJMask(value);
    setFormData((prev) => ({
      ...prev,
      cnpj: maskedValue,
    }));

    // Validar CNPJ se tiver 14 dígitos (sem formatação)
    const cleanCNPJ = value.replace(/\D/g, "");
    if (cleanCNPJ.length === 14) {
      if (!validateCNPJ(cleanCNPJ)) {
        setCnpjError("CNPJ inválido");
      } else {
        setCnpjError("");
      }
    } else if (cleanCNPJ.length > 0) {
      setCnpjError("CNPJ deve ter 14 dígitos");
    } else {
      setCnpjError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatação da mensagem para WhatsApp
    const message = `🏥 *SOLICITAÇÃO DE PROPOSTA - PLANO DE SAÚDE CORPORATIVO*

*Dados do Responsável:*
👤 Nome: ${formData.nomeResponsavel}
📞 Telefone: ${formData.telefone}
📧 E-mail: ${formData.email}

*Dados da Empresa:*
🏢 Empresa: ${formData.nomeEmpresa}
📋 CNPJ: ${formData.cnpj}
👥 Número de Funcionários: ${formData.numeroFuncionarios}

*Observações:*
${formData.observacoes || "Não informado"}

---
📲 Tenho interesse no plano de saúde corporativo exclusivo para filiados ao Sinvest Goiás. Aguardo contato para apresentação da proposta personalizada.`;

    // Número do WhatsApp (apenas números)
    const whatsappNumber = "5562991372617";

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp
    window.open(whatsappUrl, "_blank");

    // Fecha o modal
    onClose();

    // Limpa o formulário
    setFormData({
      nomeResponsavel: "",
      telefone: "",
      email: "",
      nomeEmpresa: "",
      cnpj: "",
      numeroFuncionarios: "",
      observacoes: "",
    });

    // Limpa os erros
    setCnpjError("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-blue-600">
            <MessageCircle className="w-5 h-5" />
            Solicitar Proposta Personalizada
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="nomeResponsavel"
              className="flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Nome do Responsável *
            </Label>
            <Input
              id="nomeResponsavel"
              name="nomeResponsavel"
              value={formData.nomeResponsavel}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Telefone/WhatsApp *
            </Label>
            <Input
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              placeholder="(62) 9 9999-9999"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              E-mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nomeEmpresa" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Nome da Empresa *
            </Label>
            <Input
              id="nomeEmpresa"
              name="nomeEmpresa"
              value={formData.nomeEmpresa}
              onChange={handleInputChange}
              placeholder="Digite o nome da sua empresa"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input
              id="cnpj"
              name="cnpj"
              value={formData.cnpj}
              onChange={(e) => handleCNPJChange(e.target.value)}
              placeholder="00.000.000/0000-00"
              maxLength={18}
              className={cnpjError ? "border-red-500" : ""}
            />
            {cnpjError && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {cnpjError}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="numeroFuncionarios">Número de Funcionários *</Label>
            <Input
              id="numeroFuncionarios"
              name="numeroFuncionarios"
              type="number"
              value={formData.numeroFuncionarios}
              onChange={handleInputChange}
              placeholder="Ex: 25"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="observacoes">Observações</Label>
            <Textarea
              id="observacoes"
              name="observacoes"
              value={formData.observacoes}
              onChange={handleInputChange}
              placeholder="Informações adicionais (opcional)"
              rows={3}
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Ao enviar, você será redirecionado para o WhatsApp com suas
              informações preenchidas.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              📲 Enviar via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SolicitarPropostaModal;
