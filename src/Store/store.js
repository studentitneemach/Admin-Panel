import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query';
import { UserDataApi } from "./ReduxData/apiSlice";
const initialState = {
    sidebarShow: true,
}

const ChangeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        default:
            return state
    }
}

const store = configureStore({
    reducer: {
        changeState: ChangeState,
        [UserDataApi.reducerPath] :  UserDataApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(UserDataApi.middleware)
})
setupListeners(store.dispatch);
export default store