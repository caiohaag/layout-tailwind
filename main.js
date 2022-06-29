tailwind.config = {
  theme: {
    extend: {
      colors: {
        black: "#171a21",
        gray: '#b8b6b4',
        graystart: '#575860',
        grayend: '#2C2D34',
        dark: {
          bg: '#1b2837',
          card: '#16202c',
          hover: '#101821',
        }
      },
      transitionProperty: {
        'left': 'left',   
        'bottom': 'bottom',       
      }, 
      boxShadow: {
        '2xl': '5px 5px 2px 1px rgba(0,0,0,0.35)',        
      },     
      dropShadow: {
        '3xl': '0 2px 4px rgba(0,0,0,0.50)'
      },
    },
  },
};

$('#menu-toggler, .overlay').click(e => {
  $('#menu').toggleClass('!left-0')
  $('.overlay').fadeToggle()
})