class App extends React.Component {
    render() {
        return (
            <div>
                <Box bGColor="mediumspringgreen" text="fresh"></Box>
                <Box bGColor="deepskyblue" text="calm"></Box>
                <Box bGColor="pink" text="adventerous"></Box>
                <Box bGColor="purple" text="happy"></Box>
            </div>
        )
    }
}
class Box extends React.Component {
    render() {
        let style = { backgroundColor: this.props.bGColor }
        return (
            <div>
                <div style={style} className="inline-box">
                    <h4 >{this.props.text}</h4>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);