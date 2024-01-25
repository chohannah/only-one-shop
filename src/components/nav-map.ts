export type NavMap = {
  mainMenuName: {
    [key: string]: string
  }
  subMenuName: { [key: string]: string }
  navMenu: {
    products: {
      [key: string]: string
    }
    magazine: {
      [key: string]: string
    }
    sideProducts: {
      [key: string]: string
    }
    sideMagazine: {
      [key: string]: string
    }
  }
}

export const navMap: NavMap = {
  mainMenuName: {
    products: 'Products',
    magazine: 'Magazine',
  },
  subMenuName: {
    'about-us': 'About us',
    magazine: 'Magazine',
    'contact-us': 'Contact us',
    shipping: 'Shipping',
    'legal-notice': 'Legal notice',
    'privacy-policy': 'Privacy policy',
    terms: 'Terms & C.',
  },
  navMenu: {
    products: {
      // 'all': 'All',
      lighting: 'Lighting',
      electronic: 'Electronic',
      audio: 'Audio',
      clocks: 'Clocks',
      home: 'Home',
      // lifestyle: 'Lifestyle',
      // sold: 'Sold',
    },
    magazine: {
      // 'all': 'All',
      lifestyle: 'Lifestyle',
      history: 'History',
      design: 'Design',
      products: 'Products',
      people: 'People',
      automotive: 'Automotive',
    },
    sideProducts: {
      bauhaus: 'Bauhaus Collections',
      braun: 'Braun Collections',
    },
    sideMagazine: {
      'vintage-land-rovers': 'Vintage Land Rovers in style',
      designers: 'Designers',
    },
  },
}
