import { Button } from '@/components/ui/button';
import { FileText, User, CreditCard, Calendar, Mail, Phone, Activity, AlertCircle, DollarSign } from 'lucide-react';

interface SummaryData {
  cpf: string;
  name: string;
  birthDate: string;
  symptoms: string;
  email: string;
  phone: string;
  period: number;
  price: number;
}

interface StepSummaryProps {
  data: SummaryData;
  onBack: () => void;
}

const StepSummary = ({ data, onBack }: StepSummaryProps) => {
  const summaryItems = [
    { icon: User, label: 'Nome', value: data.name },
    { icon: CreditCard, label: 'CPF', value: data.cpf },
    { icon: Calendar, label: 'Data de Nascimento', value: data.birthDate },
    { icon: Calendar, label: 'Período', value: `${data.period} ${data.period === 1 ? 'dia' : 'dias'}` },
    { icon: Activity, label: 'Sintomas', value: data.symptoms },
    { icon: Mail, label: 'E-mail', value: data.email },
    { icon: Phone, label: 'Telefone', value: data.phone },
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="w-full max-w-2xl mx-auto animate-fade-in">
        <div className="card-medical">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Resumo da Solicitação
            </h1>
            <p className="text-muted-foreground">
              Confira os dados antes de finalizar
            </p>
          </div>

          {/* Summary Card */}
          <div className="bg-muted/50 rounded-xl p-6 mb-6 space-y-4">
            {summaryItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground break-words">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Box */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-primary" />
                <span className="text-lg font-semibold text-foreground">Valor Total</span>
              </div>
              <div className="text-right">
                <span className="text-3xl font-heading font-bold text-primary">
                  R$ {data.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/20 rounded-lg mb-8">
            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-foreground mb-1">Importante</p>
              <p className="text-muted-foreground">
                O envio da avaliação ocorrerá após a confirmação do processo. 
                Você receberá todas as informações por e-mail e WhatsApp.
              </p>
            </div>
          </div>

          {/* Button */}
          <Button 
            type="button" 
            variant="outline" 
            size="lg"
            className="w-full"
            onClick={onBack}
          >
            Voltar
          </Button>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            Este é um sistema demonstrativo. Nenhum documento será emitido ou processado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepSummary;
