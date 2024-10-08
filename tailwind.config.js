

  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    width: {
      'laptop': '1024px',
      '100':'100%'
    },
    colors: {
      'p-blue': '#5E3BEE',
      'p-red': '#E62872',
      'p-white': '#FFF',
      'p-transparent':' transparent',
      'banner_bg':'#F5FCFF',
      'p-sky':'#F5FCFF',
      'review_card_b':'#006B6A'
    },
    fontFamily:{
      'robo' : "Roboto",
    },
    backgroundImage: {
      
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'mb': '430px',
      // => @media (min-width: 1536px) { ... }
    },
    boxShadow: {
      'box_shadow': ' 0px 5.33px 16px 0px #00000026',
      'box_shadow_0': '0px,0px,0px,0px '

    }

 
  },
  plugins: [],
}
