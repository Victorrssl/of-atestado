import { useEffect, useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

interface StepAnalysisProps {
  onComplete: () => void;
}

const StepAnalysis = ({ onComplete }: StepAnalysisProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { text: 'Analisando informações...', duration: 1500 },
    { text: 'Consultando dados médicos...', duration: 1500 },
    { text: 'Verificando histórico...', duration: 1200 },
    { text: 'Processo concluído', duration: 800 },
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    let accumulatedTime = 0;

    steps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index);
      }, accumulatedTime);
      
      timers.push(timer);
      accumulatedTime += step.duration;
    });

    // Complete after all steps
    const completeTimer = setTimeout(() => {
      onComplete();
    }, accumulatedTime + 500);
    
    timers.push(completeTimer);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [onComplete]);

  const isComplete = currentStep === steps.length - 1;

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="card-medical text-center">
          {/* Icon */}
          <div className="mb-8">
            {isComplete ? (
              <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto animate-scale-in">
                <CheckCircle className="w-12 h-12 text-secondary" />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              </div>
            )}
          </div>

          {/* Current Step Text */}
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
            {steps[currentStep].text}
          </h2>

          {/* Progress Steps */}
          <div className="space-y-3 mb-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-secondary-light'
                    : index === currentStep
                    ? 'bg-primary-light'
                    : 'bg-muted/50'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  index < currentStep
                    ? 'bg-secondary text-secondary-foreground'
                    : index === currentStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index < currentStep ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <span className="text-xs font-semibold">{index + 1}</span>
                  )}
                </div>
                <span className={`text-sm ${
                  index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.text}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepAnalysis;
