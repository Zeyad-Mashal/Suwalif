const URL = "https://back.suwalifstore.com/cart/add/";
const lang = window.localStorage.getItem("translation")
const USER_TOKEN = window.localStorage.getItem("user")
const addToCartApi = async (setCartLoading, setError, productId, data, setTotalCart) => {
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
            setTotalCart(result.totalProducts)
            const cartPopup = document.querySelector(".cart_popop_container");

            cartPopup.style.transform = "translateX(0%)"; // Move to 0px
            setTimeout(() => {
                cartPopup.style.transform = "translateX(-100%)";

            }, 3000);
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