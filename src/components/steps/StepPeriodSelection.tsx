import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingOption {
  days: number;
  price: number;
  link: string;
}

interface StepPeriodSelectionProps {
  onNext: (selection: { days: number; price: number; link: string }) => void;
  onBack: () => void;
}

const StepPeriodSelection = ({ onNext, onBack }: StepPeriodSelectionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const options: PricingOption[] = [
    { days: 1, price: 29.90, link: 'https://pay.pagamentosegurohub.shop/a6pVgd2KjDzZk7B' },
    { days: 3, price: 39.90, link: 'https://pay.pagamentosegurohub.shop/KV603koLl9m3w8y' },
    { days: 5, price: 49.90, link: 'https://pay.pagamentosegurohub.shop/QqyLgqokBYbZvkE' },
    { days: 7, price: 59.90, link: 'https://pay.pagamentosegurohub.shop/a6pVgd2KapzZk7B' },
    { days: 10, price: 74.90, link: 'https://pay.pagamentosegurohub.shop/PVYB34e0V1dZKzk' },
    { days: 14, price: 94.90, link: 'https://pay.pagamentosegurohub.shop/YL9jZDW87Jm3p4q' },
  ];

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  const handleContinue = () => {
    if (selected !== null) {
      onNext(options[selected]);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="w-full max-w-3xl mx-auto animate-fade-in">
        <div className="card-medical">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Selecione o Período
            </h1>
            <p className="text-muted-foreground">
              Escolha o período desejado para sua avaliação
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={cn(
                  "pricing-card relative text-left",
                  selected === index && "pricing-card-selected"
                )}
              >
                {/* Selected Check */}
                {selected === index && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}

                {/* Days */}
                <div className="mb-3">
                  <span className="text-3xl font-heading font-bold text-foreground">{option.days}</span>
                  <span className="text-muted-foreground ml-1">{option.days === 1 ? 'dia' : 'dias'}</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-2xl font-bold text-primary">
                    {option.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {/* Link placeholder */}
                <a 
                  href={option.link} 
                  className="absolute inset-0 opacity-0"
                  onClick={(e) => e.preventDefault()}
                >
                  Selecionar
                </a>
              </button>
            ))}
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
              onClick={handleContinue}
              disabled={selected === null}
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

export default StepPeriodSelection;
