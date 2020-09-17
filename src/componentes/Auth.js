class Auth {
    constructor(){
        this.authenticated = false;
        this.nombreUsuario = '';
    }
    login(cb){
        this.authenticated = true;
        cb();
    }
    logout(cb){
        this.authenticated = false;
        cb();
    }
    isAuthenticated(){
        return this.authenticated;
    }
    setNombreUsuario(usuario){
        this.nombreUsuario = usuario;
    }
    getNombreUsuario(){
        return this.nombreUsuario;
    }
}
export default new Auth();