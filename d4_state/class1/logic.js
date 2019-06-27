const Counter = () => {
    const [counter, setCouter] = React.useState(0)
    const increment = () => {setCouter(counter+1)}
    return (
        <div>
            <button onClick={increment.bind(this)}>Increment</button>
            <span> {counter}</span>
        </div>
    )
}

ReactDOM.render(
    <Counter></Counter>,
    document.getElementById("root")
);