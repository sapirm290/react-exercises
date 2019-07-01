const App = () => {
  const [checkboxes, setCheckboxes] = React.useState([false, false, true, true]);
  const updateCheckboxes = (index) => {
    const newArray = checkboxes.slice(0);
    newArray[index] = !checkboxes[index];
    setCheckboxes(newArray);
  }
  let inputArray = []
  for (let index = 0; index < checkboxes.length; index++) {
    inputArray.push(
      <div key={index}>
        Approve this
        <input type="checkbox" checked={checkboxes[index]} onChange={() => {updateCheckboxes(index)}}></input>
      </div>
    )
  }
  return (
    <div>
      {inputArray}
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
