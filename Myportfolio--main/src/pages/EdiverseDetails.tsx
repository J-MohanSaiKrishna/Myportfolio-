import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RippleContainer } from "@/components/RippleContainer";
import { ArrowLeft, Sparkles, Brain, Users, Zap, Code, Calendar, Target, Lightbulb, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EdiverseDetails = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: Brain,
            title: "AI-Powered Personalization",
            description: "Advanced machine learning algorithms analyze student performance patterns and adapt content difficulty in real-time, ensuring optimal learning pace for every individual."
        },
        {
            icon: Users,
            title: "Adaptive Learning Paths",
            description: "Custom curriculum tailored to each student's learning style, pace, and goals. The system continuously refines the path based on progress and engagement metrics."
        },
        {
            icon: Zap,
            title: "Real-Time Progress Tracking",
            description: "Comprehensive analytics dashboard providing instant insights into learning progress, strengths, areas for improvement, and predicted mastery timelines."
        },
        {
            icon: Sparkles,
            title: "Intelligent Content Delivery",
            description: "Smart content recommendation engine that delivers lessons, exercises, and resources at the perfect moment for maximum retention and understanding."
        },
        {
            icon: Target,
            title: "Goal-Oriented Learning",
            description: "Set personalized learning objectives and let the AI create optimized pathways to achieve them, with milestone tracking and motivational feedback."
        },
        {
            icon: Lightbulb,
            title: "Interactive Problem Solving",
            description: "Gamified exercises and real-world simulations that make learning engaging while building practical skills and critical thinking abilities."
        }
    ];

    const techStack = [
        { name: "React", category: "Frontend" },
        { name: "TypeScript", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Python", category: "Backend" },
        { name: "TensorFlow", category: "AI/ML" },
        { name: "PyTorch", category: "AI/ML" },
        { name: "MongoDB", category: "Database" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Firebase", category: "Services" },
        { name: "AWS", category: "Cloud" },
        { name: "Docker", category: "DevOps" },
        { name: "GraphQL", category: "API" }
    ];

    const roadmap = [
        {
            phase: "Phase 1 - Foundation",
            timeline: "Q1 2025",
            items: [
                "Core AI learning engine development",
                "User authentication & profile system",
                "Initial content library creation",
                "Basic progress tracking dashboard"
            ]
        },
        {
            phase: "Phase 2 - Intelligence",
            timeline: "Q2 2025",
            items: [
                "Advanced ML models for personalization",
                "Adaptive content difficulty algorithm",
                "Real-time performance analytics",
                "Interactive exercise platform"
            ]
        },
        {
            phase: "Phase 3 - Expansion",
            timeline: "Q3 2025",
            items: [
                "Collaborative learning features",
                "Multi-language support",
                "Mobile app development",
                "Instructor dashboard & tools"
            ]
        },
        {
            phase: "Phase 4 - Launch",
            timeline: "Q4 2025",
            items: [
                "Beta testing program",
                "Performance optimization",
                "Security audits & compliance",
                "Public launch & marketing"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
            {/* Hero Section */}
            <RippleContainer className="relative pt-32 pb-20 px-4 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Back Button */}
                    <Button
                        variant="ghost"
                        className="mb-8 text-blue-200 hover:text-blue-100 hover:bg-blue-500/10"
                        onClick={() => navigate('/')}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Portfolio
                    </Button>

                    {/* Header */}
                    <div className="text-center space-y-6 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-200 font-medium">Vision Project</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
                            Eduverse
                        </h1>

                        <p className="text-2xl text-blue-100 font-semibold">
                            AI Adaptive Learning Platform
                        </p>

                        <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive educational ecosystem powered by artificial intelligence,
                            designed to revolutionize online learning through personalized, adaptive experiences
                            that evolve with each student's unique learning journey.
                        </p>
                    </div>
                </div>
            </RippleContainer>

            {/* Project Overview */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <Card className="p-8 md:p-12 glass-effect border-blue-500/30 bg-slate-900/50">
                        <div className="flex items-center gap-3 mb-6">
                            <Code className="w-6 h-6 text-blue-400" />
                            <h2 className="text-3xl font-bold text-white">Project Overview</h2>
                        </div>
                        <div className="space-y-4 text-slate-200 leading-relaxed">
                            <p>
                                <strong className="text-blue-200">Eduverse</strong> is an ambitious project aimed at transforming
                                the landscape of online education. By leveraging cutting-edge artificial intelligence and machine
                                learning technologies, we're building a platform that truly understands each learner.
                            </p>
                            <p>
                                The platform analyzes learning patterns, identifies knowledge gaps, predicts optimal study schedules,
                                and dynamically adjusts content delivery to maximize comprehension and retention. Every interaction
                                helps the AI better understand the student, creating a continuously improving learning experience.
                            </p>
                            <p>
                                Beyond just adaptive learning, Eduverse fosters a collaborative environment where students can
                                engage with peers, share insights, and learn together while still maintaining their personalized
                                learning paths.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 px-4 bg-gradient-to-br from-blue-950/30 to-indigo-950/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="p-6 glass-effect border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <Calendar className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-4xl font-bold text-white text-center">Technology Stack</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {["Frontend", "Backend", "AI/ML", "Database", "Cloud", "Services", "DevOps", "API"].map(category => (
                            <Card key={category} className="p-6 glass-effect border-indigo-400/20">
                                <h3 className="text-lg font-bold text-indigo-200 mb-4">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techStack
                                        .filter(tech => tech.category === category)
                                        .map((tech, idx) => (
                                            <Badge key={idx} className="bg-indigo-500/20 text-indigo-100 border-indigo-400/30">
                                                {tech.name}
                                            </Badge>
                                        ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Roadmap */}
            <section className="py-16 px-4 bg-gradient-to-br from-indigo-950/30 to-blue-950/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <Rocket className="w-6 h-6 text-blue-400" />
                        <h2 className="text-4xl font-bold text-white text-center">Development Roadmap</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {roadmap.map((phase, index) => (
                            <Card
                                key={index}
                                className="p-6 glass-effect border-blue-400/20 hover:border-blue-400/40 transition-all"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                                    <Badge className="bg-blue-500/30 text-blue-100 border-blue-400/40">
                                        {phase.timeline}
                                    </Badge>
                                </div>
                                <ul className="space-y-2">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Status */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 md:p-12 glass-effect border-2 border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">Current Status</h2>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <p className="text-4xl font-bold text-blue-300 mb-2">🚀</p>
                                <p className="text-sm text-slate-400 mb-1">Phase</p>
                                <p className="text-lg font-semibold text-white">Active Development</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-indigo-300 mb-2">📅</p>
                                <p className="text-sm text-slate-400 mb-1">Timeline</p>
                                <p className="text-lg font-semibold text-white">Q1 - Q4 2025</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-blue-300 mb-2">🎯</p>
                                <p className="text-sm text-slate-400 mb-1">Goal</p>
                                <p className="text-lg font-semibold text-white">Transform Learning</p>
                            </div>
                        </div>
                        <p className="text-center text-slate-200 mt-8 italic">
                            Empowering learners worldwide through intelligent, adaptive technology
                        </p>
                    </Card>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold text-lg px-8 py-6 shadow-2xl shadow-blue-500/30"
                        onClick={() => navigate('/')}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Return to Portfolio
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default EdiverseDetails;
