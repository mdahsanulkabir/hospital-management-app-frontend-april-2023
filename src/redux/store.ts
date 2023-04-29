import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/features/user/userSlice'
import patientReducer from '../redux/features/patient/patientSlice'


const store =  configureStore({
  reducer: {
    user : userReducer,
    patient : patientReducer
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch