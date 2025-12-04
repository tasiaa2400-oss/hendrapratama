"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Distribusi Gas LPG Terpercaya",
    "Konstruksi & Sipil Profesional",
    "Pengembangan Proyek Berkualitas",
    "Konsultasi Perencanaan Terbaik"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-navy/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.gold/10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.primary/10),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <span className="text-gold font-medium text-sm">✨ Solusi Energi & Konstruksi Terpadu</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-navy">HENDRA</span>
            <span className="text-gold">PRATAMA</span>
          </h1>

          {/* Animated Subtitle */}
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium transition-all duration-500">
              {heroTexts[currentText]}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Perusahaan bergerak dalam Perdagangan Besar Gas LPG, yang berfokus pada penyediaan, distribusi, dan suplai Gas LPG untuk kebutuhan rumah tangga, UMKM, industri, dan komersial. Kami memastikan ketersediaan produk yang aman, berkualitas, dan sesuai standar nasional melalui jaringan distribusi yang terencana dan armada pengiriman yang terpercaya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="gold-gradient text-navy font-semibold text-lg px-8 py-6 hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '#contact'}
            >
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-navy text-navy hover:bg-navy hover:text-white font-semibold text-lg px-8 py-6 transition-all duration-200"
              onClick={() => window.location.href = '#services'}
            >
              Lihat Layanan
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 text-gold" />
              <span>+6282382466217</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-gold" />
              <span>Samarinda, Kalimantan Timur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-navy rounded-full flex justify-center">
            <div className="w-1 h-3 bg-navy rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;