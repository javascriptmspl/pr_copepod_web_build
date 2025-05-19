import {
  createUser,
  userLogin,
  userLoginPhone,
  forgotPassword,
  UpdateUser,
  getByIdUser,
  userProfileGetAll,
  CreateSubUser,
  GetAllUserId ,
  GetSubUserById,
  GetAllSubUser,
  UpdateSubUser,
  UpdateSubUserProfile,
  DeleteSubUser,
} from "../../API/auth/Register";


// Action types
const CREATE_USER_PENDING = "user/createUserPending";
const CREATE_USER_FULFILLED = "user/createUserFulfilled";
const CREATE_USER_REJECTED = "user/createUserRejected";

const UPDATE_USER_PENDING = "user/updateUserPending";
const UPDATE_USER_FULFILLED = "user/updateUserFulfilled";
const UPDATE_USER_REJECTED = "user/updateUserRejected";

const LOGIN_PENDING = "user/loginPending";
const LOGIN_FULFILLED = "user/loginFulfilled";
const LOGIN_REJECTED = "user/loginRejected";

const PHONE_LOGIN_PENDING ="user/phoneLogInPending" ;
const PHONE_LOGIN_FULFILLED = 'user/phoneLogInFulFilled';
const PHONE_LOGIN_REJECTED ="user/phoneLogInRejecetd";

const FORGOT_PASSWORD_PENDING = "user/forgotPasswordPending";
const FORGOT_PASSWORD_FULFILLED = "user/forgotPasswordFulfilled";
const FORGOT_PASSWORD_REJECTED = "user/forgotPasswordRejected";

const GET_BY_ID_USER_PENDING = "user/getByIdUserPending";
const GET_BY_ID_USER_FULFILLED = "user/getByIdUserFulfilled";
const GET_BY_ID_USER_REJECTED = "user/getByIdUserRejected";

const USER_PROFILE_GET_ALL_PENDING = "user/userProfileGetAllPending";
const USER_PROFILE_GET_ALL_FULFILLED = "user/userProfileGetAllFulfilled";
const USER_PROFILE_GET_ALL_REJECTED = "user/userProfileGetAllRejected";

const CREATE_SUB_USER_PENDING ="user/CreateSubUserPending";
const  CREATE_SUB_USER_FULFILLED = "user/CreateSubUserFulfilled" ;
const CREATE_SUB_USER_REJECTED ="user/CreateSubUserRejected";

const GET_ALL_USER_ID_PENDING = "user/GetAllUserIdPending";
const  GET_ALL_USER_ID_FULFILLED = "user/GetAllUserIdFulfilled" ;
const  GET_ALL_USER_ID_REJECTED= "user/GetAllUserIdRejected" ;

const GET_ALL_SUBUSER_PENDING ="user/GetAllSubUserPending";
const  GET_ALL_SUBUSER_FULFILLED="user/GetAllSubUserFulfilled";
const  GET_ALL_SUBUSER_REJECTED= "user/GetAllSubUserRejection";

const GET_SUBUSER_BY_ID_PENDING ="user/GetSubUserByItsIdIsPending";
const GET_SUBUSER_BY_ID_FULFILLED = "user/GetSubUserByItsIdIsFulfilled" ;
const GET_SUBUSER_BY_ID_REJECTED = "user/GetSubUserByItsIdIsRejected" ;

const UPDATE_SUB_USER_PENDING ="user/UpdateSubUserPendding";
const UPDATE_SUB_USER_FULFILLED = "user/UpdateSubUserFulfilled";
const UPDATE_SUB_USER_REJECTED = "user/UpdateSubUserRejected";

const UPDATE_SUB_USER_PROFILE_PENDING ="user/UpdateSubUserProfilePending";
const UPDATE_SUB_USER_PROFILE_FULFILLED ="user/UpdateSubUserProfileFulfilled";
const UPDATE_SUB_USER_PROFILE_REJECTED ="user/UpdateSubUserProfileRejected";

const DELETE_SUB_USER_PENDING ="user/DeleteSubUserPending";
const  DELETE_SUB_USER_FULFILLED = "user/DeleteSubUserFulfilled";
const   DELETE_SUB_USER_REJECTED = "user/DeleteSubUserRejected";

// ----------------------





// Action creators
const createAction = (type) => (payload) => ({ type, payload });

const createUserPending = createAction(CREATE_USER_PENDING);
const createUserFulfilled = createAction(CREATE_USER_FULFILLED);
const createUserRejected = createAction(CREATE_USER_REJECTED);

const updateUserPending = createAction(UPDATE_USER_PENDING);
const updateUserFulfilled = createAction(UPDATE_USER_FULFILLED);
const updateUserRejected = createAction(UPDATE_USER_REJECTED);

const loginPending = createAction(LOGIN_PENDING);
const loginFulfilled = createAction(LOGIN_FULFILLED);
const loginRejected = createAction(LOGIN_REJECTED);

const phoneLogInPending= createAction (PHONE_LOGIN_PENDING);
const phoneLogInFulfilled =createAction (PHONE_LOGIN_FULFILLED);
const phoneLogInRejected =createAction (PHONE_LOGIN_REJECTED);

const forgotPasswordPending = createAction(FORGOT_PASSWORD_PENDING);
const forgotPasswordFulfilled = createAction(FORGOT_PASSWORD_FULFILLED);
const forgotPasswordRejected = createAction(FORGOT_PASSWORD_REJECTED);

const getByIdUserPending = createAction(GET_BY_ID_USER_PENDING);
const getByIdUserFulfilled = createAction(GET_BY_ID_USER_FULFILLED);
const getByIdUserRejected = createAction(GET_BY_ID_USER_REJECTED);

const userProfileGetAllPending = createAction(USER_PROFILE_GET_ALL_PENDING);
const userProfileGetAllFulfilled = createAction(USER_PROFILE_GET_ALL_FULFILLED);
const userProfileGetAllRejected = createAction(USER_PROFILE_GET_ALL_REJECTED);

const CreateSubUserPending= createAction(CREATE_SUB_USER_PENDING);
const CreateSubUserFulfilled= createAction(CREATE_SUB_USER_FULFILLED);
const CreateSubUserRejected= createAction(CREATE_SUB_USER_REJECTED);

const GetAllUserIdPending = createAction(GET_ALL_USER_ID_PENDING);
const GetAllUserIdFulfilled =createAction(GET_ALL_USER_ID_FULFILLED);
const GetAllUserIdRejected =createAction(GET_ALL_USER_ID_REJECTED);

const GetAllSubUserPending=createAction(GET_ALL_SUBUSER_PENDING);
const GetAllSubUserFulfilled=createAction(GET_ALL_SUBUSER_FULFILLED);
const GetAllSubUserRejected=createAction(GET_ALL_SUBUSER_REJECTED);

const GetSubUserByIdPending=createAction(GET_SUBUSER_BY_ID_PENDING);
const GetSubUserByIdFulfilled=createAction(GET_SUBUSER_BY_ID_FULFILLED);
const GetSubUserByIdRejected=createAction(GET_SUBUSER_BY_ID_REJECTED);

const UpdateSubUserPending=createAction(UPDATE_SUB_USER_PENDING);
const UpdateSubUserFulfilled=createAction(UPDATE_SUB_USER_FULFILLED);
const  UpdateSubUserRejected=createAction(UPDATE_SUB_USER_REJECTED);

const UpdateSubUserProfilePending =createAction(UPDATE_SUB_USER_PROFILE_PENDING);
const UpdateSubUserProfileFulfilled = createAction(UPDATE_SUB_USER_PROFILE_FULFILLED);
const UpdateSubUserProfileRejected = createAction(UPDATE_SUB_USER_PROFILE_REJECTED);

const DeleteSubUserPending =createAction(DELETE_SUB_USER_PENDING);
const  DeleteSubUserFulfilled = createAction(DELETE_SUB_USER_FULFILLED) ;
const DeleteSubUserRejected = createAction(DELETE_SUB_USER_REJECTED);



// Thunks
const createAsyncThunk =
  (action, asyncFunction) => (paylod) => async (dispatch) => {
    dispatch(action.pending());
    try {
      const response = await asyncFunction(paylod);
      console.log(response,' i am in slice');
      dispatch(action.fulfilled(response));
      // dispatch(GetAllSubprofilebyuserIDThunk())
    } catch (error) {
      dispatch(action.rejected(error));
    }
  };

export const createUserThunk = createAsyncThunk(
  {
    pending: createUserPending,
    fulfilled: createUserFulfilled,
    rejected: createUserRejected,
  },
  createUser
);

// export const createUserThunk = createAsyncThunk(
//   {
//     pending: (dispatch) => dispatch(createUserPending()),
//     fulfilled: (dispatch, response) => {
//       dispatch(createUserFulfilled(response));
//       dispatch(GetAllSubprofilebyuserIDThunk());
//     },
//     rejected: (dispatch, error) => dispatch(createUserRejected(error)),
//   },
//   createUser
// );



export const updateUserThunk = createAsyncThunk(
  {
    pending: updateUserPending,
    fulfilled: updateUserFulfilled,
    rejected: updateUserRejected,
  },
  UpdateUser
);

export const loginThunk = createAsyncThunk(
  {
    pending: loginPending,
    fulfilled: loginFulfilled,
    rejected: loginRejected,
  },
  userLogin
);

export const phoneLoginThunk =createAsyncThunk(
  {
    pending: phoneLogInPending,
    fulfilled: phoneLogInFulfilled,
    rejected:phoneLogInRejected,
  },
  userLoginPhone
);

export const forgotPasswordThunk = createAsyncThunk(
  {
    pending: forgotPasswordPending,
    fulfilled: forgotPasswordFulfilled,
    rejected: forgotPasswordRejected,
  },
  forgotPassword
);

export const getByIdUserThunk = createAsyncThunk(
  {
    pending: getByIdUserPending,
    fulfilled: getByIdUserFulfilled,
    rejected: getByIdUserRejected,
  },
  getByIdUser
);

export const userProfileGetAllThunk =createAsyncThunk(
  {
    pending: userProfileGetAllPending,
    fulfilled:userProfileGetAllFulfilled,
    rejected:userProfileGetAllRejected,
  },
  userProfileGetAll
);

// subuser----

export const CreateSubUserThunk = createAsyncThunk(
  {
    pending:CreateSubUserPending,
    fulfilled:CreateSubUserFulfilled,
    rejected: CreateSubUserRejected,
  },
  CreateSubUser
);

 
  export const GetAllUserIdThunk = createAsyncThunk(
    {
      pending:GetAllSubUserPending,
      fulfilled:GetAllUserIdFulfilled,
      rejected:GetAllUserIdRejected,
    },
    GetAllUserId
  ); 

export const GetAllSubprofilebyuserIDThunk =createAsyncThunk(
  {
    pending:GetAllSubUserPending,
    fulfilled:GetAllSubUserFulfilled,
    rejected:GetAllSubUserRejected,
  },
  GetAllSubUser
);

export const GetSubUserByIdThunk =createAsyncThunk(
  {
    pending: GetSubUserByIdPending,
    fulfilled: GetSubUserByIdFulfilled,
    rejected: GetSubUserByIdRejected,
  },
  GetSubUserById
);



export const UpdateSubUserThunk = createAsyncThunk(
  {
  pending: UpdateSubUserPending,
  fulfilled: UpdateSubUserFulfilled,
  rejected: UpdateSubUserRejected,
},
UpdateSubUser
);
 
export const UpdateSubUserProfileThunk = createAsyncThunk({
  pending: UpdateSubUserProfilePending,
  fulfilled: UpdateSubUserProfileFulfilled,
  rejected: UpdateSubUserProfileRejected,
},
UpdateSubUserProfile
);


export const deleteSubUserThunk = (subUserId) => async (dispatch) => {
  try {
    dispatch(DeleteSubUserPending());
    await deleteSubUserThunk(subUserId);
    await DeleteSubUser(subUserId)
    dispatch(DeleteSubUserFulfilled(subUserId)); 
  } catch (error) {
    dispatch(DeleteSubUserRejected(error));
  }
};




// Reducer
const initialState = {
  user: null,
  subuser: [],
  loading: false,
 
  error: {
    createUser: null,
    updateUser: null,
    login: null,
    forgotPassword: null,
    getByIdUser: null,
    userProfileGetAll: null,
    createSubUser: null,
    getAllUserId: null,
    getAllSubuser: null,
    getSubUserById: null,
    updateSubUser: null,
    UpdateSubUserProfile:null,
    deleteSubUser:null,
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_PENDING:
    case UPDATE_USER_PENDING:
    case LOGIN_PENDING:
    case PHONE_LOGIN_PENDING:  
    case FORGOT_PASSWORD_PENDING:
    case GET_BY_ID_USER_PENDING:
    case USER_PROFILE_GET_ALL_PENDING:
    case CREATE_SUB_USER_PENDING: 
    case GET_ALL_USER_ID_PENDING:
    case GET_ALL_SUBUSER_PENDING: 
    case GET_SUBUSER_BY_ID_PENDING:
    case UPDATE_SUB_USER_PENDING:  
    case UPDATE_SUB_USER_PROFILE_PENDING:
     case  DELETE_SUB_USER_PENDING:
    
    
      return { ...state, loading: true, error: null };

    case CREATE_USER_FULFILLED:
    case LOGIN_FULFILLED:
    case PHONE_LOGIN_FULFILLED:  
      case USER_PROFILE_GET_ALL_FULFILLED:
      case GET_ALL_USER_ID_FULFILLED:
      case GET_BY_ID_USER_FULFILLED:
      return { ...state, user: action.payload, loading: false, error: null };
      case CREATE_SUB_USER_FULFILLED:
      case GET_ALL_SUBUSER_FULFILLED:
      case GET_SUBUSER_BY_ID_FULFILLED:
        case UPDATE_SUB_USER_FULFILLED: 
        case UPDATE_SUB_USER_PROFILE_FULFILLED: 
   
      return { ...state, subuser: action.payload, loading: false, error: null };
      case DELETE_SUB_USER_FULFILLED:
        const updatedSubusers = state.subuser.filter(subuser => subuser._id !== action.payload);
        return { ...state, subuser: updatedSubusers, loading: false, error: null };
 
    case FORGOT_PASSWORD_FULFILLED:
      return { ...state, loading: false, error: null };

    case CREATE_USER_REJECTED:
    case UPDATE_USER_REJECTED:
    case LOGIN_REJECTED:
    case PHONE_LOGIN_REJECTED:  
    case FORGOT_PASSWORD_REJECTED:
    case GET_BY_ID_USER_REJECTED:
    case USER_PROFILE_GET_ALL_REJECTED:
    case CREATE_SUB_USER_REJECTED: 
    case GET_ALL_USER_ID_REJECTED:
    case GET_ALL_SUBUSER_REJECTED:
    case GET_BY_ID_USER_REJECTED: 
    case UPDATE_SUB_USER_REJECTED:
    case UPDATE_SUB_USER_PROFILE_REJECTED:  
    case DELETE_SUB_USER_REJECTED:
   
  
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default userReducer;
