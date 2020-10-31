import Head from 'next/head'
import Home from '../components/Home'
import About from '../components/About'
import Header from '../components/Header'
import Page from '../components/Page'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function App() {
  if (process.browser) {
    window.addEventListener('scroll', () => {
      const divElement = document.querySelector('.about').offsetTop;
      const navLink = document.querySelectorAll('.nav-link');
      const navWebsiteName = document.querySelector('.navbar-website-name');
      if (window.scrollY > divElement - 1) {
        for (let i = 0;i < navLink.length;i++) {
          navLink[i].classList.add('text-color');
        }
        navWebsiteName.classList.add('text-color');
      }
      else {
        for (let i = 0;i < navLink.length; i++) {
          navLink[i].classList.remove('text-color');
        }
        navWebsiteName.classList.remove('text-color');
      }
    });
  }
  return (
    <div className="app">
      <Head>
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
      <Header />
      <Page>
        <Home />
        <About />
        <Project />
        <Skill />
        <Contact />
      </Page>
      <Footer />
    </div>
  )
}
