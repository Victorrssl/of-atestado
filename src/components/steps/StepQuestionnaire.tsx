import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList } from 'lucide-react';

interface QuestionnaireData {
  symptoms: string;
  otherSymptoms: string;
  symptomStart: string;
  intensity: string;
  recentConsultation: string;
  chronicConditions: string;
  medications: string;
}

interface StepQuestionnaireProps {
  onNext: (data: QuestionnaireData) => void;
  onBack: () => void;
}

const StepQuestionnaire = ({ onNext, onBack }: StepQuestionnaireProps) => {
  const [formData, setFormData] = useState<QuestionnaireData>({
    symptoms: '',
    otherSymptoms: '',
    symptomStart: '',
    intensity: '',
    recentConsultation: '',
    chronicConditions: '',
    medications: '',
  });

  const [errors, setErrors] = useState<Partial<QuestionnaireData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuestionnaireData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Partial<QuestionnaireData> = {};
    if (!formData.symptoms.trim()) newErrors.symptoms = 'Descreva seus sintomas';
    if (!formData.symptomStart) newErrors.symptomStart = 'Selecione quando os sintomas começaram';
    if (!formData.intensity) newErrors.intensity = 'Selecione a intensidade';
    if (!formData.recentConsultation) newErrors.recentConsultation = 'Selecione uma opção';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="w-full max-w-2xl mx-auto animate-fade-in">
        <div className="card-medical">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Questionário Médico
            </h1>
            <p className="text-muted-foreground">
              Descreva seus sintomas para a avaliação
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Symptoms */}
            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium text-foreground mb-2">
                Quais são seus sintomas principais? *
              </label>
              <textarea
                id="symptoms"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                rows={4}
                placeholder="Descreva detalhadamente seus sintomas..."
                className="input-medical resize-none"
              />
              {errors.symptoms && (
                <p className="mt-1 text-sm text-destructive">{errors.symptoms}</p>
              )}
            </div>

            {/* Other Symptoms */}
            <div>
              <label htmlFor="otherSymptoms" className="block text-sm font-medium text-foreground mb-2">
                Outros sintomas (opcional)
              </label>
              <textarea
                id="otherSymptoms"
                name="otherSymptoms"
                value={formData.otherSymptoms}
                onChange={handleChange}
                rows={2}
                placeholder="Sintomas adicionais..."
                className="input-medical resize-none"
              />
            </div>

            {/* Symptom Start */}
            <div>
              <label htmlFor="symptomStart" className="block text-sm font-medium text-foreground mb-2">
                Quando os sintomas começaram? *
              </label>
              <select
                id="symptomStart"
                name="symptomStart"
                value={formData.symptomStart}
                onChange={handleChange}
                className="input-medical"
              >
                <option value="">Selecione...</option>
                <option value="today">Hoje</option>
                <option value="yesterday">Ontem</option>
                <option value="2-3days">2-3 dias atrás</option>
                <option value="1week">Há cerca de 1 semana</option>
                <option value="2weeks">Há cerca de 2 semanas</option>
                <option value="more">Há mais de 2 semanas</option>
              </select>
              {errors.symptomStart && (
                <p className="mt-1 text-sm text-destructive">{errors.symptomStart}</p>
              )}
            </div>

            {/* Intensity */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Intensidade dos sintomas *
              </label>
              <div className="flex flex-wrap gap-4">
                {['Leve', 'Moderada', 'Intensa'].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="intensity"
                      value={option.toLowerCase()}
                      checked={formData.intensity === option.toLowerCase()}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-border focus:ring-primary"
                    />
                    <span className="text-foreground">{option}</span>
                  </label>
                ))}
              </div>
              {errors.intensity && (
                <p className="mt-1 text-sm text-destructive">{errors.intensity}</p>
              )}
            </div>

            {/* Recent Consultation */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Consultou algum médico recentemente? *
              </label>
              <div className="flex gap-6">
                {['Sim', 'Não'].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recentConsultation"
                      value={option.toLowerCase()}
                      checked={formData.recentConsultation === option.toLowerCase()}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-border focus:ring-primary"
                    />
                    <span className="text-foreground">{option}</span>
                  </label>
                ))}
              </div>
              {errors.recentConsultation && (
                <p className="mt-1 text-sm text-destructive">{errors.recentConsultation}</p>
              )}
            </div>

            {/* Chronic Conditions */}
            <div>
              <label htmlFor="chronicConditions" className="block text-sm font-medium text-foreground mb-2">
                Condições crônicas (opcional)
              </label>
              <input
                type="text"
                id="chronicConditions"
                name="chronicConditions"
                value={formData.chronicConditions}
                onChange={handleChange}
                placeholder="Ex: diabetes, hipertensão..."
                className="input-medical"
              />
            </div>

            {/* Medications */}
            <div>
              <label htmlFor="medications" className="block text-sm font-medium text-foreground mb-2">
                Medicamentos em uso (opcional)
              </label>
              <input
                type="text"
                id="medications"
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                placeholder="Ex: Losartana 50mg, Metformina..."
                className="input-medical"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
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

export default StepQuestionnaire;
