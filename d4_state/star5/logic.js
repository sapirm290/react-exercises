/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
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
const ListItem = ({ children }) => {
  const [isBold, setIsBold] = React.useState(false)
  return (
    <li onClick={() => { setIsBold(true) }} style={{ fontWeight: isBold ? "bold" : "normal" }}>{children}</li>
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
  const [isPurpleBG, setIsPurpleBG] = React.useState(false)
  return (
    <img onMouseEnter={() => { setIsPurpleBG(true) }} onMouseLeave={() => { setIsPurpleBG(false) }}
      style={{ backgroundColor: isPurpleBG ? "#C577CA" : "#dedede" }} src={`./images/${image}.png`}></img>
  )
}

const Description = ({ title, text }) => {
  return (
    <div>
      <ServiceTitle>{title}</ServiceTitle>
      <h4>{text}</h4>
    </div>
  )
}
const ServiceTitle = ({ children }) => {
  const [border, setBorder] = React.useState(false);
  const handleHover = () => {
    setBorder(true);
    setTimeout(() => { setBorder(false) }, 1000);
  }
  return (
    <h1 style={{border: border? "5px solid #ffffff" : "none"}} onMouseOver={handleHover}>{children}</h1>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
