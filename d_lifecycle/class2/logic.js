
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isBoxShown: false }
  }
  componentDidMount() {
    setTimeout(
      () => { this.setState({ isBoxShown: true }) },
      1000)
    setTimeout(
      () => { this.setState({ isBoxShown: false }) },
      5000)
  }
  render() {
    return this.state.isBoxShown ? (
      <div className="box">Hello Everybody</div>
    ) : null
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
