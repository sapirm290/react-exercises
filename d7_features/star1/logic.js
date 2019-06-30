const App = () => {
  return (
    <div>
      <Box bGColor={["#435abc", "dedede"]}></Box>
      <Box bGColor={["#abcabc", "123123"]}></Box>
      <Box bGColor={["#233142", "ababab"]}></Box>
    </div>
  )
}
const Box = ({bGColor}) => {
  const [isFirstColor, setIsFirstColor] = React.useState(true);
  const handleClick = () => {
    setIsFirstColor(!isFirstColor);
  }
  return (
    <div className="wrapper">
      <button onClick={handleClick}>Change color</button>
      <div className="box" style={{backgroundColor: isFirstColor? bGColor[0]: bGColor[1]}}>
      </div>
    </div>

  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
