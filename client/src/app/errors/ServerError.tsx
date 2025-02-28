import { Container } from "@mui/material";
import { useLocation } from "react-router";

export default function ServerError() {
  const {state} = useLocation();

  type ErrorState = {
    detail: string;
  }

  const errorState = state.error as ErrorState;
  console.log({"errorState":errorState});

  return (
    <Container maxWidth='lg'>
        <h1>Server Error</h1>
        <p>Sorry, the server is unavailable. Please try again later.</p>
        <p>{errorState.detail}</p>
    </Container>
  )
}   