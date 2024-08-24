const URL = "https://back.suwalifstore.com/cart/get";
const lang = window.localStorage.getItem("Lang")
const USER_TOKEN = window.localStorage.getItem("user")
const getToCartApi = async (setloading, setError, setAllCart, setCartNumber) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang,
                'authorization': `suwOZ0${USER_TOKEN}`
            },
        });

        const result = await response.json();

        if (response.ok) {
            setAllCart(result.cartItems)
            setCartNumber(result.totalPrice)
            setloading(false);
        } else {
            if (response.status == 500) {
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
export default getToCartApi;