import { faListSquares } from "@fortawesome/free-solid-svg-icons";

const URL = "https://back.suwalifstore.com/auth/login";
const lang = window.localStorage.getItem("translation");
const LoginAPI = async (setLoginLoading, setError, data) => {
    setLoginLoading(true)
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

        console.log(result);

        if (response.ok) {
            setLoginLoading(false)
            document.querySelector(".code").style.display = "flex"
            document.querySelector(".email_way .login_btn_way").style.display = "none"
        } else {
            if (response.status == 404) {
                setError(result.message)
                setLoginLoading(false)
            } else if (response.status == 400) {
                setError(result.message)
                setLoginLoading(false)
            }
            else if (response.status == 500) {
                setError(result.message)
                setLoginLoading(false)
            }
            setLoginLoading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setLoginLoading(false)
    }
}
export default LoginAPI;