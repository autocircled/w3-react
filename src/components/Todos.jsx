import React, { useState, memo } from "react";
import { ReactDOM } from "react";

export const FavColor = () => {
    const [textStyle, setTextStyle] = useState({
        color: "red",
        fontSize: "20px",
        fontWeight: 100,
        fontStyle: "italic"
    });
    return (
        <>
            <h1 style={textStyle}>My Fav Color is <span>{textStyle.color}</span></h1>
            <button onClick={() => setTextStyle(previousState => { return { ...previousState, color: "blue" } })}>Blue</button>
            <button onClick={() => setTextStyle(previousState => { return { ...previousState, color: "red" } })}>Red</button>
            <button onClick={() => setTextStyle(previousState => { return { ...previousState, fontSize: "50px" } })}>Font Increase</button>
            <button onClick={() => setTextStyle(previousState => { return { ...previousState, fontSize: "20px" } })}>Font Decrease</button>
            <button onClick={() => setTextStyle(previousState => { return { ...previousState, fontWeight: 900 } })}>Font Weight Increase</button>
            <button onClick={() => setTextStyle(previousState => { return { ...previousState, fontWeight: 100 } })}>Font Weight Decrease</button>
            <button onClick={() => setTextStyle(previousState => { return { ...previousState, fontStyle: "normal" } })}>Font Style: Normal</button>
            <button onClick={() => setTextStyle(previousState => { return { ...previousState, fontStyle: "italic" } })}>Font Style: <i>Italic</i></button>
        </>
    )
}

export const Todos = ({ todos }) => {
    return (
        <>
            <h2>My Todos</h2>
            <ul>
                {todos.map((todo, index) => {
                    // console.log(todo, index);
                    return <li key={index}>{todo}</li>;
                })}

            </ul>
        </>
    )
}