
import CardServices from './CardServices';
import CardServicesTwo from './CardServicesTwo';
import "./servicesGalery.scss"


export default function GaleryServices() {
  const images = [
    {
        title: 'WEDDINGS',
        srcImage:"/assets/weddings",
        text: 'Celebrate your special day in style with our exquisite hotel wedding services. Our team of experienced wedding planners will work with you to create a dream wedding that reflects your personality and styleclass:', class:'weedings__services-photo'
    },
    {
        title: 'BOUTIQUE WEDDINGS',
        text: 'Celebrate your special day in style with our exquisite hotel wedding services. Our team of experienced wedding planners will work with you to create a dream wedding that reflects your personality and style.',
        class: 'weddings__boutique-weddings'
    },
    {
        title: 'SAND & SEA WEDDINGS',
        text: 'With their feet in the sand and their hearts synchronized to the rhythm of the waves, they let the story of their love intertwine with the magic of the beach and the sun as their souls agree to share eternity in an intimate seaside celebration.',            
        class: 'weddings__sand-sea'
    },
    {
        title: 'SKY WEDDINGS',
        text: 'Live the experience of vowing eternal love in the heights, a scenario where the sunset, the moon, and the magical views of the beach will be the witnesses of your union, marking the beginning of a life together full of beauty and love.',
        class: 'weddings__sky-weddings'
    },
    {
        title: 'YOUR LOVE IS UNIQUE, YOUR WEDDING TOO!',
        text: 'Because your love is unique, your wedding should be unique as well, so forget the worries, let yourself be pampered and guided by our experts. We invite you to fill out the following form so that one of our boutique dream designers can contact you and together we can create the wedding of your dreams.',
        class: 'weddings__your-love'
    },
    {
        title: 'PENTHOUSE WEDDINGS',
        text: 'Celebrate your love in the exclusivity of your own Presidential Penthouse and enjoy a sublime, intimate, and cozy setting to make your union a memorable day.',
        class: 'weddings__penthouse-weddings'
    }
]
    return (
      <article 
      className='galery__services'
      >
        <CardServices image={images[0]}/>
        <CardServicesTwo image={images[1]}/>
        <CardServices image={images[2]}/>
        <CardServices image={images[3]}/>
        <CardServicesTwo image={images[4]}/>
        <CardServices image={images[5]}/> 
      </article>
    );
}
