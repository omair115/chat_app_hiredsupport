import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// Reducers
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
    auth: persistReducer({ key: "auth", storage }, authReducer),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
