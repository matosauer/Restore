import { BaseQueryApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";
import { toast } from "react-toastify";
import { router } from "../routes/Routes";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:5001/api"
});

type ErrorResponse = {
  title: string;
  status: number;
  errors: { [key: string]: string[] };
};


export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi,
    extraOptions: object) => {

    api.dispatch(startLoading());
    
    const result = await customBaseQuery(args, api, extraOptions);

    api.dispatch(stopLoading());

    if (result.error) {
        let error: string = '';
        const {status, data} = result.error;
        const errorResponse : ErrorResponse = data as ErrorResponse;

        switch (status) {
          case 'PARSING_ERROR':
          {
            error = data as string;
            break;
          }

        case 400:
          {            
            error = errorResponse.title;
            if(errorResponse.errors){
              const flatErrors: string = Object.values(errorResponse.errors).flat().join(',');
              throw new Error(flatErrors);
            }
            break;
          }

          case 404:
          {
            router.navigate('/not-found');
            break;  
          }

          case 500:
          {
            router.navigate('/server-error', {state: {error: errorResponse}});
            break;  
          }

          default:{
            error = errorResponse.title;          
            break;
          }
        }

        if(error){
          toast.error(error);
        }
    }

    return result;
}