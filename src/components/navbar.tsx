"use client"
import Link from "next/link"
import styles from "@/styles/components/navbar.module.scss"

const navbarData = {
  pages: [
    {
      title: "About-Us",
      url: "/about-us",
    },
    {
      title: "Products",
      url: "/products",
    },
  ]
}

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/" className={styles.home}>
          Home
        </Link>
      </div>
      <div>
        {navbarData.pages.map((page) => (
          <Link key={page.title} href={page.url} className={styles.link}>
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  )
}