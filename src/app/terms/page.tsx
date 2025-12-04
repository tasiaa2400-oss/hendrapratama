import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Shield, AlertTriangle, Scale, Gavel } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 gold-gradient text-navy border-none">Legal</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Syarat & <span className="text-gold">Ketentuan</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Syarat dan ketentuan ini mengatur penggunaan website dan layanan yang disediakan oleh HENDRA PRATAMA. Dengan mengakses website kami, Anda setuju untuk mematuhi ketentuan ini.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <FileText className="h-6 w-6 text-gold mr-3" />
                  Penerimaan Syarat dan Ketentuan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Dengan mengakses dan menggunakan website HENDRA PRATAMA, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan ketentuan ini, jangan gunakan website kami.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  HENDRA PRATAMA berhak untuk mengubah syarat dan ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Perubahan akan berlaku efektif segera setelah dipublikasikan di website ini.
                </p>
              </CardContent>
            </Card>

            {/* Use of Website */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Users className="h-6 w-6 text-gold mr-3" />
                  Penggunaan Website
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Yang Diperbolehkan:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Mengakses informasi tentang layanan kami</li>
                      <li>Menghubungi kami untuk konsultasi</li>
                      <li>Menggunakan formulir kontak untuk pertanyaan</li>
                      <li>Membaca konten edukatif yang kami sediakan</li>
                      <li>Melihat portfolio proyek kami</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Yang Dilarang:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Menggunakan website untuk kegiatan ilegal</li>
                      <li>Mencoba merusak atau mengganggu sistem kami</li>
                      <li>Mengirimkan virus atau malware</li>
                      <li>Menyalin konten tanpa izin tertulis</li>
                      <li>Menggunakan data untuk spam atau penipuan</li>
                      <li>Mencoba mengakses area terbatas tanpa otorisasi</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Shield className="h-6 w-6 text-gold mr-3" />
                  Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Semua konten, desain, grafik, logo, dan materi lainnya di website ini merupakan hak milik HENDRA PRATAMA dan dilindungi oleh hukum hak cipta dan merek dagang.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Hak Cipta:</strong> Semua teks, gambar, dan desain dilindungi hak cipta</li>
                  <li><strong>Merek Dagang:</strong> Logo dan nama HENDRA PRATAMA adalah merek dagang terdaftar</li>
                  <li><strong>Penggunaan Terbatas:</strong> Konten hanya boleh digunakan untuk tujuan informasi pribadi</li>
                  <li><strong>Pelanggaran:</strong> Pelanggaran hak kekayaan intelektual akan ditindak sesuai hukum</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Users className="h-6 w-6 text-gold mr-3" />
                  Tanggung Jawab Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Sebagai pengguna website kami, Anda memiliki tanggung jawab berikut:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Informasi Akurat:</strong> Memberikan informasi yang benar dan terkini</li>
                  <li><strong>Keamanan Akun:</strong> Menjaga kerahasiaan informasi login Anda</li>
                  <li><strong>Kepatuhan Hukum:</strong> Mematuhi semua hukum dan peraturan yang berlaku</li>
                  <li><strong>Tidak Mengganggu:</strong> Tidak mengganggu pengguna lain atau sistem kami</li>
                  <li><strong>Konten Pantas:</strong> Tidak mengirimkan konten yang tidak pantas atau ilegal</li>
                  <li><strong>Respect Privacy:</strong> Menghormati privasi pengguna lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <AlertTriangle className="h-6 w-6 text-gold mr-3" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  HENDRA PRATAMA tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Kerugian langsung atau tidak langsung dari penggunaan website</li>
                  <li>Ketersediaan atau akurasi informasi pihak ketiga</li>
                  <li>Gangguan teknis atau downtime sistem</li>
                  <li>Kehilangan data karena alasan di luar kendali kami</li>
                  <li>Konten yang dibuat oleh pengguna atau pihak ketiga</li>
                  <li>Kerusakan akibat virus atau malware dari website eksternal</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Website kami disediakan "sebagaimana adanya" tanpa jaminan tersurat atau tersirat.
                </p>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Scale className="h-6 w-6 text-gold mr-3" />
                  Penyelesaian Sengketa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Setiap sengketa yang timbul dari penggunaan website ini akan diselesaikan melalui:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Negosiasi:</strong> Upaya penyelesaian secara damai terlebih dahulu</li>
                  <li><strong>Mediasi:</strong> Proses mediasi dengan pihak ketiga netral</li>
                  <li><strong>Arbitrase:</strong> Jika mediasi gagal, sengketa akan diselesaikan melalui arbitrase</li>
                  <li><strong>Yurisdiksi:</strong> Hukum yang berlaku adalah hukum Republik Indonesia</li>
                  <li><strong>Forum:</strong> Pengadilan Negeri Samarinda memiliki yurisdiksi eksklusif</li>
                </ol>
              </CardContent>
            </Card>

            {/* Service Terms */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="flex items-center text-navy">
                  <Gavel className="h-6 w-6 text-gold mr-3" />
                  Ketentuan Layanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Layanan Gas LPG:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Harga dapat berubah sesuai kebijakan pemerintah</li>
                      <li>Pengiriman tergantung ketersediaan stok</li>
                      <li>Safety procedures wajib diikuti</li>
                      <li>Pembayaran sesuai kesepakatan yang ditetapkan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Layanan Konstruksi:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Perjanjian kontrak harus ditandatangani sebelum proyek dimulai</li>
                      <li>Perubahan desain memerlukan persetujuan tertulis</li>
                      <li>Pembayaran sesuai termin yang disepakati</li>
                      <li>Standar keselamatan wajib dipatuhi</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="text-navy">Pengakhiran Penggunaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  HENDRA PRATAMA berhak untuk:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Menghentikan akses pengguna yang melanggar ketentuan</li>
                  <li>Menghapus konten yang tidak sesuai</li>
                  <li>Menangguhkan layanan untuk pemeliharaan</li>
                  <li>Mengubah atau menghentikan layanan kapan saja</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pengguna juga dapat menghentikan penggunaan website kapan saja tanpa pemberitahuan.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-navy/20">
              <CardHeader>
                <CardTitle className="text-navy">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> legal@hendrapratama.com</p>
                  <p><strong>Telepon:</strong> +6282382466217</p>
                  <p><strong>Alamat:</strong> JL.BUNG TOMO, Sungai Keledang, Samarinda Seberang, Kalimantan Timur</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}