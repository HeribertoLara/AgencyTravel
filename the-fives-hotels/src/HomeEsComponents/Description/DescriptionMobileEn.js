
import Image  from 'next/legacy/image';


export default function DescriptionMobileEn() {
    
    
    return (
        <section className="description-mobile">
            <h3 className="description-mobile__title">
                VIVE UNAS MAJESTUOSAS VACACIONES EN THE FIVES HOTELS & RESIDENCES
            </h3>
            <p className="description-mobile__text">
            Adéntrate en el Caribe mexicano y déjate sorprender por las paradisíacas playas, impresionantes arrecifes de coral, deliciosa gastronomía y experiencias que te depara tu estadía en nuestros hoteles.
            </p>
            <figure 
                style={{ 
                    position:"relative", 
                    width:"100%", 
                    height:"50vh"
                }}
                className="description-mobile__image">
                <Image
                    src="/assets/pool-responsive.avif"
                    alt="caribean-sea"
                    layout="fill" 
                    priority
                />
            </figure> 
        </section>
    )
}
