import "./App.css";
import ethereum from "./assets/ethereum.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import play5 from "./assets/play5.png";
import { Buttom } from "./components/Buttom";

const imgSorteo = [
  {
    imagen: { play5 },
    title: "Playstation 5",
    alt: "Imagen play 5",
  },
  {
    imagen: { play5 },
    title: "Playstation 5",
    alt: "Imagen play 5",
  },
];

function App() {
  return (
    <>
      <section id="home">
        <div className="content">
          <h2>
            Oscar <span>Herrera</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum natus reiciendis obcaecati ullam dicta
            voluptatibus maiores cupiditate sequi tempora repellendus, porro laboriosam blanditiis. Minima quod
            consequuntur molestias delectus corrupti maiores.
          </p>
          <a href="#" className="btn">
            Contact Us
          </a>
        </div>
        <img src={ethereum} className="eth" alt="Ethereum" />
      </section>
      <section id="services">
        <div className="secText">
          <h2>
            <span>Nuestros</span> Sorteos
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ducimus iste totam hic illo animi
            minus, molestias vero, numquam veniam iure architecto possimus iusto, repudiandae sit? Porro nisi optio
            quam.
          </p>
        </div>
        <div className="content">
          {imgSorteo.map((imagen, index) => (
            <div key={index} className="servicesBx">
              <img src={imagen.imagen.play5} alt={imagen.alt} />
              <h3>{imagen.title}</h3>
            </div>
          ))}
        </div>
        <div className="center">
          <a href="#" className="btn">
            Comprar
          </a>
        </div>
      </section>
      <section id="tickets">
        <div className="secText">
          <h2>Sorteo</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ducimus iste totam hic illo animi
            minus, molestias vero, numquam veniam iure architecto possimus iusto, repudiandae sit? Porro nisi optio
            quam.
          </p>
        </div>
        <div className="content center">
          <form id="formulario" className="container formu">
            <div className="form-group">
              <label htmlFor="nombre" className="label">
                Nombre:
              </label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos" className="label">
                Apellidos:
              </label>
              <input type="text" id="apellidos" name="apellidos" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono" className="label">
                Número de Teléfono:
              </label>
              <input type="tel" id="telefono" name="telefono" required />
            </div>
            <div className="form-group">
              <label htmlFor="correo" className="label">
                Correo Electrónico:
              </label>
              <input type="email" id="correo" name="correo" required />
            </div>
            <div className="form-group">
              <label htmlFor="numero_rifas" className="label">
                ¿Cuántos números de la rifa quiere?
              </label>
              <div className="botones-numero">
                <button type="button" className="boton-numero" data-valor="2">
                  +2
                </button>
                <button type="button" className="boton-numero" data-valor="5">
                  +5
                </button>
                <button type="button" className="boton-numero" data-valor="10">
                  +10
                </button>
                <button type="button" className="boton-numero" data-valor="20">
                  +20
                </button>
              </div>
              <input
                type="number"
                id="numero_rifas"
                name="numero_rifas"
                required
                min="1"
                max="100"
                value="0"
                placeholder="0"
              />
            </div>
            <Buttom className="boton-submit" />
            {/* <button type="submit" className="boton">
              Obtener
            </button> */}
          </form>
          <div id="modal" className="modal">
            <div className="modal-content">
              <h2>Tus números de la rifa son:</h2>

              <main>
                <ul id="numeros"></ul>
              </main>
              <footer>
                <button type="button" className="boton" id="cerrar-modal">
                  Cerrar
                </button>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us">
        <div className="secText">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ducimus iste totam hic illo animi
            minus, molestias vero, numquam veniam iure architecto possimus iusto, repudiandae sit? Porro nisi optio
            quam.
          </p>
        </div>
        <div className="content">
          <a href="#">
            <CiMail className="ion-icon" size={40} /> example@mail.name
          </a>
          <a href="#">
            <FaInstagram className="ion-icon" size={40} /> +123 456 789 000
          </a>
          <a href="#">
            <PiTelegramLogo className="ion-icon" size={40} />
            Telegram
          </a>
          <a href="#">
            <FaWhatsapp className="ion-icon" size={40} /> WhatsApp
          </a>
        </div>
        <div className="center">
          <p className="copyrights">
            Copyright © 2023 <a href="#">SnowDev</a>. All Right Reserved.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
