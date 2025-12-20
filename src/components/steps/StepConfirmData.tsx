import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, CheckCircle } from 'lucide-react';

interface StepConfirmDataProps {
  cpf: string;
  onNext: () => void;
  onBack: () => void;
}

const StepConfirmData = ({ cpf, onNext, onBack }: StepConfirmDataProps) => {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="card-medical">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              CPF Confirmado
            </h1>
            <p className="text-muted-foreground">
              Seu CPF foi registrado com sucesso
            </p>
          </div>

          {/* Data Card */}
          <div className="bg-muted/50 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CPF</p>
                <p className="font-semibold text-foreground text-lg">{cpf}</p>
              </div>
            </div>
          </div>

          {/* Success Badge */}
          <div className="flex items-center justify-center gap-2 p-3 bg-secondary-light rounded-lg mb-8">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Dados registrados com segurança
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1"
              onClick={onBack}
            >
              Voltar
            </Button>
            <Button 
              type="button" 
              variant="hero" 
              className="flex-1"
              onClick={onNext}
            >
              Continuar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepConfirmData;
