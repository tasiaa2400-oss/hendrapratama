"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Home, 
  Factory, 
  Flame,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua Proyek" },
    { id: "lpg", name: "Gas LPG" },
    { id: "konstruksi", name: "Konstruksi" },
    { id: "perumahan", name: "Perumahan" }
  ];

  const projects = [
    {
      id: 1,
      title: "Pembangunan Gedung Kantor Pemerintah",
      category: "konstruksi",
      description: "Proyek konstruksi gedung kantor pemerintah dengan luas 5.000 m2, menggunakan material berkualitas tinggi dan standar keselamatan internasional.",
      location: "Samarinda, Kalimantan Timur",
      date: "2023",
      status: "Selesai",
      image: "/api/placeholder/400/300",
      features: ["Gedung 3 lantai", "Ruang meeting modern", "Sistem keamanan terpadu", "Eco-friendly design"]
    },
    {
      id: 2,
      title: "Perumahan Green Valley Residence",
      category: "perumahan",
      description: "Pengembangan kompleks perumahan modern dengan 150 unit rumah, dilengkapi fasilitas umum lengkap dan area hijau.",
      location: "Balikpapan, Kalimantan Timur",
      date: "2023",
      status: "Selesai",
      image: "/api/placeholder/400/300",
      features: ["150 unit rumah", "Club house", "Keamanan 24 jam", "Taman bermain anak"]
    },
    {
      id: 3,
      title: "Distributor LPG Regional Samarinda",
      category: "lpg",
      description: "Pembangunan fasilitas distributor LPG modern dengan kapasitas penyimpanan 500 ton, melayani seluruh wilayah Kalimantan Timur.",
      location: "Samarinda, Kalimantan Timur",
      date: "2022",
      status: "Selesai",
      image: "/api/placeholder/400/300",
      features: ["Kapasitas 500 ton", "Sistem safety modern", "Fasilitas filling station", "Office building"]
    },
    {
      id: 4,
      title: "Pabrik Pengolahan Kayu Modern",
      category: "konstruksi",
      description: "Konstruksi pabrik pengolahan kayu dengan teknologi terkini dan sistem manajemen limbah yang ramah lingkungan.",
      location: "Bontang, Kalimantan Timur",
      date: "2022",
      status: "Selesai",
      image: "/api/placeholder/400/300",
      features: ["Luas 10.000 m2", "Teknologi Jerman", "Sistem limbah terpadu", "Green building"]
    },
    {
      id: 5,
      title: "Klaster Perumahan Elite Palm Hills",
      category: "perumahan",
      description: "Pengembangan perumahan eksklusif dengan 80 unit mewah, menawarkan privasi dan kemewahan bagi penghuninya.",
      location: "Samarinda, Kalimantan Timur",
      date: "2021",
      status: "Selesai",
      image: "/api/placeholder/400/300",
      features: ["80 unit mewah", "Private golf course", "Smart home system", "Lakeside view"]
    },
    {
      id: 6,
      title: "Terminal LPG Pelabuhan Samarinda",
      category: "lpg",
      description: "Pembangunan terminal LPG di pelabuhan dengan sistem bongkar muat otomatis dan fasilitas penyimpanan terintegrasi.",
      location: "Pelabuhan Samarinda",
      date: "2021",
      status: "Selesai",
      image: "/api/placeholder/400/300",
      features: ["Terminal modern", "Automated system", "Kapasitas 1.000 ton", "Integrated storage"]
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "lpg": return <Flame className="h-5 w-5" />;
      case "konstruksi": return <Building className="h-5 w-5" />;
      case "perumahan": return <Home className="h-5 w-5" />;
      default: return <Building className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "lpg": return "bg-orange-100 text-orange-800 border-orange-200";
      case "konstruksi": return "bg-blue-100 text-blue-800 border-blue-200";
      case "perumahan": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gold-gradient text-navy border-none">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Proyek <span className="text-gold">Unggulan</span> Kami
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Karya terbaik kami yang telah membantu berbagai klien mewujudkan visi mereka dengan solusi energi dan konstruksi yang inovatif.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id 
                  ? "gold-gradient text-navy border-none" 
                  : "border-navy/20 text-navy hover:bg-navy/10"
              } transition-all duration-200`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group border-navy/20 hover:border-gold/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-navy/20 to-gold/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="h-16 w-16 text-navy/30" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={`flex items-center gap-1 ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    {categories.find(c => c.id === project.category)?.name}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-gold mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-gold mr-2" />
                    {project.date}
                  </div>
                </div>

                {/* Project Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-navy/20">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 2 && (
                      <Badge variant="outline" className="text-xs border-navy/20">
                        +{project.features.length - 2} lagi
                      </Badge>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-navy/20 text-navy hover:bg-navy hover:text-white transition-all duration-200"
                >
                  Lihat Detail
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Tidak ada proyek dalam kategori ini.</p>
            <Button 
              variant="outline" 
              onClick={() => setActiveCategory("all")}
              className="border-navy/20 text-navy hover:bg-navy hover:text-white"
            >
              Lihat Semua Proyek
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-navy to-navy/80 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Tertarik Bekerja Sama dengan Kami?
            </h3>
            <p className="opacity-90 mb-8 max-w-2xl mx-auto">
              Mari diskusikan proyek Anda bersama tim profesional kami. Kami siap memberikan solusi terbaik untuk kebutuhan energi dan konstruksi Anda.
            </p>
            <Button 
              size="lg" 
              className="gold-gradient text-navy font-semibold hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = '#contact'}
            >
              Mulai Konsultasi
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;