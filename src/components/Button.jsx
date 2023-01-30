import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Button() {
    const [value, setValue] = useState(true);

    const handleClick = () => {
        setValue(!value);

        toast("Wow so easy!");
    };

    return (
        <>
            <button
                onClick={handleClick}
                type="button"
                class="   py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
                Ahora {value ? "sí" : "no"}
            </button>
            <ToastContainer />
        </>
    );
}
