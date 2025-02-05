import Link from "next/link"

export const MenuComponent = () => {
    return(
        <ul className="border border-blue-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/users">/users</Link></li>
            <li><Link href="/posts">/posts</Link></li>
            <li><Link href="/comments">/comments</Link></li>
        </ul>
    )
}