// import Box1 from "./components/Box1"


// import Box2 from "./Box2"
class Box1 extends React.Component {
    render() {
        return (
            <div className="green box">
                <Box2></Box2>
            </div>
        )

    }
}


class Box2 extends React.Component {
    render() {
        return (
            <div className="blue box">
                <Box3></Box3>
            </div>
        )

    }
}
class Box3 extends React.Component {
    render() {
        return (
            <div className="pink box">
                <Box4></Box4>
            </div>
        )

    }
}
class Box4 extends React.Component {
    render() {
        return (
            <div> <div className="purple box">
            </div>
                <div className="purple box">
                </div>
                </div>

        )

    }
}

// export default Box1


ReactDOM.render(
    <Box1></Box1>,
    document.getElementById("root")
);
