import React, { Component } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Apps, { AboutComponent, HomeComponent } from './App';
// import registerServiceWorker from './registerServiceWorker';



class MainComponet extends Component {
    render() {
        return (
            <div className="App">
                <HomeComponent
                    data={this.props.data + " World"} />
                {/* <h2>Hi reactsst</h2> */}
            </div>
        );
    }
}

ReactDOM.render(<MainComponet data=" hello" />, document.getElementById('root'));
// registerServiceWorker();
