import './Login.css';
import React, { Component } from 'react';
import whithFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };

class Login extends Component
{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        const {user, signOut, signInWithGoogle} = this.props;
        
        return (
            <div className="text-center">      
                <h1>Batalla Naval</h1>
                <img className="mb-4" src={require('../../images/barco-que-hace-aguas.gif')} alt="" width="250" height="250" />
                <div>
                {
                    user ? <h4>Bienvenido, {user.displayName}</h4> : <h4>Iniciar Sesión</h4> 
                }
                </div>
                <div>    
                {
                    user ? <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={signOut}>Salir</button>
                         : <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={signInWithGoogle}>Ingresar con google</button>
                }
                </div>
            </div>
        );
    }
}

export default whithFirebaseAuth({ providers, firebaseAppAuth }) (Login);