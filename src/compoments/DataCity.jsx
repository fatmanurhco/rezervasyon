const dataCity = [
  {
    il: "Nereye gitmek istiyorsunuz?",
    plaka: 0,
  },
    {
      il: "Adana",
      plaka: 1,
    },
    {
      il: "Adıyaman",
      plaka: 2,
    },
    {
      il: "Afyonkarahisar",
      plaka: 3,
    },
    {
      il: "Ağrı",
      plaka: 4,
    },
    {
      il: "Amasya",
      plaka: 5,
    },
    {
      il: "Ankara",
      plaka: 6,
    },
    {
      il: "Antalya",
      plaka: 7,
    },
    {
      il: "Artvin",
      plaka: 8,
    },
    {
      il: "Aydın",
      plaka: 9,
    },
    {
      il: "Balıkesir",
      plaka: 10,
    },
    {
      il: "Bilecik",
      plaka: 11,
    },
    {
      il: "Bingöl",
      plaka: 12,
    },
    {
      il: "Bitlis",
      plaka: 13,
    },
    {
      il: "Bolu",
      plaka: 14,
    },
    {
      il: "Burdur",
      plaka: 15,
    },
    {
      il: "Bursa",
      plaka: 16,
    },
    {
      il: "Çanakkale",
      plaka: 17,
    },
    {
      il: "Çankırı",
      plaka: 18,
    },
    {
      il: "Çorum",
      plaka: 19,
    },
    {
      il: "Denizli",
      plaka: 20,
    },
    {
      il: "Diyarbakır",
      plaka: 21,
    },
    {
      il: "Edirne",
      plaka: 22,
    },
    {
      il: "Elazığ",
      plaka: 23,
    },
    {
      il: "Erzincan",
      plaka: 24,
    },
    {
      il: "Erzurum",
      plaka: 25,
    },
    {
      il: "Eskişehir",
      plaka: 26,
    },
    {
      il: "Gaziantep",
      plaka: 27,
    },
    {
      il: "Giresun",
      plaka: 28,
    },
    {
      il: "Gümüşhane",
      plaka: 29,
    },
    {
      il: "Hakkari",
      plaka: 30,
    },
    {
      il: "Hatay",
      plaka: 31,
    },
    {
      il: "Isparta",
      plaka: 32,
    },
    {
      il: "Mersin",
      plaka: 33,
    },
    {
      il: "İstanbul",
      plaka: 34,
    },
    {
      il: "İzmir",
      plaka: 35,
    },
    {
      il: "Kars",
      plaka: 36,
    },
    {
      il: "Kastamonu",
      plaka: 37,
    },
    {
      il: "Kayseri",
      plaka: 38,
    },
    {
      il: "Kırklareli",
      plaka: 39,
    },
    {
      il: "Kırşehir",
      plaka: 40,
    },
    {
      il: "Kocaeli",
      plaka: 41,
    },
    {
      il: "Konya",
      plaka: 42,
    },
    {
      il: "Kütahya",
      plaka: 43,
    },
    {
      il: "Malatya",
      plaka: 44,
    },
    {
      il: "Manisa",
      plaka: 45,
    },
    {
      il: "Kahramanmaraş",
      plaka: 46,
    },
    {
      il: "Mardin",
      plaka: 47,
    },
    {
      il: "Muğla",
      plaka: 48,
    },
    {
      il: "Muş",
      plaka: 49,
    },
    {
      il: "Nevşehir",
      plaka: 50,
    },
    {
      il: "Niğde",
      plaka: 51,
    },
    {
      il: "Ordu",
      plaka: 52,
    },
    {
      il: "Rize",
      plaka: 53,
    },
    {
      il: "Sakarya",
      plaka: 54,
    },
    {
      il: "Samsun",
      plaka: 55,
    },
    {
      il: "Siirt",
      plaka: 56,
    },
    {
      il: "Sinop",
      plaka: 57,
    },
    {
      il: "Sivas",
      plaka: 58,
    },
    {
      il: "Tekirdağ",
      plaka: 59,
    },
    {
      il: "Tokat",
      plaka: 60,
    },
    {
      il: "Trabzon",
      plaka: 61,
    },
    {
      il: "Tunceli",
      plaka: 62,
    },
    {
      il: "Şanlıurfa",
      plaka: 63,
    },
    {
      il: "Uşak",
      plaka: 64,
    },
    {
      il: "Van",
      plaka: 65,
    },
    {
      il: "Yozgat",
      plaka: 66,
    },
    {
      il: "Zonguldak",
      plaka: 67,
    },
    {
      il: "Aksaray",
      plaka: 68,
    },
    {
      il: "Bayburt",
      plaka: 69,
    },
    {
      il: "Karaman",
      plaka: 70,
    },
    {
      il: "Kırıkkale",
      plaka: 71,
    },
    {
      il: "Batman",
      plaka: 72,
    },
    {
      il: "Şırnak",
      plaka: 73,
    },
    {
      il: "Bartın",
      plaka: 74,
    },
    {
      il: "Ardahan",
      plaka: 75,
    },
    {
      il: "Iğdır",
      plaka: 76,
    },
    {
      il: "Yalova",
      plaka: 77,
    },
    {
      il: "Karabük",
      plaka: 78,
    },
    {
      il: "Kilis",
      plaka: 79,
    },
    {
      il: "Osmaniye",
      plaka: 80,
    },
    {
      il: "Düzce",
      plaka: 81,
    },
  ];
  

  const destinations = [
    {
      id:1,
      img: '/destinations/kaş.jpg',
      content:"Kaş",
      
    },
    {
      id:2,
      img:'/destinations/ankara.jpg',
      content:"Ankara",
      
    },
    {
      id:3,
      img:'/destinations/antep.jpg',
      content:"Gaziantep",
      
    },
    {
      id:4,
      img:'/destinations/istanbul.jpg',
      content:"İstanbul",
      
    },
    {
      id:5,
      img:'/destinations/izmir.jpg',
      content:"İzmir",
      
    },
    {
      id:6,
      img:'/destinations/mardin.jpg',
      content:"Mardin"
      
    },
    {
      id:7,
      img:'/destinations/trabzon.jpg',
      content:"Trabzon",
      
    },


  ]
  const destinationflight = [
    {
      id:1,
      img: '/destinations/kaş.jpg',
      content:"Kaş",
      
    },
    {
      id:2,
      img:'/destinations/ankara.jpg',
      content:"Ankara",
      
    },
    {
      id:3,
      img:'/destinations/antep.jpg',
      content:"Gaziantep",
      
    },
    {
      id:4,
      img:'/destinations/istanbul.jpg',
      content:"İstanbul",
      
    },
    {
      id:5,
      img:'/destinations/izmir.jpg',
      content:"İzmir",
      
    },
    {
      id:6,
      img:'/destinations/trabzon.jpg',
      content:"Trabzon",
      
    },


  ]
  const dataAraba = [
    {
      araba: "Ferrari",
      id: 1,
    },
      {
        araba: "BMW",
        id: 2,
      },
      {
        araba: "Audi",
        id: 3,
      },
      {
        araba: "Honda",
        id: 4,
      },
      {
        araba: "Suzuki",
        id: 5,
      },
    ]

  export default { dataCity , destinations , dataAraba};