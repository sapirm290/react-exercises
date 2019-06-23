class App extends React.Component {
    render() {
        return (<div>
            <NavBar></NavBar>
            <Article></Article>
        </div>)

    }
}
class NavBar extends React.Component {
    render() {
        return (<div className="navbar">
            <ul>
                <li>SERVICES</li>
                <li>WORK</li>
                <li className="underLine">THE TEAM</li>
                <img src="./images/phone.png"></img>

            </ul>
        </div>)


    }
}


class Article extends React.Component {
    render() {
        return (<div className="article">
            <Hero></Hero>
            <Content title="User Interface Design" image="website">Wireframing...</Content>
            <Content title="Concept and Ideas" image="pen">Conceptualization...</Content>
            <Content title="Design and branding" image="mail">Interaction design...</Content>
        
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
    constructor(props){
        super(props);
    }
    render() {
        return (<div className="content">
          <img src={`./images/${this.props.image}.png`}></img>
          <h2>{this.props.title}</h2>
          <h4>{this.props.children}</h4>
        </div>)

    }
}



ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);