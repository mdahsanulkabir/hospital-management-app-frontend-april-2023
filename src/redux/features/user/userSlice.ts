import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../store'

// Define a type for the slice state
interface UserState {
  name: string
  id: string
  role: string
}

// Define the initial state using that type
const initialState: UserState[] =[ {
  name: 'ahsan',
  id: '1',
  role: 'admin',
}]

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

// export const {  } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectName = (state: RootState) => state.user.name

export default userSlice.reducer