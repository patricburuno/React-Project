
const parent = React.createElement(
    "div",{id:"parent"},
    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement("h1", {},"I'm an h1 tag"),
            React.createElement("h2", {},"I'm an h2 tag"),
            
        ]
    )
);



// const heading = React.createElement(
//     "h1",{id : "heading",id:"patric"}, "Hello World from React!"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);