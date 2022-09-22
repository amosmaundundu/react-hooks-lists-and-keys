import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  // const colorElements = colors.map((color) => {
  //   return <li style={{ color: color }}>{color}</li>;
  // });

  const colorElements = colors.map((color) => {
    return (
      <li key={color} style={{ color: color }}>
        {color}
      </li>
    );
  });
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElements}
      </ol>
    </div>
  );
}


// // ColorItem component
// function ColorItem(props) {
//   return <li style={{ color: props.color }}>{props.color}</li>;
//   console.log(props)
// }

// // ColorList component
// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   const colorElements = colors.map((color) => {
//     return <ColorItem key={color} color={color} />;
//   });
//   // etc
// }



export default ColorList;