export function getArticle(props: number) {
    return [8, 11, 18].includes(props) || (props >= 80 && props <= 89) ? "an" : "a";
}