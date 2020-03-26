import { v4 as uuidv4 } from "uuid";

export const musicReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, {
        title: action.song.title,
        artist: action.song.artist,
        id: uuidv4() 
      }]
    case 'REMOVE_SONG':
      return state.filter(song => song.id !== action.id)  
    default:
      break;
  }
}