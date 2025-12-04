"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  Building, 
  Home, 
  DraftingCompass, 
  Truck, 
  Users, 
  Shield, 
  Zap,
  ChevronRight
} from "lucide-react";

const ServicesSection = () => {
  const lpgServices = [
    {
      icon: <Flame className="h-12 w-12 text-gold" />,
      title: "Distribusi Gas LPG",
      description: "Penyediaan dan distribusi Gas LPG untuk rumah tangga, UMKM, industri, dan komersial dengan jaringan yang luas dan terpercaya.",
      features: ["Tabung 3 kg", "Tabung 5.5 kg", "Tabung 12 kg", "Tabung 50 kg"],
      highlight: "Berbagai jenis tabung LPG tersedia"
    },
    {
      icon: <Truck className="h-12 w-12 text-gold" />,
      title: "Layanan Pengiriman",
      description: "Armada pengiriman yang modern dan terpercaya untuk memastikan pasokan gas tepat waktu dan aman.",
      features: ["Pengiriman tepat waktu", "Armada modern", "Tracking real-time", "Asuransi pengiriman"],
      highlight: "Pengiriman aman dan terjamin"
    },
    {
      icon: <Users className="h-12 w-12 text-gold" />,
      title: "Kemitraan Usaha",
      description: "Mendukung kemitraan dengan agen, pangkalan, dan pelaku usaha lainnya untuk pengembangan bisnis bersama.",
      features: ["Program agen", "Kemitraan pangkalan", "Bantuan teknis", "Marketing support"],
      highlight: "Program kemitraan yang menguntungkan"
    }
  ];

  const constructionServices = [
    {
      icon: <Building className="h-12 w-12 text-gold" />,
      title: "Konstruksi & Sipil",
      description: "Jasa konstruksi bangunan komersial, perumahan, dan infrastruktur dengan standar kualitas tertinggi.",
      features: ["Bangunan komersial", "Perumahan", "Infrastruktur", "Renovasi"],
      highlight: "Konstruksi berkualitas dan berpengalaman"
    },
    {
      icon: <Home className="h-12 w-12 text-gold" />,
      title: "Pengembangan Proyek",
      description: "Pengembangan proyek perumahan dan komersial dari perencanaan hingga penyelesaian.",
      features: ["Perencanaan proyek", "Manajemen konstruksi", "Quality control", "Penyelesaian tepat waktu"],
      highlight: "Pengembangan proyek terpadu"
    },
    {
      icon: <DraftingCompass className="h-12 w-12 text-gold" />,
      title: "Konsultasi & Perencanaan",
      description: "Konsultasi profesional untuk perencanaan iklan dan desain proyek yang efektif dan efisien.",
      features: ["Konsultasi desain", "Perencanaan iklan", "Analisis pasar", "Strategi pemasaran"],
      highlight: "Konsultasi ahli untuk kesuksesan proyek"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Keamanan Terjamin",
      description: "Standar keselamatan tertinggi dalam setiap operasi"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Layanan Cepat",
      description: "Responsif dan efisien dalam memenuhi kebutuhan pelanggan"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tim Profesional",
      description: "Tenaga ahli berpengalaman dan bersertifikasi"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Distribusi Luas",
      description: "Jaringan distribusi yang mencakup berbagai wilayah"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gold-gradient text-navy border-none">Layanan Kami</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Solusi <span className="text-gold">Lengkap</span> untuk Kebutuhan Anda
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dengan komitmen pada keamanan dan pelayanan, kami menyediakan berbagai solusi energi dan konstruksi yang komprehensif untuk mendukung kesuksesan bisnis Anda.
          </p>
        </div>

        {/* LPG Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Distribusi Gas LPG</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Perusahaan bergerak dalam Perdagangan Besar Gas LPG, yang berfokus pada penyediaan, distribusi, dan suplai Gas LPG untuk kebutuhan rumah tangga, UMKM, industri, dan komersial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {lpgServices.map((service, index) => (
              <Card key={index} className="group border-navy/20 hover:border-gold/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-navy">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto gold-gradient text-navy border-none">
                    {service.highlight}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Construction Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Konstruksi & Pengembangan</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Layanan konstruksi dan pengembangan proyek dengan standar kualitas tertinggi dan didukung oleh tim profesional berpengalaman.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {constructionServices.map((service, index) => (
              <Card key={index} className="group border-navy/20 hover:border-gold/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-navy">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto gold-gradient text-navy border-none">
                    {service.highlight}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="bg-gradient-to-r from-navy to-navy/80 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Mengapa Memilih HENDRA PRATAMA?</h3>
              <p className="opacity-90 max-w-2xl mx-auto">
                Kami memastikan ketersediaan produk yang aman, berkualitas, dan sesuai standar nasional melalui jaringan distribusi yang terencana dan armada pengiriman yang terpercaya.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gold/20 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gold mb-2">{benefit.title}</h4>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="gold-gradient text-navy font-semibold hover:opacity-90 transition-opacity"
                onClick={() => window.location.href = '#contact'}
              >
                Konsultasi Gratis
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;