import { Card } from "@/components/ui/card";
import { RippleContainer } from "@/components/RippleContainer";
import { Code2, Lightbulb, Zap, Users, Target } from "lucide-react";

const WhyMe = () => {
    const values = [
        {
            icon: Target,
            title: "Real Problem-Solving",
            description: "I don't just write code — I solve real-world challenges with thoughtful, scalable solutions.",
        },
        {
            icon: Lightbulb,
            title: "Adaptive Design",
            description: "Creating interfaces that evolve with users, ensuring seamless experiences across all touchpoints.",
        },
        {
            icon: Zap,
            title: "AI-Driven Personalization",
            description: "Leveraging machine learning to build intelligent systems that understand and adapt to user behavior.",
        },
        {
            icon: Code2,
            title: "Clean, Scalable Code",
            description: "Writing maintainable code following best practices, ensuring long-term project success.",
        },
        {
            icon: Users,
            title: "Modern User-Centric Approach",
            description: "Putting users first in every design decision, creating products people love to use.",
        },
    ];

    return (
        <RippleContainer className="py-20 px-4 bg-gradient-to-br from-emerald-950/15 via-background to-teal-900/10" id="why-me">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="gradient-text">Why Work With Me?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        I build more than just interfaces — I create <span className="font-semibold text-primary">intelligent experiences</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="p-6 card-hover glass-effect border-primary/20 relative overflow-hidden group animate-in fade-in duration-500"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 space-y-4">
                                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-foreground">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <Card className="mt-12 p-8 text-center gradient-bg relative overflow-hidden shadow-2xl shadow-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="relative z-10">
                        <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-3xl mx-auto">
                            If you're looking for someone who builds intelligent, modern digital products —{" "}
                            <span className="font-bold underline decoration-2 decoration-white/50">let's collaborate</span>.
                        </p>
                    </div>
                </Card>
            </div>
        </RippleContainer>
    );
};

export default WhyMe;
