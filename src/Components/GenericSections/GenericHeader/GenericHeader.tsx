import styles from './GenericHeader.module.scss'
import BlueprintGrid from "../../UIComponents/BlueprintGrid/BlueprintGrid.tsx";

interface GenericHeaderProps {
    middleText: string;
    bigText: string;
    smallText: string;
}

export default function GenericHeader(props: GenericHeaderProps) {
    return (
        <>
            <div className={styles.headerParent}>
                <BlueprintGrid></BlueprintGrid>
                
                <section className={styles.headerSection}>
                    <h2 className={styles.middleText}>
                        {props.middleText}
                    </h2>
                    <h1 className={styles.bigText}>
                        {props.bigText}
                    </h1>
                    <p className={styles.smallText}>
                        {props.smallText}
                    </p>
                </section>
            </div>
        </>
    )
}