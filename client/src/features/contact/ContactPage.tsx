import { useDispatch, useSelector } from "react-redux"
import { CounterState, decrement, increment } from "./counterReducer"
import { Button, ButtonGroup, Typography } from "@mui/material"

export default function ContactPage() {
  const data = useSelector((state: CounterState) => state.data)
  const dispatch = useDispatch()
  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      <Typography variant="body1">The data is {data}</Typography>

      <ButtonGroup>
        <Button onClick={() => dispatch(decrement())} color='primary'>Decrement</Button>
        <Button onClick={() => dispatch(increment())} color='primary'>Increment</Button>
        <Button onClick={() => dispatch(increment(3))} color='secondary'>Increment(+3)</Button>
      </ButtonGroup>
    </>
  )
}