export const dishes = [
    {
      id: 1,
      category: "Appetizers",
      ar: "أبيتايزيس",
      icon:"GiFrenchFries",
      dishes: [
        {
          dishId: "app01",
          dish: "Le Waks Lava Shrimps (8pcs)",
          ar: "لى واكس روبيان الفا ( ٨حبات )",
          image: "/images/6S4A2944.JPG",
          price: "26",
          ar_pr: "س. ر  ٢٦",
          // desc: "description",
          // new: 1,
          // spcl: 1,
          cal: 290
        },
        {
          dishId: "app02",
          dish: "Le Waks Chicken Wing (5pcs)",
          ar: "لى واكس جناحي الدجاج ( ٥ حبات )",
          image: "/images/6S4A3025.JPG",
          price: "16",
          ar_pr: "س. ر ١٦",
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 240
        },
        {
          dishId: "app03",
          dish: "Le Waks Popcorn Chicken W/Dynamite Sauce",
          ar: "لى واكس دجاج الفشار صلصة ديناميتس ",
          image: "/images/6S4A2956.JPG",
          price: "14",
          ar_pr: "س. ر ١٤",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 565
        },
        {
          dishId: "app04",
          dish: "Le Waks Popcorn Shrimp W/Sweet Spicy Mayo",
          ar: "لى واكس روبيان الفشار صلصة الحلو ",
          image: "/images/6S4A2958.JPG",
          price: "18",
          ar_pr: "س. ر ١٨",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 565
        },
        {
          dishId: "app05",
          dish: "Le Waks French Fries",
          ar: "بطاطس طازجه",
          image: "/images/French_Fries.jpeg",
          price: "10",
          ar_pr: "س. ر ١٠",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 230
        },    
        {
          dishId: "app06",
          dish: "Le Waks Truffle Fries",
          ar: " لي واكس بطاطس طازج مع صلصه ترافل",
          image: "/images/6S4A2980.JPG",
          price: "14",
          ar_pr: "س. ر ١٤",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 455
        },    
        {
          dishId: "app07",
          dish: "Le Waks Signature Fries",
          ar: "لي واكس بطاطس خاص طازج مع لحم",
          image: "/images/6S4A3168.JPG",
          price: "18",
          ar_pr: "س. ر ١٨",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 675
        }
      ]
    },
    {
      id: 2,
      category: "Burgers",
      ar: "برجر",
      icon:"FaHamburger",
      dishes: [
        {
          dishId: "burg01",
          dish: "Le Waks Beef Burger",
          ar: "لي واكس برجر بقري ",
          image: "/images/6S4A3018.JPG",
          price: "25",
          ar_pr: "س. ر ٢٥",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 255,
          ingredients: ["White Bun", " Spicy Mayo", " Mustard Mayo", " Lollo Biondo", " Pickled Cucumber", " Beef Patty"],
          ar_ing: ["خبز  ابيض ", "مايونيز حار ", "خردل ", "خص اخضر ", "خيار مخلل ", "لحم بقري "]
        },
        {
          dishId: "burg02",
          dish: "Le Waks Mushroom Beef Burger",
          ar: "لي واكس مشروم برجر بقري ",
          image: "/images/6S4A3010.JPG",
          price: "28",
          ar_pr: "س. ر ٢٨",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 819,
          ingredients: ["Black Bun", " Truffle Mayo", " Spicy Mayo", " Lollo Biondo", " Mushroom Sauce", " Beef Patty Mix"],
          ar_ing: ["خبز اسود ", "صوص ترافل ", "مايونيز حار ", "خص اخضر ", "صوص المشروم ", "لحم بقري "]
        },
        {
          dishId: "burg03",
          dish: "Le Waks Philadelphia Beef Burger",
          ar: "لي واكس فيال دلفيا برجر بقري ",
          image: "/images/6S4A2996.JPG",
          price: "26",
          ar_pr: "س. ر ٢٦",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 257,
          ingredients: ["Black Bun", " Sweet Spicy Mayo", " Caramelized Onion", " Spicy Mayo", " Lollo Biondo", " Beef Patty Mix"],
          ar_ing: ["خبز اسود ", "صوص مايونيزحلو ", "بصل مكرمل ", "مايونيز حار ", "خص اخضر ", "لحم بقري "]
        },
        {
          dishId: "burg04",
          dish: "Le Waks Chicken Burger (Grilled)",
          ar: "لي واكس دجاج برجر مشوى ",
          image: "/images/6S4A3078.JPG",
          price: "25",
          ar_pr: "س. ر ٢٥",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 425,
          ingredients: ["White Bun", " Spice Mayo", " Mustard Mayo", " Pickled Cucumber", " Pickled Jalapeno", " Lollo Biondo"],
          ar_ing: ["خبز ابيض ", "مايونيز حار ", "خردل ", "خيار مخلل ", "هليبينو ", "خص اخضر "]
        },
        {
          dishId: "burg05",
          dish: "Le Waks Spicy Chicken Burger (Zinger)",
          ar: "ليى واكس دجاج برج - حار ( زنجر )",
          image: "/images/6S4A3060.JPG",
          price: "24",
          ar_pr: "س. ر ٢٤",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 485,
          ingredients: ["White Bun", " Spicy Mayo", " Mustard Mayo", " Pickled Cucumber", " Lollo Biondo"],
          ar_ing: ["خبزابيض ", "مايونيز حار ", "خردل ", "خيار مخلل ", "خص اخر "]
        },
        {
          dishId: "burg06",
          dish: "Le Waks Beef Slider (2pcs)",
          ar: "ليى واكس ساليدار بقري ( حبتين )",
          image: "/images/6S4A3099.JPG",
          price: "20",
          ar_pr: "س. ر ٢٠",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 414,
          ingredients: ["Red and White Bun", " Spicy Mayo", " Mustard Mayo", " Ketchup", " Lollo Biondo", " Pickled Cucumber"],
          ar_ing: ["خبز احمر وابيض ", "ماينوز حار ", "خردل ", "كاتشب ", "خص اخضر ", "خيار مخلل "]
        },
        {
          dishId: "burg07",
          dish: "Le Waks Chicken Slider (2pcs) W/Fries",
          ar: "لي واكس تشيكن ساليدار ( حبتين ) فرايس",
          image: "/images/6S4A3044.JPG",
          price: "18",
          ar_pr: "س. ر ١٨",
          // desc: "description",
          // new: 0,
          // spcl: 1,
          cal: 315,
          ingredients: ["Red and White Burger", " Spicy Mayo", " Musrad Mayo", " Ketchup", " Lollo Biondo", " Pickled Cucumber", " Pickled Jalapeno"],
          ar_ing: ["خبز احمر وابيض ", "ماينوز حار ", "خردل ", "كاتشب ", "خص اخضر ", "خيار مخلل ", "هليبينو "]
        },
      ]
    },
    {
      id: 3,
      category: "Fried",
      ar: "فرايد ( المقلية )",
      icon:"GiChickenOven",
      dishes: [
        {
          dishId: "fried01",
          dish: "Chicken Broasted Normal or Spicy W/Fries",
          ar: "دجاج برسوتد عادى / وحراق (٤حبات ) فرايس",
          image: "/images/6S4A3083.JPG",
          price: "18",
          ar_pr: "س. ر ١٨",
          // desc: "description",
          // new: 0,
          // spcl: 0,
          cal: 1237
        },
        {
          dishId: "fried02",
          dish: "Fish and Chips",
          image: "/images/6S4A3122.JPG",
          ar: "سمك هامور وبطاطس ",
          price: "25",
          ar_pr: "س. ر ٢٥",
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 225
        },
      ]
    },
    {
      id: 4,
      category: "Add Ons",
      ar: "مشروبات",
      icon:"GiSaucepan",
      dishes: [
        {
          dishId: "add01",
          dish: "Jalapeno",
          image: "/images/Jalapeno.jpeg",
          ar: "جاالبينو ",
          price: "1",
          ar_pr: "س. ر ١    ",          
          // desc: "description",
          // new: 0,
          // spcl: 0,
          cal: 28
        },
        {
          dishId: "add02",
          dish: "Cheese",
          image: "/images/Cheese.jpg",
          ar: "جبن ",
          price: "3",

          ar_pr: "س. ر  ٣   ",          
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 113
        },
        {
          dishId: "add03",
          dish: "Beef Patty (Single)",
          image: "/images/Beef_Patty.jpg",
          ar: "بقري باتي ( مفرد)   ",
          price: "7",

          ar_pr: "س. ر ٧ ",          
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 247
        },
        {
          dishId: "add04",
          dish: "Special Sauce",
          image: "/images/Special_Sauce.webp",
          ar: " صلصة خاص   ",
          price: "4",

          ar_pr: "س. ر  ٤",          
            // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 11
        },
        {
          dishId: "add05",
          dish: "Caramelized Onion",
          image: "/images/Onions.jpeg",
          ar: "البصل المكرمل   ",
          price: "3",

          ar_pr: "س. ر ٣  ",          
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 40
        },
      ]
    },
    {
      id: 5,
      category: "Drinks",
      ar: "اود وانس",
      icon:"BiDrink",
      dishes: [
        {
          dishId: "drink01",
          dish: "Blue Mojito",
          ar: "موجيتو األزرق",
          image: "/images/blue-mojito.jpeg",
          price: "13",
          ar_pr: "س. ر ١٣",
          // desc: "description",
          // new: 0,
          // spcl: 0,
          cal: 98
        },
        {
          dishId: "drink02",
          dish: "Strawberry Mojito",
          ar: "ستوبري موجيتو ( فراولة )",
          image: "/images/strawberry-mojito.jpeg",
          price: "13",
          ar_pr: "س. ر ١٣",
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 122
        },
        {
          dishId: "drink03",
          dish: "Passion fruit Mojito",
          ar: "موجيتو باشين فروت ",
          image: "/images/passion-fruit-mojito.jpeg",
          price: "13",
          ar_pr: "س. ر ١٣",
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 77
        },
        {
          dishId: "drink04",
          dish: "Fresh Orange Juice",
          ar: "عصير طازج برتقال",
          image: "/images/orange-juice.jpeg",
          price: "10",
          ar_pr: "س. ر ١٠   ",
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 130
        },
        {
          dishId: "drink05",
          dish: "Peach Ice Tea",
          ar: "شاي كوخ المبرد",
          image: "/images/peach-ice-tea.png",
          price: "13",
          ar_pr: "س. ر ١٣",
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 56
        },
        {
          dishId: "drink06",
          dish: "Soft Drinks",
          ar: "المشروبات الغازية",
          image: "/images/Pepsi_Cup.png",
          price: "5",

          ar_pr: "س. ر ٥  ",          
          // desc: "description",
          // new: 1,
          // spcl: 0,
          cal: 41
        },
      ]
    },
  ];