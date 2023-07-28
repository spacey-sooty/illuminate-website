import styles from '@/styles/pages/home.module.scss'
import Image from 'next/image'

export default function Home() {
  var h = 81.859 * 5;
  var w = 10.732 * 5;
  return (
    <main>
      <div>
        <h1> StationAIry ! </h1>
        <p className='hero'> StationAIry are the creators of the MechaPen a high quality pen which warns you when you are running low on ink! </p>
      </div>
    </main>
  )
}
