module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./src/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/sortablejs/**/*.js"
  ],
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
    "bg-opacity-50"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ]
      },
      boxShadow: {
        sm: "0 2px 9px -5pc rgb(0 0 0 / 0.15)",
        DEFAULT: "0 5px 10px 0 rgb(0 0 0 / 0.12)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.12), 0 2px 4px -1px rgb(0 0 0 / 0.07)",
        lg: "0 8px 26px -4px rgb(0 0 0 / 0.15), 0 8px 9px -5px rgb(0 0 0 / 0.06)",
        xl: "0 23px 45px -11px rgb(0 0 0 / 0.25)",
        "2xl": "0 20px 27px 0 rgb(0 0 0 / 0.05)",
        inner: "inset 0 1px 2px 0 rgb(0 0 0 / 0.075)",
        none: "0 0 #000"
      },
      transitionProperty: {
        width: "width"
      },
      minWidth: {
        20: "20rem"
      },
      colors: {
        fuchsia: {
          50: "#fbb2ea",
          100: "#f88bdf",
          200: "#f665d4",
          300: "#f43ec9",
          400: "#f218bf",
          500: "#cb0c9f",
          600: "#c10b96",
          700: "#ae0a87",
          800: "#9a0978",
          900: "#870869"
        },
        voilet: {
          50: "#e0ccf5",
          100: "#ccaaee",
          200: "#b888e7",
          300: "#a366e1",
          400: "#8f44da",
          500: "#7928CA",
          600: "#7025bb",
          700: "#6622aa",
          800: "#5c1e99",
          900: "#521b88"
        },
        pink: {
          50: "#ffd6eb",
          100: "#ffadd6",
          200: "#ff85c2",
          300: "#ff5cad",
          400: "#ff3399",
          500: "#ff0080",
          600: "#f5007a",
          700: "#e00070",
          800: "#cc0066",
          900: "#b8005c"
        },
        slate: {
          50: "#c2c9d6",
          100: "#b6b7cd",
          200: "#aab4c5",
          300: "#a8b8d8",
          400: "#96a2b8",
          500: "#8392ab",
          600: "#627594",
          700: "#586b86",
          800: "#536179",
          900: "#4a576d"
        },
        gray: {
          50: "#f9fafb",
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529"
        },
        cyan: {
          50: "#b5ebf8",
          100: "#90e2f4",
          200: "#69d8f0",
          300: "#21d4fd",
          400: "#3acaeb",
          500: "#17c1e8",
          600: "#16badf",
          700: "#14aacc",
          800: "#129bba",
          900: "#118ba7"
        },
        blue: {
          50: "#859fff",
          100: "#708fff",
          200: "#5c7fff",
          300: "#476fff",
          400: "#335fff",
          500: "#2152ff",
          600: "#0a3fff",
          700: "#0035f5",
          800: "#0031e0",
          900: "#002ccc"
        },
        green: {
          50: "#b6f16a",
          100: "#a4ef57",
          200: "#a4ee44",
          300: "#98ec2d",
          400: "#95dc39",
          500: "#82d616",
          600: "#7ccb15",
          700: "#17ad37",
          800: "#15a234",
          900: "#13902e"
        },
        yellow: {
          50: "#fde387",
          100: "#fcde73",
          200: "#fcda57",
          300: "#fcd652",
          400: "#fbd54b",
          500: "#fbcf33",
          600: "#f8cc23",
          700: "#fac70f",
          800: "#f0bd05",
          900: "#dcad04"
        },
        red: {
          50: "#f98b8b",
          100: "#f87777",
          200: "#f76464",
          300: "#f65151",
          400: "#f53939",
          500: "#ea0606",
          600: "#c70505",
          700: "#b30505",
          800: "#9f0404",
          900: "#8b0404"
        },
        dark: {
          50: "#92a6c8",
          100: "#859bc1",
          200: "#6a85b4",
          300: "#5270a3",
          400: "#445d88",
          500: "#344767",
          600: "#3a416f",
          700: "#383f6b",
          800: "#31375e",
          900: "#141727"
        }
      }
    }
  },

  plugins: [require("flowbite/plugin")]
};
