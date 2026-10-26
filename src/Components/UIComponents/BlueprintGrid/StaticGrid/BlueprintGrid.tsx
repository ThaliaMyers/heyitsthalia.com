import styles from "./BlueprintGrid.module.scss";
import {useMenuExpanded} from "../../Navigation/ContextProviders/MenuExpandedProvider.tsx";
import {useMenuIsClosing} from "../../Navigation/ContextProviders/MenuIsClosingContext.tsx";

export default function BlueprintGrid() {
    const [menuExpanded, setMenu] = useMenuExpanded();
    const [isClosing, setIsClosing] = useMenuIsClosing();
    
    return (
        <>
            {/*style fades the grid in & out depending on the menu state to prevent banding from the blurring of the grid*/}
            <div className={styles.blueprintGrid} style={(menuExpanded && !isClosing) ? { opacity: "0" }: {}}></div>
        </>
    )
}