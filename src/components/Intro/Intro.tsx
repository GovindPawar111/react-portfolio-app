import './Intro.scss'
import cloud from './../../images/cloud.png'
import cloudSoft from './../../images/cloud-soft.png'


export const Intro = (): JSX.Element => {
    return (
        <div className='intro-section'>
            <div className='vector-bg' id='parallax'>

            </div>
            <img src={cloudSoft} className='cloud-soft' />
            <img src={cloud} className='cloud' />
        </div>
    )
}

export default Intro
