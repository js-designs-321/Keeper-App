import axios from 'axios';

const NOTE_API_BASE_URL = "http://localhost:8080/api/v1/notes";

class NoteService{

    getNote(){
        return axios.get(NOTE_API_BASE_URL);
    }

    createNote(note){
        return axios.post(NOTE_API_BASE_URL, note);
    }

    deleteNote(id){
        return axios.delete(NOTE_API_BASE_URL + "/" + id);
    }

}

export default new NoteService(); 