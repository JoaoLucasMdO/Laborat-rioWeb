import Layout from "@/components/UI/organisms/layout";
import { TextField } from "@mui/material";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  //<div>{params.slug}</div>;
  return (
    <Layout>
      <TextField name="description" label="Descrição" fullWidth />
    </Layout>
  );
};

export default ProductEdit;
