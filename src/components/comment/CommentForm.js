import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../layout/graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function CommentForm({ slug }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [pressed, setPressed] = useState(false);

    const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
        variables: { name, email, text, slug },
    });

    const sendHandler = () => {
        if (name && email && text) {
            setPressed(true);
            sendComment();
        } else {
            toast.warn("It is necessary to complete all fields", {
                position: "top-center",
            });
        }
    };

    if (data && pressed) {
        toast.success("Comment sent ,waiting for confirmation", {
            position: "top-center",
        });
        setPressed(false);
    }

    return (
        <Grid
            container
            sx={{
                boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                borderRadius: 4,
                py: 1,
                mt: 5,
            }}
        >
            <Grid item xs={12} m={2}>
                <Typography component="p" variant="h6" color="primary">
                    Comments us
                </Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    label="Username"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    label="Email"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    label="Commnet"
                    multiline
                    minRows={4}
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                {loading ? (
                    <Button variant="contained" disabled>
                        Commenting ...
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        onClick={sendHandler}
                        endIcon={<SendIcon />}
                    >
                        Comment
                    </Button>
                )}
            </Grid>
            <ToastContainer />
        </Grid>
    );
}

export default CommentForm;
