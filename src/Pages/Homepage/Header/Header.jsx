import './Header.css'
import '../Styles/TextStyles.css'


const birthday = new Date(2008, 2, 18);

// Calculate age in years from birthdate
function calculateAge(birthday) {
    const ageDifMs = Date.now() - birthday;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge(birthday);
const article = [8, 11, 18].includes(age) || (age >= 80 && age <= 89) ? "an" : "a";


export default function Header() {
    return (
        <>
            <div className='headerParent'>
                <div className="blueprintGrid"></div>
                <section className='headerSection'>
                    <h2 className='nameSubtitle'>Hi, my name is</h2>
                    <h1 className='bigName'>Thalia</h1>
                    <p className='aboutMe'>
                        I am {article} {age} year old developer/designer/source of chaos.
                        Technology is the creative manifestation of the jumble of
                        ideas I call my brain. Oh, and I'm also probably one of the
                        biggest nerds you'll ever meet.
                    </p>
                </section>
            </div>
        </>
    )
}