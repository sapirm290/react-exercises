/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import PropTypes from Window.prototype;
class App extends React.Component {
    render() {
        return (
            <div>
                <Card id="1" img="travel" title="Ready to Travel">Choose your destination, plan your trip</Card>
                <Card id="2" img="flight" title="Select the Date">Et commodo nisi excepteur non esse ad anim.</Card>
                <Card id="3" img="home" title="Feels Like Home">Anim enim labore duis ea nostrud sint sit id labore consectetur tempor.</Card>
            </div>
        )
    }
}
const Card =({id, img,title,children})  => {
    return (
        <div className="card">
            <img src={`./images/${img}.png`}></img>
            <h2>{title}</h2>
            <h4>{children}</h4>
            <div className="indicator">
                <Point emphasis={id === "1"}></Point>
                <Point emphasis={id === "2"}></Point>
                <Point emphasis={id === "3"}></Point>
            </div>
        </div>
    )
}
const Point = ({emphasis}) => {
    let style = { fontWeight: emphasis ? "bold" : "300" }
    return <span style={style}>. </span>

}

ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);