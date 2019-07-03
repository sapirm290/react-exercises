/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const Slider = ({ min, max, step, value }) => {
  const [currentValue, setCurrentValue] = React.useState(value)
  const inputEl = React.useRef(null);
  const handleClick = (operator) => {
    switch (operator) {
      case "+":
        setCurrentValue(Math.min(max, currentValue + 2));
        break;
      case "-":
        setCurrentValue(Math.max(min, currentValue - 2));
        break;
    }
  }
  return (
    <React.Fragment>
      <input ref={inputEl} type="range" min={min} max={max} value={currentValue} step={step}></input>
      <button onClick={() => { handleClick("-") }}>-</button>
      <button onClick={() => { handleClick("+") }}>+</button>
      <div> Value: {currentValue}</div>
    </React.Fragment>
  )
}

ReactDOM.render(
  <Slider min={2} max={20} value={5} step={2}></Slider>,
  document.getElementById('root')
)
