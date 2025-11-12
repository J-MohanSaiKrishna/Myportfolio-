import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { RippleContainer } from "@/components/RippleContainer";

const Experience = () => {
  return (
    <RippleContainer className="py-20 px-4 bg-background" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience with cloud technologies and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 card-hover glass-effect border-2 border-primary/20 shadow-xl animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-grow space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      AWS Cloud Computing Intern
                    </h3>
                    <Badge className="gradient-bg">Internship</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>May 2024 – July 2024</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/90">
                      Gained practical exposure to cloud concepts using AWS platform
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/90">
                      Assisted in organizing digital assets, reports, and documents
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/90">
                      Supported team in cloud-based tasks and learned virtualized environments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/90">
                      Developed soft skills including collaboration and time management
                    </span>
                  </li>
                </ul>

                <div className="pt-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Cloud Computing</Badge>
                    <Badge variant="outline">Digital Asset Management</Badge>
                    <Badge variant="outline">Team Collaboration</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </RippleContainer>
  );
};

export default Experience;
