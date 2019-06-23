class Quiz extends React.Component {

    render() {
        return (
            <div>
                <QuizTitle></QuizTitle>
                <Q title="How much you love front end?" input="range">
                </Q>
                <Q title="What is your favourite front end feature/topic?" input="text"></Q>
            </div>
        )
    }
}
class QuizTitle extends React.Component {

    render() {
        return (
            <h1>
                How do you like Front-End?
            </h1>
        )
    }
}
class Q extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <QTitle title={this.props.title}></QTitle>
                <QInput input={this.props.input}></QInput>    </div>
        )
    }
}
class QTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            {this.props.title}
            </div>
        )
    }
}

class QInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <input type={this.props.input}></input>
        )
    }
}








ReactDOM.render(
    <Quiz></Quiz>,
    document.getElementById("root")
);