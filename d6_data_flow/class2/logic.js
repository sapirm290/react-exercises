const App = () => {
  const [isOuterColorWhite, setIsOuterColorWhite] = React.useState(false);
  return (
    <Box
      bGColor={isOuterColorWhite ? "white" : "pink"} >
      <Box bGColor="MEDIUMSPRINGGREEN">
        <Box
          bGColor="DARKTURQUOISE">
          <Box setIsOuterColorWhite={setIsOuterColorWhite}
            bGColor="LIGHTPINK">
            <Box setIsOuterColorWhite={setIsOuterColorWhite}
              bGColor="VIOLET"></Box>
            <Box setIsOuterColorWhite={setIsOuterColorWhite}
              bGColor="VIOLET"></Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
const Box = ({ bGColor, setIsOuterColorWhite, children }) => {
  const handleChange = () => {
    if (setIsOuterColorWhite != undefined)
      setIsOuterColorWhite(true)
  }
  return (
    <div className="box" style={{ backgroundColor: bGColor }} onClick={handleChange}>
      {children}
    </div >
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
