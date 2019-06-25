const App = () => {
  const shirtColors = ["blue", "green", "black"]
  const dressColors = ["chocolate", "teal", "crimson"]
  return (
    <div>
      <ColorSelector colors={shirtColors} cloth="shirt"></ColorSelector>
      <ColorSelector colors={dressColors} cloth="dress"></ColorSelector>
    </div>
  )
}
class ColorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ color: e.target.value });
  }
  render() {
    const { cloth, colors } = this.props;
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value={colors[0]}>{colors[0]}</option>
          <option value={colors[1]}>{colors[1]}</option>
          <option value={colors[2]}>{colors[2]}</option>
        </select>
        <h2>
          Your {cloth} will be:
          <span style={{ color: this.state.color }}>{this.state.color}</span>
        </h2>
      </div >

    )
  }
}
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
