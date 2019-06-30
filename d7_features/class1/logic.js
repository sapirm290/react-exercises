const colors = ["springgreen", "paleturquoise", "pink", "orchid"]
const App = ({ colors }) => {
  const boxesArray = [];
  for (let index = 0; index < colors.length; index++) {
    boxesArray.push(
      <Box bGColor={colors[index]}></Box>
    )
  }
  return (
    <div>
      {boxesArray}
    </div>
  );
}
const Box = ({ bGColor }) => {
  return (
    <div className="box" style={{ backgroundColor: bGColor }}>
    </div>
  )
}

ReactDOM.render(
  <App colors={colors}></App>,
  document.getElementById('root')
)
