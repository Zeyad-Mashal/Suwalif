const URL = "https://back.suwalifstore.com/auth/verify";
const lang = window.localStorage.getItem("Lang")
const VerificationLoginCode = async (setLoading, setError, push, data) => {
    setLoading(true)
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
            push(`/${lang}`)
            setLoading(false);
            localStorage.setItem("user", result.token);
        } else {
            if (response.status == 400) {
                setError(result.message)
                setLoading(false);
            } else if (response.status == 500) {
                setError(result.message)
                setLoading(false);
            }
            setLoading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setLoading(false)
    }
}
export default VerificationLoginCode;