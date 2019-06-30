const App = () => {
  const [inputText, setInputText] = React.useState("");
  const [lineText, setLineText] = React.useState("");
  const handleInputChange = (e) => { setInputText(e.target.value) }
  const updateText = () => { setLineText(inputText) }
  return (
    <div>
      <input value={inputText} onChange={handleInputChange}></input>
      <button onClick={updateText}>Greet</button>
      <h1>Hello {lineText}</h1>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
