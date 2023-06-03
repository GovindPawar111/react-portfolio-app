import './App.scss'
import About from './components/About/About'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import Blogs from './components/Blogs/Blogs'

export const App = (): React.ReactElement => {
    return (
        <>
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App
