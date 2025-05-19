import {GetContent}from "../../API/auth/Content";

// Action Type

const GET_CONTENT_PENDING ="user/GetContentPending";
const  GET_CONTENT_FULFILLED ="user/GetContentFulFilled";
const  GET_CONTENT_REJECTED = "user/GetContentRejected";




// Action creators
const createAction = (type) => (payload) => ({ type, payload });

const GetContentPending =createAction(GET_CONTENT_PENDING);
const  GetContentFulfilled = createAction(GET_CONTENT_FULFILLED);
const GetContentRejected =createAction(GET_CONTENT_REJECTED);


// Thunks
const createAsyncThunk =
  (action, asyncFunction) => (paylod) => async (dispatch) => {
    dispatch(action.pending());
    try {
      const response = await asyncFunction(paylod);
      console.log(response,' i am in slice');
      dispatch(action.fulfilled(response));
     
    } catch (error) {
      dispatch(action.rejected(error));
    }
  };

export const GetContentThunk =createAsyncThunk({
    pending:GetContentPending,
    fulfilled:GetContentFulfilled,
    rejected:GetContentRejected,
  },
  GetContent
  );
  

  // Reducer

  const initialState ={
    contents:[],
  }

  const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT_PENDING:

        return { ...state, loading: true, error: null };

        case GET_CONTENT_FULFILLED:

        return { ...state, contents:action.payload, loading: false, error: null };

        case GET_CONTENT_REJECTED:  
  
        return { ...state, loading: false, error: action.error };
        default: return state;

    }
}

export default contentReducer;