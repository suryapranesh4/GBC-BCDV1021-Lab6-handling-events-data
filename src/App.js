import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";
import "./App.css";

function App() {
  return (
    <div className="parent">
      <div className="addDelete">
        <AddStudent />
        <DeleteStudent />
      </div>
      <div className="studentList">
        <StudentList />
      </div>
    </div>
  );
}

export default App;
