const App = () => {
  const [answers, setAnswers] = React.useState({ general: "", java: "", python: "" })
  const handleChange = (e) => {
    let newAnswers = { ...answers, [e.target.name]: e.target.value };
    if (e.target.name === "general" && e.target.value === "no") {
      newAnswers = { general: "no", java: "", python: '' };
    }
    setAnswers(newAnswers);
  }
  return (
    <div>
      <Question currentState={answers["general"]} topic="general" content="Have you programmed Before?" handleChange={handleChange}></Question>
      <Question currentState={answers["java"]} topic="java" content="Have you programmed in java?" handleChange={handleChange}></Question>
      <Question currentState={answers["python"]} topic="python" content="Have you programmed in Python?" handleChange={handleChange}></Question>
    </div>
  )
}

const Question = ({ content, topic, currentState, handleChange }) => {
  return (
    <div>
      <h1>{content}</h1>
      Yes<input type="radio" name={topic} checked={currentState == "yes"} onChange={handleChange} value="yes" />
      No<input type="radio" name={topic} checked={currentState == "no"} onChange={handleChange} value="no" />
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
