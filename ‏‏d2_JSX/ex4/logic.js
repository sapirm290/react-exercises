class HelloBtn extends React.Component {
    constructor() {
        super();
        this.counter = 0;
    }
    clicked() {
        this.counter++;
        document.getElementById("text").innerHTML = `Hello ${this.counter}`;
    }
    render() {
        return (
            <div>
                <button onClick={this.clicked.bind(this)}>Say Hello</button>
                <p id="text"></p>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloBtn></HelloBtn>,
    document.getElementById("root")
);