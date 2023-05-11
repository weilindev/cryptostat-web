const successToast = (toast, msg) => {	
	return toast({
		description: msg,
		status: 'success',
		duration: 3000,
		isClosable: true,
		position: 'top'
	})
}

export default successToast

