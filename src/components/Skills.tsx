import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Database, Globe, Briefcase, Heart, GitBranch, Terminal, Network, Lock } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "Python", "HTML", "CSS", "JavaScript (Basics)", "SQL"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Computer Science Fundamentals",
      icon: Terminal,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Computer Networks", "Database Management Systems"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (EC2, S3, IAM)", "Cloud Computing Concepts", "Git & GitHub", "Linux/Unix Basics"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML5 & CSS3", "Responsive Design", "Web Development Fundamentals", "RESTful APIs (Basics)"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Tools & Platforms",
      icon: Briefcase,
      skills: ["MS Office Suite", "Google Workspace", "VS Code", "Virtual Machines", "Documentation"],
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Areas of Interest",
      icon: Lock,
      skills: ["Cyber Security", "Cloud Architecture", "System Design", "Network Security", "IT Infrastructure"],
      color: "from-red-500 to-red-600",
    },
    {
      title: "Soft Skills",
      icon: Heart,
      skills: ["Effective Communication", "Team Collaboration", "Problem Solving", "Quick Learner", "Time Management", "Adaptability"],
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Academic Projects",
      icon: GitBranch,
      skills: ["Algorithm Implementation", "System Analysis", "Technical Documentation", "Research & Development"],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const keyStrengths = [
    "Strong interpersonal and communication skills suitable for customer-facing roles",
    "Quick learner with adaptability to different job environments and technologies",
    "Attention to detail and ability to handle multiple tasks efficiently",
    "Passionate about Cyber Security and Cloud Services with continuous learning mindset",
    "Solid foundation in Computer Science fundamentals and programming concepts",
    "Experience with cloud platforms and modern development tools",
  ];

  return (
    <section id="skills" className="py-20 px-4 section-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning computer science fundamentals, cloud technologies, and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 card-hover glass-effect animate-in fade-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 glass-effect border-2 border-primary/30 shadow-2xl shadow-primary/10 animate-in fade-in duration-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">Key Strengths</h3>
            <p className="text-lg text-muted-foreground">What sets me apart as a professional</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {keyStrengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                <div className="w-3 h-3 rounded-full gradient-bg mt-1.5 flex-shrink-0 shadow-lg shadow-primary/30" />
                <p className="text-foreground/90 leading-relaxed">{strength}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
