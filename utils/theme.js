import { extendTheme } from '@chakra-ui/react'


const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  heading: `'Cambay', 'Inter', sans-serif`,
  body: `'Cambay', 'Inter', sans-serif`,
}

const styles = {
  global: props => ({
    'html, body': {
      backgroundColor: props.colorMode === 'dark' ? colors.background.dark : colors.background.light
    },
    '::-webkit-scrollbar': {
      width: '4px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent'
    },
    '::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '4px',
    },
  }),
}

const colors = {
  background: {
    light: '#f5f2ea',
    dark: 'gray.800',
  },
  main: {
    light: '#fdd8aa',
    normal: '#fdc886',
    dark: '#b18c5d',
  },
}

const components = {
  Button: {
    baseStyle: {
      _hover: {
        background: 'none',
        boxShadow: 'none',
      },
      _focus: {
        boxShadow: 'none',
      },
      _active: {
        background: 'none',
        boxShadow: 'none',
      },
      _expanded: {
        background: 'none',
        boxShadow: 'none',
      },
    }
  },
}

const theme = extendTheme({ config, fonts, styles, colors, components })

export default theme