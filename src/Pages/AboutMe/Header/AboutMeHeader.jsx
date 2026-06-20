import './AboutMeHeader.css'
import '../../Homepage/Header/Header.css'

export default function AboutMeHeader() {
    return (
        <>
            <div className='headerParent'>
                <div className="blueprintGrid"></div>
                <section className='headerSection'>
                    <h2 className='nameSubtitle'>I'm cool. Here's some stuff</h2>
                    <h1 className='bigName'>About Me</h1>
                    <p className='aboutMe'>
                        Contact description
                    </p>
                </section>
            </div>
        </>
    )
}