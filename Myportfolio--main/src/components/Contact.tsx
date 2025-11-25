import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { RippleContainer } from "@/components/RippleContainer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mskbtechcsc25@gmail.com",
      href: "mailto:mskbtechcsc25@gmail.com",
      aria: "Send an email to mskbtechcsc25@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 63033 08665",
      href: "tel:+916303308665",
      aria: "Call Mohan at plus nine one six three zero three three zero eight six six five",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohansaikrishnaj",
      href: "https://www.linkedin.com/in/mohansaikrishnaj",
      aria: "Open Mohan's LinkedIn profile in a new tab",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajahmundry, Andhra Pradesh",
      href: "https://maps.google.com/?q=Rajahmundry, Andhra Pradesh",
      aria: "Open location in Google Maps",
    },
  ];

  return (
    <RippleContainer className="py-20 px-4 bg-gradient-to-br from-background/50 via-primary/10 to-background" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="gradient-text">Get in touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m exploring roles across <span className="font-medium">IT, Cloud, and Cybersecurity</span>.
            If my background aligns with what you need, I’d love to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={info.label}
              className="p-6 card-hover glass-effect border-primary/20 animate-in fade-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={info.aria}
                      className="truncate inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
                    >
                      <span className="truncate">{info.value}</span>
                      {info.href.startsWith("http") && (
                        <span className="sr-only">(opens in a new tab)</span>
                      )}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium truncate">{info.value}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 text-center gradient-bg relative overflow-hidden shadow-2xl shadow-primary/20 animate-in fade-in duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" aria-hidden="true" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let’s connect</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-base md:text-lg">
              Have an opportunity, collaboration, or just a question? I’m happy to chat.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="mailto:mskbtechcsc25@gmail.com" aria-label="Compose an email to Mohan">
                  <Mail className="mr-2 h-4 w-4" />
                  Email me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/mohansaikrishnaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Mohan's LinkedIn profile in a new tab"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </RippleContainer>
  );
};

export default Contact;

