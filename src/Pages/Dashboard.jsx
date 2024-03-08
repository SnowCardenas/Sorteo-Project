import "./Dashboard.css"; 
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import Avatar from "../assets/AvatarFoto.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Page404 } from "../components/Page404";

export default function Admin() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [tickets, setTickets] = useState({});
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState({});

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("/ticket/allTickets")
      .then((response) => setTickets(response.data));
  }, [updateTrigger]);

  const createTickets = async () => {
    try {
      const response = await axios.post("/ticket/createTickets");
      alert("Creados exitosamente");
      setUpdateTrigger(!updateTrigger);
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data);
    }
  };

  const deleteTickets = async () => {
    try {
      const response = await axios.delete("/ticket/deleteAllTickets");
      alert(response.data);
      setUpdateTrigger(!updateTrigger);
      setSearchResult({});
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/ticket/search/${search}`);
      setSearchResult(response.data);
    } catch (error) {
      console.log(error);
      alert("Error al buscar el ticket");
    }
  };

  const logOut = async () => {
    try {
      const response = await axios.post("/user/logout");
      navigate("/signIn");
    } catch (error) {
      alert(error.response.data);
    }
  };

  const activeMenu = ()=>{
    let toggle = document.querySelector(".toggle")
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }

  const renderDontUser = () => <Page404 />;
  const renderUser = () => <>
    <div className="container">
    <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="ticket-outline"></ion-icon>
                        </span>
                        <span class="title title-1">Rifas <span class="title-2">Oscar</span></span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="title">Generar Tickets</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="title">Borrar Tickets</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span class="title">Salir</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="main">
            <div class="topbar">
                <div class="toggle" onClick={activeMenu}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div class="search">
                    <label>
                        <input onChange={onSearchChange} type="text" placeholder="Search Ticket" />
                        <FaSearch onClick={handleSearch} className="icon-search-admin icon" size={30} />
                    </label>
                </div>

                <div class="user">
                    <img src={Avatar} alt=""/>
                </div>
            </div>

            <div class="cardBox">
                <div class="card">
                    <div>
                    {searchResult && (
                <div key={searchResult._id}>
                  <h3>Ticket: #{searchResult.ticketNumber}</h3>
                  <h3>Nombre: {searchResult.buyerName}</h3>
                  <h3>Correo: {searchResult.buyerEmail}</h3>
                  <h3>Telefono: {searchResult.buyerPhone}</h3>
                  <FaRegEye className="icon-admin-card search-ticket" size={30} />
                </div>
              )}
                    </div>

                    
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">80</div>
                        <div class="cardName">Ventas</div>
                    </div>
                 <FaShoppingCart className="icon-admin-card" size={30} />
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">920</div>
                        <div class="cardName">Tickets Disponibles</div>
                    </div>
                    <IoTicketOutline className="icon-admin-card" size={30} />
                </div>
            </div>

            <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Recent Orders</h2>
                    </div>

                    <table>
                    <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.soldTickets &&
                    tickets.soldTickets
                      .filter((ticket) => ticket.buyerEmail)
                      .slice(0, 20)
                      .map((ticket, index) => {
                        return (
                          <tr key={ticket._id}>
                            <td>{index + 1}</td>
                            <td>{ticket.buyerName}</td>
                            <td>{ticket.buyerEmail}</td>
                            <td>{ticket.buyerPhone}</td>
                          </tr>
                        );
                      })}
                </tbody>
                    </table>
                </div>

                <div class="recentCustomers">
                    <div class="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>

                    <table className="table-admin">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Ticket Number</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.soldTickets &&
                    tickets.soldTickets
                      .filter((ticket) => ticket.buyerEmail)
                      .slice(0, 20)
                      .map((ticket, index) => {
                        return (
                          <tr key={ticket._id}>
                            <td>{index + 1}</td>
                            <td>{ticket.buyerName}</td>
                            <td>{ticket.ticketNumber}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
                </div>
            </div>
        </div>
    </div>
  </>;
  return (
    <div className="admin-body">{user ? renderUser() : renderDontUser()}</div>
  );
}
