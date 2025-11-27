import { Card } from "@/components/ui/card";
import { Languages as LanguagesIcon } from "lucide-react";
import { RippleContainer } from "@/components/RippleContainer";

const Languages = () => {
  const languages = [
    { name: "English", level: "Fluent", proficiency: 95 },
    { name: "Telugu", level: "Native", proficiency: 100 },
    { name: "Hindi", level: "Basic", proficiency: 60 },
  ];

  return (
    <RippleContainer className="py-20 px-4 relative overflow-hidden bg-black" id="languages">
      {/* Animated Background */}
      <div
        className="absolute inset-0 animate-bg-drift"
        style={{
          backgroundImage: "url('/src/assets/ai-network-bg.jpg')",
          backgroundSize: '120%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Languages</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Multilingual communication for diverse professional environments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <Card
              key={index}
              className="p-6 card-hover glass-effect text-center animate-in fade-in duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <LanguagesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {language.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {language.level}
              </p>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="h-full gradient-bg transition-all duration-500 ease-out"
                  style={{ width: `${language.proficiency}%` }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </RippleContainer>
  );
};

export default Languages;
