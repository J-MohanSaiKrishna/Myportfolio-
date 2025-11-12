import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Avanthi Institute of Engineering and Technology",
      location: "Rajahmundry",
      year: "Expected Graduation: 2025",
      score: "CGPA: 7.75/10",
      icon: GraduationCap,
    },
    {
      degree: "Intermediate (MPC)",
      field: "",
      institution: "Vidya Vikas Junior College",
      location: "Rajahmundry",
      year: "Completed: 2022",
      score: "Percentage: 89.5%",
      icon: Award,
    },
    {
      degree: "SSC (10th Grade)",
      field: "",
      institution: "Geetanjali High School",
      location: "Rajahmundry",
      year: "Completed: 2019",
      score: "GPA: 9.3/10",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in Computer Science and Engineering
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 card-hover glass-effect border-2 border-primary/20 animate-in fade-in duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center">
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-lg text-primary font-semibold">
                        {edu.field}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-foreground">
                      {edu.institution}, {edu.location}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span className="font-semibold text-accent">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
