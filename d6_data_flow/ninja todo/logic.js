const App = () => {
  const [board, setBoard] = React.useState({
    board:
      [["empty", "empty", "empty"],
      ["empty", "empty", "empty"],
      ["empty", "empty", "empty"]]
  })
  const setCellContent = key => {
    setBoard(
      {
        [[board[], board[], board[]],
          [board[], board[], board[]],
          [board[], board[], board[]]]
      }
    )
  }
  return (
    <div>
      <div>
        <Cell color={} key="" setCellContent={setCellContent}></Cell>
        <Cell color={} key="" setCellContent={setCellContent}></Cell>
        <Cell color={} key="" setCellContent={setCellContent}></Cell>
      </div>
      <div>

        <Cell color={} key="" setCellContent={setCellContent}></Cell>
        <Cell color={} key="" setCellContent={setCellContent}></Cell>
        <Cell color={} key="" setCellContent={setCellContent}></Cell>
      </div>
      <div>

        <Cell color={} key="" setCellContent={setCellContent}></Cell>
        <Cell color={} key="" setCellContent={setCellContent}></Cell>
        <Cell color={} key="" setCellContent={setCellContent}></Cell>
      </div>

    </div>
  )
}
const Cell = ({ color }) => {
  const cellStyle = { backgroundColor: color }
  return (
    <span style={cellStyle} className="cell">
    </span>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);