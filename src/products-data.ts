export const SHOP_DATA = [
  {
    title: 'Clothing',
    items: [
      {
        id: 1,
        name: 'Crewneck White',
        price: 80.0,
        isOnSale: true,
        image:
          'https://onlyonceshop.com/media/pages/product/dieter-rams-the-complete-works/ec3b801ad8-1651866883/dieter-rams-complete-works-phaidon-375x507-q100.jpg',
        description: {
          desc1:
            '100% recycled cotton. Gender neutral. Preshrunk & ready to wear. Responsibly made from fabric to finish locally in our home of Los Angeles.',
          desc2:
            'This fleece is made entirely from cotton manufacturing waste. Ideal for layering.',
        },
        size: {
          type: ['length', 'chest', 'sleeve'],
          name: ['xs', 's', 'm', 'l', 'xl'],
          inch: {
            length: ['24', '25', '26', '27.5', '38'],
            chest: ['37', '41', '45', '49', '53'],
            sleeve: ['23.5', '24', '24.5', '25', '25.5'],
          },
          unit: {
            inch: '"',
          },
        },
      },
      {
        id: 2,
        name: 'Crewneck Black',
        price: 80.0,
        isOnSale: true,
        image:
          'https://onlyonceshop.com/media/pages/product/braun-abr-314-ft/a45cc8c3fa-1653255250/braun-alarm-clock-radio-abr-314-df-black-design-lubs-only-once-main-375x507-q100.jpg',

        description: {
          desc1:
            '100% recycled cotton. Gender neutral. Preshrunk & ready to wear. Responsibly made from fabric to finish locally in our home of Los Angeles.',
          desc2:
            'This fleece is made entirely from cotton manufacturing waste. Ideal for layering.',
        },
        size: {
          type: ['length', 'chest', 'sleeve'],
          name: ['xs', 's', 'm', 'l', 'xl'],
          inch: {
            length: ['24', '25', '26', '27.5', '38'],
            chest: ['37', '41', '45', '49', '53'],
            sleeve: ['23.5', '24', '24.5', '25', '25.5'],
          },
          unit: {
            inch: '"',
          },
        },
      },
      {
        id: 3,
        name: 'Long Sleeve',
        price: 45.0,
        isOnSale: true,
        image:
          'https://onlyonceshop.com/media/pages/product/braun-bc17-wall-clock/38df0b13b0-1652202137/braun-clock-wall-clock-black-design-375x507-q100.jpg',
        description: {
          desc1:
            '100% recycled cotton. Gender neutral. Preshrunk & ready to wear. Responsibly made from fabric to finish locally in our home of Los Angeles.',
          desc2:
            'This any-season wardrobe staple is gender neutral and errs on the side of easy when it comes to fit.',
        },
        size: {
          type: ['length', 'chest', 'sleeve', 'shoulders'],
          name: ['xs', 's', 'm', 'l', 'xl'],
          inch: {
            length: ['27', '28', '29', '30', '31'],
            chest: ['34', '38', '42', '46', '50'],
            sleeve: ['16.5', '18', '19', '20.5', '22'],
          },
          unit: {
            inch: '"',
          },
        },
      },
      {
        id: 4,
        name: 'Shorts',
        price: 45.0,
        isOnSale: true,
        image:
          'https://onlyonceshop.com/media/pages/product/braun-hld-4-hair-dryer/aa8bae8457-1650541407/braun-vintage-orange-hair-dryer-hld4-hld-4-only-once-shop-main-375x507-q100.jpg',

        description: {
          desc1:
            '100% recycled cotton. Gender neutral. Pre-shrunk & ready to wear. Comfort-minded shorts are modestly mid-thigh with an easy fit.',
        },
        size: {
          type: ['waist', 'length', 'leg opening'],
          name: ['xs', 's', 'm', 'l', 'xl'],
          inch: {
            length: ['24-31', '26-32', '28-34', '32-39', '31'],
            chest: ['13', '14', '15', '16', '17'],
            sleeve: ['10 7/8', '11 3/8', '11 7/8', '12 3/8', '12 7/8'],
          },
          unit: {
            inch: '"',
          },
        },
      },
    ],
  },
  {
    title: 'Accessories',
    items: [
      {
        id: 5,
        name: 'Big Tote',
        price: 35.0,
        isOnSale: true,
        image:
          'https://onlyonceshop.com/media/pages/product/braun-bc02-alarm-clock/f24613a30e-1651872022/bc02xb-main-375x507-q100.jpg',
        description: {
          desc1:
            'Fully biodegradable and responsibly made in South Los Angeles.',
        },
        size: {
          type: ['width', 'height', 'straps', 'gusset'],
          inch: ['24', '15', '13.5', '10" x 13'],
          unit: {
            inch: '"',
          },
        },
      },
      {
        id: 6,
        name: 'Open Water Bottle',
        price: 30.0,
        isOnSale: true,
        image:
          'https://onlyonceshop.com/media/pages/product/braun-et66-calculator/3a55e10407-1651480364/new-braun-et66-et-55-calculator-design-classic-dieter-rams-productdesign-apple-vintage-retro-only-once-shop-main-1408x-1408x-375x507-q100.jpg',
        description: {
          desc1:
            'This Open x Miir Wide Mouth 20oz Water Bottle keeps you hydrated during your practice & beyond.',
          desc2:
            "Featuring Miir's Thermo double wall vacuum insulation, the bottle keeps any beverage hot or cold for hours on end.",
        },
      },
    ],
  },
]

export default SHOP_DATA
