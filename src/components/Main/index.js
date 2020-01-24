import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <button onClick={() => {console.log(this.props)}}>Click</button>
        )
    }    
}       
    


const mapStateToProps = state => ({
    user: state.searchUser
})

export default connect(mapStateToProps)(Main);
