const App = () => {
  const [isButtonEnabled, setIsButtonEnabled] = React.useState({ key1: false, key2: false });
  const handleChangeKey1 = () => {
    setIsButtonEnabled({ key1: !isButtonEnabled.key1, key2: isButtonEnabled.key2 });
  }
  const handleChangeKey2 = () => {
    setIsButtonEnabled({ key1: isButtonEnabled.key1, key2: !isButtonEnabled.key2 });
  }
  return (
    <div>
      <h4>Terms Of Use</h4>
      <p>This text is very important and yet you will never read it</p>
      <LabeledCheckBox onChange={handleChangeKey1}>I have read the conditions</LabeledCheckBox>
      <LabeledCheckBox onChange={handleChangeKey2}>I accept all the terms</LabeledCheckBox>
      <div>
        <button disabled={!(isButtonEnabled.key1 && isButtonEnabled.key2)}>next</button>
      </div>
    </div>
  )
}
const LabeledCheckBox = ({children, onChange}) => {
  return (
    <div>
      <label>{children}</label>
      <input onChange={onChange} type="checkbox"></input>
    </div>
  )
}
ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);