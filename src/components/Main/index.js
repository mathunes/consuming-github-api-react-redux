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

        let containerShow;

        if (!this.props.user.loading) {
            let {avatar_url, name, login } = this.props.user.userData;
            containerShow = 
                <div>
                    <img src={avatar_url} alt="Avatar" />
                    <p>{name}</p>
                    <p>{login}</p>
                </div>
            
            
        } else {
            containerShow = <img src={loadingGif} alt="Carregando" />
        }
        
        return (
            <div>{containerShow}</div>
        )

    }    
}       
    
const mapStateToProps = state => ({
    user: state.searchUser
})

export default connect(mapStateToProps)(Main);
