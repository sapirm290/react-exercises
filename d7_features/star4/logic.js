const App = () => {
  const days = [1, 2, 3];
  const months = ["jan", "feb", "march"];
  const years = [2011, 2012, 2013, 2019];
  const [items, setItems] = React.useState([]);
  const [chosenDate, setChosenDate] = React.useState({ days: 1, months: "jan", years: 2011 })
  const [taskDescription, setTaskDescription] = React.useState("");
  const setDate = (dateComponent) => {
    return (e) => {
      let NewChosenDate = Object.assign({}, chosenDate);
      NewChosenDate[dateComponent] = e.target.value;
      setChosenDate(NewChosenDate);
    }
  }
  const addItem = () => {
    setItems([...items, `${taskDescription} on ${chosenDate.days}/${chosenDate.months}/${chosenDate.years}`]);
  }
  return (
    <div className="main">
      <input onChange={(e) => { setTaskDescription(e.target.value) }} value={taskDescription}></input>
      <Dropdown data={days} handleChange={setDate("days")}></Dropdown>
      <Dropdown data={months} handleChange={setDate("months")}></Dropdown>
      <Dropdown data={years} handleChange={setDate("years")}></Dropdown>
      <button onClick={addItem} >Add </button>
      <List items={items}></List>
    </div>
  )
}

const Dropdown = ({ data, handleChange }) => {
  let itemsArray = [];
  data.forEach(element => {
    itemsArray.push(
      <option key={element}>{element}</option>
    )
  });
  return (
    <select onChange={handleChange}>
      {itemsArray}
    </select>
  )
}

const List = ({ items }) => {
  let itemsArray = [];
  for (let index = 0; index < items.length; index++) {
    itemsArray.push(
      <li key={index}>{items[index]}</li>
    )
  }
  return (
    <div className="taskList">
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
