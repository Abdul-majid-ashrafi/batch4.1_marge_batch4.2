import React, { Component } from 'react';

// export class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="alert alert-success">
//           <form onSubmit={this.props._submit}>
//             <input type="text" name="userName" value={this.props.isState.userName} onChange={this.props._eventHandler} /> <br />
//             <input type="text" name="email" value={this.props.isState.email} onChange={this.props._eventHandler} /> <br />
//             <input type="text" name="pass" onChange={this.props._eventHandler} value={this.props.isState.pass} /> <br />
//             <button>Submit</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

export const App = (prop) => {
  return (

    <div className="App">
    <div className="alert alert-success">
      <form onSubmit={prop._submit}>
        <input type="text" name="userName" value={prop.isState.userName} onChange={prop._eventHandler} /> <br />
        <input type="text" name="email" value={prop.isState.email} onChange={prop._eventHandler} /> <br />
        <input type="text" name="pass" onChange={prop._eventHandler} value={prop.isState.pass} /> <br />
        <button>Submit</button>
      </form>
    </div>
  </div>
  )
}

// export default App