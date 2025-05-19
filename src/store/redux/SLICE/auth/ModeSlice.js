import { GetAllMode } from '../../API/auth/Mode';

// Action types
const GET_ALL_MODES_PENDING = 'Mode/GetAllModesPending';
const GET_ALL_MODES_FULFILLED = 'Mode/GetAllModesFulfilled';
const GET_ALL_MODES_REJECTED = 'Mode/GetAllModesRejected';

// Action creators
export const getAllModesPending = () => ({
  type: GET_ALL_MODES_PENDING,
});

export const getAllModesFulfilled = (payload) => ({
  type: GET_ALL_MODES_FULFILLED,
  payload,
});

export const getAllModesRejected = (error) => ({
  type: GET_ALL_MODES_REJECTED,
  error,
});

// Thunk
export const getAllModes = () => async (dispatch) => {
  dispatch(getAllModesPending());
  try {
    const response = await GetAllMode();
    
    if (response.data) {
      const copepodMode = response.data.filter(item => item.name === "Copepod");
      
      localStorage.setItem('ModeDynmic', JSON.stringify(copepodMode[0]._id));
      
    }



    dispatch(getAllModesFulfilled(response.data));
  } catch (error) {
    dispatch(getAllModesRejected(error));
  }
};

// Reducer
const initialState = {
  Mode: null,
  loading: false,
  error: null,
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MODES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_MODES_FULFILLED:
      return {
        ...state,
        loading: false,
        Mode: action.payload,
      };
    case GET_ALL_MODES_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default modeReducer;
