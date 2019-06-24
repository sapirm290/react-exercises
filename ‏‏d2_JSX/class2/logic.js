class Game extends React.Component {

    play() {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        let randomNum = getRandomInt(1, 10);
        return randomNum > 5 ? <h1>You won</h1> : <h3>You lost</h3>;
    }
    render() {
        return (
            this.play()
        );
    }
}

ReactDOM.render(
    <Game></Game>,
    document.getElementById("root")
);