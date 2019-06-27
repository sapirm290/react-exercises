const App = () => {
    return (
        <div>
            <ToolBar></ToolBar>
        </div >
    )
}

const ToolBar = () => {
    return (
        <div className="toolbar">
            <Item image="profile"></Item>
            <Item image="star"></Item>
            <Item image="bubble" bubble={true}></Item>
        </div>

    )
}

const Item = ({ image, bubble }) => {
    let notifications = Math.floor(Math.random() * 11);
    if (bubble !== undefined && notifications !== 0) {
        return (
            <span className="tool" style={{ backgroundImage: `url("./images/${image}.PNG")` }}>
                <span className="bubble">{notifications}</span>
            </span>
        )
    }
    return (
        <span className="tool" style={{ backgroundImage: `url("./images/${image}.PNG")` }}></span>
    )
}
Item.propTypes = {
    image: window.PropTypes.string,
    bubble: window.PropTypes.bool
};

ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);