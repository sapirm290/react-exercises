const App = () => {
  const [answers, setAnswers] = React.useState({ general: "", java: "", python: "" })
  const handleChange = (e) => {
    let newAnswers = {};
    if (e.target.name === "general" && e.target.value === "no") {
      for (const key in newAnswers) {
        newAnswers[key] = "";
      }
    }
    else {
      for (const key in answers) {
        newAnswers[key] = answers[`${key}`];
      }
    }
    newAnswers[e.target.name] = e.target.value;
    setAnswers(newAnswers);
  }
  return (
    <div>
      <Question currentState={answers["general"]} topic="general" contect="Have you programmed Before?" handleChange={handleChange}></Question>
      <Question currentState={answers["java"]} topic="java" contect="Have you programmed in java?" handleChange={handleChange}></Question>
      <Question currentState={answers["python"]} topic="python" contect="Have you programmed in Python?" handleChange={handleChange}></Question>
    </div>
  )
}

const Question = ({ contect, topic, currentState, handleChange }) => {
  return (
    <div>
      <h1>{contect}</h1>
      Yes<input type="radio" name={topic} checked={currentState == "yes"} onChange={handleChange} value="yes" />
      No<input type="radio" name={topic} checked={currentState == "no"} onChange={handleChange} value="no" />
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
