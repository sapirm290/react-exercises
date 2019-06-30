const colors = ["springgreen", "paleturquoise", "pink","orchid"]
const App = ({colors}) => {
  return (
    <div>
      <Box bGColor={colors[0]}></Box>
      <Box bGColor={colors[1]}></Box>
      <Box bGColor={colors[2]}></Box>
      <Box bGColor={colors[3]}></Box>
    </div>
  );
}
const Box = ({bGColor}) => {
  return(
    <div className="box" style={{backgroundColor: bGColor}}>
    </div>
  )
}

ReactDOM.render(
  <App colors={colors}></App>,
  document.getElementById('root')
)
