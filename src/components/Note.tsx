import React from "react";
interface IProps {
    notes: {
      title: string;
      content: string;
      type: string;
    }[]
  }

const Note : React.FC<IProps> = ({ notes}) => {

    const renderNotes = ():JSX.Element[] => {
        return notes.map((note, index) => {
            return(<li className="List">
            <div className="List-header" >
                <h3>{note.title}</h3>
            </div>
            <textarea className="Note">{note.content}</textarea>
            <br></br><span >Type is : <b>{note.type}</b></span>
        </li>)
        })
    }

    return ( 
        <ul>
            {renderNotes()}
        </ul>
    )};

    export default Note;