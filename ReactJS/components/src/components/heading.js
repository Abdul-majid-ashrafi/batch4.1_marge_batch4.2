import React from 'react';

export const Heading1 = (props) => {
    return (
        <div>
            <h1>
                Hello {(props.myName)? props.myName : "loading..."}
            </h1>
        </div>
    )
}

export const HeadingTwo = (props) => {
    return (
        <div>
            <h1>
                 Second heading
      </h1>
        </div>
    )
}