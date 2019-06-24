import PropTypes from 'prop-types';
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <Part id="a" calculate="Squared Number"></Part>
        <Part id="b" calculate="Squared Root"></Part>
        <Part id="c" calculate="Sigma"></Part>
        <Part id="d" calculate="Highest between Squared and Sigma"></Part>
      </div>
    )
  }
}

class Part extends React.Component {
  calculate(e) {
    function square(num) { return Math.pow(num, 2); }
    function root(num) { return Math.pow(num, 0.5); }
    function sigma(num) {
      let sum = 0;
      for (let index = 1; index <= num; index++) {
        sum += index;
      }
      return sum;
    }
    function maxSigmaOrSquare(num) { return Math.max(sigma(num), square(num)) }
    let result, val = e.target.value;
    switch (this.props.calculate) {
      case "Squared Number":
        result = square(val);
        break;
      case "Squared Root":
        result = root(val);
        break;
      case "Sigma":
        result = sigma(val);
        break;
      case "Highest between Squared and Sigma":
        result = maxSigmaOrSquare(val);
        break;
    }
    document.querySelector(`#${this.props.id} h3`).innerHTML = "Result: " + result;
  }
  render() {
    return (<div className="calculator" id={this.props.id}>
      <div className="border" >
        <h1>Calculate {this.props.calculate}</h1>
        <label>Enter Number</label>
        <input type="text" onMouseLeave={this.calculate.bind(this)}></input>
        <h3>Result: --</h3>
      </div>
    </div>)
  }
}
Part.propTypes = {
  id: PropTypes.string,
  calculate: PropTypes.string
};

ReactDOM.render(
  <Calculator></Calculator>,
  document.getElementById('root')
)
