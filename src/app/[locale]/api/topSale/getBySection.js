const URL = "https://suwalif-s9rn.onrender.com/product/getBySection?section=";
const lang = window.localStorage.getItem("translation")
const getBySection = async (setLoading, setError, setBySection, sections) => {
    setLoading(true)
    try {
        const response = await fetch(`${URL}${sections}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept-language": lang
            },
        });

        const result = await response.json();

        if (response.ok) {
            setBySection(result.products)
            setLoading(false);
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
export default getBySection;