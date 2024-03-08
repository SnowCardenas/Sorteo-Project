import "./Home.css";
import AvatarFoto from "../assets/AvatarFoto.png";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import cienmil from "../assets/100mil.png";
import Ticket from "../assets/Ticket.png"
import { Buttom } from "../components/Buttom";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import axios from "axios";

const imgSorteo = [
  {
    imagen: { cienmil },
    title: "100mil Pesos",
    alt: "Imagen 100mil pesos Colombianos",
  },
];

const imgTicket = [
  {
    imagen: { Ticket },
    title: "Ticket",
    alt: "Imagen Ticket",
  },
];

function Home() {
  const [name, setName] = useState("");
  //const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  /* const onChangeLastName = (e) => {
    setLastName(e.target.value);
  }; */

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tickets === 0) {
      return console.log("necesitas comprar un ticket");
    }
    try {
      const response = await axios.post("/ticket/buyTickets", {
        buyerName: name,
        buyerEmail: email,
        buyerPhone: phone,
        quantity: tickets,
      });

      if(response.status == 200){
        setOpenModal(!openModal);
        setData(response.data);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTickets = (monto) => {
    const newTickets = tickets + monto;
    setTickets(newTickets);
  };
  const handleResetTickets = () => {
    setTickets(0);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
    setData("");
  };

  return (
    <>
      <Navbar />
      <section id="home">
        <div className="content">
          <h2>
            Oscar <span>Herrera</span>
          </h2>
          <p>
          ¡Bienvenidos a la plataforma de sorteos de Oscar Herrera!  Sumérgete en la emoción de los premios y sorpresas. Descubre una experiencia única de sorteos confiables y seguros. Únete a nuestra comunidad y comienza a ganar fabulosos premios hoy mismo.
          </p>
          <a href="#contact-us" className="buttom-submit">
            Contacto
          </a>
        </div>
        <img src={AvatarFoto} className="eth" alt="Ethereum" />
      </section>
      <section id="services">
        <div className="secText">
          <h2>
            <span>Nuestros</span> Sorteos
          </h2>
          <p>
          ¡Participa en nuestro primer sorteo inaugural y gana cien mil pesos colombianos! 🎉🤑 ¡Es tu oportunidad de ganar un gran premio mientras celebramos juntos este emocionante comienzo! No te pierdas esta oportunidad única. ¡Únete ahora y sé parte de la diversión! 💰🎁 #SorteoInaugural #GranPremio #GanaConNosotros"
          </p>
        </div>
        <div className="content">
          {imgSorteo.map((imagen, index) => (
            <div key={index} className="servicesBx">
              <img src={imagen.imagen.cienmil} alt={imagen.alt} />
              <h3>{imagen.title}</h3>
            </div>
          ))}
        </div>
        <div className="center">
          <a href="#tickets" className="buttom-submit">
            Comprar
          </a>
        </div>
      </section>
      <section id="tickets">
        <div className="secText">
          <h2>Sorteo</h2>
          <p>
          ¡Obtén tus boletos para el sorteo llenando el siguiente formulario! Selecciona la cantidad de boletos que deseas, luego haz clic en "Obtener" para recibir tus números de boleto. Puedes anotarlos para tenerlos a mano ¡o simplemente espera a que lleguen a tu correo electrónico! ¡Participa ahora y aumenta tus posibilidades de ganar! 🎟️🎉
          </p>
        </div>
        <div className="content center">
          {/*Formulario*/}
          <form onSubmit={handleSubmit} id="formulario" className="container formu">
            <div className="form-group">
              <label htmlFor="nombre" className="label">
                Nombre Completo:
              </label>
              <input
                onChange={onChangeName}
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese su Nombre y Apellido..."
                required
              />
            </div>
            {/*   <div className="form-group">
              <label htmlFor="apellidos" className="label">
                Apellidos:
              </label>
              <input
                onChange={onChangeLastName}
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Ingrese su apellido..."
                required
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="telefono" className="label">
                Número de Teléfono:
              </label>
              <input
                onChange={onChangePhone}
                type="number"
                id="telefono"
                name="telefono"
                placeholder="Ingrese N° de telefono..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo" className="label">
                Correo Electrónico:
              </label>
              <input
                onChange={onChangeEmail}
                type="email"
                id="correo"
                name="correo"
                placeholder="Ingrese su correo..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numero_rifas" className="label">
                ¿Cuántos números de la rifa quiere?
              </label>
              <div className="botones-numero">
                <button onClick={() => handleAddTickets(1)} type="button" className="boton-numero">
                  +1
                </button>
                <button onClick={() => handleAddTickets(2)} type="button" className="boton-numero">
                  +2
                </button>
                <button onClick={() => handleAddTickets(5)} type="button" className="boton-numero">
                  +5
                </button>
                <button onClick={() => handleAddTickets(10)} type="button" className="boton-numero">
                  +10
                </button>
                <button onClick={() => handleAddTickets(20)} type="button" className="boton-numero">
                  +20
                </button>
                <button onClick={handleResetTickets} type="button" className="boton-numero">
                  Reset
                </button>
              </div>
              <div className="numero_rifas">{tickets}</div>
            </div>
            <Buttom tickets={tickets} className="boton-submit" />
          </form>
          {/*Modal*/}
          <div id="modal" className={`${openModal ? "modal-open" : "modal-hidden"}`}>
            <div className="modal-content">
              <h2>Tus números de la rifa son:</h2>
              <div className="ticket-container">
                  <p className="ticket-number"> {data.split(".")[0]}</p>
                    {imgTicket.map((imagen, index) => (
                    <img key={index} src={imagen.imagen.Ticket} alt={imagen.alt} className="ticket-img"/>
                    ))}
                  <p> {data.split(".")[1]}</p>
              </div>
              <main>
                <ul id="numeros"></ul>
              </main>
              <footer>
                <button onClick={handleModal} type="button" className="boton" id="cerrar-modal">
                  Cerrar
                </button>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us">
        <div className="secText">
          <h2>Contacto</h2>
          <p>
          ¡Conéctate con nosotros a través de nuestras redes sociales! Visita los siguientes enlaces para acceder a nuestras plataformas. ¡Te esperamos en nuestras redes para estar siempre en contacto! 🌐✉️
          </p>
        </div>
        <div className="content">
          <a href="#">
            <CiMail className="ion-icon" size={40} /> Correo
          </a>
          <a href="https://www.instagram.com/oscarherrera491/" target="_blank">
            <FaInstagram className="ion-icon" size={40} /> Instagram
          </a>
          <a href="https://t.me/Oscarherrerar" target="_blank">
            <PiTelegramLogo className="ion-icon" size={40} />
            Telegram
          </a>
          <a href="#">
            <FaWhatsapp className="ion-icon" size={40} /> WhatsApp
          </a>
        </div>
        <div className="center">
          <p className="copyrights">
            Copyright © 2024 <a href="https://twitter.com/SnowCardenas" target="_blank">SnowDev</a>. All Right Reserved.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
