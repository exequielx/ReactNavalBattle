import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="text-center">
            <form className="form-signin">
                <img className="mb-4" src="ship.png" alt="" width="200" height="200"></img>
                <h1 className="h3 mb-3 font-weight-normal">Iniciar sesión</h1>
                <input type="email" id="inputEmail" className="form-control" placeholder="Correo electrónico" required autofocus />
                <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar</button>
            </form>
        </div>
    );
}

export default Login;