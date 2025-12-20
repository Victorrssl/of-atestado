import { Stethoscope, Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">MedOnline</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Plataforma digital de avaliação médica online, oferecendo atendimento seguro e regulamentado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-background/70 hover:text-background transition-colors text-sm">Como Funciona</a></li>
              <li><a href="#seguranca" className="text-background/70 hover:text-background transition-colors text-sm">Segurança</a></li>
              <li><a href="#depoimentos" className="text-background/70 hover:text-background transition-colors text-sm">Depoimentos</a></li>
              <li><a href="#faq" className="text-background/70 hover:text-background transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Termos de Uso</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">LGPD</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="w-4 h-4" />
                suporte@medonline.com.br
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="w-4 h-4" />
                0800 123 4567
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-background/60 text-xs">
              <Shield className="w-4 h-4" />
              <span>Dados protegidos conforme LGPD</span>
            </div>
            <p className="text-background/60 text-xs text-center">
              © 2024 MedOnline. Todos os direitos reservados. Este é um sistema demonstrativo.
            </p>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-6 p-4 bg-background/10 rounded-lg">
            <p className="text-background/60 text-xs text-center leading-relaxed">
              <strong>Aviso Legal:</strong> Esta plataforma é um sistema demonstrativo de interface (UI). Não realiza diagnósticos médicos, não emite documentos oficiais e não substitui consultas presenciais com profissionais de saúde. Para emergências médicas, procure atendimento presencial imediato.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
