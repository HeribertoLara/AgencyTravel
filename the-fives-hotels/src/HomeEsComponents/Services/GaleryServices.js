
import CardServices from './CardServices';
import CardServicesTwo from './CardServicesTwo';
import "../../components/Services/servicesGalery.scss"


export default function GaleryServices() {
  const images = [
    {
        title: 'BODAS',
        srcImage:"/assets/weddings",
        text: 'Celebre su día especial con estilo con nuestros exquisitos servicios de hotel para bodas. Nuestro equipo de organizadores de bodas experimentados trabajará con usted para crear una boda de ensueño que refleje su personalidad y estilo.', 
        class:'weedings__services-photo'
    },
    {
        title: 'BODAS BOUTIQUE',
        text: 'Redefinimos la manera de hacer bodas, creando experiencias que transforman este momento único en un espectáculo que resonará eternamiente en tus recuerdos.',
        class: 'weddings__boutique-weddings'
    },
    {
        title: 'SAND & SEA WEDDINGS',
        text: 'Con los pies en la arena y el corazón sincronizado al ritmo de las olas, permite que la historia de su amor se entrelace con la magia de la playa y el sol, mientras sus almas aceptan compartir la eternidad en una íntima celebración a la orilla del mar.',            
        class: 'weddings__sand-sea'
    },
    {
        title: 'SKY WEDDINGS',
        text: 'Vivan la experiencia de jurarse amor eterno en las alturas, un escenario en donde el atardecer, la luna y las vistas mágicas de la playa se convertirán en los testigos de su unión, marcando el comienzo de una vida juntos llena de belleza y amor.',
        class: 'weddings__sky-weddings'
    },
    {
        title: 'TU AMOR ES ÚNICO, ¡TU BODA TAMBIÉN!',
        text: 'Porque tu amor es único, tu boda también debería serlo, olvida las preocupaciones, déjate consentir y guiar por nuestros expertos. Te invitamos a llenar el siguiente formulario para que uno de nuestros boutique dream designers se ponga en contacto contigo y de la mano poder crear la boda de tus sueños.',
        class: 'weddings__your-love'
    },
    {
        title: 'PENTHOUSE WEDDINGS',
        text: 'Celebren su amor en la exclusividad de su propio pent-house presidencial y deléitense con un entorno sublime, íntimo y acogedor para hacer de su unión un día memorable.',
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
