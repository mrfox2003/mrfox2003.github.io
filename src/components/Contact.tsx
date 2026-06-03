import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Send, MapPin } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { portfolioData } from '../data/portfolio';
import { staggerReveal } from '../lib/animations';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { socialLinks, personalInfo } = portfolioData;
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    staggerReveal('.contact-reveal', 100);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API request submission
    await new Promise(resolve => setTimeout(resolve, 1200));

    toast({
      title: "Message Sent!",
      description: `Thank you, ${formData.name}. Niranjan will get back to you soon.`,
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-brand-violet',
      bg: 'bg-brand-violet/5'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'connect with me',
      href: socialLinks.linkedin,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'explore my repositories',
      href: socialLinks.github,
      color: 'text-brand-navy',
      bg: 'bg-brand-navy/5'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="contact-reveal text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-sans">
            Get In Touch
          </h2>
          <p className="contact-reveal text-brand-text-secondary max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="contact-reveal w-16 h-1 bg-brand-green rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="contact-reveal text-2xl font-bold text-brand-navy mb-8 font-sans">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-reveal block"
                >
                  <Card className="flex items-center gap-6 border-brand-border/40 hover:border-brand-violet/20 group">
                    <div className={`p-4 ${method.bg} ${method.color} rounded-xl group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-[12px] font-extrabold text-brand-text-secondary uppercase tracking-widest mb-1">
                        {method.label}
                      </p>
                      <p className="text-[15px] font-bold text-brand-navy">
                        {method.value}
                      </p>
                    </div>
                  </Card>
                </a>
              ))}

              <div className="contact-reveal mt-12 p-8 rounded-brand-card bg-brand-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 font-sans flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-green" />
                    Current Location
                  </h4>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    Based in Kerala, India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="h-full p-8 md:p-10 border-brand-border/40">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="contact-reveal space-y-2">
                    <label className="text-[13px] font-extrabold text-brand-navy uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-white/35 backdrop-blur-sm border border-brand-border/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-violet/20 focus:border-brand-violet/40 focus:bg-white/60 transition-all font-sans"
                      required
                    />
                  </div>
                  <div className="contact-reveal space-y-2">
                    <label className="text-[13px] font-extrabold text-brand-navy uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-white/35 backdrop-blur-sm border border-brand-border/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-violet/20 focus:border-brand-violet/40 focus:bg-white/60 transition-all font-sans"
                      required
                    />
                  </div>
                </div>

                <div className="contact-reveal space-y-2">
                  <label className="text-[13px] font-extrabold text-brand-navy uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 bg-white/35 backdrop-blur-sm border border-brand-border/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-violet/20 focus:border-brand-violet/40 focus:bg-white/60 transition-all font-sans"
                  />
                </div>

                <div className="contact-reveal space-y-2">
                  <label className="text-[13px] font-extrabold text-brand-navy uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me more about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-white/35 backdrop-blur-sm border border-brand-border/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-violet/20 focus:border-brand-violet/40 focus:bg-white/60 transition-all resize-none font-sans"
                    required
                  ></textarea>
                </div>

                <Button 
                  variant="primary" 
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-reveal w-full flex items-center justify-center gap-3 py-4 shadow-brand-card hover:shadow-brand-card-hover group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
