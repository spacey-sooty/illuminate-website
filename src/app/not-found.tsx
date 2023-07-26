import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1> Page Not Found!! </h1>
      <Link href="/" className="link"> <h2> Home </h2> </Link>
    </main>
  )
}