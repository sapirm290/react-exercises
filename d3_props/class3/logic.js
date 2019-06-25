class App extends React.Component {
    render() {
        return (
            <div>
                <Box bGColor="green">
                    <Box bGColor="blue">
                        <Box bGColor="pink">
                            <Box bGColor="purple"></Box>
                            <Box bGColor="purple"></Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        )
    }
}
class Box extends React.Component {
    render() {
        let style = { backgroundColor: this.props.bGColor }
        if (style.backgroundColor === "purple")
            style.backgroundColor = "#C577CA"
        return (
            <div style={style} className="box">
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);