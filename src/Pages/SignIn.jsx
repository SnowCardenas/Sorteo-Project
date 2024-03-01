import { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <div className="signIn-body">
      <div className="box-login">
        <form onSubmit={handleSubmit} className="form-login">
          <h2>Login</h2>
          <div className="inputBx-login">
            <span></span>
            <input onChange={onChangeEmail} type="text" placeholder="Usuario" />
          </div>
          <div className="inputBx-login">
            <span></span>
            <input onChange={onChangePassword} type="password" placeholder="Contraseña" />
          </div>
          <div className="inputBx-login">
            <input className="submit-login" type="submit" value="Iniciar Sesion" />
          </div>
        </form>
      </div>
    </div>
  );
}
