import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SetStateAction } from "react";
import { type Locale } from "../../../../lib/locales";
import { useLocale } from "next-intl";

const URL = "https://suwalif.onrender.com/user/verificationLoginCode";
const VerificationLoginCode = (setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, setError: { (value: SetStateAction<string>): void; (arg0: any): void; }, data: { phoneNumber: string | string[] | undefined; email: string | undefined; code: string; }, push: { (href: string, options?: NavigateOptions): void; (arg0: string): void; }) => {
    const locale = useLocale() as Locale;
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
                push(`/${locale}`);
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
export default VerificationLoginCode;