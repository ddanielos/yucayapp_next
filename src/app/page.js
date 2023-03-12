import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Bar from '../components/Bar'
import About from '../components/About'
import OurBlog from '../components/OurBlog'
import ImageSunBar from '../components/ImageSunBar'
import Instagram from '../components/Instagram'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <Bar />
      <Instagram />
      <About />
      <OurBlog />
      <ImageSunBar />
    </div>
  )
}
