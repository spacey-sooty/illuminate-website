"use client"
import Link from "next/link"
import styles from "@/styles/components/navbar.module.scss"

// const navbarData = {
//   pages: [
//     {
//       title: "About Us",
//       url: "/about-us",
//     },
//     {
//       title: "Products",
//       url: "/products",
//     },
//   ]
// }

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/" className={styles.home}>
          Home
        </Link>
      </div>
      <Link href="/about-us" className={styles.link1}> About Us </Link>
      <Link href="/products" className={styles.link}> Products </Link>
    </div>
  )
}