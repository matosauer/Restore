import { LockOutlined } from "@mui/icons-material";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router";
import { LoginSchema } from "../../lib/schemas/loginSchema";
import { useForm } from "react-hook-form";

export default function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginSchema>();

    const onSubmit = async (data: LoginSchema) => {
        console.log(data);
    } 
    
    return (
        <Container component={Paper} maxWidth='sm' sx={{ borderRadius: 3 }}>
            <Box display='flex' flexDirection='column' alignItems='center' marginTop='8'>
                <LockOutlined sx={{ mt: 3, color: 'secondary.main', fontSize: 40 }} />
                <Typography variant="h5">
                    Sign in
                </Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmit)}
                    width='100%'
                    display='flex'
                    flexDirection='column'
                    gap={3}
                    marginY={3}
                >
                    <TextField
                        fullWidth
                        label='Email'
                        autoFocus
                        {...register('email', {required: 'Email is required'})}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        fullWidth
                        label='Password'
                        type="password"
                        {...register('password', {required: 'Email is required'})}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <Button variant="contained" type="submit">
                        Sign in
                    </Button>
                    <Typography sx={{ textAlign: 'center' }}>
                        Don't have an account?
                        <Button component={NavLink} to='/register' color='primary'>
                            Sign up
                        </Button>
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}