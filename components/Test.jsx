import React from "react"

export default function Test(props) {
//export default function Test({ title }) {
    return (
        <div>
            <h1 className="test-title">{props.title}</h1>
            {/* <h1>{title}</h1> */}
        </div>
    )
}