import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadingGif from '../../assets/images/loading.gif';
import './style.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {},
        }

    }
    
    render() {

        let container;

        if (!this.props.user.loading) { //Verificando se é necessário ativar o gif de carregamento
            if (this.props.user.found) { //Veruficando se o usuário foi encontrado
                console.log(this.props.user);
                let {avatar_url, name, login, followers, following, location, dataRepos:repositories } = this.props.user.userData;
                container = 
                    <div>
                        <img src={avatar_url} alt="Avatar" />
                        <h1>{name}</h1>
                        <p>{login}</p>
                        <p>Seguidores: {followers}</p>
                        <p>Seguindo: {following}</p>
                        <p>{location}</p>
                        <ul>
                            {repositories.map((repositorie) => {
                                return (
                                    <li key={repositorie.id}>
                                        <h3>{repositorie.name}</h3>
                                        <h4>{repositorie.description}</h4>
                                        <a href={repositorie.html_url} target="_Blank">{repositorie.html_url}</a>
                                        <p>Linguagem: {repositorie.language}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

            } else {
                (this.props.user.error) ? container = <p className="message-main">Usuário não encontrado</p> : container = <p className="message-main">Busque um usuário</p> //Verificando se houve erro
            }

        } else {
            container = <img src={loadingGif} alt="Carregando" />
        }
        
        return (
            <main>{container}</main>
        )

    }    
}       
    
const mapStateToProps = state => ({
    user: state.searchUser
})

export default connect(mapStateToProps)(Main);
