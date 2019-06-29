const App = () => {
    const [color, setColor] = React.useState("transparent");
    return (
        <div className="outerBox" >
            <Button handleClick={setColor}>Blue</Button>
            <Button handleClick={setColor}>Green</Button>
            <Button handleClick={setColor}>Orange</Button>
            <div className={"box"} style={{ backgroundColor: color }}></div>
        </div >
    )
}
const Button = ({ handleClick, children }) => {
    return (
        <button onClick={() => {handleClick(children)}}>{children}</button>
    )
}
ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);