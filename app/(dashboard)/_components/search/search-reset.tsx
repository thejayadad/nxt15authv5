'use client'
import Link from "next/link"
import {FiX} from "react-icons/fi"

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form) form.reset();
    }
    return (
        <button type="reset" onClick={reset}>
            <Link href={'/'}>
                <FiX className="h-5 w-5" />
            </Link>
        </button>
    )

}

export default SearchFormReset