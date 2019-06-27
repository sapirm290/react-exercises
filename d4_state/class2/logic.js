const Counter = () => {
    const [isShown, setIsShown] = React.useState(false)
    const changeShow = () => {
        setIsShown(isShown === true ? false : true)
    };
    let showClass = isShown ? "" : "hidden";
    return (
        < div className="outerBox" >
            <button onClick={changeShow.bind(this)}>Show/hide</button>
            <div className={"box " + showClass}></div>
        </div >
    )
}

ReactDOM.render(
    <Counter></Counter>,
    document.getElementById("root")
);