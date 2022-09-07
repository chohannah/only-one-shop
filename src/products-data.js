const SHOP_DATA = [
  {
    category: "Clothings",
    items: [
      {
        id: 1,
        name: "Crewneck White",
        price: 80.0,
        "is-on-sale": true,
        images: {
          img1: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/L1020172-Edit_1024x1024@2x.jpg?v=1661198169",
          img2: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/ScreenShot2021-09-02at11.56.44AM_1024x1024@2x.png?v=1661198169",
        },
        description: {
          desc1:
            "100% recycled cotton. Gender neutral. Preshrunk & ready to wear. Responsibly made from fabric to finish locally in our home of Los Angeles.",
          desc2:
            "This fleece is made entirely from cotton manufacturing waste. Ideal for layering.",
        },
        size: {
          type: ["length", "chest", "sleeve"],
          name: ["xs", "s", "m", "l", "xl"],
          inch: {
            length: ["24", "25", "26", "27.5", "38"],
            chest: ["37", "41", "45", "49", "53"],
            sleeve: ["23.5", "24", "24.5", "25", "25.5"],
          },
          unit: {
            inch: '"',
          },
        },
      },
      {
        id: 2,
        name: "Crewneck Black",
        price: 80.0,
        "is-on-sale": true,
        images: {
          img1: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/ScreenShot2021-09-02at10.56.06AM_1024x1024@2x.png?v=1643152916",
          img2: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/ScreenShot2021-09-02at11.51.27AM_1024x1024@2x.png?v=1643152916",
        },
        description: {
          desc1:
            "100% recycled cotton. Gender neutral. Preshrunk & ready to wear. Responsibly made from fabric to finish locally in our home of Los Angeles.",
          desc2:
            "This fleece is made entirely from cotton manufacturing waste. Ideal for layering.",
        },
        size: {
          type: ["length", "chest", "sleeve"],
          name: ["xs", "s", "m", "l", "xl"],
          inch: {
            length: ["24", "25", "26", "27.5", "38"],
            chest: ["37", "41", "45", "49", "53"],
            sleeve: ["23.5", "24", "24.5", "25", "25.5"],
          },
          unit: {
            inch: '"',
          },
        },
      },
      {
        id: 3,
        name: "Long Sleeve",
        price: 45.0,
        "is-on-sale": true,
        images: {
          img1: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/D32A9823-Edit_1024x1024@2x.jpg?v=1661199556",
          img2: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/D32A9862_1024x1024@2x.jpg?v=1661199556",
          img3: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/ToastShirtSleeve_1024x1024@2x.jpg?v=1661199545",
          img4: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/ToastShirt_1024x1024@2x.jpg?v=1661199545",
        },
        description: {
          desc1:
            "100% recycled cotton. Gender neutral. Preshrunk & ready to wear. Responsibly made from fabric to finish locally in our home of Los Angeles.",
          desc2:
            "This any-season wardrobe staple is gender neutral and errs on the side of easy when it comes to fit.",
        },
        size: {
          type: ["length", "chest", "sleeve", "shoulders"],
          name: ["xs", "s", "m", "l", "xl"],
          inch: {
            length: ["27", "28", "29", "30", "31"],
            chest: ["34", "38", "42", "46", "50"],
            sleeve: ["16.5", "18", "19", "20.5", "22"],
          },
          unit: {
            inch: '"',
          },
        },
      },
      {
        id: 4,
        name: "Shorts",
        price: 45.0,
        "is-on-sale": true,
        images: {
          img1: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/D32A0921_1024x1024@2x.jpg?v=1661199773",
          img2: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/ScreenShot2021-09-02at10.36.11AM_1024x1024@2x.png?v=1661199935",
          img3: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/D32A9781_1024x1024@2x.jpg?v=1661199935",
        },
        description: {
          desc1:
            "100% recycled cotton. Gender neutral. Pre-shrunk & ready to wear. Comfort-minded shorts are modestly mid-thigh with an easy fit.",
        },
        size: {
          type: ["waist", "length", "leg opening"],
          name: ["xs", "s", "m", "l", "xl"],
          inch: {
            length: ["24-31", "26-32", "28-34", "32-39", "31"],
            chest: ["13", "14", "15", "16", "17"],
            sleeve: ["10 7/8", "11 3/8", "11 7/8", "12 3/8", "12 7/8"],
          },
          unit: {
            inch: '"',
          },
        },
      },
    ],
  },
  {
    cetagory: "Accessories",
    items: [
      {
        id: 5,
        name: "Big Tote",
        price: 35.0,
        "is-on-sale": true,
        images: {
          img1: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/Resized1_1080x.png?v=1645672886",
          img2: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/DSC05547_1_1296x.jpg?v=1645672886",
        },
        description: {
          desc1:
            "Fully biodegradable and responsibly made in South Los Angeles.",
        },
        size: {
          type: ["width", "height", "straps", "gusset"],
          inch: ["24", "15", "13.5", '10" x 13'],
          unit: {
            inch: '"',
          },
        },
      },
      {
        id: 6,
        name: "Open Water Bottle",
        price: 30.0,
        "is-on-sale": true,
        images: {
          img1: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/ScreenShot2021-09-02at11.48.34AM_1024x1024@2x.png?v=1643152828",
          img2: "https://cdn.shopify.com/s/files/1/0567/9690/5677/products/ScreenShot2021-09-02at12.02.43PM_1024x1024@2x.png?v=1643152828",
        },
        description: {
          desc1:
            "This Open x Miir Wide Mouth 20oz Water Bottle keeps you hydrated during your practice & beyond.",
          desc2:
            "Featuring Miir's Thermo double wall vacuum insulation, the bottle keeps any beverage hot or cold for hours on end.",
        },
      },
    ],
  },
];

export default SHOP_DATA;
