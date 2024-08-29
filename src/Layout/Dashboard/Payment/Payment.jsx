import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Component/SectionTitle";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment Gateway"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <div className="mt-40 ml-20">
                        <CheckOut></CheckOut>
                        </div>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;