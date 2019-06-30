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
    this.state ={color: "red"};
    console.log("constructor " + " is called")
    this.changeBG = this.changeBG.bind(this);
  }
  componentWillMount(){
    console.log("will mount " + " is called")
    setInterval(this.changeBG, 500);
  }
  componentDidMount(){
    console.log("did mount " + " is called")
  }
  shouldComponentUpdate(){
    return true;
  }
  changeBG(){
    this.setState({color: this.state.color === "red" ? "blue" : "red"})
  }
  render() {
    console.log("render " + " is called")
    return (
      <div>
        <span style={{backgroundColor: this.state.color}}></span>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
