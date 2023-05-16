import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from 'next/navigation'
import {
	Container, 
	useColorModeValue,
	useToast,
} from "@chakra-ui/react"

import { login } from '../features/userSlice'
import Header from "../components/Header"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import successToast from '../components/Toast/SuccessToast'
import errorToast from "../components/Toast/ErrorToast"
import { noAuthPayloadFetch } from "../request"

const Auth = () => {
	const dispatch = useDispatch()
	const toast = useToast()
	const router = useRouter()
	const [pageType, setPageType] = useState('login')

	const submitLoginForm = async form => {
		try {
			const { userProfile, token } = await noAuthPayloadFetch(
				`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user/login`,
				'POST',
				'',
				form,
			)
			dispatch(login({
				name: `${userProfile.firstName} ${userProfile.lastName}`,
				account: userProfile.email,
				token,
			}))
			router.push('/')
		} catch (err) {
			errorToast(toast, err.code)
		}
	}

	const submitRegisterForm = async form => {
		try {
			await noAuthPayloadFetch(
				`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user/register`,
				'POST',
				'',
				form,
			)
			successToast(toast, 'Please check mail box')
			setPageType('login')
		} catch (err) {
			errorToast(toast, err.code)
		}
	}

	return (
		<>
			<Header />
			<Container
				maxW='sm'
				maxH='70%'
				bg={useColorModeValue('white', 'gray.700')}
				borderRadius={6}
				boxShadow='md'
				p={4}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-start',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					overflowY: 'scroll',
				}}
			>
				{pageType === 'login' ? (
					<LoginForm
						submitLoginForm={submitLoginForm}
						setPageType={setPageType}
					/>
				) : (
					<RegisterForm
						submitRegisterForm={submitRegisterForm}
						setPageType={setPageType}
					/>
				)}
			</Container>
		</>
	)
}

export default Auth