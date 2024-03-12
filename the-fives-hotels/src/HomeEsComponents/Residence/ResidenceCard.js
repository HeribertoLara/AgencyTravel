import React from 'react'
import Image from 'next/legacy/image'

export default function ResidenceCard(props) {
    
    const {id, title, text, imgUrl} = props;
    return (
        <>
            <figure id={id}>
                <Image  
                    src={imgUrl} 
                    alt="Residence"
                    layout="responsive"
                    width={700}
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
