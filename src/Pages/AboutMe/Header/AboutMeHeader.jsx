import './AboutMeHeader.css'
import '../../Homepage/Header/Header.css'

export default function AboutMeHeader() {
    return (
        <>
            <div className='headerParent'>
                <div className="blueprintGrid"></div>
                <section className='headerSection'>
                    <h2 className='nameSubtitle'>I'm cool.</h2>
                    <h1 className='bigName bigName--aboutHeader'>About Me</h1>
                    <p className='aboutMe'>
                        So, I don't feel like writing enough for a caption here. I also don't feel like reprogramming my header without it. You get this instead. If you like reading, scroll down.
                    </p>
                </section>
            </div>
        </>
    )
}