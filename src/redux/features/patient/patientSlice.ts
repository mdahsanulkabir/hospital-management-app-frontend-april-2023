import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface PatientState {
    id: string,
    name: string
    email: string
    mobile: number
    gender: "Male" | 'Female'
    address?: string
    specialNote?: string
    dob?: Date
    bloodGroup?: 'A+' | "A-" | 'B+' | 'B-' | 'O+' | 'O-' |'AB+' | 'AB-' | 'U',
    status: 'active' | 'pending' | 'banned'
}

// Define the initial state using that type
const initialState: PatientState[] =[ 
    {
        id: 'CUS269987944393',
        name: 'Dr. Elsa Wilderman',
        email : 'skylar.hahn@example.org',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'A+',
        status: "active"
    },
    {
        id: 'CUS170312050763',
        name: 'Ms. Jermaine Kovacek I',
        email : 'crystel21@example.net',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'A+',
        status: "active"
    },
    {
        id: 'CUS498270197369',
        name: 'Adrianna Marks I',
        email : 'tommie73@example.net',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'A+',
        status: "pending"
    },
    {
        id: 'CUS775075208694',
        name: 'Ceasar Ortiz',
        email : 'vsteuber@example.com',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'A+',
        status: "pending"
    },
    {
        id: 'CUS124515435198',
        name: 'Garrison Gibson',
        email : 'laurie.ledner@example.net',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'A+',
        status: "active"
    },
    {
        id: 'CUS214569247119',
        name: 'Candida Hane',
        email : 'joanne.lueilwitz@example.org',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'A+',
        status: "pending"
    },
    {
        id: 'CUS027783751134',
        name: '	Bell Doyle III',
        email : 'jacobi.frankie@example.net',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'AB+',
        status: "active"
    },
    {
        id: 'CUS555048760904',
        name: '	Greg Zieme Sr.',
        email : 'nader.sandra@example.org',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'A+',
        status: "active"
    },
    {
        id: 'CUS723063372586',
        name: 'Piper Howell',
        email : 'nicola01@example.com',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'O+',
        status: "pending"
    },
    {
        id: 'CUS031300427114',
        name: '	Keara Schaden',
        email : 'bleffler@example.net',
        mobile: 88001785452145,
        gender: 'Male',
        address: "Bashabo",
        specialNote : "bla bla bla",
        dob: new Date(),
        bloodGroup: 'A+',
        status: "active"
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
export const selectPatient = (state: RootState) => state.patient

export default patientSlice.reducer