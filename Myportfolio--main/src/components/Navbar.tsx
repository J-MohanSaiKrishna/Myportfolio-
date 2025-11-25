import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Languages", href: "#languages" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-md"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#home"
                    className="text-2xl font-bold gradient-text tracking-tight hover:opacity-80 transition-opacity"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#home");
                    }}
                >
                    MSK
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Button
                            key={item.name}
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary hover:bg-primary/10 rounded-full px-4",
                                activeSection === item.href.substring(1)
                                    ? "text-primary bg-primary/10 font-semibold"
                                    : "text-muted-foreground"
                            )}
                            onClick={() => scrollToSection(item.href)}
                        >
                            {item.name}
                        </Button>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg animate-in slide-in-from-top-5">
                    <div className="flex flex-col p-4 space-y-2">
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                variant="ghost"
                                className={cn(
                                    "justify-start w-full text-left",
                                    activeSection === item.href.substring(1)
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground"
                                )}
                                onClick={() => scrollToSection(item.href)}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
