import Link from "next/link"

export default function About() {
  return (
    <main>
      <div>
        <h1> Who are we? </h1>
        <p className=""> StationAIry is a startup aiming to reduce stress in students by with smart stationary. We are a business
        consisting of 5 members, our CEO Segun Adeniran, our Lead Researcher Eric Xie, our Graphic Design Lead Grace Littely, our Marketing Lead
        Isaac Turner and our Financial Manager Riley Duggin. </p>
        <h1> What do we do? </h1>
        <p className=""> We are the creators of the MechaPen a high quality pen which tells you when you are running out of ink. 
        The pen uses AI to detect your writing speed then uses that information along with the amount of ink left to calculate how much time
        you have left writing! This will greatly reduce the stress of the user along with enabling them to be more sustainable by purchasing
        ink refills instead of buying a new pen! </p>
        <h1> Where can you buy this? </h1>
        <p className=""> This pen will be coming to all good stationary stores within WA along with being purchasable online <a className="link" href="/products"> here</a>! </p>
      </div>

    </main>
  )
}
