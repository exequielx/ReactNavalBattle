import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="text-center">
                <form className="form-signin">
                    <img className="mb-4" src={require('../../images/barco-que-hace-aguas.gif')} alt="" width="250" height="250"/>
                    <h1 className="h3 mb-3 font-weight-normal">Iniciar sesión</h1>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Correo electrónico" required />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar</button>
                </form>
            </div>
        );
    }
}

export default Login;