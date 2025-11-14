"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link  href={"/"} className="text-xl font-bold  text-yellow-400">
                        Abhishek Mandavi
                    </Link>


                    {/* for desktop */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) =>(
                            <a
                                href={item.href}
                                key={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a href="https://drive.google.com/file/d/1M3gqG-TXRij7BZxuEVi2EWLO_9BiONOY/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="yellow" size={"sm"} className="gap-2">
                                <Download className="w-4 h-4" />
                                Resume
                            </Button>
                        </a>
                    </nav>

                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                        <X className="w-5 h-5" />
                        ) : (
                        <Menu className="w-5 h-5" />
                        )}
                    </Button>
                </div>
            </div>


            {/* for mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t bg-background"
                    >
                        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <a
                                    href={item.href}
                                    key={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-all"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button variant="yellow" size={"sm"} className="gap-2">
                                <Download className="w-4 h-4" />
                                Resume
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;