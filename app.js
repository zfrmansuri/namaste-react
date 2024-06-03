
/*
 <div id="parent">
    <div id="child1">
        <h1>I'm h1 Tag</h1>
        <h2>I'm h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 Tag</h1>
        <h2>I'm h2 Tag</h2>
    </div>
</div>
*/


//React Element(its basically a Js Object) = HTML(Browser can understand)

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div", { id: "child1" },[
            React.createElement("h1", {}, "I'm h1 Tag"),
            React.createElement("h2",{},"I'm h2 Tag")        
        ]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I'm h1 Tag"),
        React.createElement("h2",{},"I'm h2 Tag")
    ])
)

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello this is my First React Program")

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log(heading) //this prints an object

root.render(parent);