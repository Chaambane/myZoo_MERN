import React from 'react'

const titleH1 = (props) => (
    <h1 className="text-center fw-bold mt-2 border rounded border-4 border-primary bg-light text-dark">
        {props.children}
    </h1>
);

export default titleH1;