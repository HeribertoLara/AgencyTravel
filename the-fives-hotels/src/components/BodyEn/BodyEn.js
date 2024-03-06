import React from 'react'
import BannerHomeEn from '../BannerHome/BannerHome'
import DescriptionEn from '../Description/DescriptionEn'
import OurHotel from '../OurHotels/OurHotel'
import  Residence  from '../Residence/Residence'
import Sense from '../Sense/Sense'
import Services from '../Services/Services'
import Faqs from '../Faqs/Faqs'
import Footer from '../Footer/Footer'

export default function BodyEn() {
  return (
    <>
      <BannerHomeEn />
      <DescriptionEn />
      <OurHotel />
      <Residence />
      <Sense />
      <Services />
      <Faqs/>
      <Footer/>
    </>
  );
}
