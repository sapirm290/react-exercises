const App = () => {
  const [outerBoxColor, setOuterBoxColor] = React.useState("#ffffff");
  return (
    <Box handleClick={setOuterBoxColor}
      bGColor={outerBoxColor} >
      <Box bGColor="MEDIUMSPRINGGREEN"
        handleClick={setOuterBoxColor}>
        <Box handleClick={setOuterBoxColor}
          bGColor="DARKTURQUOISE">
          <Box handleClick={setOuterBoxColor}
            bGColor="LIGHTPINK">
            <Box handleClick={setOuterBoxColor}
              bGColor="VIOLET"></Box>
            <Box handleClick={setOuterBoxColor}
              bGColor="VIOLET"></Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
const Box = ({ bGColor, handleClick, children }) => {
  const handleClickIfExist = (e) => {
    e.stopPropagation();
    if (handleClick != undefined)
      handleClick(bGColor);
  }
  return (
    <div className="box" style={{ backgroundColor: bGColor }}
      onClick={handleClickIfExist}>
      {children}
    </div >
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
