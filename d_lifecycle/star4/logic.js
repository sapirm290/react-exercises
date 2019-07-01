/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const StartingProgress = [56, 32, 80];
const describeTasks = ["General", "Uploading", "Task Status"]
const tasksColors = ["gray", "pink", "violet"]
const App = () => {
  const itemsList = [];
  for (let index = 0; index < StartingProgress.length; index++) {
    itemsList.push(
      <Task color={tasksColors[index]} key={index} percentage={StartingProgress[index]} description={describeTasks[index]}></Task>
    )
  }
  return (
    <div >
      {itemsList}
    </div>

  )
}
class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = { progress: this.props.percentage }
    this.raise = this.raise.bind(this);
  }
  raise() {
    let newProgress = this.state.progress;
    newProgress = Math.min(this.state.progress + (Math.floor((Math.random()) * 5) + 1), 100);
    this.setState({ progress: newProgress });
  }
  componentDidMount() {
    this.progressInterval = setInterval(this.raise, 1000)
  }
  componentDidUpdate() {
    if (this.state.progress === 100) {
      clearInterval(this.progressInterval);
    }
  }
  render() {
    return (
      <div className="task">
        <h2 className="task-title">
          {this.props.description}</h2>
        <div className="circle">
          {this.state.progress}
        </div>
        <div className="progress-bar" >
          <span className="progress" style={{width: this.state.progress +"%", backgroundColor: this.props.color}}></span>
        </div>
      </div>
    )
  }

}



ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
