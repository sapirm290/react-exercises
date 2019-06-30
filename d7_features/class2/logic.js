const App = () => {
  const [weather, setWeather] = React.useState("sunny")
  return (
    <div>
      <div>
      <button onClick={() => setWeather("rainy")}>Change Weather</button>
      </div>
      <label className="big">The weather is {weather}</label>
      <WeatherComment weather={weather}></WeatherComment>
    </div>
  )
}
const WeatherComment = ({weather}) => {
  if(weather === "rainy")
  return (
    <h6>Don't let the rain get you; Use super-Umbrealla!!</h6>
  )
  return false;
}


ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
