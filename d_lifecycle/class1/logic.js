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
    this.state = { color: "red", bRadius: "0%" };
    this.counter = 0;
    this.changeBGAndShape = this.changeBGAndShape.bind(this);
  }
  componentDidMount() {
    this.colorChangeInterval = setInterval(this.changeBGAndShape, 500);
  }
  componentDidUpdate() {
    if (this.counter > 6)
      ReactDOM.unmountComponentAtNode(document.getElementById("root"));

  }
  changeBGAndShape() {
    this.setState({ color: this.state.color === "red" ? "blue" : "red" });
    this.counter++;
    if (this.counter > 5)
      this.setState({ bRadius: "50%" })
  }
  componentWillUnmount() {
    clearInterval(this.colorChangeInterval);
  }
  render() {
    return (
      <div>
        <span style={{ backgroundColor: this.state.color, borderRadius: this.state.bRadius }}></span>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
