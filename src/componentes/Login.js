import React from 'react';
import '../style/login.css';
import auth from './Auth';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarioLogin: '',
            passwordLogin: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        let usuarioLogin = this.state.usuarioLogin.value;
        let passwordLogin = this.state.passwordLogin.value;
        console.log(usuarioLogin,passwordLogin)
        try {
            await fetch('https://sigapdev2-cargapagos-back.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username": usuarioLogin, "password": passwordLogin})
            }).then(res => res.json())
                .then(res => {
                    if(res === true){
                        auth.login(()=>{
                            this.props.history.push('/modulo-carga');
                        });
                    }else{
                        alert("Datos Incorrectos.");
                    }
                }).catch(error => {
                    console.log("Problemas de conexión");
                }); 
        } catch (error) {
            alert("datos incorrectos")
        }
    }

    render() {
        return (
            <div className="login">
                <div className="login__card">
                    <div className="login__card--head">
                        <div className="login__card--title">
                            MÓDULO DE CARGA
                        </div>
                    </div>
                    <div className="login__card--body">
                        <div className="row">
                            <div className="col-xs-12">
                                <input type="text" name="fname" placeholder="Ingrese el Usuario."
                                       ref={(c) => this.state.usuarioLogin = c}/>
                            </div>
                        </div>
                        <div className="spacer"></div>
                        <div className="row">
                            <div className="col-xs-12">
                                <input type="password" name="fname" placeholder="Ingrese su contraseña."
                                       ref={(c) => this.state.passwordLogin = c}/>
                            </div>
                        </div>
                        <div className="spacer"></div>
                        <div className="row">
                            <div className="col-xs-12">
                                <button className="login__card--btn" onClick={this.onSubmit}>Ingresar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;