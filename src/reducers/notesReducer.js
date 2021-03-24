import { types } from '../types/types';

const initialState = {
  notes: [],
  active: null
};

export const notesReducer = (state = initialState, { type, payload }) => {

  switch (type) {
  case types.notesAddNew:
    return {
        ...state,
        notes: [payload, ...state.notes]
      }
  case types.notesActive:
    return {
        ...state,
        active: {
          ...payload
        }
      }
    case types.notesLoad:
      return {
        ...state,
        notes:[ ...payload ]
      }
      case types.notesUpdated:
        return {
          ...state,
          notes: state.notes.map(
            note => note.id === payload.id
                  ? payload.note
                  : note
          )
        }
      case types.notesDelete:
        return {
          ...state,
          active: null,
          notes: state.notes.filter(
            note => note.id !== payload
          )
        }
        case types.notesLogoutClearing:
          return {
            ...state,
            active: null,
            notes: []
          }
  default:
    return state
  }
}
