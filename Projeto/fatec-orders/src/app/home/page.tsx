"use client";

import Layout from "@/components/UI/organisms/Layout";
import { useAuth } from "@/context/AuthContext";
import { Box } from "@mui/material";

const Home = () => {
  const { bearerToken } = useAuth();
  return (
    <Layout>
      <Box sx={{ mt: 6 }}>
        {" "}
        {/* Adicione o espaçamento aqui */}
        <Box> {bearerToken}</Box>
        <Box> Bem vindo! </Box>
        <Box> Bem vindo! </Box>
      </Box>
    </Layout>
  );
};

export default Home;
