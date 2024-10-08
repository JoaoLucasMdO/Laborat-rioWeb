"use client";

import Layout from "@/components/UI/organisms/Layout";
import { IOrder } from "@/interfaces/IOrder";
import { OrderEditValidator } from "@/validators/OrderEditValidator";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";

const EditTemplate: React.FC = () => {
  const formik = useFormik<IOrder>({
    initialValues: {
      date: "",
      document: "",
      paymentType: "",
      itemQuantity: 0,
      totalValue: 0,
    },
    validationSchema: OrderEditValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  // <div>{params.slug}</div>

  // "descricao": "Bolacha",
  // "marca": "Trakinas",
  // "valor": 1.99,
  // "peso_gramas": 100,
  // "sabor": "morango"

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="date"
          label="Data"
          fullWidth
          value={values.date}
          onChange={handleChange}
          error={!!errors.date}
          helperText={errors.date}
        />
        <TextField
          name="document"
          label="CPF"
          fullWidth
          value={values.document}
          onChange={handleChange}
          error={!!errors.document}
          helperText={errors.document}
        />
        <Select
          name="paymentType"
          label="Forma de Pagamento"
          fullWidth
          value={values.paymentType}
          onChange={(e) => setFieldValue("paymentType", e.target.value)}
          error={!!errors.paymentType}
        >
          <MenuItem value="">-- Não Informado --</MenuItem>
          <MenuItem value="vista">À vista</MenuItem>
          <MenuItem value="prazo">Prazo</MenuItem>
          <MenuItem value="pix">Pix</MenuItem>
        </Select>

        <TextField
          name="itemQuantity"
          label="Quantidade de Itens"
          fullWidth
          value={values.itemQuantity}
          onChange={handleChange}
          error={!!errors.itemQuantity}
          helperText={errors.itemQuantity}
        />

        <TextField
          name="totalValue"
          label="Valor Total"
          fullWidth
          value={values.totalValue}
          onChange={handleChange}
          error={!!errors.totalValue}
          helperText={errors.totalValue}
        />

        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};

export default EditTemplate;
