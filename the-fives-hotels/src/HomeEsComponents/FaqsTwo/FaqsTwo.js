
import { TitleSection } from "../TitleSection/TitleSection"
import TabsFaqs from "./TabsFaqs";
import styles from "../../components/Faqs/faqs.module.scss"


export default function Faqs() {
 
 

    return (
        <section className={styles.faqs}>
            <TitleSection
              titleBit="PREGUNTAS"
              title="FRECUENTES"
            />
            <p className={styles.faqs__text}>
            Para obtener respuestas rápidas y completas a consultas comunes, garantizando una experiencia fluida y placentera durante su estadía.
            </p> 
            <TabsFaqs/>  
        </section>
    )
}
