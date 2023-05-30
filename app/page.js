import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Services from './sections/Services'
import Process from './sections/Process'
import Work from './sections/Work'
import Feedback from './sections/Feedback'
import WhatsNew from './sections/WhatsNew'
import Testimonial from './sections/Testimonial'
import Logos from './sections/Logos'
import { Teams } from './sections/Teams'
import Contact from './sections/Contact'
import Cta from './components/Cta'
import { Metadata } from 'next';

export const metadata = {
  title: 'Professional Website & Software Development Company |Shero Incorp',
  description: 'Looking for a Best reliable website and software development company to Boots your online presence at affordable Prices, Look no other than shero incorp ',
  verification: {
    google: "google-site-verification=lhklmf_1C9VGhHNUP66-Jn7jmei9shUUriDTzUs9Z1Y"
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className='px-3 lg:px-28'>
          <About />
          <Stats />
        </section>
        <Services />
        <section className='px-3 lg:px-28'>
          <Process />
          <Cta />
          <Work />
        </section>
        <Feedback />
        <WhatsNew />
        <section className='px-3 lg:px-28'>
          <Testimonial />
          <Logos />
          <Teams />
        </section>
        <Contact />
      </main>
    </>
  )
}
