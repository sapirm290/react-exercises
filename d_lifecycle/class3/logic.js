const App = () => {
  return (
    <div>
      <Box></Box>
    </div>
  )
}
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
    this.counter = 0;
    console.log("constructor " + " is called")
    this.changeBG = this.changeBG.bind(this);
  }
  componentWillMount() {
    console.log("will mount " + " is called")
    this.balls = setInterval(this.changeBG, 500);
  }
  componentDidMount() {
    console.log("did mount " + " is called")
  }
  shouldComponentUpdate() {
    if (this.counter > 10)
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    return true;
  }
  changeBG() {
    this.setState({ color: this.state.color === "red" ? "blue" : "red" });
    this.counter++;
  }
  componentWillUnmount(){
    clearInterval(this.balls);
  }
  render() {
    console.log("render " + " is called")
    return (
      <div>
        <span style={{ backgroundColor: this.state.color }}></span>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
