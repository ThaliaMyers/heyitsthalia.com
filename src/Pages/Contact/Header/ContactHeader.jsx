import '../../Homepage/Header/Header.css'
import './ContactHeader.css'

export default function ContactHeader() {
    return (
        <>
            <div className='headerParent'>
                <div className="blueprintGrid"></div>
                <section className='headerSection'>
                    <h2 className='nameSubtitle'>Have Questions?</h2>
                    <h1 className='bigName bigName--contactHeader'>Contact Me</h1>
                    {/*TODO: Make this description better in general.*/}
                    <p className='aboutMe'>
                        Let me know of any questions, comments, or suggestions you have about anything I do. I'm always looking for ideas for my next random project.
                    </p>
                </section>
            </div>
        </>
    )
}