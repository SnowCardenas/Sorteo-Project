import "./Admin.css";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { CiBitcoin } from "react-icons/ci";

import Avatar from "../assets/avatar.jpg";

export default function Admin() {
  return (
    <div className="admin-body">
      <header className="header-admin">
        <div className="logo-admin">
          <a href="#" className="logo">
            Rifas <span className="tree">Oscar</span>
          </a>
          <div className="search_box-admin">
            <input type="text" placeholder="Search EasyPay" />
            <FaSearch className="icon-search-admin" size={30} />
          </div>
        </div>
        <div className="header-icons-admin">
          <FaBell className="icon-bell-admin" />
          <div className="account">
            <img src={Avatar} alt="Imagen Avatar" />
            <h4>Jhon Viek</h4>
          </div>
        </div>
      </header>
      <div className="container-admin">
        <nav className="navbar-admin">
          <div className="side_navbar-admin">
            <span>Main Menu</span>
            <a href="#" className="active">
              Dashboard
            </a>
            <a href="#">Customers</a>
            <a href="#">Messages</a>
            <a href="#">Help</a>
            <a href="#">Settings</a>
            <a href="#">Password</a>
            <a href="#">Sign Out</a>
          </div>
        </nav>
        <div className="main-body-admin">
          <h2>Dashboard</h2>
          <div className="promo_card-admin">
            <div className="card-admin">
              <h3>1042</h3>
              <p>Daily Views</p>
              <FaRegEye className="icon-admin-card" size={30} />
            </div>
            <div className="card-admin">
              <h3>80</h3>
              <p>Sales</p>
              <FaShoppingCart className="icon-admin-card" size={30} />
            </div>
            <div className="card-admin">
              <h3>208</h3>
              <p>Stock</p>
              <IoTicketOutline className="icon-admin-card" size={30} />
            </div>
            <div className="card-admin">
              <h3>$6000</h3>
              <p>Earnings</p>
              <CiBitcoin className="icon-admin-card" size={30} />
            </div>
          </div>
          <div className="history_lists-admin">
            <div className="list1">
              <div className="row-admin">
                <h4>History</h4>
              </div>
              <table className="table-admin">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Dates</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Ammount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2, Aug, 2022</td>
                    <td>Sam Tonny</td>
                    <td>Premimum</td>
                    <td>$2000.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>29, July, 2022</td>

                    <td>Code Info</td>
                    <td>Silver</td>
                    <td>$5,000.00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>15, July, 2022</td>

                    <td>Jhon David</td>
                    <td>Startup</td>
                    <td>$3000.00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>5, July, 2022</td>
                    <td>Salina Gomiz</td>
                    <td>Premimum</td>
                    <td>$7000.00</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>29, June, 2022</td>
                    <td>Gomiz</td>
                    <td>Gold</td>
                    <td>$4000.00</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>28, June, 2022</td>
                    <td>Elyana Jhon</td>
                    <td>Premimum</td>
                    <td>$2000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="list2">
              <div className="row-admin">
                <h4>Documnets</h4>
              </div>
              <table className="table-admin">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Uplaoded</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CNIC</td>
                    <td>PDF</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Passport</td>
                    <td>PDF</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Licence</td>
                    <td>PDF</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Pic</td>
                    <td>Jpg</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CNIC</td>
                    <td>Jpg</td>
                    <td>22</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Docx</td>
                    <td>Word</td>
                    <td>22</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="sidebar-admin">
          <h4>Account Balance</h4>

          <div className="balance">
            <i className="fas fa-dollar icon"></i>
            <div className="info">
              <h5>Dollar</h5>
              <span>
                <i className="fas fa-dollar"></i>25,000.00
              </span>
            </div>
          </div>

          <div className="balance-admin">
            <i className="fa-solid fa-rupee-sign icon"></i>
            <div className="info">
              <h5>PKR</h5>
              <span>
                <i className="fa-solid fa-rupee-sign"></i>300,000.00
              </span>
            </div>
          </div>
          <div className="balance">
            <i className="fas fa-euro icon"></i>
            <div className="info">
              <h5>Euro</h5>
              <span>
                <i className="fas fa-euro"></i>25,000.00
              </span>
            </div>
          </div>
          <div className="balance">
            <i className="fa-solid fa-indian-rupee-sign icon"></i>
            <div className="info">
              <h5>INR</h5>
              <span>
                <i className="fa-solid fa-indian-rupee-sign"></i>220,000.00
              </span>
            </div>
          </div>
          <div className="balance">
            <i className="fa-solid fa-sterling-sign icon"></i>
            <div className="info">
              <h5>Pound</h5>
              <span>
                <i className="fa-solid fa-sterling-sign"></i>30,000.00
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
