const App = () => {
    React.createContext({ a: "123" });
    return (
        <div>
            <h4>YOUR GROUPS</h4>
            <h1>Cardbook-</h1>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div >
    )
}
const Card = () => {
    return (
        <div className="card"></div>

    )
}
// ColorChoice.propTypes = {
//     val: window.PropTypes.string,
// };
ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);