
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ 
  config,
  colors: {
    lformplace: "#6d6d6d",
    lheader: "#30804b",
    lsubmit: "#317334",
    lform: "RGBA(0, 0, 0, 0.10)",
    hrole: "#4D4D4D",
    pheader: "#386641",
    mainbg: "#a7c957",
    mainclr: "#16400c"
  },
  sizes: {
    icon: "44px",
  }
})

export default theme

