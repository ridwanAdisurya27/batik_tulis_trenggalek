export interface ModelPhoto {
  url: string;
  title: string;
  caption: string;
}

export interface BatikItem {
  id: string;
  name: string;
  price: number;
  category: "Bledak" | "Keraton Klasik" | "Trenggalek Khas";
  origin: string;
  image: string;
  bgImage: string;
  bentoImages: string[];
  description: string;
  philosophySummary: string;
  details: {
    technique: string;
    material: string;
    dye: string;
    dimensions: string;
    craftDuration: string;
  };
  modelImages: ModelPhoto[];
}

export const BATIK_COLLECTION: BatikItem[] = [
  {
    id: "bledak-anggrek",
    name: "Bledak Anggrek",
    price: 450000,
    category: "Bledak",
    origin: "Desa Bledak, Sidoarjo & Pesisir Timur",
    image: "/Media/Batik/Bledak Anggrek.jpg",
    bgImage: "/Media/Mockup/Bledak_Anggrek_Hanger-BG.png",
    bentoImages: [
      "/Media/Mockup/Bledak_Anggrek_Hanger.jpg",
      "/Media/Mockup/Bledak_Anggrek_Model_P.webp",
      "/Media/Mockup/Galeri.png",
      "/Media/Mockup/Galeri.png"
    ],
    philosophySummary:
      "Memadukan kesucian latar putih bledak dengan keanggunan bunga anggrek yang menyimbolkan ketulusan, keindahan budi pekerti, dan ketangguhan hidup.",
    description:
      "Batik Bledak merupakan batik tradisional asli Indonesia yang berasal dari Desa Bledak, Kabupaten Sidoarjo, Jawa Timur, dan telah diproduksi sejak abad ke-18. Pada mulanya, batik ini hanya digunakan oleh masyarakat setempat untuk pakaian sehari-hari, kain panjang, dan upacara adat, tetapi seiring waktu berkembang menjadi produk komersial yang diekspor ke Eropa dan Amerika Serikat pada dekade 1930-an serta dijadikan bahan pakaian sarong Belanda. Saat ini, kegunaannya semakin meluas untuk beragam busana formal maupun informal, sekaligus berfungsi sebagai komoditas ekonomi unggulan dan identitas budaya nasional yang terus dilestarikan, salah satunya melalui penetapan Desa Bledak sebagai Desa Wisata Batik Bledak pada tahun 2016. Ciri khas utama Batik Bledak terletak pada motif geometris sederhananya—seperti segitiga, segi empat, dan lingkaran—dengan paduan warna kontras seperti merah, hitam, dan putih. Dibuat menggunakan teknik batik tulis halus di atas kain katun berkualitas, Batik Bledak juga menyimpan makna filosofis dan religius yang mendalam melalui motif simbolis seperti pohon bledak, bintang, dan bunga melati, yang hingga kini terus diminati berkat inovasi pengrajin dan dukungan promosi dari pemerintah.",
    details: {
      technique: "Batik Tulis Canting Tembaga Halus (100% Manual)",
      material: "Mori Katun Primissima Organik Berkualitas Tinggi",
      dye: "Pewarna Alami & Pigmen Sintetis Berkualitas Ekspor",
      dimensions: "220 cm × 105 cm",
      craftDuration: "5 – 6 Minggu Pengerjaan"
    },
    modelImages: [
      {
        url: "/Media/Mockup/Bledak_Anggrek_Model_P.webp",
        title: "Peragaan Busana Wanita",
        caption: "Kebaya & Gaun Motif Bledak Anggrek Sidoarjo"
      },
      {
        url: "/Media/Mockup/Galeri.png",
        title: "Detail Kebaya Modern",
        caption: "Paduan Kain Bledak dengan Kebaya Minimalis"
      }
    ]
  },
  {
    id: "bledak-merak",
    name: "Bledak Merak",
    price: 450000,
    category: "Bledak",
    origin: "Desa Bledak, Sidoarjo, Jawa Timur",
    image: "/Media/Batik/Bledak Merak.jpg",
    bgImage: "/Media/Mockup/bledak_merak_Hanger-BG.png",
    bentoImages: [
      "/Media/Mockup/bledak_merak_Hanger.jpg",
      "/Media/Mockup/Bledak_Merak_Model_P.jpg",
      "/Media/Mockup/Galeri.png",
      "/Media/Mockup/Galeri.png"
    ],
    philosophySummary:
      "Keanggunan merak berekor megah menyimbolkan kemuliaan, rasa percaya diri yang tenang, serta doa kemakmuran bagi pemakainya.",
    description:
      "Batik Bledak merupakan salah satu jenis batik tradisional khas Indonesia yang berasal dari Desa Bledak, Kabupaten Sidoarjo, Jawa Timur, dan telah diproduksi oleh masyarakat setempat sejak abad ke-18. Pada mulanya, batik ini hanya dibuat untuk memenuhi kebutuhan harian warga lokal seperti pakaian adat, kain panjang, serta perlengkapan upacara adat, sebelum akhirnya berkembang pesat menjadi produk komersial yang berhasil diekspor ke negara-negara Eropa dan Amerika Serikat pada dekade 1930-an. Selama masa penjajahan Belanda, kain batik ini juga kerap dimanfaatkan sebagai bahan pembuatan pakaian khas yang disebut sarong, hingga pada era kemerdekaan diakui secara resmi sebagai identitas kebudayaan nasional yang bernilai seni, budaya, dan ekonomi tinggi, berujung pada penetapan Desa Bledak sebagai Desa Wisata Batik Bledak oleh Pemerintah Kabupaten Sidoarjo pada tahun 2016. Ciri khas utama Batik Bledak Merak Sidoarjo terletak pada keanggunan motif burung merak dengan ekor mengembang lebar berhiaskan pola-pola rumit yang dipadukan bersama elemen alam seperti bunga dan dedaunan khas seni batik pesisir yang dinamis. Pengaplikasian warna-warna cerah seperti biru, hijau, kuning, dan merah tidak hanya memancarkan keindahan visual, tetapi juga menyimbolkan kehangatan serta semangat kehidupan. Secara filosofis, motif merak melambangkan kecantikan, kebahagiaan, kemuliaan, serta kebanggaan, yang dipercaya memuat doa agar pemakainya selalu tampil percaya diri dan sejahtera. Mengenai kegunaannya, selain menjadi simbol keanggunan bagi mempelai wanita dalam busana pernikahan adat Jawa, Batik Bledak kini diproduksi secara fleksibel untuk berbagai pakaian modern seperti kebaya, dress, kemeja, hingga aksesori fesyen yang sangat cocok dikenakan oleh berbagai kalangan masyarakat dalam acara formal maupun kasual.",
    details: {
      technique: "Batik Tulis Halus Dua Sisi (Tembus Canting Rapi)",
      material: "Katun Primissima Halus Khusus Pesisir",
      dye: "Gradasi Multi-Warna Alami & Indigosol",
      dimensions: "230 cm × 105 cm",
      craftDuration: "6 Minggu Pengerjaan"
    },
    modelImages: [
      {
        url: "/Media/Mockup/Bledak_Merak_Model_P.jpg",
        title: "Peragaan Busana Wanita",
        caption: "Tampilan Elegan Motif Merak Ekor Mengembang"
      },
      {
        url: "/Media/Mockup/Galeri.png",
        title: "Siluet Busana Formal",
        caption: "Aplikasi Kain Bledak Merak pada Busana Pesta"
      }
    ]
  },
  {
    id: "parang-kesit",
    name: "Parang Kesit",
    price: 450000,
    category: "Keraton Klasik",
    origin: "Keraton Mataram (Yogyakarta & Surakarta)",
    image: "/Media/Batik/parang kesit.jpg",
    bgImage: "/Media/Mockup/parang kesit_Hanger-BG.png",
    bentoImages: [
      "/Media/Mockup/parang kesit_Hanger.jpg",
      "/Media/Mockup/Parang Kesit_Model_P.jpg",
      "/Media/Mockup/Parang Kesit_Model_L.jpg",
      "/Media/Mockup/Galeri.png"
    ],
    philosophySummary:
      "Pola diagonal ombak samudra dipadukan lung-lungan flora lincah, melambangkan keteguhan pantang menyerah dan keluwesan budi pekerti.",
    description:
      "Sejarah Batik Parang bermula dari kebudayaan Keraton Mataram di Jawa, khususnya di Yogyakarta dan Surakarta, di mana penamaannya berasal dari kata bahasa Jawa pereng yang berarti lereng atau tebing. Motif ini terinspirasi oleh pergerakan gelombang laut yang terus-menerus bergerak tanpa pernah putus, menyimpan filosofi mendalam tentang keteguhan, kesabaran, serta ketekunan hidup manusia. Pada awalnya, kegunaan Batik Parang sangat terbatas dan bersifat eksklusif karena hanya boleh dikenakan oleh raja serta kalangan bangsawan keraton sebagai simbol status sosial, kewibawaan, dan kebesaran, sebelum akhirnya menyebar dan dapat digunakan oleh masyarakat luas. Ciri khas utama dari batik ini terletak pada susunan pola garis diagonal menyerupai ombak atau tebing terjal yang tegas. Keunikan visualnya semakin diperkaya melalui penambahan unsur lung-lungan, yaitu motif flora khas dari pura kenegaraan, serta kehadiran ornamen burung. Perpaduan antara tatanan pola geometris Parang yang kaku dengan unsur ragam hias flora dan fauna tersebut melahirkan variasi khusus yang dinamai Parang Kesit. Penambahan elemen-elemen alami ini membuat tampilan Batik Parang berkesan lebih lincah, luwes, dan dinamis, tanpa sedikit pun mengurangi nilai-nilai tradisional serta keanggunan warisan budaya keraton Jawa.",
    details: {
      technique: "Batik Tulis Keraton Pakem Klasik",
      material: "Katun Mori Sutra Primissima Keraton",
      dye: "Sogan Tradisional (Kayu Tingi, Jambal, Tegeran)",
      dimensions: "226 cm × 102 cm",
      craftDuration: "7 – 8 Minggu Pengerjaan"
    },
    modelImages: [
      {
        url: "/Media/Mockup/Parang Kesit_Model_P.jpg",
        title: "Model Wanita Keraton",
        caption: "Paduan Parang Kesit dengan Kebaya Klasik"
      },
      {
        url: "/Media/Mockup/Parang Kesit_Model_L.jpg",
        title: "Kemeja Formal Pria",
        caption: "Kemeja Parang Kesit Berwibawa & Dinamis"
      }
    ]
  },
  {
    id: "satrio-manah",
    name: "Satrio Manah",
    price: 450000,
    category: "Keraton Klasik",
    origin: "Pura Mangkunegaran & Surakarta Hadiningrat",
    image: "/Media/Batik/isi timun satrio.jpg",
    bgImage: "/Media/Mockup/isi timun satrio_Hanger-BG.png",
    bentoImages: [
      "/Media/Mockup/isi timun satrio_Hanger.jpg",
      "/Media/Mockup/Isi_Timun Satrio_Model_P.jpg",
      "/Media/Mockup/Isi timun satrio_baju_L.jpg",
      "/Media/Mockup/isi timun satrio_Model_L.jpg"
    ],
    philosophySummary:
      "Ksatria pemanah dengan isen-isen wiji timun yang rapat, mengajarkan fokus ketetapan hati, kepemimpinan bijak, dan ketepatan melangkah.",
    description:
      "Motif Satrio Manah memiliki akar sejarah yang kuat dalam tradisi batik Jawa, khususnya yang dikembangkan oleh para pembatik keraton di wilayah Surakarta dan Pura Mangkunegaran. Penamaan batik ini berasal dari kata satrio yang berarti ksatria atau pahlawan dan manah yang berarti memanah atau mengarahkan. Secara filosofis, motif ini melambangkan nilai-nilai kepemimpinan, keberanian, kehormatan, serta ketepatan dan fokus dalam mencapai tujuan hidup maupun keseimbangan perjalanan spiritual. Dalam tradisi budaya Jawa, kegunaan utama Batik Satrio Manah secara khusus dipakai oleh pengantin pria pada saat upacara pernikahan adat, yang difungsikan sebagai doa dan petuah agar sang pria mampu memimpin rumah tangga dengan tekad yang mantap dan bijaksana. Ciri khas unik batik ini terletak pada gaya ragam hiasnya yang sangat fleksibel dan mendetail melalui penggunaan isen-isen sebagai pola pengisi latar. Para pembatik keraton menghias sela-sela motif Parang dengan isen-isen wiji timun, berupa deretan cecek atau titik-titik halus yang disusun sangat rapat. Perpaduan harmonis antara filosofi ksatria pemanah dan detail ornamentasi halus tersebut menciptakan visual batik yang tampak amat anggun, dinamis, serta sarat akan nilai estetika tinggi.",
    details: {
      technique: "Batik Tulis Cecekan Halus Canting Nol",
      material: "Katun Primissima Halus Super",
      dye: "Pewarnaan Sogan Cokelat Mataram Alami",
      dimensions: "220 cm × 114 cm",
      craftDuration: "6 Minggu Pengerjaan"
    },
    modelImages: [
      {
        url: "/Media/Mockup/Isi_Timun Satrio_Model_P.jpg",
        title: "Model Wanita Anggun",
        caption: "Detail Isen-Isen Wiji Timun Satrio Manah"
      },
      {
        url: "/Media/Mockup/Isi timun satrio_baju_L.jpg",
        title: "Kemeja Executive Pria",
        caption: "Kemeja Satrio Manah untuk Acara Resmi"
      },
      {
        url: "/Media/Mockup/isi timun satrio_Model_L.jpg",
        title: "Peragaan Busana Pria",
        caption: "Koleksi Ksatria Mangkunegaran"
      }
    ]
  },
  {
    id: "truntum-garuda",
    name: "Truntum Garuda",
    price: 500000,
    category: "Keraton Klasik",
    origin: "Keraton Surakarta (Kanjeng Ratu Kencana)",
    image: "/Media/Batik/truntum garuda.jpg",
    bgImage: "/Media/Mockup/Truntum Garuda_Hanger-BG.png",
    bentoImages: [
      "/Media/Mockup/Truntum Garuda_Hanger.jpg",
      "/Media/Mockup/Truntum Garuda_Model_P.jpg",
      "/Media/Mockup/Truntum Garuda_Model_L.jpg",
      "/Media/Mockup/truntum Garuda_Baju_L(1).png"
    ],
    philosophySummary:
      "Taburan bintang tumaruntum berpadu sayap Garuda pelindung, melambangkan cinta kasih tulus yang terus bersemi serta martabat yang terjaga.",
    description:
      "Batik Truntum Garuda berakar dari kebudayaan Keraton Surakarta dan diciptakan oleh Kanjeng Ratu Kencana, permaisuri Sunan Pakubuwono III, sebagai simbol kasih sayang yang senantiasa tumbuh kembali (tumaruntum). Ciri khas unik batik ini terletak pada penggabungan dua motif klasik, yaitu tatanan bintang-bintang kecil yang tersusun rapi dari motif Truntum dengan ornamen Garuda yang menggambarkan lambang wibawa, kekuatan, serta perlindungan. Dibuat dengan tingkat ketelitian tinggi menggunakan teknik batik tulis halus dan pewarnaan sogan tradisional khas keraton, perpaduan visual tersebut menyimbolkan keteguhan cinta dan kemuliaan. Mengenai kegunaannya, Batik Truntum Garuda dikenakan secara khusus oleh orang tua pengantin pada saat prosesi panggih atau temu manten dalam tradisi upacara pernikahan adat Jawa. Pemakaian kain ini difungsikan sebagai bentuk doa, penuntun, dan pemberian restu luhur dari orang tua agar kehidupan rumah tangga baru yang dibina anak-anak mereka selalu dilimpahi kemuliaan, kebahagiaan, serta perlindungan.",
    details: {
      technique: "Batik Tulis Truntum Rapat Canting Tembaga",
      material: "Katun Mori Bendera Primissima",
      dye: "Sogan Keraton Asli (Ekstrak Kulit Kayu Tingi)",
      dimensions: "214 cm × 102 cm",
      craftDuration: "8 Minggu Pengerjaan"
    },
    modelImages: [ 
      {
        url: "/Media/Mockup/Truntum Garuda_Model_P.jpg",
        title: "Model Wanita Keraton",
        caption: "Busana Pernikahan Motif Truntum Garuda"
      },
      {
        url: "/Media/Mockup/Truntum Garuda_Model_L.jpg",
        title: "Model Pria Keraton",
        caption: "Kemeja Wibawa Truntum Garuda"
      }
    ]
  },
  {
    id: "kawung-bunga-cengkeh",
    name: "Kawung Bunga Cengkeh",
    price: 450000,
    category: "Trenggalek Khas",
    origin: "Trenggalek, Jawa Timur & Mataram Klasik",
    image: "/Media/Batik/Kawung Bunga Cengkeh.jpg",
    bgImage: "/Media/Mockup/kawung bunga cengkeh_Hanger-BG.png",
    bentoImages: [
      "/Media/Mockup/kawung bunga cengkeh_Hanger.jpg",
      "/Media/Mockup/Kawung Bunga Cengkeh_Model_P.jpg",
      "/Media/Mockup/baju_L.jpg",
      "/Media/Mockup/Galeri.png"
    ],
    philosophySummary:
      "Harmoni sakral antara kesucian alas Kawung dan aroma harum cengkeh rempah lokal Trenggalek, menyimbolkan kerja keras dan nama baik.",
    description:
      "Batik Ceplok Kopi Pecah Alas Kawung Cengkeh merupakan perpaduan estetika yang sangat indah antara tradisi klasik keraton Mataram dan inovasi kearifan lokal Kabupaten Trenggalek, Jawa Timur. Secara sejarah, ragam hias Kawung telah ada sejak abad ke-13 dan menjadi motif geometris sakral khas keraton, yang kemudian terus bertransformasi lewat penambahan isen-isen bunga cengkeh serta kreasi motif Kopi Pecah buatan para pengrajin daerah untuk menonjolkan potensi komoditas lokal. Dari segi makna filosofis, kain ini mengandung nilai simbolis yang amat mendalam: latar alas Kawung Bunga Cengkeh melambangkan kesucian hati, keadilan, keharuman nama baik, dan keharapan akan kemakmuran hidup, sementara ceplokan Kopi Pecah menggambarkan semangat kerja keras, kegigihan, kebersamaan, serta daya tahan tinggi dalam menghadapi tantangan. Dari sisi kegunaan, keanggunan motifnya membuat kain batik ini sangat dinamis dan luwes untuk berbagai macam kebutuhan acara formal maupun semi-formal. Selain sangat anggun saat dikenakan dalam upacara adat tradisional, prosesi perkawinan, dan pertemuan resmi, batik ini kini banyak diolah menjadi busana formal pria, gaun pesta modern, seragam instansi, hingga cinderamata budaya berkelas yang membanggakan identitas daerah. Secara keseluruhan, batik ini mewakili keharmonisan antara keluhuran warisan leluhur dan kreativitas kontemporer Nusantara.",
    details: {
      technique: "Batik Tulis Kombinasi Ceplokan Trenggalek",
      material: "Katun Halus Sanforized",
      dye: "Pewarna Alam Daun & Kayu Rempah Lokal",
      dimensions: "220 cm × 102 cm",
      craftDuration: "5 Minggu Pengerjaan"
    },
    modelImages: [
      {
        url: "/Media/Mockup/Kawung Bunga Cengkeh_Model_P.jpg",
        title: "Model Wanita Trenggalek",
        caption: "Batik Khas Trenggalek Kawung Bunga Cengkeh"
      },
      {
        url: "/Media/Mockup/baju_L.jpg",
        title: "Formal Outfit Pria",
        caption: "Kemeja Motif Ceplok Kopi Pecah"
      }
    ]
  },
  {
    id: "bledak-bunga-bunga",
    name: "Bledak Bunga-Bunga",
    price: 450000,
    category: "Bledak",
    origin: "Desa Bledak, Sidoarjo, Jawa Timur",
    image: "/Media/Batik/Bledak Bunga-Bunga.jpg",
    bgImage: "/Media/Mockup/bledak_bunga-bunga_Hanger-BG.png",
    bentoImages: [
      "/Media/Mockup/bledak_bunga-bunga_Hanger.jpg",
      "/Media/Mockup/Bledak_Bunga-Bunga_Model_P.jpg",
      "/Media/Mockup/Galeri.png",
      "/Media/Mockup/Galeri.png"
    ],
    philosophySummary:
      "Hamparan flora mekar di atas dasar bledak terang, melambangkan kebersihan hati, keharuman silaturahmi, dan keberkahan hidup.",
    description:
      "Batik Bledak Bunga-bunga merupakan warisan seni kriya Nusantara berharga yang telah diproduksi sejak abad ke-18 dan berakar dari Desa Bledak, Kabupaten Sidoarjo, Jawa Timur. Sejarah mencatat bahwa kain ini awalnya digunakan masyarakat setempat untuk kebutuhan pakaian sehari-hari, kain panjang, dan kelengkapan upacara adat, sebelum akhirnya berkembang pesat menjadi komoditas dagang komersial yang diekspor ke Eropa serta Amerika Serikat pada dekade 1930-an dan diolah sebagai bahan pakaian sarong Belanda. Secara filosofis, motif ini menggabungkan latar belakang polos berwarna terang (bledak) yang melambangkan kesucian hati, ketulusan, dan kebersihan niat, dengan susunan aneka bunga mekar yang menyimbolkan keharmonisan, keharuman budi pekerti, serta keberkahan hidup. Tambahan ornamen satwa seperti burung atau kupu-kupu semakin memperkuat filosofi tentang keindahan transformasi dan kebebasan jiwa. Dari segi kegunaan, keanggunan motif flora yang dipadu latar bersih ini sangat luwes untuk berbagai keperluan; selain menjadi bagian penting dari tata cara adat dan padanan kebaya tradisional, batik ini kini sangat populer dimanfaatkan dalam fesyen kontemporer seperti perancangan kemeja formal, gaun pesta, seragam resmi, hingga cenderamata budaya eksklusif.",
    details: {
      technique: "Batik Tulis Bledakan Kontras Halus",
      material: "Katun Primissima Putih Gading Pilihan",
      dye: "Pewarna Sintetis Ramah Lingkungan & Fiksasi Alami",
      dimensions: "220 cm × 102 cm",
      craftDuration: "5 Minggu Pengerjaan"
    },
    modelImages: [
      {
        url: "/Media/Mockup/Bledak_Bunga-Bunga_Model_P.jpg",
        title: "Model Wanita Kasual",
        caption: "Gaun Kasual Motif Bledak Bunga-Bunga"
      },
      {
        url: "/Media/Mockup/Galeri.png",
        title: "Lookbook Kebaya Terang",
        caption: "Perpaduan Latar Terang Polos & Ornamen Flora"
      }
    ]
  },
  {
    id: "lapis-trenggalek",
    name: "Lapis",
    price: 450000,
    category: "Trenggalek Khas",
    origin: "Kabupaten Trenggalek, Jawa Timur",
    image: "/Media/Batik/Lapis.jpg",
    bgImage: "/Media/Mockup/Lapis_Hanger-BG.png",
    bentoImages: [
      "/Media/Mockup/Lapis_Hanger.jpg",
      "/Media/Mockup/Lapis_Model_P.jpg",
      "/Media/Mockup/Lapis_Model_L.jpg",
      "/Media/Mockup/Lapis_Baju_L.jpg"
    ],
    philosophySummary:
      "Garis-garis ritmis bergradasi melambangkan tingkatan laku hidup manusia, kesabaran dalam menempa diri, serta perlindungan spiritual.",
    description:
      "Batik Lapis khas Trenggalek merupakan perwujudan dari ketelitian tinggi para perajin lokal di pesisir selatan Jawa Timur. Motif bergaris lapis ini merepresentasikan filosofi undak-usuk atau tingkatan laku hidup manusia dalam mencapai kedewasaan dan kearifan sejati. Setiap guratan lilin malam ditarik dengan kesabaran luar biasa untuk menghasilkan kerapian garis geometris yang berpadu dengan kehangatan rona warna tanah khas perbukitan Trenggalek. Dalam tata adat Jawa, motif berlapis juga dimaknai sebagai tameng atau perlindungan berlapis terhadap marabahaya, serta simbol keteguhan hati dalam memegang prinsip hidup. Kehadirannya kini menjadi salah satu ikon kontemporer yang memperkaya khazanah batik Trenggalek bagi pecinta busana bernilai filosofi tinggi.",
    details: {
      technique: "Batik Tulis Garis Geometris Canting Halus",
      material: "Katun Mori Primissima Super",
      dye: "Pewarnaan Sogan Cokelat Kayu & Ekstrak Daun",
      dimensions: "230 cm × 102 cm",
      craftDuration: "4 – 5 Minggu Pengerjaan"
    },
    modelImages: [
      {
        url: "/Media/Mockup/Lapis_Model_P.jpg",
        title: "Model Wanita Trenggalek",
        caption: "Batik Lapis Trenggalek Busana Wanita Modern"
      },
      {
        url: "/Media/Mockup/Lapis_Model_L.jpg",
        title: "Model Pria Trenggalek",
        caption: "Kemeja Lapis Geometris Pesisir Selatan"
      }
    ]
  }
];

