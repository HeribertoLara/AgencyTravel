
import Image  from 'next/legacy/image';


export default function DescriptionMobileEn() {
    
    
    return (
        <section className="description-mobile">
            <h3 className="description-mobile__title">
                LIVE YOUR DREAM VACATION AT THE FIVES HOTELS & RESIDENCES</h3>
            <p className="description-mobile__text">
                Discover the allure of the Mexican Caribbean and be amazed by the beautiful beaches, impressive coral reefs, delicious cuisine, and exciting experiences that The Fives has for you.
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
                    layout='fill'
                    priority
                /> 
            </figure> 
        </section>
    )
}
