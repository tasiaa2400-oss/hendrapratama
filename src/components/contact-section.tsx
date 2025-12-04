"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building,
  User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Telepon",
      details: ["+6282382466217"],
      action: "tel:+6282382466217"
    },
    {
      icon: <Mail className="h-6 w-6 text-gold" />,
      title: "Email",
      details: ["info@hendrapratama.com", "support@hendrapratama.com"],
      action: "mailto:info@hendrapratama.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: "Alamat",
      details: [
        "JL.BUNG TOMO, Desa/Kelurahan Sungai Keledang",
        "Kec. Samarinda Seberang, Kota Samarinda",
        "Provinsi Kalimantan Timur, Indonesia"
      ],
      action: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 08:00 - 15:00",
        "Minggu & Hari Libur: Tutup"
      ],
      action: "#"
    }
  ];

  const services = [
    "Distribusi Gas LPG",
    "Konsultasi Konstruksi",
    "Pengembangan Proyek",
    "Perencanaan Iklan",
    "Lainnya"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gold-gradient text-navy border-none">Kontak Kami</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Hubungi <span className="text-gold">Kami</span> Hari Ini
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Siap untuk memulai proyek Anda? Tim profesional kami siap membantu memberikan solusi terbaik untuk kebutuhan energi dan konstruksi Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-navy/20 hover:border-gold/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {info.action !== "#" ? (
                              <a 
                                href={info.action} 
                                className="hover:text-gold transition-colors duration-200"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact */}
            <Card className="gold-gradient text-navy border-none">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Butuh Bantuan Cepat?</h3>
                <p className="text-sm mb-4 opacity-90">
                  Tim customer service kami siap membantu Anda 24/7 untuk kebutuhan mendesak.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-navy text-white hover:bg-navy/90"
                  onClick={() => window.open("tel:+6282382466217")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Hubungi Sekarang
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-navy/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-navy/5 to-gold/5 border-b border-navy/20">
                <CardTitle className="text-2xl font-bold text-navy flex items-center">
                  <Send className="h-6 w-6 text-gold mr-3" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-navy flex items-center">
                        <User className="h-4 w-4 text-gold mr-2" />
                        Nama Lengkap *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap Anda"
                        className="border-navy/20 focus:border-gold/50 transition-colors duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-navy flex items-center">
                        <Mail className="h-4 w-4 text-gold mr-2" />
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        className="border-navy/20 focus:border-gold/50 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-navy flex items-center">
                        <Phone className="h-4 w-4 text-gold mr-2" />
                        Nomor Telepon *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62xxx-xxxx-xxxx"
                        className="border-navy/20 focus:border-gold/50 transition-colors duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-navy flex items-center">
                        <Building className="h-4 w-4 text-gold mr-2" />
                        Perusahaan/Instansi
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nama perusahaan atau instansi"
                        className="border-navy/20 focus:border-gold/50 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-navy">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Pilih subjek</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-navy">
                      Pesan *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Jelaskan kebutuhan atau pertanyaan Anda secara detail..."
                      className="border-navy/20 focus:border-gold/50 transition-colors duration-200 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient text-navy font-semibold py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-navy mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground text-center">
                    Dengan mengirim formulir ini, Anda menyetujui{" "}
                    <a href="/privacy-policy" className="text-gold hover:underline">
                  Kebijakan Privasi
                    </a>{" "}
                    dan{" "}
                    <a href="/terms" className="text-gold hover:underline">
                  Syarat & Ketentuan
                    </a>{" "}
                    kami.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="mt-16">
          <Card className="border-navy/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-navy/20 to-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-navy/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-2">Lokasi Kami</h3>
                  <p className="text-muted-foreground mb-4">
                    JL.BUNG TOMO, Desa/Kelurahan Sungai Keledang<br />
                    Kec. Samarinda Seberang, Kota Samarinda<br />
                    Provinsi Kalimantan Timur
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-navy/20 text-navy hover:bg-navy hover:text-white"
                    onClick={() => window.open("https://maps.google.com/?q=Samarinda+Seberang+Kalimantan+Timur")}
                  >
                    Buka di Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;