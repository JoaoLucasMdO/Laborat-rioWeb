import Layout from "@/components/UI/organisms/layout";
import Image from "next/image";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Layout name="layout">
      <Image alt="imagem" src="/fatec.jpg" width={800} height={300}></Image>
    </Layout>
  );
};

export default Home;
