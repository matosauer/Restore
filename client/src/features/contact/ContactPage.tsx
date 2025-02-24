import { decrement, increment } from "./counterReducer"
import { Button, ButtonGroup, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store/store"

export default function ContactPage() {
  const { data } = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <Typography variant="h2">Contact Page 77</Typography>
      <Typography variant="body1">The data is {data}</Typography>

      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} color='primary'>Decrement</Button>
        <Button onClick={() => dispatch(increment(1))} color='primary'>Increment</Button>
        <Button onClick={() => dispatch(increment(3))} color='secondary'>Increment (+3)</Button>
      </ButtonGroup>
    </>
  )
}