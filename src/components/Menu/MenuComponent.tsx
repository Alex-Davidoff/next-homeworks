import Link from "next/link"

export const MenuComponent = () => {
    return(
        <ul className="border border-blue-600 mb-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cars">/cars</Link></li>
            <li><Link href="/carcreate">/carcreate</Link></li>
        </ul>
    )
}