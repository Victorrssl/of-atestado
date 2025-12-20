import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import HeroSection from '@/components/steps/HeroSection';
import StepCPF from '@/components/steps/StepCPF';
import StepConfirmData from '@/components/steps/StepConfirmData';
import StepQuestionnaire from '@/components/steps/StepQuestionnaire';
import StepContact from '@/components/steps/StepContact';
import StepAnalysis from '@/components/steps/StepAnalysis';
import StepAnalysisComplete from '@/components/steps/StepAnalysisComplete';
import StepPeriodSelection from '@/components/steps/StepPeriodSelection';
import StepSummary from '@/components/steps/StepSummary';

interface FormData {
  cpf: string;
  name: string;
  birthDate: string;
  symptoms: string;
  otherSymptoms: string;
  symptomStart: string;
  intensity: string;
  recentConsultation: string;
  chronicConditions: string;
  medications: string;
  email: string;
  phone: string;
  period: number;
  price: number;
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    cpf: '',
    name: 'João da Silva Santos',
    birthDate: '15/03/1985',
    symptoms: '',
    otherSymptoms: '',
    symptomStart: '',
    intensity: '',
    recentConsultation: '',
    chronicConditions: '',
    medications: '',
    email: '',
    phone: '',
    period: 0,
    price: 0,
  });

  const stepLabels = [
    'Início',
    'CPF',
    'Dados',
    'Sintomas',
    'Contato',
    'Análise',
    'Resultado',
    'Período',
    'Resumo',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartEvaluation = () => {
    setCurrentStep(1);
    scrollToTop();
  };

  const handleCPFSubmit = (cpf: string) => {
    setFormData(prev => ({ ...prev, cpf }));
    setCurrentStep(2);
    scrollToTop();
  };

  const handleConfirmData = () => {
    setCurrentStep(3);
    scrollToTop();
  };

  const handleQuestionnaireSubmit = (data: any) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(4);
    scrollToTop();
  };

  const handleContactSubmit = (data: { email: string; phone: string }) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(5);
    scrollToTop();
  };

  const handleAnalysisComplete = useCallback(() => {
    setCurrentStep(6);
    scrollToTop();
  }, []);

  const handleAnalysisResultContinue = () => {
    setCurrentStep(7);
    scrollToTop();
  };

  const handlePeriodSelection = (selection: { days: number; price: number }) => {
    setFormData(prev => ({ ...prev, period: selection.days, price: selection.price }));
    setCurrentStep(8);
    scrollToTop();
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      scrollToTop();
    }
  };

  const handleBackToHome = () => {
    setCurrentStep(0);
    scrollToTop();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <HeroSection onStartEvaluation={handleStartEvaluation} />;
      case 1:
        return <StepCPF onNext={handleCPFSubmit} onBack={handleBackToHome} />;
      case 2:
        return <StepConfirmData cpf={formData.cpf} onNext={handleConfirmData} onBack={handleBack} />;
      case 3:
        return <StepQuestionnaire onNext={handleQuestionnaireSubmit} onBack={handleBack} />;
      case 4:
        return <StepContact onNext={handleContactSubmit} onBack={handleBack} />;
      case 5:
        return <StepAnalysis onComplete={handleAnalysisComplete} />;
      case 6:
        return <StepAnalysisComplete onNext={handleAnalysisResultContinue} />;
      case 7:
        return <StepPeriodSelection onNext={handlePeriodSelection} onBack={handleBack} />;
      case 8:
        return (
          <StepSummary
            data={{
              cpf: formData.cpf,
              name: formData.name,
              birthDate: formData.birthDate,
              symptoms: formData.symptoms,
              email: formData.email,
              phone: formData.phone,
              period: formData.period,
              price: formData.price,
            }}
            onBack={handleBack}
          />
        );
      default:
        return <HeroSection onStartEvaluation={handleStartEvaluation} />;
    }
  };

  const showHeader = currentStep === 0;
  const showProgressBar = currentStep > 0 && currentStep !== 5;
  const showFooter = currentStep === 0 || currentStep === 8;

  return (
    <div className="min-h-screen bg-background">
      {showHeader && <Header onStartEvaluation={handleStartEvaluation} />}
      
      {showProgressBar && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 py-4 px-4">
          <ProgressBar 
            currentStep={currentStep} 
            totalSteps={9} 
            labels={stepLabels}
          />
        </div>
      )}

      <main className={showProgressBar ? 'pt-24' : ''}>
        {renderStep()}
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

export default Index;
