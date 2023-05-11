import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import '@fontsource/cambay'
import '@fontsource/inter'

import theme from '../utils/theme'
import store from '../utils/store'
import '../styles/global.scss'

const App = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<Head>
					<title>cryptostat</title>
				</Head>
				<div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
					<Component {...pageProps} />
				</div>
			</ChakraProvider>
		</Provider>
	)
}

export default App