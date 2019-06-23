class MyFirstComponent extends React.Component {
    render() {
        return (<ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
        </ul>)
    }
}

ReactDOM.render(
   <MyFirstComponent></MyFirstComponent>,
    document.getElementById("root")
);