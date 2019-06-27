const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <MainContent></MainContent>
    </div>
  )
}

const NavBar = () => {
  return (<div className="navbar">
    <ul>
      <ListItem>SERVICES</ListItem>
      <ListItem>WORK</ListItem>
      <ListItem className="underLine">THE TEAM</ListItem>
      <img src="./images/phone.png"></img>
    </ul>
  </div>)
}
const ListItem = () => {
  return(
    <li></li>
  )
}
const MainContent = () => {
  return (<div className="mainContent">
    <Hero></Hero>
    <div className="services">
      <Service title="User Interface Design" image="browser">Aliqua eu Lorem non ut irure<br /> sunt adipisicing sint t<br />empor velit.</Service>
      <Service title="Concept and Ideas" image="pencil">Sit est id ipsum u<br />t ea occaecat laborum enim<br /> culpa qui.</Service>
      <Service title="Design and branding" image="letter">Do incididunt culpa al<br />iquip do pariatur pariatu<br />r nulla nulla eu in ad excepteur minim veniam.</Service>
    </div>
  </div>)
}

const Hero = () => {
  return (<div>
    <h1>Services</h1>
    <h4>Our vision is simple....</h4>
  </div>)
}

const Service = ({ title, image, children }) => {
  return (<div className="service">
    <Icon image={image} ></Icon>
    <Description title={title} text={children}></Description>
  </div >)
}

const Icon = ({ image }) => {
  function changeBG(e) {
    e.target.style.background = "#C577CA";
  }
  function changeBGBack(e) {
    e.target.style.background = "#dedede";
  }
  return (
    <img onMouseEnter={changeBG} onMouseLeave={changeBGBack} src={`./images/${image}.png`}></img>
  )
}

const Description = ({ title, text }) => {
  function secBorder(e) {
    let elem = e.target
    elem.style.outline = "5px solid #ffffff"
    setTimeout(() => { elem.style.outline = "none" }, 1000);
  }
  return (
    <div>
      <h2 onMouseEnter={secBorder}>{title}</h2>
      <h4>{text}</h4>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
