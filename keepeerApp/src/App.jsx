import './App.css';
import Header from './components/Header'
import Note from './components/Note'
import Footer from "./components/Footer"
import Notes from './Notes';


export default function App() {
  return (
    <div>
      <Header/>
      {/* an object of node is created in which each component of title and contents get stored */}
      {Notes.map((note)=>(
        <Note key={note.id} title={note.title} content={note.content}/>
      ))}
      <Footer/>
    </div>
  )
}

// Whenever you are passing a prop to a component you should always pass a "key" prop.
// key prop should always be unique

