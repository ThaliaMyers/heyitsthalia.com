// Calculate age in years from birthdate
export function calculateAge(props: Date): number {
    const today = new Date();
    const birthDate = props

    let yearDiff = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        yearDiff--;
    }

    return yearDiff;
}