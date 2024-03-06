import { TitleSection } from '../TitleSection/TitleSection'
import style from './Services.module.scss'
import GaleryServices from './GaleryServices'

export default function Services() {
    

    return (
        <section className={style.services}>
            <TitleSection titleBit="EXPERINCES" title="AND SERVICES" />
            <p className={style.servicesPhrase}>Life is meant to be enjoy.Enjoy it at The Fives</p>
            <GaleryServices/>
        </section>
    )
}
