const URL = "https://back.suwalifstore.com/cart/add/";
const lang = window.localStorage.getItem("Lang")
const USER_TOKEN = window.localStorage.getItem("user")
const addToCartApi = async (setCartLoading, setError, productId, data) => {
    setCartLoading(true)
    try {
        const response = await fetch(`${URL}${productId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang,
                'authorization': `suwOZ0${USER_TOKEN}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        console.log(result);

        if (response.ok) {
            document.querySelectorAll(".cart_btn").style.backgroundColor = "green";
            setCartLoading(false);
        } else {
            if (response.status == 404) {
                setError(result.message)
                setCartLoading(false);
            } else if (response.status == 500) {
                setError(result.message)
                setCartLoading(false);
            }
            setCartLoading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setCartLoading(false)
    }
}
export default addToCartApi;