
import { TitleSection } from "../TitleSection/TitleSection"
import TabsFaqs from "./TabsFaqs";
import styles from "./faqs.module.scss"


export default function Faqs() {
 
 

    return (
        <section className={styles.faqs}>
            <TitleSection
              titleBit="FREQUENTLY"
              title="ASKED QUESTIONS"
            />
            <p className={styles.faqs__text}>
            For quick and complete responses to common queries, ensuring a smooth and pleasant experience during your stay.
            </p>
            <TabsFaqs
            
            />
        </section>
    )
}
