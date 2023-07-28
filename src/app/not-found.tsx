import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1> Error 404 Page Not Found !! </h1>
      <Link href="/" className="link"> <h2 className="hero"> Back to home </h2> </Link>
    </main>
  )
}
