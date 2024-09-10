"use client";

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  // const [name, setName] = useState<string>("");
  // useEffect(() => {
  //   setName("Não definido");
  // }, []);

  // useEffect(() => {
  //   window.alert("O nome foi alterado!");
  // }, [name]);

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

        <Box>Nome:</Box>

        <Box
          //component="form"
          sx={{ marginTop: 1 }}
        >
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
            onClick={() => {
              //   setName("João");
              router.push("/home");
            }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
