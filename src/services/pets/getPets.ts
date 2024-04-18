import httpClient from "../api/httpClient.";
import { GetPetsRequest, GetPetsResponse } from "../../interfaces/pet";

export async function getPets(
  params?: GetPetsRequest
): Promise<GetPetsResponse> {
  try {
    const response = await httpClient.get("/pet", { params });
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar pets", error);
    throw error;
  }
}
