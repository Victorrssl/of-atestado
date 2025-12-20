import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

const ProgressBar = ({ currentStep, totalSteps, labels }: ProgressBarProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Steps */}
      <div className="flex items-center justify-between relative">
        {/* Progress Line Background */}
        <div className="absolute left-0 right-0 top-5 h-0.5 bg-border -z-10" />
        
        {/* Progress Line Active */}
        <div 
          className="absolute left-0 top-5 h-0.5 bg-primary transition-all duration-500 -z-10"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNumber = i + 1;
          const isComplete = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isPending = stepNumber > currentStep;

          return (
            <div key={i} className="flex flex-col items-center">
              <div
                className={cn(
                  "progress-step",
                  isComplete && "progress-step-complete",
                  isActive && "progress-step-active",
                  isPending && "progress-step-pending"
                )}
              >
                {isComplete ? (
                  <Check className="w-5 h-5" />
                ) : (
                  stepNumber
                )}
              </div>
              {labels && labels[i] && (
                <span className={cn(
                  "text-xs mt-2 font-medium hidden md:block",
                  (isComplete || isActive) ? "text-foreground" : "text-muted-foreground"
                )}>
                  {labels[i]}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Label */}
      {labels && (
        <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
          Etapa {currentStep} de {totalSteps}: <span className="text-foreground font-medium">{labels[currentStep - 1]}</span>
        </p>
      )}
    </div>
  );
};

export default ProgressBar;
