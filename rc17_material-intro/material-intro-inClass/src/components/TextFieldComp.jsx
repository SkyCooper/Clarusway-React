import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TextFieldComp = () => {
  const [error, setError] = useState(false);
  return (
    <div>
      <Container>
        <Typography variant="h4" color="error" align="center" mt={4}>
          TEXT FIELD
        </Typography>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorret email format"}
          />

          <TextField
            margin="normal"
            id="password"
            label="Password"
            placeholder="Enter your password"
            fullWidth
            error={error}
            helperText={error && "Incorret password"}
          />
          <Button
            variant="contained"
            color="warning"
            sx={{ marginTop: "4rem" }}
            // sx={{ mt : 4 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
