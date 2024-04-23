"use client"
import React, { useState } from 'react'
import Header from '../../HomeEsComponents/Header/Header'
import Menu from 'app/HomeEsComponents/Header/Menu/Menu'
import BannerHomeEn from '../../HomeEsComponents/BannerHome/BannerHome'
import DescriptionEs from '../../HomeEsComponents/Description/DescriptionEs'
import OurHotel from '../../HomeEsComponents/OurHotels/OurHotel';
import Residence from '../../HomeEsComponents/Residence/Residence'
import Services from 'app/HomeEsComponents/Services/Services'
import Faqs from 'app/HomeEsComponents/Faqs/Faqs'
import Footer from 'app/HomeEsComponents/Footer/Footer'
import Sense from 'app/HomeEsComponents/Sense/Sense'

export default function Page(props) {
    
    const [isOpen, setIsOpen]= useState(false)

    return (
        <>
        {!isOpen? 
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
           :<Menu isOpen={isOpen} setIsOpen={setIsOpen}/> 
        } 
        <BannerHomeEn/>
        <DescriptionEs/>
        <OurHotel/>
        <Residence/>
        <Sense/>
        <Services/>
        <Faqs/>
        <Footer/>
        </>
    )
}
