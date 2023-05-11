const apiErrorResponse = {
	0: 'Unexpected Error',
	1: 'Some field is invalid',
	2: 'Some query is missing',
	100: 'Password confirm mismatch',
	101: 'This account is already exist',
	102: 'This account is not exist',
	103: 'This account is not verify',
	104: 'Password invalid',
	105: 'Verify code invalid',
}

const errorToast = (toast, code) => {	
	return toast({
		description: apiErrorResponse[code] || '',
		status: 'error',
		duration: 2000,
		isClosable: true,
		position: 'top'
	})
}

export default errorToast

