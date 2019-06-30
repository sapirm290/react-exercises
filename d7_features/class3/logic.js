class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", lineText: "" }
    this.saveInputField = this.saveInputField.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateText = this.updateText.bind(this);
  }
  saveInputField(input) {
    this.inputField = input
  }
  handleInputChange() {
    this.setState({ inputText: this.inputField.value });
  }
  updateText() {
    this.setState({ lineText: this.state.inputText })
  }
  render() {
    return (
      <div>
        <input ref={this.saveInputField} onChange={this.handleInputChange}></input>
        <button onClick={this.updateText}>Greet</button>
        <h1>Hello {this.state.lineText}</h1>
      </div >
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
