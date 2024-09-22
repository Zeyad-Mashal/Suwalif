const URL = "https://back.suwalifstore.com/coupon/apply";
const USER_TOKEN = window.localStorage.getItem("user")
const ApplayCouponAPI = async (setloading, setError, setDiscountPercentage, data) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'authorization': `suwOZ0${USER_TOKEN}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();


        if (response.ok) {
            setDiscountPercentage(result.discountPercentage)
            document.querySelector(".order_coupon_created").style.display = "flex";
            setloading(false);
        } else {
            if (response.status == 400) {
                setError(result.message)
                setloading(false);
            } else if (response.status == 500) {
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
export default ApplayCouponAPI;