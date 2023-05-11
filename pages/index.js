import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

import Header from "../components/Header"
import FullScreenLoader from "../components/FullScreenLoader"
import { getTokenCookie } from "../utils/cookie"

const Home = () => {
	const router = useRouter()
	const [authChecked, setAuthChecked] = useState(false)

	useEffect(() => {
		const token = getTokenCookie()
		if (!token) router.push('/auth')
		else setAuthChecked(true)
	}, [])

	if (!authChecked) return <FullScreenLoader />

	return (
		<Header />
	)
}

export default Home