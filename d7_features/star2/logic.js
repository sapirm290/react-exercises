const App = () => {
  const data = {
    "israel": ["Jerusalem", "Tel Aviv", "Nazaret"],
    "France": ["Paris", "maseille", "Toulouse"]
  }
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  const [showCity, setShowCity] = React.useState(false);
  const chooseCountry = (e) => {
    setCountry(e.target.value);
    setShowCity(true);
  }
  const cityOptions = Object.keys(data);
  return (
    <div className="main">
      <h2>Where do you live</h2>
      <br></br>
      <QuestionDiv options={cityOptions} handleChange={chooseCountry}></QuestionDiv>
      {(showCity ?
        <QuestionDiv options={data[country]} handleChange={(e) => { setCity(e.target.value) }}></QuestionDiv>
        : null)}
    </div>
  )
}

const QuestionDiv = ({ options, handleChange }) => {
  let optionsArray = [];
  options.forEach(element => {
    optionsArray.push(
      <option key={element}>{element}</option>
    )
  });
  return (
    <div className="selectElement">
      <select onChange={handleChange}>
        {optionsArray}
      </select>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
