const URL = "https://suwalif.onrender.com/auth/login";
const LoginAPI = (setloading, setError, data, push) => {
    setloading(true)
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.message == 'success') {
                push(`/ar/verifycode/${data.email ? data.email : "VerifyAccount"}/${data.phoneNumber ? data.phoneNumber : "verifyAccount"}`)
                setloading(false);
            } else {
                setError(responseJson.message)
                setloading(false);
            }
        }).catch(error => {
            setError(error.message);
            setloading(false);
        })
}
export default LoginAPI;