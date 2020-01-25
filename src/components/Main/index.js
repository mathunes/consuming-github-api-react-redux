import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadingGif from '../../assets/images/loading.gif';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {},
        }

    }
    
    render() {

        let container;

        if (!this.props.user.loading) {
            if (this.props.user.found) {
                
                let {avatar_url, name, login } = this.props.user.userData;
                container = 
                    <div>
                        <img src={avatar_url} alt="Avatar" />
                        <p>{name}</p>
                        <p>{login}</p>
                    </div>

            } else {
                (this.props.user.error) ? container = <p>Usúario não encontrado</p> : container = <p>Busque um usuário</p>
            }

            
            
            
        } else {
            container = <img src={loadingGif} alt="Carregando" />
        }
        
        return (
            <div>{container}</div>
        )

    }    
}       
    
const mapStateToProps = state => ({
    user: state.searchUser
})

export default connect(mapStateToProps)(Main);
