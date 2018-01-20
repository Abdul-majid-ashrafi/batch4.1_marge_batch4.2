import React from 'react';

export class AppComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <h1>{this.props.userName}</h1>
            </div>
        )
    }
}

