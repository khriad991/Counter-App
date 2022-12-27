import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../state/couter/CounterSlice"
// export for index.js
export default configureStore({
    reducer:{
        counter : counterReducer

    }
})