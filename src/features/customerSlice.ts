import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface Customer {
    id: string,
    name: string,
    food: string[]
}
interface CustomerState {
    value: Customer[]
}

const initialState: CustomerState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {}
})

export const {} = customerSlice.actions

export default customerSlice.reducer