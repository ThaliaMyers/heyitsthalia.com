import './GradientTextHeader.css'

export default function GradientTextHeader({ text, textSize, tagType, }) {
    const TagName = tagType
    return (
        <>
            <TagName className="gradientHeader" style={{ fontSize: textSize }}>{text}</TagName>
        </>
    )
}