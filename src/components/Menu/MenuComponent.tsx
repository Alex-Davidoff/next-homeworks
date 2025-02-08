import Link from "next/link"

export const MenuComponent = () => {
    return(
        <ul className="border border-blue-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cars">/cars</Link></li>
        </ul>
    )
}