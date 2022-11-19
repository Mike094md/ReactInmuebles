
import { RiDeleteBin6Line } from 'react-icons/ri'

const Note = ({ note, toggleImportance, deleteNote }) => {
  const labelImportance = note.important ? "Important" : "Not important";

  return (
    <li>
      <RiDeleteBin6Line onClick={() => deleteNote(note.id)} style={{ marginRight: '12px', color: 'tomato', cursor: 'pointer'}}/>
      {note.content}
      <button
        className={`btn btn-${
          note.important ? "danger" : "secondary"
        } btn-sm ms-2`}
        onClick={() => toggleImportance(note.id)}
      >
        {labelImportance}
      </button>
    </li>
  );
};

export default Note;
