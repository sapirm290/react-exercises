/* eslint-disable react/react-in-jsx-scope */
const App = () => {
  const [board, setBoard] = React.useState({
    board:
      [["empty", "empty", "empty"],
      ["empty", "empty", "empty"],
      ["empty", "empty", "empty"]]
  })
  const setCellContent = (key) => {
    var newBoard = [];
    for (var i = 0; i < board.length; i++)
      newBoard[i] = board[i].slice();
    newBoard[key / 3][key % 3] = "x";
    setBoard(
      newBoard
    )
  }
  const getCellColor = (key) => {
    let value = board[key / 3][key % 3];
    switch (value) {
      case "empty":
        return '#ffffff'
      case "x":
        return "red"
      case "y":
        return "blue"
    }
  }
  return (
    <div>
      <div>
        <Cell color={getCellColor(0)} setCellContent={() => { setCellContent(0) }}></Cell>
        <Cell color={getCellColor(1)} setCellContent={() => { setCellContent(1) }}></Cell>
        <Cell color={getCellColor(2)} setCellContent={() => { setCellContent(2) }}></Cell>
      </div>
      <div>

        <Cell color={getCellColor(3)} setCellContent={() => { setCellContent(3) }}></Cell>
        <Cell color={getCellColor(4)} setCellContent={() => { setCellContent(4) }}></Cell>
        <Cell color={getCellColor(5)} setCellContent={() => { setCellContent(5) }}></Cell>
      </div>
      <div>

        <Cell color={getCellColor(6)} setCellContent={() => { setCellContent(6) }}></Cell>
        <Cell color={getCellColor(7)} setCellContent={() => { setCellContent(7) }}></Cell>
        <Cell color={getCellColor(8)} setCellContent={() => { setCellContent(8) }}></Cell>
      </div>

    </div>
  )
}
const Cell = ({ color, setCellContent }) => {
  const cellStyle = { backgroundColor: color }
  return (
    <span style={cellStyle} onClick={setCellContent} className="cell">
    </span>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);