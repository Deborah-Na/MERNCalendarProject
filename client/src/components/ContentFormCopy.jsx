import React, { useState } from 'react';
import axios from 'axios';
import './css/contentform.css';

// import { useHistory, Link, useParams } from 'react-router-dom';

export const ContentForm = (props) => {

    // const history = useHistory();
    // const { id } = useParams();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [name, setName] = useState('');
    const [addTodo, setTodo] = useState([{
        list: "task 1", isDone: false
    }]);
    const [mood, setMood] = useState('');

    const [errors, setErrors] = useState([]);

    function addTask(task) {
        setTodo([...addTodo, task])
    }

    function updatedList(index) {
        let newTodo = [...addTodo]
        newTodo[index].isDone = !newTodo[index].isDone;
        setTodo(newTodo)
    }

    function conditionSwitch(index) {
        console.log("index", index)
        updatedList(index)
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (addTodo.length === 0) {
            return;
        }
        const allDone = {
            list: name,
            isDone: false
        }
        addTask(allDone);
        setName("");
    }

    function createEntry(e) {
        e.preventDefault(e);

        const newEntry = {
            title,
            content,
            description,
            imageUrl,
            name,
            // checkBox,
            mood
        }
        axios.post("http://localhost:8000/api/calendar/create", newEntry)
            .then(res => {
                console.log(res.data);
                // history.push("/pirates/")
            })
            .catch(err => {
                const { errors } = err.response.data; // add .error if passing in an object with other things aside from errors
                const messages = Object.keys(errors).map(error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })
    }




    return (
        <>

            {/* <div className="container"> */}


            {/* <button><Link className="text-primary" to={"/pirates"}>CrewBoard</Link></button> */}
            <div className="container">
                <h3 className="text-center">Journal Entry</h3>
                <form className="container1" onSubmit={createEntry}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div className="left">
                        Title:
                        <input className="form-control w-75" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                        <label htmlFor="basic-url" className="form-label w-75">Image Url:</label>
                        <div className="input-group mb-3 2-85 w-75">
                            <span className="input-group-text" ></span>
                            <input value={imageUrl} type="text" onChange={(e) => setImageUrl(e.target.value)} className="form-control" aria-describedby="basic-addon3" />
                        </div>
                        How do you feel today?
                        <textarea className="form-control w-75" value={content} onChange={(e) => setContent(e.target.value)} /><br /><br />
                        What did you do today?
                        <textarea className="form-control w-75" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="right">
                        to-do today:
                        {/* <input value={name} onChange={(e) => setName(e.target.value)} /><br/><br/> */}

                        {/* <input type="checkbox" onChange={e => setCheckBox(e.target.checked)} checked={checkBox} /><input value={name} onChange={(e) => setName(e.target.value)} placeholder='Finish wireframe' />
                        <br /> */
                        }Mood:
                        <select className="form-select w-75" onChange={(e) => setMood(e.target.value)} value={mood} id="inputGroupSelect04" aria-label="select">
                            <option>Happy</option>
                            <option>Sad</option>
                            <option>Angry</option>
                            <option>Sick</option>
                            <option>Tired</option>
                            <option>Excited</option>
                        </select>
                        <div className="input-group">
                            {/* <div class="input-group-text">
                                <input className="form-check-input mt-0" type="checkbox" checked={checkBox} onChange={e => setCheckBox(e.target.checked)} aria-label="Radio button for following text input"/>
                            </div> */}
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='"eat sushi *_*"' className="form-control w-75" aria-label="Text input with radio button" />
                                <button>Add Task </button>
                            </form>


                            <button className="button">Create </button>
                        </div>
                    </div>


                    {/* <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='"eat sushi *_*"' className="form-control w-75" aria-label="Text input with radio button" />
                </form> */}
                    {
                        addTodo.map((todo, index) => {
                            return (
                                <>
                                    <label>
                                        <input
                                            key={index}

                                            type="checkbox" checked={todo.isDone} onChange={e => conditionSwitch(index)}
                                        />
                                    </label>


                                </>
                            )
                        })
                    }
                </form>
            </div>
            {/* add quotes */}
            {/* </div> */}
        </>
    )

}

export default ContentForm;


