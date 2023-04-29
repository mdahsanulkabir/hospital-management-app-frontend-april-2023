import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../store'

// Define a type for the slice state
interface PatientState {
    id: string
    name: string
    email: string
    mobile: number
    gender: "Male" | 'Female'
    address: string
    specialNote?: string
    dob: Date
    bloodGroup: 'A+' | "A-" | 'B+' | 'B-' | 'O+' | 'O-' |'AB+' | 'AB-' | 'U'
}

// Define the initial state using that type
const initialState: PatientState[] =[ 
    {
        id: 'CUS269987944393'
    },
    {
        id: 'CUS170312050763'
    },
    {
        id: 'CUS498270197369'
    },
    {
        id: 'CUS775075208694'
    },
    {
        id: 'CUS124515435198'
    },
    {
        id: 'CUS214569247119'
    },
    {
        id: 'CUS027783751134'
    },
    {
        id: 'CUS555048760904'
    },
    {
        id: 'CUS723063372586'
    },
    {
        id: 'CUS031300427114'
    },
]

export const patientSlice = createSlice({
  name: 'patient',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

// export const {  } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectName = (state: RootState) => state.user.name

export default patientSlice.reducer