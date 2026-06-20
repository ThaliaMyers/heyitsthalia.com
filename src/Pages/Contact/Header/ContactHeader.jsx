import './ContactHeader.css'
import '../../Homepage/Header/Header.css'

export default function ContactHeader() {
    return (
        <>
            <div className='headerParent'>
                <div className="blueprintGrid"></div>
                <section className='headerSection'>
                    <h2 className='nameSubtitle'>Have Questions?</h2>
                    <h1 className='bigName'>Contact Me</h1>
                    <p className='aboutMe'>
                        Contact description
                    </p>
                </section>
            </div>
        </>
    )
}