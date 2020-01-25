import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            console.log(avatar_url);
            containerShow = 
                <div>
                    <img src={avatar_url} alt="Avatar" />
                    <p>{name}</p>
                    <p>{login}</p>
                </div>
            
            
        } else {
            containerShow = <p>Loading...</p>
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
