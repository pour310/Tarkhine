/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#417F56",
        shadeOne: "#396F4B",
        shadeTwo: "#315F41",
        shadeThree: "#294F36",
        shadeFure: "#21402B",
        shadeFive: "#183020",
        shadeSix: "#102016",
        shadeSeven: "#08100B",
        tint1: "#E5F2E9",
        tint2: "#CAE4D3",
        tint3: "#B0D7BD",
        tint4: "#96C9A7",
        tint5: "#7CBC91",
        tint6: "#61AE7B",
        tint7: "#4E9968",
        tint8: "#417F56",
        white: "#FFFFFF",
        black: "#000000",
        gray1: "#F9F9F9",
        gray2: "#E1E1E1",
        gray3: "#EDEDED",
        gray4: "#CBCBCB",
        gray5: "#ADADAD",
        gray6: "#757575",
        gray7: "#717171",
        gray8: "#353535",
        Success: "#00966D",
        SuccessLight: "#00BA88",
        Error: "#C30000",
        ErrorLight: "#ED2E2E",
        Warning: "#A9791C",
        WarningLight: "#F4B740",
      },

      fontFamily: {
        "Estedad-Black": "Estedad-Black",
        "Estedad-Bold": "Estedad-Bold",
        "Estedad-ExtraBold": "Estedad-ExtraBold",
        "Estedad-ExtraLight": "Estedad-ExtraLight",
        "Estedad-Light": "Estedad-Light",
        "Estedad-Medium": "Estedad-Medium",
        "Estedad-Regular": "Estedad-Regular",
        "Estedad-SemiBold": "Estedad-SemiBold",
        "Estedad-Thin": "Estedad-Thin",
      },
      backgroundImage: {
        'foodInfo': "url('/assets/image/Introduction.png')",
        'footerImage': "url('/assets/image/Footer.png')",
      },
      keyframes :{
        slidImage :{
          "from":{transform: 'translate(300px, 0)'},
          "to":{transform: 'translate(0, 0)'},
        }
      }
    },
  },
  plugins: [],
}

