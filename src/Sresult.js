import React from "react";

const Sresult = (props) => {
    const random =`https://source.unsplash.com/400x300/?${props.img}`
    return (
        <>
            <img src={random} alt="randomimg" />
        </>
    )
}

export default Sresult
