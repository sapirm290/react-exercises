const App = () => {
    React.createContext({a: "123"});
    return (
        <div>
            <h1>Which colors do you want?</h1>
            <h3>(Disable the ones you dont want with a click)</h3>
            <ColorChoice val="Blue"/>
            <ColorChoice val="Purple"/>
            <ColorChoice val="Green"/>
            <ColorChoice val="Red"/>
            <ColorChoice val="Pink"/>
        </div >
    )
}
const ColorChoice = ({ val }) => {
    const [isDisabled, setIsDisabled] = React.useState(false)
    return (
        <button style={{opacity: isDisabled? "0.4": "1"}} disabled={isDisabled} onClick={() => {setIsDisabled(true)}}>{val}</button>
    )
}
ColorChoice.propTypes = {
    val: window.PropTypes.string,
};
ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);