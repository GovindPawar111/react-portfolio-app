import './App.scss'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'

export const App = (): JSX.Element => {
    return (
        <>
            <Intro />
            <Skills />
            <Portfolio />
        </>
    )
}

export default App
