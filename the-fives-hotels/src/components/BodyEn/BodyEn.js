import React from 'react'
import BannerHomeEn from '../BannerHome/BannerHome'
import DescriptionEn from '../Description/DescriptionEn'
import OurHotel from '../OurHotels/OurHotel'
import  Residence  from '../Residence/Residence'
import Sense from '../Sense/Sense'
import Services from '../Services/Services'

export default function BodyEn() {
  return (
    <>
      <BannerHomeEn />
      <DescriptionEn />
      <OurHotel />
      <Residence />
      <Sense />
        <Services />
    </>
  );
}
