import React from 'react';

export class LoginComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log(this.props.auth)
        return (
            <div>
                <button onClick={this.props._login}>Login </button>
                <h1>Login pAGE....</h1>
            </div>
        )
    }
}

