const App = () => {
  return (
    <div>
      <Box size={10} position="next" >
      </Box>
      <Box size={20} position="next" >
      </Box>
      <Box size={40} position="next" >
      </Box>
      <Box size={20} position="next" >
      </Box>
      <Box size={10} position="next" >
      </Box>
      <Box size={180} position="below" >
      </Box>
    </div>
  )
}
const Box = ({ size, position}) => {
  let style = {
    display: (position === "next" ? "inline-block" : "block"),
    height: (size+"px"),
    width: (size+"px"),
    backgroundColor: "purple",
    margin: "10px"
  }
  return (
    <span style={style}>
    </span>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
