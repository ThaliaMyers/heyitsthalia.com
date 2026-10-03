import styles from './GradientTextHeader.module.scss'

interface GradientTextHeaderProps {
    text: string;
    textSize: string;
    tagType: any;
    margin?: string;
}
// export default function GradientTextHeader({ text, textSize, tagType, margin}) {
export default function GradientTextHeader(props: GradientTextHeaderProps) {
    const TagName = props.tagType
    return (
        <>
            <TagName className={styles.gradientHeader} style={{ fontSize: props.textSize, margin: props.margin }}>{props.text}</TagName>
        </>
    )
}