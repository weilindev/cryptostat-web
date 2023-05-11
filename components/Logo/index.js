import { Heading, Text } from "@chakra-ui/react"

const Logo = () => {
	return (
		<Heading as='h1' size={['sm', 'md']}>
			<Text as='span' color='main.dark'>c</Text>rypto<Text as='span' color='main.dark'>s</Text>tat
		</Heading>
	)
}

export default Logo