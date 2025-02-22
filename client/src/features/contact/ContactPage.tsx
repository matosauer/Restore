import { useDispatch, useSelector } from "react-redux"
import { CounterState } from "./counterReducer"
import { ButtonGroup, Typography } from "@mui/material"

export default function ContactPage() {
  const data = useSelector((state: CounterState) => state.data)
  const dispatch = useDispatch()
  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      <Typography variant="body1">The data is {data}</Typography>

      <ButtonGroup>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </ButtonGroup>
    </>
  )
}