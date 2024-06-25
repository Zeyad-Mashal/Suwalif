const URL = "https://suwalif.onrender.com/user/verificationLoginCode";
const verificationLoginCode = (setLoading, setError, data, push) => {
    setLoading(true)
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
                push('/')
                setLoading(false);
                localStorage.setItem("user", responseJson.userToken);
            } else {
                setError(responseJson.message)
                setLoading(false);
            }
        }).catch(error => {
            setError(error.message);
            setLoading(false);
        })
}
export default verificationLoginCode;