import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, User, Database, Globe } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 gold-gradient text-navy border-none">Legal</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Kebijakan <span className="text-gold">Privasi</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kebijakan privasi ini menjelaskan bagaimana HENDRA PRATAMA mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai dengan standar internasional GDPR.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Shield className="h-6 w-6 text-gold mr-3" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Di HENDRA PRATAMA, kami sangat memprioritaskan privasi dan keamanan data pribadi Anda. Kebijakan privasi ini berlaku untuk semua layanan yang kami sediakan, termasuk website, aplikasi mobile, dan semua interaksi digital lainnya dengan perusahaan kami.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Kami berkomitmen untuk mematuhi Peraturan Perlindungan Data Umum (GDPR) dan semua peraturan privasi yang berlaku di Indonesia. Kebijakan ini dirancang untuk transparan tentang praktik data kami dan memberikan Anda kontrol atas informasi pribadi Anda.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Database className="h-6 w-6 text-gold mr-3" />
                  Data yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Data Pribadi yang Anda Berikan:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Nama lengkap dan informasi identitas</li>
                      <li>Alamat email dan nomor telepon</li>
                      <li>Alamat fisik dan informasi lokasi</li>
                      <li>Informasi perusahaan atau organisasi</li>
                      <li>Informasi pembayaran dan faktur</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Data yang Dikumpulkan Secara Otomatis:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Alamat IP dan informasi geografis</li>
                      <li>Jenis browser dan perangkat</li>
                      <li>Data penggunaan website dan interaksi</li>
                      <li>Cookie dan teknologi tracking lainnya</li>
                      <li>Informasi sistem operasi</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Eye className="h-6 w-6 text-gold mr-3" />
                  Penggunaan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Kami menggunakan data pribadi Anda untuk tujuan berikut:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Layanan Pelanggan:</strong> Menyediakan layanan yang Anda minta dan merespons pertanyaan Anda</li>
                  <li><strong>Peningkatan Layanan:</strong> Menganalisis penggunaan untuk meningkatkan kualitas layanan kami</li>
                  <li><strong>Komunikasi:</strong> Mengirim informasi penting tentang layanan dan penawaran</li>
                  <li><strong>Keamanan:</strong> Melindungi keamanan sistem dan mencegah penipuan</li>
                  <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                  <li><strong>Penelitian:</strong> Melakukan analisis untuk pengembangan bisnis yang bertanggung jawab</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Lock className="h-6 w-6 text-gold mr-3" />
                  Perlindungan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Kami menerapkan langkah-langkah keamanan yang komprehensif untuk melindungi data pribadi Anda:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Enkripsi:</strong> Data dienkripsi saat transit dan penyimpanan</li>
                  <li><strong>Akses Terbatas:</strong> Hanya personel yang berwenang yang dapat mengakses data</li>
                  <li><strong>Firewall dan Keamanan Jaringan:</strong> Sistem keamanan berlapis</li>
                  <li><strong>Audit Reguler:</strong> Pemeriksaan keamanan berkala</li>
                  <li><strong>Training Karyawan:</strong> Pelatihan privasi dan keamanan data untuk semua staf</li>
                  <li><strong>Backup Aman:</strong> Sistem backup dengan enkripsi dan lokasi aman</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <User className="h-6 w-6 text-gold mr-3" />
                  Hak Anda Sebagai Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Sesuai dengan GDPR, Anda memiliki hak berikut terkait data pribadi Anda:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Hak Koreksi:</strong> Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                  <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Hak Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                  <li><strong>Hak Portabilitas:</strong> Menerima data dalam format yang dapat digunakan</li>
                  <li><strong>Hak Penolakan:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
                  <li><strong>Hak Informasi:</strong> Mengetahui bagaimana data Anda digunakan dan dilindungi</li>
                </ul>
              </CardContent>
            </Card>

            {/* International Data */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Globe className="h-6 w-6 text-gold mr-3" />
                  Transfer Data Internasional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Data pribadi Anda dapat ditransfer ke dan diproses di negara lain selama memenuhi standar keamanan yang setara dengan GDPR. Kami memastikan semua transfer data internasional dilindungi dengan:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Perjanjian transfer data yang sah</li>
                  <li>Standar kontrak klausul GDPR</li>
                  <li>Evaluasi kepatuhan negara tujuan</li>
                  <li>Mekanisme perlindungan data yang memadai</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="text-navy">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda, silakan hubungi kami:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@hendrapratama.com</p>
                  <p><strong>Telepon:</strong> +6282382466217</p>
                  <p><strong>Alamat:</strong> JL.BUNG TOMO, Sungai Keledang, Samarinda Seberang, Kalimantan Timur</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Kami akan merespons permintaan Anda dalam waktu 30 hari sesuai dengan peraturan yang berlaku.
                </p>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="text-navy">Pembaruan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan peraturan hukum. Setiap perubahan akan diterbitkan di halaman ini dengan tanggal pembaruan terbaru.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Perubahan material akan diberitahukan kepada pengguna melalui email atau pemberitahuan di website kami sebelum berlaku efektif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}