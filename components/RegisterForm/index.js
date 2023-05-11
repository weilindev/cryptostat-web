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

const RegisterForm = ({
	submitRegisterForm,
	setPageType,
}) => {
	const [showPwd, setShowPwd] = useState(false)
	const [showPwdConfirm, setShowPwdConfirm] = useState(false)
	const initialValues = {
		email: '',
    firstName: '',
    lastName: '',
    pwd: '',
    pwdConfirm: '',
	}

	const validate = value => {
		let error
		if (!value) error = 'field required'
		return error
	}

	return (
		<>
			<Heading as='h2' size='md' mb={6}>Register</Heading>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					submitRegisterForm(values)
					actions.setSubmitting(false)
				}}
			>
				{props => (
					<Form>
						<Field name='email' validate={validate}>
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
						<Field name='pwd' validate={validate}>
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
						<Field name='pwdConfirm' validate={validate}>
							{({ field, form }) => (
								<FormControl maxW="300px" id='pwdConfirm' mb={4} isInvalid={form.errors.pwdConfirm && form.touched.pwdConfirm}>
									<FormLabel fontSize={16}>Password Confirm</FormLabel>
									<InputGroup>
										<Input
											{ ...field }
											type={showPwdConfirm ? 'text' : 'password'}
											focusBorderColor='main.normal'
											borderRadius="lg"
										/>
										<InputRightElement>
												{
													showPwdConfirm
														? <ViewIcon cursor='pointer' onClick={() => setShowPwdConfirm(prev => !prev)} />
														: <ViewOffIcon cursor='pointer' onClick={() => setShowPwdConfirm(prev => !prev)} />
												}
										</InputRightElement>
									</InputGroup>
									<FormErrorMessage>{form.errors.pwdConfirm}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name='firstName' validate={validate}>
							{({ field, form }) => (
								<FormControl maxW="300px" id='firstName' mb={4} isInvalid={form.errors.firstName && form.touched.firstName}>
									<FormLabel fontSize={16}>First Name</FormLabel>
									<Input
										{...field}
										type='firstName'
										focusBorderColor='main.normal'
										borderRadius='lg'
										autoComplete='off'
									/>
									<FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name='lastName' validate={validate}>
							{({ field, form }) => (
								<FormControl maxW="300px" id='lastName' mb={4} isInvalid={form.errors.lastName && form.touched.lastName}>
									<FormLabel fontSize={16}>Last Name</FormLabel>
									<Input
										{...field}
										type='lastName'
										focusBorderColor='main.normal'
										borderRadius='lg'
										autoComplete='off'
									/>
									<FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
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
							Register
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
				onClick={() => setPageType('login')}
			>
				Already have an account? login <ChevronRightIcon />
			</Text>
		</>
	)
}

export default RegisterForm