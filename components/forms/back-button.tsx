
import Link from "next/link";

interface BackButtonProps {
    href: string;
    label: string
}

export const BackButton = ({href, label}: BackButtonProps) => {
  return (
    <div className="">
        <Link href={href}>
            {label}
        </Link>
    </div>
  )
}
