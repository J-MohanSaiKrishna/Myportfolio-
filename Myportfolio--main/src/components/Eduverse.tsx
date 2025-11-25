import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RippleContainer } from "@/components/RippleContainer";
import { Sparkles, Brain, Users, Zap, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Eduverse = () => {
    const navigate = useNavigate();

    const features = [
        { icon: Brain, text: "AI-Powered Personalization" },
        { icon: Users, text: "Adaptive Learning Paths" },
        { icon: Zap, text: "Real-Time Progress Tracking" },
        { icon: Sparkles, text: "Intelligent Content Delivery" },
    ];

    return (
        <RippleContainer className="py-20 px-4 bg-gradient-to-br from-blue-500/25 via-background to-indigo-500/20" id="eduverse">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-200 font-medium">Vision Project</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="gradient-text">Eduverse</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        My flagship AI adaptive learning platform
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 md:p-12 glass-effect border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 relative overflow-hidden cursor-pointer hover:border-blue-400/50 transition-all duration-300">
                        {/* Background glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            {/* Header */}
                            <div className="text-center space-y-3">
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    Eduverse
                                </h3>
                                <p className="text-xl text-blue-100 font-semibold">
                                    AI Adaptive Learning Platform
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-white leading-relaxed text-center max-w-2xl mx-auto">
                                A <span className="font-semibold text-blue-100">personalized learning ecosystem</span> powered by artificial intelligence,
                                designed to <span className="font-semibold text-indigo-100">understand users and evolve with them</span>.
                                Eduverse adapts to individual learning styles, creating a unique educational journey for each student.
                            </p>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-2 gap-4 pt-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <feature.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="text-white font-medium pt-2">{feature.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap justify-center gap-2 pt-4">
                                <Badge className="bg-blue-500/30 text-blue-50 border-blue-300/40 font-medium">Machine Learning</Badge>
                                <Badge className="bg-indigo-500/30 text-indigo-50 border-indigo-300/40 font-medium">Personalization</Badge>
                                <Badge className="bg-blue-500/30 text-blue-50 border-blue-300/40 font-medium">EdTech</Badge>
                                <Badge className="bg-indigo-500/30 text-indigo-50 border-indigo-300/40 font-medium">UI/UX</Badge>
                                <Badge className="bg-blue-500/30 text-blue-50 border-blue-300/40 font-medium">Adaptive Systems</Badge>
                            </div>

                            {/* CTA Button */}
                            <div className="text-center pt-6 space-y-3">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30"
                                    onClick={() => navigate('/eduverse')}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    View Full Details
                                </Button>
                                <p className="text-sm text-slate-200 italic">
                                    Currently in development • Empowering learners through intelligent technology
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </RippleContainer>
    );
};

export default Eduverse;
