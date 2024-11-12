'use client'

import { BackButton } from "./back-button";
import FormHeader from "./form-header";
import SocialLogin from "./social-login";

interface FormWrapperProps {
    children: React.ReactNode;
    titleLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean
}

export const FormWapper = ({children, titleLabel, backButtonHref, backButtonLabel, showSocial}: FormWrapperProps) => {
    return (
        <div className="w-[400px] shadow-sm rounded-md">
            <FormHeader titleLabel={titleLabel} />
           <div className="p-2">
           {children}
           </div>
           {showSocial && (
            <SocialLogin />
           )}

           <div className="flex w-full justify-center mt-4 items-center">
                <BackButton
                label={backButtonLabel}
                href={backButtonHref}
                />
           </div>
        </div>
    )
}