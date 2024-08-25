const URL = "https://back.suwalifstore.com/auth/login";
const lang = window.localStorage.getItem("translation");
const LoginAPI = async (setloading, setError, data, push) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            push(`/${lang}/verifycode/${data.emailOrPhone}`)
            setloading(false);
        } else {
            if (response.status == 404) {
                setError(result.message)
                setloading(false);
            } else if (response.status == 400) {
                setError(result.message)
                setloading(false);
            }
            else if (response.status == 500) {
                setError(result.message)
                setloading(false);
            }
            setloading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setloading(false)
    }
}
export default LoginAPI;