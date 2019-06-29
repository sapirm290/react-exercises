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
      <Service title="User Interface Design" image="browser"
        toolTipText="You are welcome to check all areas of design we deal with">Aliqua
        eu Lorem non ut irure<br /> sunt adipisicing sint t<br />empor velit.</Service>
      <Service title="Concept and Ideas" image="pencil"
        toolTipText="We have a group of copyright experts just waiting to lend their expertise">Sit
        est id ipsum u<br />t ea occaecat laborum enim<br /> culpa qui.</Service>
      <Service title="Design and branding" image="letter"
        toolTipText="We would love to make your brand something to remember!">Do
        incididunt culpa al<br />iquip do pariatur pariatu<br />r nulla nulla eu in ad excepteur minim veniam.</Service>
    </div>
  </div>)
}

const Hero = () => {
  return (<div>
    <h1>Services</h1>
    <h4>Our vision is simple....</h4>
  </div>)
}

const Service = ({ title, image, children, toolTipText }) => {
  const [isImageHovered, setIsImageHovered] = React.useState(false)
  return (<div className="service">
    <Icon image={image} inCaseOfHover={setIsImageHovered} hoverState={isImageHovered}></Icon>
    <Description title={title} toolTipText={toolTipText} text={children} isToolTip={isImageHovered}></Description>
  </div >)
}

const Icon = ({ image, inCaseOfHover, hoverState }) => {
  return (
    <img onMouseEnter={() => { inCaseOfHover(true) }} onMouseLeave={() => { inCaseOfHover(false) }}
      style={{ backgroundColor: hoverState ? "#C577CA" : "#dedede" }} src={`./images/${image}.png`}></img>
  )
}

const Description = ({ title, text, isToolTip, toolTipText }) => {
  // const toolTipStyle = { backgroundColor: "white", color: "black" }
  // debugger;
  return (
    <div>
      <ServiceTitle>{title}</ServiceTitle>
      <h4 className={isToolTip ? "toolTipStyle" : ""}>{isToolTip ? toolTipText : text}</h4>
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
    <h1 style={{ outline: border ? "5px solid #ffffff" : "none" }} onMouseOver={handleHover}>{children}</h1>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
