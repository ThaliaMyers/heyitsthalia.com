import './Header.css'
import '../Styles/TextStyles.css'

export default function Header() {
    return (
        <>
            <div className='headerParent'>
                <div className="blueprintGrid"></div>
                <section className='headerSection'>
                    <h2 className='nameSubtitle'>Hi, my name is</h2>
                    <h1 className='bigName'>Thalia</h1>
                    <p className='aboutMe'>
                        Hi, I am an 18 year old developer/designer/source of chaos.
                        Technology is the creative manifestation of the jumble of
                        ideas I call my brain. Oh, and I’m also probably one of the
                        biggest nerds in existence.
                    </p>
                </section>
            </div>
        </>
    )
}