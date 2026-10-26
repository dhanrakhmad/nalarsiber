import {
  CATEGORY_DESCRIPTIONS,
  CATEGORY_SLUGS,
} from "@/lib/categories"
import type { Article, TrendingTopic } from "@/lib/news"

/**
 * Sumber data mock NalarSiber.
 *
 * Array ini menjadi satu-satunya sumber kebenaran untuk homepage dan halaman
 * detail. Struktur kolom sengaja mengikuti tabel `public.articles` di
 * Supabase, sehingga nanti bisa diganti query database tanpa mengubah UI.
 */
export const ARTICLES: Article[] = [
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f01",
    title:
      "Model penalaran generasi baru pangkas biaya inferensi hingga 68%",
    slug: "model-penalaran-generasi-baru-pangkas-biaya-inferensi",
    summary:
      "Arsitektur sparse reasoning dari laboratorium terbuka ini mempertahankan akurasi benchmark sambil menekan konsumsi GPU secara signifikan. Efisiensi kini resmi menjadi medan tempur utama industri model bahasa.",
    content:
      "Sebuah laboratorium riset terbuka memperkenalkan arsitektur sparse reasoning yang hanya mengaktifkan sebagian jalur komputasi saat model diminta bernalar. Pendekatan ini memangkas biaya inferensi hingga 68% tanpa penurunan akurasi yang berarti pada benchmark matematika dan penalaran kausal.\n\nTim peneliti menyebut teknik ini sebagai langkah menuju model yang lebih hemat energi dan lebih mudah diterapkan di infrastruktur perusahaan. Kode rujukan dan kartu model telah dipublikasikan untuk direplikasi komunitas.",
    category: "Riset AI",
    thumbnail_url:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T08:45:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Riset",
    tags: ["reasoning model", "inferensi", "efisiensi"],
    reading_minutes: 7,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f02",
    title:
      "Agen AI mulai mengambil alih alur kerja tim produk di perusahaan SaaS",
    slug: "agen-ai-mengambil-alih-alur-kerja-tim-produk",
    summary:
      "Dari triase tiket hingga penyusunan spesifikasi, agen otonom kini menjadi anggota tim yang diam-diam produktif. Perusahaan mulai mengukur kontribusinya dengan metrik yang sama seperti karyawan manusia.",
    content:
      "Sejumlah perusahaan SaaS melaporkan bahwa agen AI kini menangani sebagian besar pekerjaan repetitif di tim produk: triase tiket, penyusunan changelog, hingga draf spesifikasi fitur. Yang berubah bukan hanya volume, tetapi cara tim mengukur kontribusi agen.\n\nTantangan terbesarnya ada pada tata kelola: siapa yang menyetujui tindakan agen, bagaimana jejak audit disimpan, dan kapan manusia harus mengambil alih. Perusahaan yang berhasil cenderung membangun lapisan persetujuan berjenjang sebelum agen diberi akses penuh.",
    category: "Agen & Otomasi",
    thumbnail_url:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T08:10:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Agent",
    tags: ["ai agent", "saas", "produktivitas"],
    reading_minutes: 6,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f03",
    title:
      "Chip akselerator lokal janjikan inferensi 70B parameter di perangkat",
    slug: "chip-akselerator-lokal-inferensi-70b-parameter",
    summary:
      "Vendor semikonduktor menantang dominasi pusat data dengan akselerator hemat daya yang mampu menjalankan model besar secara lokal. Era AI pribadi tanpa cloud semakin dekat ke meja kerja.",
    content:
      "Akselerator generasi baru ini diklaim mampu menjalankan model 70B parameter dengan kuantisasi agresif di bawah 40 watt. Jika klaim benchmark terverifikasi, perangkat kelas workstation dapat menjalankan asisten koding dan analisis dokumen tanpa koneksi cloud.\n\nAnalis menilai tantangan berikutnya bukan lagi silikon, melainkan ekosistem perangkat lunak: dukungan runtime, driver, dan alat fine-tuning lokal yang matang. Perlombaan akan bergeser dari spesifikasi chip ke kualitas pengalaman pengembang.",
    category: "Teknologi",
    thumbnail_url:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T07:35:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Hardware",
    tags: ["chip", "edge ai", "hardware"],
    reading_minutes: 5,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f04",
    title:
      "Regulator siapkan kerangka audit wajib untuk model generatif",
    slug: "regulator-siapkan-kerangka-audit-wajib-model-generatif",
    summary:
      "Draf aturan baru mewajibkan dokumentasi data latih, pengujian bias, dan jejak evaluasi risiko sebelum model dirilis ke publik. Industri menyambut baik, tetapi meminta kejelasan soal rahasia dagang.",
    content:
      "Otoritas pengawas menyusun kerangka audit yang mewajibkan pengembang model generatif mendokumentasikan sumber data latih, hasil uji bias, dan prosedur mitigasi risiko. Dokumen audit akan menjadi syarat sebelum model tersedia untuk publik.\n\nAsosiasi industri mendukung prinsip transparansi, namun meminta perlindungan atas rahasia dagang dan kejelasan definisi model berisiko tinggi. Masa konsultasi publik dibuka selama enam minggu sebelum aturan final diterbitkan.",
    category: "Kebijakan AI",
    thumbnail_url:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T07:05:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Policy",
    tags: ["regulasi", "audit", "tata kelola"],
    reading_minutes: 8,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f05",
    title:
      "Framework multi-agent terbuka hadir dengan jejak audit baris demi baris",
    slug: "framework-multi-agent-terbuka-jejak-audit",
    summary:
      "Setiap keputusan agen kini tercatat lengkap dengan alat, argumen, dan sitasi. Tim engineering bisa memutar ulang seluruh sesi untuk mencari akar kegagalan.",
    content:
      "Framework ini memperlakukan setiap langkah agen sebagai peristiwa yang dapat diaudit: pemanggilan alat, argumen, hasil, hingga alasan pemilihan langkah berikutnya. Rekaman sesi dapat diputar ulang seperti log terdistribusi.\n\nPendekatan tersebut menjawab salah satu keluhan terbesar adopsi agen di perusahaan: sulitnya mereproduksi kegagalan. Dengan jejak yang deterministik, tim dapat menguji ulang skenario tanpa menebak-nebak kondisi internal model.",
    category: "Agen & Otomasi",
    thumbnail_url:
      "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T06:30:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Agent",
    tags: ["multi-agent", "observability", "open source"],
    reading_minutes: 6,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f06",
    title: "Dataset multimodal Indonesia tembus 1,2 triliun token",
    slug: "dataset-multimodal-indonesia-1-2-triliun-token",
    summary:
      "Kolaborasi universitas dan industri merilis korpus terbuka berisi teks, audio, dan citra berbahasa Indonesia. Langkah ini menargetkan model yang lebih paham konteks lokal.",
    content:
      "Korpus terbuka ini menggabungkan teks, transkrip audio, dan pasangan citra-keterangan dari berbagai daerah di Indonesia. Sebagian besar data melewati proses deduplikasi dan penyaringan kualitas sebelum dirilis.\n\nPengelola dataset menekankan pentingnya persetujuan dan atribusi sumber. Mereka juga menyediakan kartu dataset yang menjelaskan bias yang masih tersisa, agar peneliti dapat mengukur keterbatasan model secara jujur.",
    category: "Riset AI",
    thumbnail_url:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T06:05:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Riset",
    tags: ["dataset", "multimodal", "bahasa indonesia"],
    reading_minutes: 5,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f07",
    title:
      "Pendingin dielektrik tekan konsumsi listrik pusat data hingga 40%",
    slug: "pendingin-dielektrik-pusat-data-hemat-listrik",
    summary:
      "Perendaman server dalam cairan non-konduktif terbukti lebih efisien dibanding pendingin udara. Operator pusat data AI mulai menghitung ulang ekonomi infrastruktur mereka.",
    content:
      "Uji coba di fasilitas komputasi padat menunjukkan pendinginan dielektrik menurunkan konsumsi listrik total hingga 40% dibanding sistem udara konvensional. Panas buangan juga dapat dimanfaatkan kembali untuk pemanas gedung.\n\nBiaya awal instalasi masih menjadi penghalang, terutama untuk retrofit pusat data lama. Namun dengan kepadatan rak AI yang terus naik, operator menilai investasi ini semakin cepat mencapai titik impas.",
    category: "Teknologi",
    thumbnail_url:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T05:40:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Infra",
    tags: ["data center", "energi", "infrastruktur"],
    reading_minutes: 6,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f08",
    title:
      "Platform evaluasi agen AI kumpulkan pendanaan Seri B Rp1,4 triliun",
    slug: "platform-evaluasi-agen-ai-pendanaan-seri-b",
    summary:
      "Investor menaruh taruhan pada lapisan pengukuran kualitas agen: alat yang menguji apakah agen benar-benar menyelesaikan tugas, bukan sekadar terdengar meyakinkan.",
    content:
      "Startup yang membangun platform evaluasi agen mengumumkan pendanaan Seri B senilai Rp1,4 triliun. Produknya memungkinkan perusahaan menjalankan simulasi tugas nyata dan mengukur tingkat keberhasilan agen sebelum produksi.\n\nMinat investor mencerminkan pergeseran fokus industri dari demo ke bukti. Perusahaan pembeli kini menuntut metrik yang dapat diaudit, termasuk biaya per tugas dan tingkat eskalasi ke manusia.",
    category: "Startup",
    thumbnail_url:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T05:15:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Bisnis",
    tags: ["startup", "pendanaan", "evaluasi"],
    reading_minutes: 5,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f09",
    title:
      "Prompt injection menyasar asisten koding di lingkungan perusahaan",
    slug: "prompt-injection-asisten-koding-perusahaan",
    summary:
      "Peneliti menemukan rantai serangan yang menyisipkan instruksi berbahaya lewat dokumentasi dependensi. Asisten koding bisa dimanipulasi untuk mengeksekusi perintah tanpa disadari.",
    content:
      "Serangan ini mengeksploitasi kebiasaan agen koding membaca dokumentasi dan berkas konfigurasi dari repositori pihak ketiga. Instruksi tersembunyi di dalam file tersebut dapat membajak tujuan agen.\n\nPertahanan yang disarankan mencakup pemisahan konteks tepercaya, pembatasan akses jaringan, dan persetujuan manusia sebelum perintah destruktif dijalankan. Beberapa vendor sudah merilis patch pada parser konteks mereka.",
    category: "Keamanan AI",
    thumbnail_url:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T04:50:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Security",
    tags: ["keamanan", "prompt injection", "coding agent"],
    reading_minutes: 7,
    is_breaking: true,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f0a",
    title: "Empat belas bahasa daerah masuk benchmark LLM terbuka",
    slug: "empat-belas-bahasa-daerah-benchmark-llm",
    summary:
      "Benchmark baru menguji pemahaman bahasa daerah di luar Jawa, lengkap dengan konteks budaya. Hasil awal menunjukkan kesenjangan performa yang masih lebar.",
    content:
      "Benchmark ini mencakup empat belas bahasa daerah dengan tugas pemahaman bacaan, terjemahan, dan penalaran sederhana. Penyusunnya melibatkan penutur asli untuk memastikan konteks budaya tidak hilang saat penerjemahan.\n\nHasil awal menunjukkan model besar masih tertinggal jauh dibanding performa mereka di bahasa Inggris. Tim berharap benchmark ini mendorong pengumpulan data yang lebih adil, bukan sekadar mengejar skor agregat.",
    category: "Riset AI",
    thumbnail_url:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T04:25:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Riset",
    tags: ["benchmark", "bahasa daerah", "evaluasi"],
    reading_minutes: 6,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f0b",
    title:
      "Browser agent kini isi formulir lintas situs tanpa skrip khusus",
    slug: "browser-agent-isi-formulir-lintas-situs",
    summary:
      "Agen berbasis visual mampu memahami layout halaman baru dan menyelesaikan alur pendaftaran multi-langkah. Otomasi web bergerak dari selektor rapuh ke pemahaman konteks.",
    content:
      "Dengan membaca tampilan halaman alih-alih bergantung pada selektor CSS, agen dapat menyelesaikan formulir pendaftaran, pengajuan klaim, dan pembelian lintas situs. Pendekatan visual membuatnya lebih tahan terhadap perubahan antarmuka.\n\nMeski demikian, peneliti mengingatkan risiko kesalahan pada transaksi sensitif. Praktik terbaik saat ini adalah meminta konfirmasi manusia pada langkah pembayaran dan perubahan data pribadi.",
    category: "Agen & Otomasi",
    thumbnail_url:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T03:58:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Agent",
    tags: ["browser agent", "otomasi", "computer use"],
    reading_minutes: 5,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f0c",
    title:
      "Dua belas laboratorium sepakati standar keamanan model open-weight",
    slug: "standar-keamanan-model-open-weight",
    summary:
      "Kesepakatan sukarela ini mengatur pelaporan kerentanan, uji red team bersama, dan masa jeda rilis untuk model berisiko tinggi. Implementasi masih akan diuji.",
    content:
      "Dua belas laboratorium menandatangani kerangka keamanan sukarela untuk model open-weight, mencakup pelaporan kerentanan dan uji red team bersama. Kerangka ini juga mengatur masa jeda rilis bagi model yang dinilai berisiko tinggi.\n\nKritik datang dari komunitas open source yang khawatir standar tersebut menjadi pintu masuk pembatasan. Penandatangan menegaskan komitmen pada keterbukaan bobot, dengan pengamanan berlapis pada tahap distribusi.",
    category: "Kebijakan AI",
    thumbnail_url:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T03:30:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Policy",
    tags: ["open-weight", "keamanan", "kolaborasi"],
    reading_minutes: 7,
  },
  {
    id: "3f0c9a52-8d1e-4a77-9f3e-1b2c4d5e6f0d",
    title:
      "Model visi 8B untuk kamera industri dilatih dengan data sintetis",
    slug: "model-visi-8b-kamera-industri-data-sintetis",
    summary:
      "Model kompak ini mendeteksi cacat produksi secara real-time di perangkat tepi, tanpa perlu mengirim citra ke cloud. Pabrik menjadi laboratorium AI berikutnya.",
    content:
      "Model visi 8B parameter ini dilatih dengan campuran citra sintetis dan sampel lini produksi nyata. Hasilnya, deteksi cacat dapat berjalan langsung di kamera industri dengan latensi di bawah 50 milidetik.\n\nPendekatan data sintetis menekan biaya anotasi dan memungkinkan pabrik menyesuaikan model dengan lini produksinya sendiri. Tantangan berikutnya adalah memastikan model tetap akurat ketika kondisi pencahayaan dan material berubah.",
    category: "Teknologi",
    thumbnail_url:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    created_at: "2026-10-26T03:10:00+07:00",
    author: "Redaksi NalarSiber",
    bot_name: "NalarBot-Hardware",
    tags: ["computer vision", "edge ai", "manufaktur"],
    reading_minutes: 4,
  },
]

export const TRENDING_TOPICS: TrendingTopic[] = [
  {
    category: "Agen & Otomasi",
    slug: CATEGORY_SLUGS["Agen & Otomasi"],
    total: 3,
    change: "+42% trafik",
    description: CATEGORY_DESCRIPTIONS["Agen & Otomasi"],
  },
  {
    category: "Riset AI",
    slug: CATEGORY_SLUGS["Riset AI"],
    total: 3,
    change: "+31% trafik",
    description: CATEGORY_DESCRIPTIONS["Riset AI"],
  },
  {
    category: "Teknologi",
    slug: CATEGORY_SLUGS["Teknologi"],
    total: 3,
    change: "+26% trafik",
    description: CATEGORY_DESCRIPTIONS["Teknologi"],
  },
  {
    category: "Kebijakan AI",
    slug: CATEGORY_SLUGS["Kebijakan AI"],
    total: 2,
    change: "+12% trafik",
    description: CATEGORY_DESCRIPTIONS["Kebijakan AI"],
  },
  {
    category: "Keamanan AI",
    slug: CATEGORY_SLUGS["Keamanan AI"],
    total: 1,
    change: "+9% trafik",
    description: CATEGORY_DESCRIPTIONS["Keamanan AI"],
  },
]

/** Cari artikel berdasarkan slug (nanti diganti query `eq("slug", slug)`). */
export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug)
}

/**
 * Artikel terkait: prioritaskan kategori yang sama, lalu lengkapi dengan
 * artikel terbaru lain agar grid tetap penuh.
 */
export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const others = ARTICLES.filter((item) => item.id !== article.id)
  const sameCategory = others.filter(
    (item) => item.category === article.category
  )
  const rest = others.filter((item) => item.category !== article.category)

  return [...sameCategory, ...rest].slice(0, limit)
}

/** Artikel sebelum/sesudah berdasarkan urutan terbit (array sudah terbaru dulu). */
export function getAdjacentArticles(article: Article): {
  newer?: Article
  older?: Article
} {
  const index = ARTICLES.findIndex((item) => item.id === article.id)

  return {
    newer: index > 0 ? ARTICLES[index - 1] : undefined,
    older:
      index >= 0 && index < ARTICLES.length - 1
        ? ARTICLES[index + 1]
        : undefined,
  }
}

/** URL gambar 1200×630 untuk Open Graph/Twitter card. */
export function getArticleOgImage(article: Article): string {
  const url = new URL(article.thumbnail_url)
  url.searchParams.set("w", "1200")
  url.searchParams.set("h", "630")
  url.searchParams.set("fit", "crop")
  return url.toString()
}
