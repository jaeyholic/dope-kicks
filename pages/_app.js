import { Container } from "next/app";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import "../styles/index.css";
import NavBar from "../components/Nav";

const App = ({ Component, pageProps }) => {
  const breakpoints = ["640px", "768px", "1024px", "1280px"];

  // aliases
  breakpoints.sm = breakpoints[0];
  breakpoints.md = breakpoints[1];
  breakpoints.lg = breakpoints[2];
  breakpoints.xl = breakpoints[3];

  const customIcons = {
    shape: {
      path: (
        <polygon
          preserveAspectRatio="none"
          fill="currentColor"
          points="50,0 100,0 50,100 0,100"
        />
      ),
      viewBox: "0 0 100 100",
    },
    menuOpen: {
      path: (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      ),
      viewBox: "0 0 24 24",
    },
    menuClose: {
      path: (
        <path
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      ),
      viewBox: "0 0 24 24",
    },
    user: {
      path: (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      ),
      viewBox: "0 0 20 20",
    },
    trash: {
      path: (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      ),
      viewBox: "0 0 20 20",
    },
    cog: {
      path: (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      ),
      viewBox: "0 0 20 20",
    },
    notification: {
      path: (
        <path
          fill="currentColor"
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
        />
      ),
      viewBox: "0 0 20 20",
    },
    pencil: {
      path: (
        <path
          fill="currentColor"
          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
        />
      ),
      viewBox: "0 0 20 20",
    },
    logout: {
      path: (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      ),
      viewBox: "0 0 20 20",
    },
    signout: {
      path: (
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      ),
      viewBox: "0 0 24 24",
    },
  };

  const customTheme = {
    ...theme,
    breakpoints,
    fonts: {
      ...theme.fonts,
      body: '"Inter" ,sans-serif',
      bold: '"InterBold" ,sans-serif',
      medium: '"InterMedium" ,sans-serif',
      thin: '"InterThin", sans-serif',
      black: '"InterBlack", sans-serif',
      light: '"InterLight", sans-serif',
    },
    fontSizes: {
      ...theme.fontSizes,
      xx: ".55rem",
      tiny: ".68rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    icons: {
      ...theme.icons,
      ...customIcons,
    },
    space: {
      ...theme.space,
      "14": "3.5rem",
      "60": "15rem",
      "70": "18rem",
      "80": "20rem",
      "85": "23rem",
      "90": "25rem",
      "108": "27rem",
      "110": "30rem",
      "115": "32rem",
      "120": "35rem",
      "123": "40rem",
      "125": "45rem",
      "127": "48rem",
      "130": "55rem",
      "135": "60rem",
      "140": "70rem",
      "145": "76rem",
    },
    sizes: {
      ...theme.sizes,
      "14": "3.5rem",
      "60": "15rem",
      "70": "18rem",
      "80": "20rem",
      "85": "23rem",
      "90": "25rem",
      "108": "27rem",
      "110": "30rem",
      "115": "32rem",
      "120": "35rem",
      "123": "40rem",
      "125": "45rem",
      "127": "48rem",
      "130": "55rem",
      "135": "60rem",
      "140": "70rem",
      "145": "76rem",
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Container>
        <NavBar />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
