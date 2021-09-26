import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

const queryCache = useQueryClient();
const deleteFromFavorites = (id: any) =>
  useMutation(
    async (favorite: any) => {
      return axios.delete(`https://api.thecatapi.com/v1/favourites/${id}`, {
        headers: {
          "x-api-key": "e07dc2cf-e773-4076-84bb-b9dfce38b8a1",
        },
      });
    },
    {
      onSuccess: () => {
        console.log("Sucess");
        queryCache.invalidateQueries("favorites");
      },
    }
  );

export default deleteFromFavorites;
