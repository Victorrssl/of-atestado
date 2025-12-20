import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, User, Calendar, CreditCard } from 'lucide-react';

interface StepConfirmDataProps {
  cpf: string;
  onNext: () => void;
  onBack: () => void;
}

const StepConfirmData = ({ cpf, onNext, onBack }: StepConfirmDataProps) => {
  // Simulated data (would come from API in real app)
  const userData = {
    cpf: cpf,
    name: 'João da Silva Santos',
    birthDate: '15/03/1985',
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="card-medical">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Confirme seus dados
            </h1>
            <p className="text-muted-foreground">
              Verifique se as informações estão corretas
            </p>
          </div>

          {/* Data Card */}
          <div className="bg-muted/50 rounded-xl p-6 mb-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CPF</p>
                <p className="font-semibold text-foreground">{userData.cpf}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nome Completo</p>
                <p className="font-semibold text-foreground">{userData.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Data de Nascimento</p>
                <p className="font-semibold text-foreground">{userData.birthDate}</p>
              </div>
            </div>
          </div>

          {/* Auto-fill Badge */}
          <div className="flex items-center justify-center gap-2 p-3 bg-secondary-light rounded-lg mb-8">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Dados preenchidos automaticamente
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
