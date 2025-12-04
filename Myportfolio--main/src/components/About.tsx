import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RippleContainer } from "@/components/RippleContainer";
import { Lightbulb, Target, Heart, Code2, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering solutions that matter and drive real impact",
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinker",
      description: "Combining technical excellence with creative problem-solving",
    },
    {
      icon: Code2,
      title: "Clean Coder",
      description: "Writing maintainable, scalable code following industry best practices",
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and frameworks",
    },
    {
      icon: Heart,
      title: "Team Player",
      description: "Collaborative and passionate about knowledge sharing",
    },
  ];

  return (
    <RippleContainer className="py-20 px-4 relative overflow-hidden" id="about">


      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a mission to transform ideas into elegant digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Personal intro */}
          <div className="space-y-6 animate-in fade-in slide-in-left duration-700">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science Engineering student at Avanthi Institute of Engineering, driven by curiosity and a passion for technology. My journey in development has been about learning, growing, and constantly pushing the boundaries of what I can create.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">What Drives Me</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of code to solve real-world problems and improve people's lives. Whether it's building responsive web applications, exploring cloud technologies, or diving into cybersecurity, I'm committed to excellence in every project I undertake.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="gradient-bg text-white">Full-Stack Development</Badge>
                <Badge className="gradient-bg text-white">Cloud Architecture</Badge>
                <Badge className="gradient-bg text-white">Problem Solving</Badge>
                <Badge className="gradient-bg text-white">Continuous Learning</Badge>
              </div>
            </div>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-right duration-700">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 card-hover glass-effect border-primary/20 space-y-3 animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-foreground mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <Card className="p-8 md:p-12 glass-effect border-2 border-primary/30 shadow-2xl shadow-primary/10 text-center animate-in fade-in duration-700">
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">My Vision</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To become a versatile full-stack engineer who not only builds robust applications but also mentors others and contributes meaningfully to the tech community. I aspire to work on projects that challenge me, fuel my growth, and create lasting value.
          </p>
        </Card>
      </div>
    </RippleContainer>
  );
};

export default About;
