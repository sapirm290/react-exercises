function render(data) {
    ReactDom.render(<div>
        <a classname="border" href={data.linkAddress}>Go to {data.linkText}</a>
        <input type="range" min={data.min * -1} max={data.max * 2} step="2"></input>
        <button id="click" style={{ "color": data.color, "font-weight": data.font - weight }}>{data.buttonText}</button>



    </div>, document.getElementById("root"));
}
var data = {
    linkAddress: "https://www.google.com/",
    linkText: "google",
    min: -5,
    max: 5,
    color: "maroon",
    "font-weight": "bold",
    buttonText: "click me"
};
render(data);