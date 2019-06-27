const App = () => {
    const [color, setColor] = React.useState("transparent");
    let changeColor = (e) => {
        setColor(e.target.innerHTML);
    }
    return (
        <div className="outerBox" >
            <Button handleClick={changeColor}>Blue</Button>
            <Button handleClick={changeColor}>Green</Button>
            <Button handleClick={changeColor}>Orange</Button>
            <div className={"box"} style={{ backgroundColor: color }}></div>
        </div >
    )
}
const Button = ({ handleClick, children }) => {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);