import { Button } from '@/components/ui/button';
import { Shield, Clock, CheckCircle, Users, Star, Heart, Stethoscope, Activity } from 'lucide-react';

interface HeroSectionProps {
  onStartEvaluation: () => void;
}

const HeroSection = ({ onStartEvaluation }: HeroSectionProps) => {
  const features = [
    { icon: Shield, text: '100% Seguro' },
    { icon: Clock, text: 'Atendimento Rápido' },
    { icon: CheckCircle, text: 'Processo Regulamentado' },
  ];

  const stats = [
    { number: '50.000+', label: 'Atendimentos realizados' },
    { number: '98%', label: 'Satisfação dos pacientes' },
    { number: '500+', label: 'Médicos cadastrados' },
    { number: '24h', label: 'Atendimento disponível' },
  ];

  const steps = [
    { number: '1', title: 'Preencha seus dados', description: 'Informe seu CPF e dados básicos de forma segura.' },
    { number: '2', title: 'Descreva seus sintomas', description: 'Responda ao questionário médico detalhado.' },
    { number: '3', title: 'Receba sua avaliação', description: 'Análise médica profissional online.' },
  ];

  const testimonials = [
    { name: 'Maria S.', role: 'Paciente', text: 'Atendimento muito profissional e rápido. Recomendo!', rating: 5 },
    { name: 'João P.', role: 'Paciente', text: 'Processo simples e eficiente. Médicos muito atenciosos.', rating: 5 },
    { name: 'Ana L.', role: 'Paciente', text: 'Plataforma segura e confiável. Ótima experiência!', rating: 5 },
  ];

  const faqs = [
    { question: 'Como funciona a avaliação médica online?', answer: 'Você preenche um questionário detalhado sobre seus sintomas e histórico médico. Nossa equipe analisa as informações e você recebe uma avaliação profissional.' },
    { question: 'O processo é seguro?', answer: 'Sim! Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD para proteção dos seus dados.' },
    { question: 'Quanto tempo leva para receber a avaliação?', answer: 'O processo de análise é rápido. Você receberá sua avaliação em até 24 horas úteis após o envio.' },
    { question: 'Posso solicitar diferentes períodos?', answer: 'Sim, oferecemos opções de 1 a 14 dias conforme sua necessidade.' },
  ];

  const doctors = [
    { name: 'Dr. Carlos Silva', specialty: 'Clínico Geral', crm: 'CRM/SP 123456' },
    { name: 'Dra. Ana Santos', specialty: 'Medicina do Trabalho', crm: 'CRM/RJ 654321' },
    { name: 'Dr. Pedro Lima', specialty: 'Clínico Geral', crm: 'CRM/MG 789012' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary-light px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Activity className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-medium text-sm">Plataforma Digital de Saúde</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Avaliação Médica Online
              <span className="block text-primary mt-2">Rápida, Segura e Profissional</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
              Solicite sua avaliação médica digital com segurança e praticidade. 
              Processo 100% online, regulamentado e sigiloso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up delay-200">
              <Button variant="hero" size="xl" onClick={onStartEvaluation}>
                Solicitar Avaliação Médica
              </Button>
              <Button variant="hero-outline" size="xl" onClick={onStartEvaluation}>
                Iniciar Avaliação Online
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 animate-slide-up delay-300">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <feature.icon className="w-5 h-5 text-secondary" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Processo simples e intuitivo em apenas 3 passos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="card-medical text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <span className="font-heading text-2xl font-bold text-primary group-hover:text-primary-foreground">{step.number}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="seguranca" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary-light px-4 py-2 rounded-full mb-6">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span className="text-secondary font-medium text-sm">Segurança Garantida</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Seus dados estão protegidos
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Utilizamos as mais avançadas tecnologias de segurança para garantir 
                  a privacidade e proteção dos seus dados médicos.
                </p>
                <ul className="space-y-4">
                  {[
                    'Criptografia de ponta a ponta',
                    'Conformidade com LGPD',
                    'Servidores seguros no Brasil',
                    'Acesso restrito aos dados',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="card-medical p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-secondary" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">100% Seguro</h3>
                    <p className="text-muted-foreground">Proteção de dados certificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos pacientes dizem
            </h2>
            <p className="text-muted-foreground text-lg">Experiências reais de quem já utilizou nossa plataforma</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-medical">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Corpo Médico
            </h2>
            <p className="text-muted-foreground text-lg">Profissionais qualificados e registrados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {doctors.map((doctor, index) => (
              <div key={index} className="card-medical text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{doctor.name}</h3>
                <p className="text-muted-foreground text-sm mb-1">{doctor.specialty}</p>
                <p className="text-muted-foreground text-xs">{doctor.crm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">Tire suas dúvidas sobre nossa plataforma</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card-medical group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center list-none">
                  {faq.question}
                  <span className="text-primary transition-transform group-open:rotate-180">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Heart className="w-16 h-16 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Cuide da sua saúde agora
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Solicite sua avaliação médica online de forma rápida e segura.
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              onClick={onStartEvaluation}
              className="bg-background text-foreground hover:bg-background/90"
            >
              Solicitar Avaliação Médica
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
