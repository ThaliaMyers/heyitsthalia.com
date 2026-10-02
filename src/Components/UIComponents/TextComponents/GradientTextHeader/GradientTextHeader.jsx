import './GradientTextHeader.css'

export default function GradientTextHeader({ text, textSize, tagType, margin}) {
    const TagName = tagType
    return (
        <>
            <TagName className="gradientHeader" style={{ fontSize: textSize, margin: margin }}>{text}</TagName>
        </>
    )
}