import React, {useState} from "react";
import { INote as Props } from "../App";

interface IProps {
    setNotes: React.Dispatch<React.SetStateAction<Props["notes"]>>
    notes: Props["notes"]
}

const AddToNotes : React.FC<IProps> = ({setNotes, notes}) => {

    const [input, setInput] = useState({
            title: "",
            content: "",
            type: ""
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.title || !input.content || !input.type ) return

        setNotes([
            ...notes,
            {
                title: input.title,
                content: input.content,
                type: input.type
            }
        ]);

        setInput({
            title: "",
            content: "",
            type: ""
        })
    }

    return (
       <div className="AddToNotes">
             <input 
                type="text"
                onChange={handleChange}
                className="AddToNotes-input"
                name="title"
                value={input.title}
                placeholder="title"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToNotes-input"
                name="content"
                value={input.content}
                placeholder="Content"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToNotes-input"
                name="type"
                value={input.type}
                placeholder="Type"
            />
            
            <button className="AddToNotes-btn" onClick={handleClick}>Add Note</button>
       </div> 
    );
    }

    export default AddToNotes;