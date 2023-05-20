import './App.scss'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'

export const App = (): JSX.Element => {
    return (
        <>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
        </>
    )
}

export default App
