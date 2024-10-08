import axios from "axios";
import { useEffect, useState } from "react";

export const withDataFetching = (url: string) => (WrappedComponent: any) => {
  return function WithDataFetching(props: any) {
    const [data, setData] = useState();
    const [error, setError] = useState<string>();
    useEffect(() => {
      console.log("slug: ", props.params.slug);
      const fetchData = async () => {
        const id = props.params?.slug ? `/${props.params?.slug}` : "";

        try {
          const response = await axios.get(`${url}${id}`);
          setData(response.data);
        } catch (error: any) {
          console.log("Erro: ", error);
          setError(error.message);
        }
      };
      fetchData();
    }, [props.params.slug]);

    return <WrappedComponent {...props} data={data} error={error} />;
  };
};
