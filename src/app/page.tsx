import styles from '@/styles/pages/home.module.scss'
import Image from 'next/image'

export default function Home() {
  var w = 2623 / 5;
  var h = 800 / 5;
  return (
    <main>
      <div>
        <h1> StationAIry ! </h1>
        <p className='hero'> StationAIry is a WA based company focused on producing high quality stationary to reduce stress in students! </p>
        <p className='hero'> Everyone has been there, you&apos;re going into an exam, you are only able to bring one pen, you&apos;re stressed. 
        Will your pen have enough ink to get you through? You could just buy a new pen but that isn&apos;t sustainable! But this isn&apos;t 
        a worry with the MechaPen! The  MechaPen warns you how much ink you have left and tells you how long you have left writing. </p>
    </div>
    <Image src="/pen_design_final.jpg" alt="the MechaPen" className={styles.image} width={w} height={h} priority={false}/>
    </main>
  )
}
