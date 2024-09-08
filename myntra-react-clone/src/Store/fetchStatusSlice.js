import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState : {
    fetchDone:false, // false: 'PANDING' and true: 'DONE'
    currentlyFetching:false,
  },
  reducers:{
    markFetchDone:(state) =>{
     state.fetchDone = true;
    },
    markFetchStarted:(state) =>{
       state.currentlyFetching = true;
    },
    markFetchFinished:(state) =>{
       state.currentlyFetching = false;
    }
  }
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;