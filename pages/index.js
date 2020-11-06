import Head from 'next/head'
import Home from '../components/Home'
import About from '../components/About'
import Header from '../components/Header'
import Page from '../components/Page'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import handleScroll from '../selectors/handler/handleScroll'
import handleClickLink from '../selectors/handler/handleClickLink'
import { BiChevronsUp } from "react-icons/bi"

const Icon = () => (
  <BiChevronsUp size="3.5rem" />
);

export default function App() {
  const handleClickUpButton = () => {
    window.scrollTo({
      top: document.querySelector('.home').offsetTop,
      behavior: 'smooth',
    });
  }
  if (process.browser) {
    window.addEventListener('scroll', handleScroll);
  }
  return (
    <div className="app">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Vincent Herve - Développeur web Full-Stack" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vincent Herve - Développeur web Full-Stack" />
        <meta property="og:image" content="https://i.ibb.co/yf12N0B/home-portfolio.png" />
        <meta property="og:image:width" content="1893" />
        <meta property="og:image:height" content="924" />
        <meta property="og:description" content="Porfolio de Vincent Herve - Développeur web Full-Stack" />
        <meta property="og:url" content="http://vincentherve.fr/" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet" />
        <title>Vincent Herve - Développeur web Full-Stack</title>
      </Head>
      <Header handleClickLink={handleClickLink} />
      <Page>
        <Home />
        <About />
        <Project />
        <Skill />
        <Contact />
        <span onClick={handleClickUpButton} className="upButton displayUpButton"><Icon /></span>
      </Page>
      <Footer />
    </div>
  )
}
