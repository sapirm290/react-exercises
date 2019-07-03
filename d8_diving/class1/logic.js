const Names = ["red", "blue", "gray", "pink"];
const RadioButtons = () => {
  const createRadios = (array) => {
    const elementsArray = array.map(element =>
      <span key={element}>
        <label>{element}</label>
        <input type="checkbox"></input>
      </span>
    );
    return elementsArray
  }
  return (<React.Fragment>
    {createRadios(Names)}
  </React.Fragment>
  )
}

ReactDOM.render(
  <RadioButtons></RadioButtons>,
  document.getElementById('root')
)
