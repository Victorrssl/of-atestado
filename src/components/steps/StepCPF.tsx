import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, ArrowRight } from 'lucide-react';

interface StepCPFProps {
  onNext: (cpf: string) => void;
  onBack: () => void;
}

const StepCPF = ({ onNext, onBack }: StepCPFProps) => {
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    if (formatted.length <= 14) {
      setCpf(formatted);
      setError('');
    }
  };

  const validateCPF = () => {
    const numbers = cpf.replace(/\D/g, '');
    if (numbers.length !== 11) {
      setError('CPF deve conter 11 dígitos');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCPF()) {
      onNext(cpf);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="card-medical">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Vamos começar
            </h1>
            <p className="text-muted-foreground">
              Informe seu CPF para iniciar a avaliação
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-foreground mb-2">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={handleCPFChange}
                placeholder="000.000.000-00"
                className="input-medical text-lg text-center tracking-wider"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-destructive">{error}</p>
              )}
            </div>

            {/* Security Notice */}
            <div className="flex items-start gap-3 p-4 bg-secondary-light rounded-lg">
              <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-secondary mb-1">Dados protegidos</p>
                <p className="text-muted-foreground">
                  Suas informações são criptografadas e tratadas com total sigilo, 
                  em conformidade com a LGPD.
                </p>
              </div>
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
                type="submit" 
                variant="hero" 
                className="flex-1"
                disabled={cpf.length < 14}
              >
                Continuar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepCPF;
