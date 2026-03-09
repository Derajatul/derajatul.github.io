import { Translations } from "./en";

export const id: Translations = {
  // Navigation
  nav: {
    home: "Beranda",
    projects: "Proyek",
    technology: "Teknologi",
    contact: "Kontak",
  },

  // Hero Section
  hero: {
    badge: "Partner Frontend Solo",
    title: {
      part1: "Bangun",
      highlight: "website profesional",
      part2: "yang membantu bisnis Anda berkembang.",
    },
    description:
      "Saya membantu founder, agensi, dan tim kecil mengubah ide mereka menjadi situs Next.js yang cepat, andal, tampak hebat, dan terasa lebih baik untuk digunakan.",
    cta: "Mulai sprint pembangunan →",
    viewWork: "Lihat karya terbaru",
  },

  // USP Section
  usp: {
    title: "Mengapa Bekerja Dengan Saya",
    items: [
      {
        title: "Pengerjaan Cepat",
        description: "Dapatkan pratinjau kerja pertama Anda dalam 48 jam",
      },
      {
        title: "Stack Modern",
        description: "Dibangun dengan Next.js, TypeScript, dan Tailwind CSS",
      },
      {
        title: "Desain Responsif",
        description: "Tampak hebat di semua perangkat dan ukuran layar",
      },
      {
        title: "Optimasi SEO",
        description: "Dibangun dengan praktik terbaik untuk mesin pencari",
      },
    ],
  },

  // Projects Section
  projects: {
    badge: "Karya Terpilih",
    title: {
      part1: "Menampilkan ",
      highlight: "Proyek Profesional",
      part2: " yang memberikan hasil nyata",
    },
    description:
      "Koleksi proyek perbankan digital dan ekosistem bisnis yang dikembangkan secara profesional di lingkungan korporat (BCA).",
    items: [
      {
        title: "BCA - Promo",
        description:
          "Situs web promosi dinamis untuk Bank Central Asia (BCA) yang menampilkan penawaran dan layanan terbaru dengan fokus pada interaksi dan konversi pengguna.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        href: "https://promo.bca.co.id/",
        image: "/projects/bca-promo.png",
      },
      {
        title: "BCA - Ocean",
        description:
          "Ocean by BCA menghubungkan bisnis dengan perbankan, operasional, dan ekosistem jaringan industri.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        href: "https://ocean.bca.co.id/",
        image: "/projects/bca-ocean.png",
      },
      {
        title: "BCA - Piala Presiden",
        description:
          "Piala Presiden esport 2023 adalah turnamen esport utama di Indonesia, menampilkan talenta kompetitif papan atas di seluruh negeri.",
        tech: ["React", "Tailwind"],
        href: "https://www.bca.co.id/id/Campaign/2021/Piala-Presiden",
        image: "/projects/bca-piala-presiden.png",
      },
      {
        title: "BCA - Simulasi Obligasi",
        description:
          "Simulator imbalan obligasi interaktif untuk pasar perdana BCA, memungkinkan pengguna menghitung return obligasi sampai jatuh tempo dengan efisien.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        href: "https://www.bca.co.id/id/individu/produk/investasi-dan-asuransi/obligasi",
        image: "/projects/bca-simulasi-obligasi.png",
      },
      {
        title: "BCA - Bangga Lokal",
        description:
          "Program dukungan BCA bagi UMKM dan brand lokal Indonesia melalui pengembangan bisnis, promosi, dan kemudahan transaksi, mencakup kolaborasi komunitas dan pelatihan.",
        tech: ["React", "TypeScript", "Tailwind"],
        href: "https://promo.bca.co.id/id/bangga-lokal-2025#/",
        image: "/projects/bca-bangga-lokal.png",
      },
    ],
  },

  // Technology Section
  technology: {
    title: "Alat yang memastikan peluncuran Anda lancar",
    subtitle:
      "Anda tidak perlu mempelajari tumpukan teknisnya—cukup ketahui bahwa setiap pilihan di sini menjaga situs Anda tetap cepat, aman, dan mudah diperbarui. Ini adalah bahan-bahan yang saya andalkan untuk memberikan hasil yang andal.",
  },

  // Contact Section
  contact: {
    title: "Mari Bekerja Sama",
    subtitle: "Punya proyek dalam pikiran? Mari bicarakan.",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    send: "Kirim Pesan",
    sending: "Mengirim...",
    success: "Pesan berhasil dikirim!",
    error: "Gagal mengirim pesan. Silakan coba lagi.",
  },

  // Footer
  footer: {
    rights: "Semua hak dilindungi.",
    builtWith: "Dibangun dengan Next.js dan Tailwind CSS",
  },
};
