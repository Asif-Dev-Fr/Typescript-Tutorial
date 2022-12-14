import React, { useState } from 'react'
import TypeScriptImg_1 from "../../assets/images/Typescript_01.png"
import TypeScriptImg_2 from "../../assets/images/Typescript_02.png"
import TypeScriptImg_3 from "../../assets/images/Typescript_03.png"
import TypeScriptImg_4 from "../../assets/images/Typescript_04.png"
import TypeScriptImg_5 from "../../assets/images/Typescript_05.png"
import TypeScriptImg_6 from "../../assets/images/Typescript_06.png"
import TypeScriptImg_7 from "../../assets/images/Typescript_07.png"
import TypeScriptImg_8 from "../../assets/images/Typescript_08.png"
import TypeScriptImg_9 from "../../assets/images/Typescript_09.png"
import TypeScriptImg_10 from "../../assets/images/Typescript_10.png"
import TypeScriptImg_11 from "../../assets/images/Typescript_11.png"
import TypeScriptImg_12 from "../../assets/images/Typescript_12.png"
import TypeScriptImg_13 from "../../assets/images/Typescript_13.png"



const Basics = () => {
    // https://www.youtube.com/watch?v=d56mG7DezGs&t=1989s&ab_channel=ProgrammingwithMosh
    const [styleState] = useState({
        marginTop: "10px",
        marginLeft: "10px",
        border: "2px solid #073d94"
    })

    const [imageArrayOne] = useState([
        TypeScriptImg_1,
        TypeScriptImg_2,
        TypeScriptImg_3,
        TypeScriptImg_4,
        TypeScriptImg_5,
        TypeScriptImg_6,
        TypeScriptImg_7,
        TypeScriptImg_8,
        TypeScriptImg_9,
        TypeScriptImg_10,
        TypeScriptImg_11,
        TypeScriptImg_12,
        TypeScriptImg_13
    ]);
    const [age, setAge] = useState(Number)

    return (
        <div>
            <h2> Basics </h2>
            <div>
                {
                    imageArrayOne.map((image, key) => (
                        <img key={key} src={image} alt="typescript vs javascript" width="500px" style={styleState} />
                    ))
                }
                <h5>Assign Age</h5>
                <input onChange={(e) => setAge(parseInt(e.target.value))} />
                {age && <p> You are {age} years old </p>}
            </div>
        </div>
    )
}

export default Basics