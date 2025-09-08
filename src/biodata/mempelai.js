const data = {
  musik: "musik/nikah.mp3",
  foto_cover: "",
  foto_opening: "img/pengantin.png",
  mempelai: {
    pria: {
      nama_panggilan: "Febri",
      nama_lengkap: "Febriyan Andi Lesmana",
      anak_ke: "Pertama",
      orang_tua: {
        ayah: "Bp. Sunarmo",
        ibu: "Ibu Istiyanti",
      },
      alamat: "Wonogiri",
      foto: "img/pria.png",
      insta: "https://www.instagram.com/febrii.me",
    },
    wanita: {
      nama_panggilan: "Umi",
      nama_lengkap: "Umi Hana Rohani",
      anak_ke: "Ketiga",
      orang_tua: {
        ayah: "Bp. Sunardi",
        ibu: "Ibu Sutinem",
      },
      alamat: "Wonogiri",
      foto: "img/wanita.png",
      insta: "https://www.instagram.com/umi_hana2707",
    },
  },
  acara: {
    akad_nikah: {
      hari: "Kamis",
      tanggal: "16 Oktober 2025",
      waktu: "08:00 WIB",
      tempat: "Batang Rt 01/ Rw 03 Ngarjosari Tirtomoyo Wonogiri",
    },
    resepsi: {
      hari: "Kamis",
      tanggal: "16 Oktober 2025",
      waktu: "10:00 WIB - Selesai",
      tempat: "Batang Rt 01/ Rw 03 Ngarjosari Tirtomoyo Wonogiri",
    },
  },
  lokasi: {
    tempat: "Batang Rt 01/ Rw 03 Ngarjosari Tirtomoyo Wonogiri",
    maps_link: "https://maps.app.goo.gl/judK31cmSGhk7d266",
    maps_embed:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.510220132027!2d111.04043957500667!3d-7.946108292078148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnNDYuMCJTIDExMcKwMDInMzQuOSJF!5e0!3m2!1sen!2sid!4v1757326863280!5m2!1sen!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  galeri: [
    { cols: 4, foto: "img/galeri/1.jpeg" },
    {
      cols: 8,
      foto: "img/galeri/2.jpeg",
      children: [
        { cols: 12, foto: "img/galeri/3.jpg" },
        { cols: 12, foto: "img/galeri/4.png" },
      ],
    },
    { cols: 6, foto: "img/galeri/5.webp" },
    { cols: 7, foto: "img/galeri/6.webp" },
    { cols: 5, foto: "img/galeri/7.jpg" },
    { cols: 6, foto: "img/galeri/8.jpg" },
    { cols: 6, foto: "img/wanita.webp" },
  ],
  hadiah: {
    bank: [
      {
        nama: "bri",
        atas_nama: "Umi Hana Rohani",
        norek: "695701052996535",
      },
    ],
    ewallet: [],
    alamat: "Batang Rt 01/ Rw 03 Ngarjosari Tirtomoyo Wonogiri",
  },
};

export default data;
