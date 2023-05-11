import { useState } from 'react'
import {
	Text,
	Heading,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	useColorModeValue,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Field, Form, Formik } from 'formik'

const LoginForm = ({ submitLoginForm, setPageType }) => {
	const [showPwd, setShowPwd] = useState(false)

	const validateEmail = value => {
		let error
		if (!value) error = 'email is required'
		return error
	}
	const validatePwd = value => {
		let error
		if (!value) error = 'password is required'
		return error
	}

	return (
		<>
			<Heading as='h2' size='md' mb={6}>Login</Heading>
			<Formik
				initialValues={{ email: '', pwd: '' }}
				onSubmit={(values, actions) => {
					submitLoginForm(values)
					actions.setSubmitting(false)
				}}
			>
				{props => (
					<Form>
						<Field name='email' validate={validateEmail}>
							{({ field, form }) => (
								<FormControl maxW="300px" id='email' mb={4} isInvalid={form.errors.email && form.touched.email}>
									<FormLabel fontSize={16}>Email Address</FormLabel>
									<Input
										{...field}
										type='email'
										focusBorderColor='main.normal'
										borderRadius='lg'
										autoComplete='off'
									/>
									<FormErrorMessage>{form.errors.email}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name='pwd' validate={validatePwd}>
							{({ field, form }) => (
								<FormControl maxW="300px" id='pwd' mb={4} isInvalid={form.errors.pwd && form.touched.pwd}>
									<FormLabel fontSize={16}>Password</FormLabel>
									<InputGroup>
										<Input
											{ ...field }
											type={showPwd ? 'text' : 'password'}
											focusBorderColor='main.normal'
											borderRadius="lg"
										/>
										<InputRightElement>
												{
													showPwd
														? <ViewIcon cursor='pointer' onClick={() => setShowPwd(prev => !prev)} />
														: <ViewOffIcon cursor='pointer' onClick={() => setShowPwd(prev => !prev)} />
												}
										</InputRightElement>
									</InputGroup>
									<FormErrorMessage>{form.errors.pwd}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Button
							type='submit'
							mt={6}
							w='100%'
							maxW='300px'
							color='gray.800'
							bgColor='main.normal'
							_hover={{ bgColor: 'main.light'}}
							isLoading={props.isSubmitting}
						>
							Sign In
						</Button>
					</Form>
				)}
			</Formik>
			<Text
				color={useColorModeValue('gray.600', 'gray.300')}
				fontSize='xs'
				mt={5}
				cursor='pointer'
				textDecoration={{ base: 'underline', lg: 'none' }}
				_hover={{ textDecoration: 'underline' }}
				onClick={() => setPageType('register')}
			>
				Don't have an account? register here <ChevronRightIcon />
			</Text>
		</>
	)
}

export default LoginForm