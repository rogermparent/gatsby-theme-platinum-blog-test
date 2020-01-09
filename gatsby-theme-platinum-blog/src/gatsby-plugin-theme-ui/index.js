import { BaseTheme } from "gatsby-theme-platinum";

const theme = {
  ...BaseTheme,
  sizes: {
    ...BaseTheme.sizes,
    maxContentWidth: "736px",
    maxPageWidth: "960px"
  },
  layout: {
    ...BaseTheme.layout,
    headerWrapper: {
      variant: "styles.inverted"
    },
    header: {
      display: "flex",
      maxWidth: "maxPageWidth",
      justifyContent: "space-between",
      alignItems: "center",
      mx: "auto",
      px: [1, 3],
      py: [0, 1],
      width: "100%",
      flexFlow: ["column nowrap", "row nowrap"],
      textAlign: "center",
      nav: {
        justifyContent: "center",
        alignItems: "center",
        a: {
          fontSize: 3,
          color: "inherit",
          textDecoration: "none",
          px: 2,
          verticalAlign: "middle",
          lineHeight: "36px",
          minHeight: ["linkMinimum", 0]
        }
      },
      a: {
        color: "inherit",
        textDecoration: "none"
      }
    },
    footerWrapper: {
      variant: "styles.inverted"
    },
    footer: {
      textAlign: "center",
      fontSize: 2,
      p: 1
    },
    main: {
      ...BaseTheme.layout.main,
      py: 0,
      my: [3, 4],
      mx: "auto",
      display: "flex",
      flexFlow: "column nowrap"
    }
  },
  styles: {
    ...BaseTheme.styles,
    inverted: {
      backgroundColor: "gray.7",
      color: "white"
    },
    Logo: {
      fontSize: [5, 4],
      px: 1,
      py: [2, 1],
      pb: [0, 1],
      minHeight: "linkMinimum",
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none"
    },
    unstyledList: {
      p: 0,
      m: 0,
      listStyle: "none"
    },
    inlineList: {
      variant: "styles.unstyledList",
      li: {
        display: "inline-block"
      }
    }
  }
};

export default theme;
