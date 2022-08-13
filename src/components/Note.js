import {MdDeleteForever} from 'react-icons/md'

const Note = ({ id, text, handleDeleteNote}) => {
    return (
        <div className='note'> 
            <div className="note-header">
                <MdDeleteForever onClick = {() => handleDeleteNote(id)}
                className = 'delete-icon' 
                size = '1.3em'/>
            </div>
            <div className='note-main'>
                <span>{text}</span>
            </div>
            <div className="note-footer">
            </div>
            
        </div>
    );    
};

export default Note;