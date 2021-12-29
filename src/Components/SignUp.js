import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { Link } from "react-router-dom";

const theme = createTheme();

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            name: data.get("name"),
            password: data.get("password"),
            date: data.get("date"),
            gender: data.get("gender"),
        });
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
                    <Box sx={{ display: "flex" }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button
                                sixe="large"
                                sx={{
                                    width: "12rem",
                                    height: "3rem",
                                    backgroundColor: "#2c387e",
                                }}
                                variant="contained"
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Button
                            sixe="large"
                            sx={{
                                width: "12rem",
                                height: "3rem",
                                backgroundColor: "black",
                            }}
                            variant="contained"
                        >
                            Sign Up
                        </Button>
                    </Box>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                        >
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    name="name"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Phone Number"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    type="date"
                                    name="date"
                                    id="outlined-required"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Gender"
                                    name="gender"
                                />
                            </Grid>
                        </Grid>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm password"
                                type="Confirm password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Box>

                        <Button
                            type="submit"
                            size=""
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default SignUp;
