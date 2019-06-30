const colors = ["#435abc", "dedede", "#abcabc", "123123", "#233142", "ababab"]
const App = () => {
  const boxesArray = [];
  for (let index = 0; index < 3; index++) {
    boxesArray.push(
      <Box key={index} index={index} bGColor={colors}></Box>
    )
  }
  return (
    <div>
      {boxesArray}
    </div>
  )
}
const Box = ({ index, bGColor }) => {
  const [bGColorIndex, setBGColorIndex] = React.useState(index);
  const handleClick = () => {
    setBGColorIndex((bGColorIndex + 1) % (bGColor.length));
  }
  return (
    <div className="wrapper">
      <button onClick={handleClick}>Change color</button>
      <div className="box" style={{ backgroundColor: bGColor[bGColorIndex] }}>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
