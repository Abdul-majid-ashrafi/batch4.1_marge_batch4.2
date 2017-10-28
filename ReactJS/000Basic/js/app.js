// ReactDOM.render(
//     React.DOM.h1({ id: "my-heading" }, React.DOM.span(null, React.DOM.em(
//         { style: { color: 'red' } },
//         "Hello"))),
//     // React.createElement('h1', {title: 'hello world'}, 'Hello World'),
//     document.getElementById('root')
// );

class ABCComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }
    updated(ev){
        this.setState({name : ev.target.value})
        // console.log(ev.target.value)s
    }
    render() {
        return React.DOM.div(null,
            React.DOM.input({
                defaultValue: this.state.name,
                onChange : this.updated.bind(this)
            }),
            React.DOM.h3({style : {color : '#232323'}}, this.state.name)
        );
    }
}

ReactDOM.render(
    // React.DOM.div(ABCComponent),
    React.createElement(ABCComponent, { name: "John" }),
    document.getElementById('root')
);

