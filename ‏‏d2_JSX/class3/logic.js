class HelloBtn extends React.Component {
    clicked() {
        document.getElementById("text").innerHTML = "Hello World";
    }
    render() {
        return (
            <div>
                <button onClick={this.clicked}>Say Hello</button>
                <p id="text"></p>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloBtn></HelloBtn>,
    document.getElementById("root")
);