const Counter = () => {
    const [counter, setCounter] = React.useState(0)
    const increment = () => {setCounter(counter+1)}
    return (
        <div>
            <button onClick={increment.bind(this)}>Increment</button>
            <span> {counter}</span>
        </div>
    )
}
const Random = () => {
    const [random, setRandom] = React.useState()
    const Randomize = () => {setRandom(Math.floor(Math.random() * 10 +1))}
    return (
        <div>
            <button onClick={Randomize.bind(this)}>Randomize</button>
            <span> {random}</span>
        </div>
    )
}

ReactDOM.render(<div>
    <Counter></Counter>,
    <Random></Random>,
</div>,
    document.getElementById("root")
);