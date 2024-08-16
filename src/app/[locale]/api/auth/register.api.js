const URL = "https://suwalif.onrender.com/auth/register";
const RegisterAPI = (setloading, setError, data, push) => {
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
                push('/ar/login')
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
export default RegisterAPI;