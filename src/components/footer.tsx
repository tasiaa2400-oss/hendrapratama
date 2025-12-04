"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ChevronUp,
  Flame,
  Building,
  Home,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Berhasil Berlangganan!",
        description: "Terima kasih telah berlangganan newsletter kami.",
        duration: 3000,
      });
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Kontak", href: "#contact" }
  ];

  const services = [
    { name: "Distribusi Gas LPG", icon: <Flame className="h-4 w-4" /> },
    { name: "Konstruksi & Sipil", icon: <Building className="h-4 w-4" /> },
    { name: "Pengembangan Proyek", icon: <Home className="h-4 w-4" /> },
    { name: "Konsultasi Perencanaan", icon: <Building className="h-4 w-4" /> }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Sitemap", href: "/sitemap" }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                HENDRA<span className="text-gold">PRATAMA</span>
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Perusahaan terpercaya dalam distribusi Gas LPG, konstruksi & sipil, dan pengembangan proyek di Kalimantan Timur.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-sm">+6282382466217</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-sm">info@hendrapratama.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  JL.BUNG TOMO, Sungai Keledang<br />
                  Samarinda Seberang, Kaltim
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gold/20 hover:bg-gold text-gold hover:text-navy rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Link Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Layanan Kami</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-gold">{service.icon}</span>
                  <span className="text-sm opacity-90">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Newsletter</h4>
            <p className="text-sm opacity-90 mb-4">
              Dapatkan informasi terbaru tentang layanan dan promo kami.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-navy/50 border-navy/30 text-white placeholder:text-white/50 focus:border-gold focus:ring-gold"
              />
              <Button
                type="submit"
                className="w-full gold-gradient text-navy font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="h-4 w-4 mr-2" />
                Berlangganan
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-navy/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm opacity-90 text-center md:text-left">
              © {new Date().getFullYear()} HENDRA PRATAMA. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm opacity-90 hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="sm"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full gold-gradient text-navy shadow-lg hover:shadow-xl transition-all duration-200 z-40"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;