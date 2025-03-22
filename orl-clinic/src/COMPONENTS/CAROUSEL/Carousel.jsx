import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import './Carousel.css'; 
import Cavity from "../../assets/dental-cavity.png";
import Brush from "../../assets/profesional-brush.png";
import Consult from "../../assets/consult.png";
import Canal from "../../assets/canal.png";
import Coroane from "../../assets/coroane.png";
import Proteze from "../../assets/proteze.png";
import Fatete from "../../assets/fatete.png";
import Chirurgie from "../../assets/chirurgie.png";
import DintiFicsi from "../../assets/dintiFicsi.png";
import Implant from "../../assets/implant.png";
import Ortodontie from "../../assets/ortodontie.png";
import Albire from "../../assets/albire.png";
import Parodontologie from "../../assets/parodontologie.png";

const services = [
  {
    title: 'Parodontologie',
    description:"Tratamente specializate pentru prevenirea, diagnosticarea și tratarea bolilor gingiilor și a structurilor de susținere a dinților. Beneficii: Previne pierderea dinților, tratează afecțiunile gingivale și îmbunătățește sănătatea generală a cavității bucale.",
    image: Parodontologie
  },
  {
    title: 'Albire dentara',
    description:"Procedura de iluminare a nuanței dinților folosind agenți de albire speciali si neinvazivi. Beneficii: Oferă un zâmbet mai alb și mai strălucitor, îmbunătățind încrederea în sine.",
    image: Albire
  },
  {
    title:"Ortodontie",
    description:"Corectarea alinierii dinților și a mușcăturii folosind aparate dentare fixe sau mobile. Beneficii: Îmbunătățește estetica zâmbetului, sănătatea orală și funcționalitatea dentară, și previne problemele ortodontice viitoare.",
    image: Ortodontie
  },
  {
    title:"Implanturi dentare",
    description:"Rădăcini dentare artificiale din titan inserate în osul maxilar pentru a susține coroane, punți sau proteze dentare. Beneficii: Înlocuiesc dinții lipsă cu soluții durabile și stabile, mențin integritatea osului maxilar și oferă o funcționalitate similară dinților naturali.",
    image: Implant
  },
  {
    title:"Dinti Ficsi in 24h",
    description:"Procedura implică inserarea implanturilor dentare și fixarea unei proteze temporare în aceeași zi, oferind pacienților dinți ficși imediat. Beneficii: Oferă restaurare rapidă a funcției masticatorii și a esteticii dentare, reduce timpul de așteptare pentru pacienți și îmbunătățește imediat calitatea vieții.",
    image: DintiFicsi
  },
  {
    title:"Chirurgie Orala si Maxilo-Faciala",
    description:"Intervenții chirurgicale care includ extracții dentare complexe, excizii de chisturi și tumori, și tratamente ale fracturilor faciale. Beneficii: Tratarea afecțiunilor severe, prevenirea complicațiilor și refacerea funcției și structurii faciale normale.",
    image: Chirurgie
  },
  {
    title:"Fatete Dentare",
    description:"Fațetele sunt coji subțiri confectionate din diverse materiale (E-max, Empress, zirconiu) care se aplică pe suprafața frontală a dinților pentru a îmbunătăți aspectul acestora. Beneficii: Îmbunătățesc estetica zâmbetului, corectează imperfecțiunile dentare precum pete, fisuri sau dinți strâmbi și oferă un zâmbet uniform și strălucitor.",
    image: Fatete
  },
  {
    title:"Proteze Dentare",
    description:"Dispozitive amovibile sau fixe care înlocuiesc dinții lipsă și țesuturile înconjurătoare. Beneficii: Refacerea completă a funcției masticatorii și estetice, îmbunătățirea vorbirii și a confortului general.",
    image: Proteze
  },
  {
    title:"Coroane dentare și Punți Dentare",
    description:"Coroanele sunt capace personalizate care acoperă dinții deteriorați, iar punțile sunt folosite pentru a înlocui unul sau mai mulți dinți lipsă, sprijinindu-se pe dinții adiacenți. Beneficii: Refacerea esteticii și funcționalității dentare, întărirea structurii dentare și îmbunătățirea mușcăturii și masticației.",
    image: Coroane
  },
  {
    title:"Endodonție (Tratament de Canal)",
    description:"Procedură care implică îndepărtarea pulpei infectate sau inflamate din interiorul dintelui, curățarea și dezinfectarea canalelor radiculare și sigilarea acestora. Beneficii: Salvează dintele de la extracție, elimină durerea și infecția, și permite restaurarea funcției normale a dintelui.",
    image: Canal
  },
  {
    title:"Tratament Carii dentare (Obturații)",
    description:"Tratamentul cariilor implică îndepărtarea țesutului dentar afectat și umplerea cavităților rezultate cu materiale speciale precum compozitul. Beneficii: Previne extinderea cariilor, restabilește funcția normală a dintelui afectat și îmbunătățește estetica dentară.",
    image: Cavity
  },
  {
    title:"Igienizare Dentară, Detartraj, Airflow și Periaj Profesional",
    description:"Procedura de curățare a dinților prin îndepărtarea plăcii bacteriene și a tartrului acumulat pe suprafața dinților și sub gingii, urmată de un periaj profesional. Beneficii: Previne bolile parodontale, îmbunătățește sănătatea gingiilor, reduce riscul de carii și oferă un zâmbet mai curat și mai strălucitor.",
    image: Brush
  },
  {
    title:"Consult Stomatlogic",
    description:"Evaluarea inițială a sănătății orale a pacientului. Include examinarea dinților, gingiilor și a cavității bucale folosind instrumente speciale. Beneficii: Ajută la identificarea timpurie a problemelor dentare, permite planificarea tratamentelor necesare și oferă recomandări pentru îngrijirea orală personalizată.",
    image: Consult
  }

];

export default function Carousel() {
    return (
        <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,  // pe telefoane va fi 1 slide
          },
          768: {
            slidesPerView: 2,  // pe tablete va fi 2 slide-uri
          },
          1024: {
            slidesPerView: 3,  // pe ecrane mari va fi 3 slide-uri
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    );
  }
