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

        if (!this.props.user.loading) { //Verificando se é necessário ativar o gif de carregamento
            if (this.props.user.found) { //Veruficando se o usuário foi encontrado
                console.log(this.props.user);
                let {avatar_url, name, login, dataRepos:repositories } = this.props.user.userData;
                container = 
                    <div>
                        <img src={avatar_url} alt="Avatar" />
                        <h1>{name}</h1>
                        <p>{login}</p>
                        <ul>
                            {repositories.map((repositorie) => {
                                return (
                                    <li key={repositorie.id}>
                                        {repositorie.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

            } else {
                (this.props.user.error) ? container = <p>Usúario não encontrado</p> : container = <p>Busque um usuário</p> //Verificando se houve erro
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
