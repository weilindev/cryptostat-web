import {
	Box,
	Spinner,
} from '@chakra-ui/react'

const FullScreenLoader = () => {
  return (
		<Box
			position='fixed'
			top='0'
			left='0'
			w='100%'
			h='100%'
			bgColor='rgba(0, 0 , 0, 0.5)'
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<Spinner
				thickness='6px'
				speed='0.8s'
				emptyColor='gray.200'
				color='main.normal'
				size='xl'
			/>
		</Box>
	)
};

export default FullScreenLoader;