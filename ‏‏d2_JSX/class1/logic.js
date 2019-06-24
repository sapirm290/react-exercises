class Factorial extends React.Component {
    calcFactorial(num) {
        let result = 1;
        for (let index = 1; index <= num; index++) {
            result *= index;

        }

        return result;
    }
    render() {
        let sum = this.calcFactorial(5)
        return (<div><h1>Factorial 5 is:</h1><h3>{sum}</h3></div>
        );
    }
}


ReactDOM.render(
    <Factorial></Factorial>,
    document.getElementById("root")
);