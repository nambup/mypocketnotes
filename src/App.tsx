import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';
import AddToNotes from './components/AddToNotes';

export interface INote {
  notes: {
    title: string;
    content: string;
    type: string;
  }[]
}

function App() {

  const [notes, setNotes] = useState<INote["notes"]>([

    {
      title: "First Note",
      content: "This is the first note",
      type: "text"
    }
  ]) 



  return (
    <div className="App">
      <h1>My Pocket Notes</h1>
      <Note notes={notes}/>

      <AddToNotes setNotes={setNotes} notes={notes}></AddToNotes>
    </div>
  );

  function calculateDaysBetweenDates(date1:Date, date2:Date) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  }
}

export default App;

