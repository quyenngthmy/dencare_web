const { white } = require("tailwindcss/colors");
const defaultColors = require("tailwindcss/colors");
const COLORS = {
  overlay: "#131D26",
  success: {
    100: "#EAFBD6",
    200: "#D0F8AE",
    300: "#ABEA82",
    400: "#53BC31",
    500: "#008E39",
  },
  info: {
    100: "#D6E9FE",
    200: "#ADD1FE",
    300: "#84B5FC",
    400: "#3476F8",
    500: "#265AD5",
  },
  warning: {
    100: "#FFF9D9",
    200: "#FFF1B4",
    300: "#FFE68F",
    400: "#FFCB44",
    500: "#DBA632",
  },
  error: {
    100: "#FFD9CF",
    200: "#FFAAA0",
    300: "#FF7370",
    400: "#FF123A",
    500: "#DB0D43",
  },
  primary: {
    1: "#1976D2",
    2: "#1565C0",
    3: "#64B5F6",
    4: '#E3F2FD',
    5: '#F5FAFD',
  },
  secondary: {
    1: "#1A6DE3",
    2: "#0051CD",
  },
  tertiary: {
    1: "#F59E0B",
    2: "#FCD34D",
  },
  accent: {
    1: "#FA6C1D",
    2: "#84CC15",
    //không còn sử dụng từ bản 1.3.0
    3: "#F33240",
    4: "#FF8900",
    5: "#FFC400",
    6: "#28A745",
    7: "#00875A",
    8: "#0C9AB2",
    9: "#2684FF",
    10: "#034A93",
    11: "#5243AA",
    12: "#42526E",
  },
  gradient: {
    1: {
      start: "#28A745",
      // mid:'',
      end: "#52BF50",
    },
    2: {
      start: "#0051CD",
      // mid:'',
      end: "#3E89FC",
    },
  },
  text: {
    1: "#2C333A",
    2: "#6B7280",
    3: "#929DAA",
    4: "#D2D8E0",
  },
  border: {
    1: "#E2E7ED",
    2: "#F2F4F7",
  },
  // Transparent: {
  //   1: "#E2E7ED",
  //   2: "#F2F4F7",
  //   3: "#F2F4F7",
  // },
  neutral: {
    1: {
      50: "#DDE2E9",
      100: "#D2D8E0",
      200: "#CDD3DB",
      300: "#A1ACB8",
      400: "#929DAA",
      500: "#858F9B",
      600: "#6B7280",
      700: "#5A6271",
      800: "#424752",
      900: "#2C333A",
    },
    2: {
      50: "#F2F4F7",
      100: "#E9EDF2",
      200: "#E2E7ED",
      300: "#DAE0E6",
    },
    3: {
      50: "#F8F9FB",
      100: "#F0F1F3",
      200: "#EBEDEF",
      300: "#E3E6E9",
    },
  },
  base: {
    red: {
      50: "#FFF1F0",
      100: "#FFD2CF",
      200: "#FFA9A6",
      300: "#FF7D7D",
      400: "#F75257",
      500: "#EA2733",
      600: "#C41829",
      700: "#9E0B1F",
      800: "#780216",
      900: "#520111",
    },
    orange: {
      50: "#FFF5EB",
      100: "#FFDFC2",
      200: "#FFC799",
      300: "#FFAC70",
      400: "#FF8E47",
      500: "#FA6C1D",
      600: "#D44D0F",
      700: "#AD3403",
      800: "#872200",
      900: "#611500",
    },
    amber: {
      50: "#FFFBE6",
      100: "#FFF1B8",
      200: "#FFE58F",
      300: "#FFD666",
      400: "#FFC53D",
      500: "#FAAD14",
      600: "#D48806",
      700: "#AD6800",
      800: "#874D00",
      900: "#613400",
    },
    yellow: {
      50: "#FEFFE0",
      100: "#FFFFB8",
      200: "#FFFB8F",
      300: "#FFF566",
      400: "#FFEC3C",
      500: "#FADB15",
      600: "#D4B108",
      700: "#AD8B02",
      800: "#876801",
      900: "#614700",
    },
    lime: {
      50: "#F9FFE6",
      100: "#EDFFBD",
      200: "#D4F28D",
      300: "#B9E660",
      400: "#9ED938",
      500: "#84CC15",
      600: "#62A608",
      700: "#448000",
      800: "#2D5900",
      900: "#183300",
    },
    green: {
      50: "#E3F0E1",
      100: "#CFE3CC",
      200: "#A2D69F",
      300: "#78C975",
      400: "#4FBD4F",
      500: "#2EB032",
      600: "#1D8A24",
      700: "#106318",
      800: "#073D0E",
      900: "#021706",
    },
    teal: {
      50: "#E1F7F1",
      100: "#B0EBDC",
      200: "#83DECA",
      300: "#5AD1BB",
      400: "#35C4AF",
      500: "#15B8A6",
      600: "#099186",
      700: "#016B66",
      800: "#004544",
      900: "#001E1F",
    },
    sky: {
      50: "#F0FAFF",
      100: "#CCEBFF",
      200: "#A3D9FF",
      300: "#7AC3FF",
      400: "#52ABFF",
      500: "#2A92FF",
      600: "#186FD9",
      700: "#0B51B3",
      800: "#01378C",
      900: "#002466",
    },
    blue: {
      50: "#F0F7FF",
      100: "#C9E0FF",
      200: "#A1C5FF",
      300: "#78A7FF",
      400: "#4D83F7",
      500: "#235CEA",
      600: "#1440C4",
      700: "#08289E",
      800: "#001678",
      900: "#000C52",
    },
    indigo: {
      50: "#F4F0FF",
      100: "#E7DEFF",
      200: "#C6B5FF",
      300: "#9B85F2",
      400: "#715AE6",
      500: "#4932D9",
      600: "#2F20B3",
      700: "#1A128C",
      800: "#0B0866",
      900: "#040440",
    },
    purple: {
      50: "#FAF0FF",
      100: "#F2DBFF",
      200: "#DAADF7",
      300: "#BC7FEB",
      400: "#9E54DE",
      500: "#7F2ED1",
      600: "#5F1DAB",
      700: "#421085",
      800: "#2A075E",
      900: "#170338",
    },
    pink: {
      50: "#FFF0F5",
      100: "#FFD6E7",
      200: "#FFADD1",
      300: "#FF85BE",
      400: "#F759A8",
      500: "#EB2E94",
      600: "#C41D7C",
      700: "#9E1065",
      800: "#78064E",
      900: "#520337",
    },
  },
};


function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      zIndex: {
        60: 60,
        9999: 9999,
        1000: 1000,
      },
      colors: {
        ...COLORS,
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      minWidth: {
        5: "1.25rem",
        7: "1.75rem",
        32: "8rem",
        20: "5rem",
        100: "100px",
        170: "170px",
      },
      minHeight: {
        24: "24px",
        7: "1.75rem",
      },
      opacity: {
        65: ".65",
      },
      fontSize: {
        "heading-1": ["56px", "80px"],
        "heading-2": ["40px", "58px"],
        "heading-3": ["32px", "46px"],
        "heading-4": ["24px", "32px"],
        "header-1": ["20px", "28px"],
        "header-2": ["18px", "26px"],
        "body-1": ["16px", "28px"],
        "body-2": ["14px", "20px"],
        "title-1": ["24px", "36px"],
        "title-2": ["20px", "30px"],
        "caption-1": ["12px", "18px"],
        "caption-2": ["10px", "16px"],
        "display-1": "80px",
        "display-2": "72px",
        "display-3": "64px",
        "display-4": "56px",
        "display-5": "48px",
        "display-6": "40px",
        "hero": ["28px", "40px"],
      },
      placeholderColor: {
        ...COLORS,
      },
      ringWidth: {
        3: "3px",
      },
      height: {
        sm: "30px",
        md: "34px",
        lg: "38px",
        xl: "42px",
      },
      borderRadius: {
        10: "0.625rem",
        20: "1.25rem",
      },
      fontWeight: {
        regular: 400,
      },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        4.5: "18px",
      },
      backgroundImage: {
        landing:"radial-gradient(circle at center , var(--tw-gradient-from) 50%, transparent 50%)",
          'hero': "url('/src/img/Rectangle4387.png')", 
          'hero1': "linear-gradient(93.52deg, rgba(255, 255, 255, 0.7) 44.39%, rgba(255, 255, 255, 0) 52.9%)", 
          'hero2': "url('/src/img/Group34894.png')",   
          'hero3': "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), rgba(25, 118, 210, 0.3);",
          'hero4': "url('/src/img/Rectangle4374.png')",
          'hero5': "url('/src/img/Rectangle4323.png')", 
          'hero6': "url('/src/img/slide.png')", 
          'hero7': "linear-gradient(229.26deg, #2E6EEA 16.29%, #5190DA 54.49%, #367CE6 100%, rgba(45, 125, 220, 0.5) 100%)", 
          'hero8': "url('/src/img/Map.png')",
          'modal-schedule': "linear-gradient(180deg, rgba(25, 118, 210, 0.4) 0%, rgba(25, 118, 210, 0.2) 100%), linear-gradient(180deg, rgba(0, 81, 205, 0) 0%, rgba(25, 118, 210, 0) 0.01%, rgba(25, 118, 210, 0.492) 49.48%, rgba(25, 118, 210, 0.6) 100%)",
          'modal-image': "url('/src/img/bg-modal.png')",
        }, 
      transitionProperty: {
        height: "height",
        width: "width",
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      keyframes: {
        tdsDrawerFadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        drawer:
          "0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal none running tdsDrawerFadeIn",
      },
      boxShadow: {
        'hero': '0px 3px 40px rgba(0, 0, 0, 0.05)',
        'hero1': '0px 4px 60px rgba(25, 118, 210, 0.15)',
        'hero2': '2px 4px 60px rgba(25, 118, 210, 0.1);', 
        'hero3': '0px 3px 40px rgba(0, 0, 0, 0.07);',
        'hero4': '0px 1px 6px rgba(29, 45, 73, 0.102);',
        primary: "0px 0px 0px 3px rgba(40, 167, 69, 0.2)",
        success: "0px 0px 0px 3px rgba(40, 167, 69, 0.2)",
        error: "0px 0px 0px 3px rgba(235, 59, 91, 0.2)",
        info: "0px 0px 0px 3px rgba(35, 149, 255, 0.2)",
        warning: "0px 0px 0px 3px rgba(255, 193, 7, 0.2)",
        "1-lg": "0px 1px 10px rgba(29, 45, 73, 0.102)",
        "1-md": "0px 1px 3px rgba(29, 45, 73, 0.102)",
        "1-xl": "0px 1px 15px rgba(29, 45, 73, 0.14)",
        box: "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
      },
      fontFamily: {
        'OpenSans': ['OpenSans', 'sans-serif'],
      },
      animation: {
        'fade': 'fade 500ms linear',
        'fadeup': 'fadeup 500ms linear',
        'fadeDown': 'fadeDown 800ms linear',
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeUp: {
          "0%": {
            transform: 'translateY(50px)',
            opacity: 0,
          },
          "100%": {
            transform: 'translateY(0px)',
            opacity: 1,
          },
        },
        fadeDown: {
          "0%": {
            transform: 'translateX(0px)',
          },
          "100%": {
            transform: 'translateX(25px)',
          },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
};