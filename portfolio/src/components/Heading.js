import React from "react"
const Heading = (props) => {
  return (
    <h1
      style={{
        bottom: "11vh",
        position: "relative",
        fontSize: "6rem",
        color: "rgba(224, 135, 33, 0.9)",
        fontWeight: "bolder",
        textShadow: "2px 2px navy",
        textDecoration: "black underline",
        backgroundColor: "rgba(0,0,0,.5)",
      }}
    >
      {props.text}
    </h1>
  )
}

export default Heading
