// actions.js

// import axios from 'axios';

// export const FETCH_ADDITIONAL_DATA_REQUEST = 'FETCH_ADDITIONAL_DATA_REQUEST';
// export const FETCH_ADDITIONAL_DATA_SUCCESS = 'FETCH_ADDITIONAL_DATA_SUCCESS';
// export const FETCH_ADDITIONAL_DATA_FAILURE = 'FETCH_ADDITIONAL_DATA_FAILURE';

// export const fetchAdditionalData = (userId) => {
//   return async (dispatch) => {
//     dispatch({ type: FETCH_ADDITIONAL_DATA_REQUEST });

//     try {
//       const response = await axios.get(`http://localhost:5000/students/${userId}`);
//       dispatch({ type: FETCH_ADDITIONAL_DATA_SUCCESS, payload: response.data });
//     } catch (error) {
//       dispatch({ type: FETCH_ADDITIONAL_DATA_FAILURE, payload: error.message });
//     }
//   };
// };
