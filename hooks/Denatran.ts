
import axios from "axios"
import { useEffect, useState } from "react"

/**
 * Custom hook that fetches data from a Denatran API based on the provided placa.
 *
 * @param {string} placa - The placa to search for.
 * @return {object | null} A Promise that resolves to the response data.
 */
export default function useDenatran(placa: string): object | null{
    const [response, setResponse] = useState(null)
    useEffect(()=>{
        async function getByPlaca(){
            const result = await axios.get("https://wsdenatrandes-des07116.apps.dev.serpro/"+"v1/veiculos/placa/" +placa)
            setResponse(result.data)
        }

        getByPlaca()

        },[placa])
    return response
}
