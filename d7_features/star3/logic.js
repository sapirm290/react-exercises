const App = () => {
  const data = {
    "israel": ["Jerusalem", "Tel Aviv", "Nazaret", "Kochav Ya'akov"],
  }
  return (
    <div className="main">
      <List items={data}></List>
    </div>
  )
}

const List = ({ items }) => {
  let itemsArray = [];
  items[Object.keys(items)[0]].forEach(element => {
    itemsArray.push(
      <li key={element}>{element}</li>
    )
  });
  return (
    <div className="selectElement">
      <h1>{Object.keys(items)[0]}</h1>
      <ol>
        {itemsArray}
      </ol>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
