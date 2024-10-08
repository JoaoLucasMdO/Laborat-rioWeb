import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

export const withDataFetching = (url: string) => (WrappedComponent: any) => {
  return function WithDataFetching(props: any) {
    const [data, setData] = useState();
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchData = async () => {
        const id = props.params?.slug ? `/${props.params?.slug}` : "";

        try {
          const response = await axios.get(`${url}${id}`);
          setData(response.data);
        } catch (error) {
          setError("Erro ao tentar realizar a consulta.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [props.params.slug]);

    return (
      <>
        {error ? (
          <Alert
            variant="filled"
            severity="error"
            sx={{
              marginTop: "70px",
            }}
          >
            <AlertTitle>Ocorreu um erro 😥</AlertTitle>
            {error}
          </Alert>
        ) : undefined}
        <WrappedComponent {...props} data={data} />
        {isLoading ? (
          <CircularProgress
            sx={{
              position: "absolute",
              top: "calc(100vh/2)",
              left: "calc(100vw/2)",
            }}
          />
        ) : undefined}
      </>
    );
  };
};
