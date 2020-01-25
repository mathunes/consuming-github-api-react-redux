import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadingGif from '../../assets/images/loading.gif';
import './style.css';
import RepositorieCard from '../RepositorieCard';

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
                    <div className="container">
                        <div className="personal-data">
                            <img src={avatar_url} alt="Avatar" />
                            <h2>{name}</h2>
                            <h3><a href={login} target="_Blank">{login}</a></h3>
                            <div className="follow">
                                <p>Seguidores: {followers}</p>
                                <p>Seguindo: {following}</p>
                            </div>
                            <p>{location}</p>
                        </div>
                        <div className="repositories-data">
                            <ul>
                                {repositories.map((repositorie) => {
                                    return (
                                        <li key={repositorie.id}>
                                            <RepositorieCard repoData={repositorie} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
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
