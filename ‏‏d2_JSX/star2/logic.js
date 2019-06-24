class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <MainContent></MainContent>
      </div>
    )
  }
}

class NavBar extends React.Component {
  bolden(e) {
    e.target.className += " bold";
  }
  render() {
    return (<div className="navbar">
      <ul>
        <li onClick={this.bolden}>SERVICES</li>
        <li onClick={this.bolden}>WORK</li>
        <li onClick={this.bolden} className="underLine">THE TEAM</li>
        <img src="./images/phone.png"></img>

      </ul>
    </div>)
  }
}

class MainContent extends React.Component {
  render() {
    return (<div className="article">
      <Hero></Hero>
      <Content title="User Interface Design" image="browser">Aliqua eu Lorem non ut irure<br /> sunt adipisicing sint t<br />empor velit.</Content>
      <Content title="Concept and Ideas" image="pencil">Sit est id ipsum u<br />t ea occaecat laborum enim<br /> culpa qui.</Content>
      <Content title="Design and branding" image="letter">Do incididunt culpa al<br />iquip do pariatur pariatu<br />r nulla nulla eu in ad excepteur minim veniam.</Content>
    </div>)
  }
}

class Hero extends React.Component {
  render() {
    return (<div>
      <h1>Services</h1>
      <h4>Our vision is simple....</h4>
    </div>)
  }
}

class Content extends React.Component {
  changeBG(e) {
    e.target.style.background = "#C577CA";
  }
  changeBGBack(e) {
    e.target.style.background = "#dedede";
  }
  secBorder(e) {
    let elem = e.target
    elem.style.border = "5px solid #ffffff"
    setTimeout(() => { elem.style.border = "none" }, 1000);

  }
  render() {
    return (<div className="content" >
      <img onMouseEnter={this.changeBG} onMouseLeave={this.changeBGBack} src={`./images/${this.props.image}.png`}></img>
      <h2 onMouseEnter={this.secBorder}>{this.props.title}</h2>
      <h4>{this.props.children}</h4>
    </div>)
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
