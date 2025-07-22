import React from "react"
import Header from "./Header"

export default function SectionWrapper({ text, children }) {
    // React.Fragment
    // <React.Fragment></React.Fragment>
    // <>
    //     <h2>test</h2>
    //     <p>test</p>
    // </>

    return (
        <section>
            <Header text={text} />

            <div>
                {children}
            </div>
        </section>
    )
}