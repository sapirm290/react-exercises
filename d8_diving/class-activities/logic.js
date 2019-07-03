/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const App = () => {
  const [activities, setActivities] = React.useState(
    [
      {
        what: "Programming",
        when: "Every day",
        isWinter: true
      },
      {
        what: "Eating",
        when: "12:15",
        isWinter: true
      }
    ]
  )
  const handleSubmitActivity = (activity) => {
    const newActivities = [...activities,
    {
      what: activity.what,
      when: `${activity.day} ${activity.month} ${activity.year}`,
      isWinter: (['December', 'January', 'February', 'March'].indexOf(activity.month) >= 0) ? true : false
    }
    ]
    setActivities(newActivities)
  }

  return (
    <div>
      <CreateItem addItem={handleSubmitActivity}></CreateItem>
      <ActivitiesContainer activities={activities}></ActivitiesContainer>
    </div>
  )
}

const ActivitiesContainer = ({ activities }) => {
  const createNodes = (array) => {
    return array.map((obj, index) => <li key={index}>{obj.what} On : {obj.when} {obj.isWinter ? "If it is not too cold" : ""}</li>)
  }
  return (
    <div>
      {createNodes(activities)}
    </div>
  )
}
const dateUtils = {
  months: ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"],
  days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  years: [2018, 2019, 2020, 2021, 2022]
};

const CreateItem = ({ addItem }) => {
  const [activity, setActivity] = React.useState({
    what: "",
    day: 1,
    month: "January",
    year: 2018
  })
  const dayRef = React.useRef(null)
  const monthRef = React.useRef(null)
  const yearRef = React.useRef(null)

  const renderOptions = (arr) => {
    return arr.map(x => <option key={x} value={x}>{x}</option>);
  }
  const handleChange = (component) => {
    return (e) => {
      setActivity({ ...activity, [component]: e.target.value })
    }
  }
  return (
    <div>
      <input onChange={handleChange("what")}></input>
      <select ref={dayRef} onChange={handleChange("day")} value={activity.day}>
        {renderOptions(dateUtils.days)}
      </select>
      <select ref={monthRef} onChange={handleChange("month")} value={activity.month}>
        {renderOptions(dateUtils.months)}
      </select>
      <select ref={yearRef} onChange={handleChange("year")} value={activity.year}>
        {renderOptions(dateUtils.years)}
      </select>
      <button onClick={() => { addItem(activity) }}>Add item</button>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
