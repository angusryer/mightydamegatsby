const { colors } = require("./src/theme")

module.exports = {
  purge: ["./src/**/*.js", "./src/**/**/*.js"],
  theme: {
    backgroundImage: {
      hero: "url('../images/hero.jpg')",
      point1: "url('../images/point1.jpg')",
      point2: "url('../images/point2.jpg')",
      point3: "url('../images/point3.jpg')",
      point4: "url('../images/point4.jpg')",
      point5: "url('../images/point5.jpg')",
      point16: "url('../images/point6.jpg')",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      light: colors.light,
      dark: colors.dark,
      red: colors.red,
      orange: colors.orange,
      violet: colors.violet,
      green: colors.green,
    },
    fontFamily: {
      gagalin: ["gagalin"],
      cardo: ["cardo"],
      vibes: ["vibes"],
      scheherazade: ["scheherazade"],
    },
    extend: {
      screens: {
        xxs: "280px",
        xs: "320px",
        snav: "347px",
        nav: "850px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      width: {
        28: "7rem",
        38: "10rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        "flex-half": "calc((100%/2) - 15px)",
        "flex-fourth": "calc((100% / 4) - 20px)",
      },
      inset: {
        flexiblemargin: "calc((100vw - 1420px) / 2)",
        100: "100px",
        200: "200px",
        250: "250px",
        300: "300px",
        400: "400px",
        20: "20px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        45: "45px",
        46: "46px",
        47: "47px",
        48: "48px",
        49: "49px",
        50: "50px",
        55: "55px",
        60: "60px",
      },
      height: {
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        fw: "1440px",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        fw: "1440px",
      },
      fontSize: {
        xxs: ".6rem",
        xs: ".8rem",
      },
      padding: {
        ".5": ".125rem",
      },
      maxWidth: {
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        fw: "1440px",
      },
      maxHeight: {
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        fw: "1440px",
      },
      zIndex: {
        "-2": "-2",
        "-4": "-4",
        "-6": "-6",
        "-12": "-12",
      },
      textColor: {
        primary: colors.dark,
      },
    },
  },
  variants: {},
  plugins: [],
}
