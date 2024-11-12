'use client'
import { useFormStatus } from "react-dom";
import clsx from "clsx";

export const SubmitButton = ({label}: {label: string}) => {
    const { pending } = useFormStatus();
    const className = clsx(
        "text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center",
        {
          "opacity-50 cursor-progress": pending,
        }
      );

    return (
        <button
        type="submit"
        className={className}
        disabled={pending}
        >
        {label === "Login" ? (
            <span>{pending ? "Logging in One Moment..." : "Login"}</span>
          ) : (
            <span>{pending ? "Registering One Moment..." : "Register"}</span>
          )}
        </button>
    )
}