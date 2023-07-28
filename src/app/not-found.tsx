import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1> Error 404 Page Not Found !! </h1>
      <Link href="/" className="hero"> <h2> Back to home </h2> </Link>
    </main>
  )
}
