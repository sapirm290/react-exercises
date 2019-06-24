class NumberDisplay extends React.Component {
    constructor() {
        super();
        this.maxNum = 15;
        this.showNumbers = this.showNumbers.bind(this);
    }
    showNumbers() {
        let str = "";
        for (let index = 1; index <= this.maxNum; index++) {
            str += ` ${index}`;
        }
        document.getElementById("display").innerHTML = str;
    }
    render() {
        return (
            <div>
                <h3>Numbers</h3>
                <div id="display"></div>
                <button onClick={this.showNumbers}>Show Numbers</button>
            </div>
        )
    }
}
ReactDOM.render(
    <NumberDisplay></NumberDisplay>,
    document.getElementById("root")
);