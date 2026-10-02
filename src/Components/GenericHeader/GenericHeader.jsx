import './GenericHeader.css'


const birthday = new Date(2008, 2, 18);

// Calculate age in years from birthdate
function calculateAge(birthday) {
    const ageDifMs = Date.now() - birthday;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge(birthday);
const article = [8, 11, 18].includes(age) || (age >= 80 && age <= 89) ? "an" : "a";


export default function GenericHeader(middleText, bigText, smallText) {
    return (
        <>
            <div className='headerParent'>
                <div className="blueprintGrid"></div>
                <section className='headerSection'>
                    <h2 className='middleText'>{middleText}</h2>
                    <h1 className='bigText'>{bigText}</h1>
                    <p className='smallText'>
                        {smallText}
                    </p>
                </section>
            </div>
        </>
    )
}