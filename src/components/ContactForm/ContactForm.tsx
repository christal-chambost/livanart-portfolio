import React from 'react';
import { Controller, useForm } from "react-hook-form";

import { deepPurple } from '@mui/material/colors'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from 'react-spring';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './contactForm.scss';
import IContactForm from './../../types/IContactForm';

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}

const theme = createTheme({
    palette: {
        neutral: {
            main: deepPurple[500],
            contrastText: '#ede7f6',
        },
        primary: {
            main: deepPurple[200],
            contrastText: '#ede7f6',
        },
    },
});

function ContactForm() {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            nameUser: "",
            email: "",
            subject: "",
            message: "Votre message...",
        }
    });

    const propsTitle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: { duration: 2000 } })

    const formSubmit = handleSubmit((data) => {
        console.log("data submit", data);
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="contact-form">
                <animated.div style={propsTitle}><Typography variant="h4" gutterBottom>
                    CONTACT ME
                </Typography>
                </animated.div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae, sit possimus, voluptates officia aliquam doloremque dolor aspernatur assumenda id dicta voluptatibus repellat! Laudantium deserunt accusantium quidem dignissimos reprehenderit obcaecati.</p>
                <form onSubmit={formSubmit}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}>
                        <div style={{ display: "flex", marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.8)' } }}
                                inputProps={{ style: { color: 'rgba(255, 255, 255, 0.8)' } }}
                                variant="filled"
                                id="outlined-required"
                                label="Nom / Entreprise"
                                {...register("nameUser", { required: true })}
                            />
                            <TextField
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.8)' } }}
                                inputProps={{ style: { color: 'rgba(255, 255, 255, 0.8)' } }}
                                variant="filled"
                                id="outlined-required"
                                label="Adresse e-mail"
                                className="margin-left"
                                {...register("email", {
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                            />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <InputLabel id="subjectLabel">Motif</InputLabel>
                            <Controller
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        labelId="subjectLabel"
                                        id="subject"
                                        variant="filled"
                                        sx={{ color: 'rgba(255, 255, 255, 0.8)', "& MuiInputLabel-root": { color: 'rgba(255, 255, 255, 0.8)' }, "& .MuiSvgIcon-root": { color: 'rgba(255, 255, 255, 0.8)' } }}
                                        label="Motif"
                                        fullWidth
                                    >
                                        <MenuItem value="renseignements">Renseignements</MenuItem>
                                        <MenuItem value="convention">Convention</MenuItem>
                                        <MenuItem value="partenariat">Demande de partenariat</MenuItem>
                                        <MenuItem value="bugreport">Bug technique</MenuItem>
                                        <MenuItem value="autre">Autre</MenuItem>
                                    </Select>
                                )}
                                name="subject"
                                rules={{ required: true }}
                                control={control}
                            />
                        </div>
                        <TextField
                            required
                            variant="filled"
                            id="outlined-multiline-static"
                            label="Commentaire"
                            InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.8)' } }}
                            inputProps={{ style: { color: 'rgba(255, 255, 255, 0.8)' } }}
                            sx={{ color: "neutral" }}
                            multiline
                            rows={4}
                            {...register("message", { required: true })}
                        />
                        <Button type="submit" variant="contained" color="neutral" style={{ marginTop: "20px" }} >Envoyer</Button>
                    </Box>
                </form>
            </div>
        </ThemeProvider>
    )
};

export default ContactForm;