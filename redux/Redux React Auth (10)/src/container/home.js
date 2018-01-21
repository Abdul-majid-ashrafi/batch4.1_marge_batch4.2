import React from 'react';
import { connect } from 'react-redux'

import { HomeComponent } from '../components/home';

class HomeContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log("Home", this.props.authReducer)
        return (
            <div>
                <HomeComponent />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authReducer: state.UserReducer
    }
}

export default connect(mapStateToProps, null)(HomeContainer)

