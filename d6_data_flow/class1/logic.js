/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const App = () => {
  const [userName, setUserName] = React.useState("")
  return (
    <div>
      <UserNameInput username={userName} setUserName={setUserName}></UserNameInput>
      <h2>{userName}</h2>
    </div>
  )
}
const UserNameInput = ({ username, setUserName }) => {
  return (
    <div>
      <label>Select a User Name: </label>
      <input value={username} onChange={(e) => { setUserName(e.target.value) }}></input>
    </div>
  )
}
UserNameInput.propTypes = {
  userName: window.PropTypes.string,
  setUserName: window.PropTypes.func
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
