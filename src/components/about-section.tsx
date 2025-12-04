"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, Shield, CheckCircle, Clock } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-gold" />,
      title: "Keamanan Terjamin",
      description: "Prioritaskan keselamatan dalam setiap distribusi dan proyek konstruksi"
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: "Profesionalisme",
      description: "Tim berpengalaman yang berkomitmen pada layanan terbaik"
    },
    {
      icon: <Target className="h-8 w-8 text-gold" />,
      title: "Kualitas Terbaik",
      description: "Produk dan layanan yang memenuhi standar nasional"
    },
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: "Terpercaya",
      description: "Reputasi terbukti dalam industri gas dan konstruksi"
    }
  ];

  const certifications = [
    "Sertifikasi Badan Pengatur Hilir Minyak dan Gas Bumi (BPH Migas)",
    "Izin Usaha Penyimpanan LPG",
    "Sertifikasi Standar Keselamatan Kerja",
    "Izin Usaha Jasa Konstruksi",
    "Sertifikasi Manajemen Mutu ISO 9001"
  ];

  const achievements = [
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "1000+", label: "Pelanggan Puas" },
    { number: "50+", label: "Proyek Selesai" },
    { number: "24/7", label: "Layanan Support" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="mb-4 gold-gradient text-navy border-none">Tentang Kami</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              HENDRA <span className="text-gold">PRATAMA</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Perusahaan terkemuka yang berdedikasi menyediakan solusi energi dan konstruksi terpadu dengan komitmen pada keunggulan, keamanan, dan kepuasan pelanggan.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-navy/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-gold mr-3" />
                <h3 className="text-2xl font-bold text-navy">Visi</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi perusahaan terdepan dan terpercaya dalam industri distribusi Gas LPG dan konstruksi di Indonesia, dengan memberikan solusi energi yang berkelanjutan dan infrastruktur yang berkualitas untuk mendukung pembangunan nasional.
              </p>
            </CardContent>
          </Card>

          <Card className="border-navy/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-gold mr-3" />
                <h3 className="text-2xl font-bold text-navy">Misi</h3>
              </div>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Menyediakan produk Gas LPG berkualitas dengan harga kompetitif</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Melaksanakan proyek konstruksi dengan standar keselamatan tertinggi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Memberikan layanan pelanggan yang responsif dan profesional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Berkontribusi pada pembangunan ekonomi lokal dan nasional</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">Nilai-Nilai Perusahaan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-navy/20 hover:border-gold/50 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-navy to-navy/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Pencapaian Kami</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{achievement.number}</div>
                  <div className="text-sm md:text-base opacity-90">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">Sertifikasi & Legalitas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-background rounded-lg border border-navy/20">
                <CheckCircle className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;