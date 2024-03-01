import React from 'react'
import Image from 'next/image'

export default function ResidenceCard(props) {
    
    const {id, title, text, imgUrl} = props;
    return (
        <>
            <figure>
                <Image  
                    src={imgUrl} 
                    alt="Residence"
                    layout="responsive"
                    width={500}
                    height={500}    
                />
                <figcaption>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </figcaption>
            </figure>
            
            
        </>
    )
}
