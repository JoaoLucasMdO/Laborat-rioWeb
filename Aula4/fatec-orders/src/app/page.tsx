import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState();

  setName("teste");

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItens: "center",
          marginTop: "0.5rem",
        }}
      >
        <Typography variant="h5">LogIn</Typography>
        <Box component="form" sx={{ marginTop: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            name="user"
            label="Usuário"
            autoFocus
            //value={}
            //onChange={}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            name="password"
            label="Senha"
            //value={}
            //onChange={}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, marginBottom: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
