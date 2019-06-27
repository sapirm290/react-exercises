const App = () => {
    return (
        <div>
            <h1>Visibility As Prop</h1>
            <VisibilityAsProp isVisible={true}></VisibilityAsProp>
            <h1>Visibility As State</h1>
            <VisibilityAsState></VisibilityAsState>
        </div >
    )
}
const VisibilityAsProp = ({ isVisible }) => {
    return (
        <button style={{ visibility: isVisible ? "visible" : "hidden" }}>
            This component has visibility as Prop</button>
    )
}
const VisibilityAsState = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    return (
        <button style={{ visibility: isVisible ? "visible" : "hidden" }}
            onClick={() => { setIsVisible(!isVisible) }}>This component has visibility as State</button>
    )
}

VisibilityAsProp.propTypes = {
    isVisible: window.PropTypes.bool,
};
ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);