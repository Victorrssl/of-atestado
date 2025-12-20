import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface StepAnalysisCompleteProps {
  onNext: () => void;
}

const StepAnalysisComplete = ({ onNext }: StepAnalysisCompleteProps) => {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="card-medical text-center">
          {/* Success Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
              <CheckCircle className="w-14 h-14 text-secondary" />
            </div>
            <div className="absolute top-0 right-1/4 animate-bounce delay-100">
              <Sparkles className="w-6 h-6 text-warning" />
            </div>
            <div className="absolute bottom-0 left-1/4 animate-bounce delay-300">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Análise Concluída!
          </h1>

          {/* Message */}
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sua avaliação foi processada com sucesso. Seus dados foram analisados 
            e você está apto a prosseguir com a solicitação.
          </p>

          {/* Info Box */}
          <div className="bg-secondary-light rounded-xl p-4 mb-8">
            <p className="text-secondary text-sm font-medium">
              Próximo passo: selecione o período desejado para sua avaliação médica.
            </p>
          </div>

          {/* Button */}
          <Button 
            variant="hero" 
            size="xl" 
            className="w-full"
            onClick={onNext}
          >
            Continuar
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepAnalysisComplete;
