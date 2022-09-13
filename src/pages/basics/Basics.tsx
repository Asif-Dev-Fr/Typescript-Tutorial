import React, { useState } from 'react'
import TypeScriptImg_1 from "../../assets/images/Typescript_01.png"
import TypeScriptImg_2 from "../../assets/images/Typescript_02.png"
import TypeScriptImg_3 from "../../assets/images/Typescript_03.png"
import TypeScriptImg_4 from "../../assets/images/Typescript_04.png"


const Basics = () => {
    const [styleState] = useState({
        marginTop: "10px",
        marginLeft: "10px",
        border: "2px solid #073d94"
    })
    const [imageArrayOne] = useState([TypeScriptImg_1, TypeScriptImg_2, TypeScriptImg_3, TypeScriptImg_4])
    return (
        <div>
            <h2> Basics </h2>
            <div>
                {
                    imageArrayOne.map((image, key) => (
                        <img key={key} src={image} alt="typescript vs javascript" width="500px" style={styleState} />
                    ))
                }
            </div>
        </div>
    )
}

export default Basics