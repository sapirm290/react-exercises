const App = () => {
  return (
    <div>
      <Box bGColor="teal"></Box>
      <Box bGColor="red"></Box>
    </div>
  )
}
class Box extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor " + this.props.bGColor + " is called")
  }
  componentWillMount(){
    console.log("will mount " + this.props.bGColor + " is called")
  }
  componentDidMount(){
    console.log("did mount " + this.props.bGColor + " is called")
  }
  render() {
    console.log("render " + this.props.bGColor + " is called")
    return (
      <div>
        <span style={{backgroundColor: this.props.bGColor}}></span>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
