import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './css/ViewOne.css'

const ViewOne = (props) => {

    // grab the variable from the url :id :var :whatever
    const { id } = useParams()
    console.log(id);

    const [entry, setEntry] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/calendar/entry/" + id)
            .then(res => {
                console.log(res.data);
                setEntry(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div >
            <div className="main">
                <div className="viewContainer">
                    {/* <img className="vector" src={require("../images/vector.png")}/> */}
                    <img className="vector" src={require("../images/pngegg.png")}/>
                    <div className="fit">
                    
                        <h3 className="viewTitle">{entry.title}</h3>
                        <h5>{entry.content}</h5>
                        <h5><br /> {entry.description}</h5>
                        <img style={{width: "100px", height:"100px"}} src={entry.imageUrl}/><br/><br/>
                        <h5>reminder: {entry.reminder}</h5>
                        <h5>You feel... {entry.mood}.</h5>
                        {/* <h5>Did you finish your journal? {entry.checkbox ? '<img src={require("../images/alarm_clock.png")}' : ""} </h5> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOne;

//6244a6376672eb7c0b6bb7df (random id for testing)