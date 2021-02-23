import { useState } from "react";


function AddButton() {
    const [time, useNumbadd] = useState(1)

    function HandleNumb() {
        useNumbadd(time + 1);
    }

    return (
        <div>
            <h1>Time</h1>
            <button onClick={HandleNumb}>Add</button>
            <span>{time}</span>
        </div>
    );
}

export default AddButton; 