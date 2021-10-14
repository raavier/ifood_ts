import api from "../services/api"
import useSWR from 'swr'
import { AxiosRequestConfig } from "axios"

interface Restaurant
        {
            restaurants:
                Array<
                    Restaurants
                >
        }
interface Restaurants {
    id:string,
    name:string,
    category:string,
    logoUrl:string,
    adress:string,
    description:string,
    shipping:number,
    deliveryTime:number,
}

interface RestaurantDetail {
    restaurant:{
        products:
            Array<Products>}

}

interface Products {
    id: string,
    price: number,
    photoUrl: string,
    description: string,
    name: string,
    category: string
}

export function useRestaurantFetch(url:string){
    const token = window.localStorage.getItem('token')
    const headerConfig: AxiosRequestConfig = {headers: {'auth':token ?? ""}}

    const { data, error } = useSWR<Restaurant>(url,async url => {
        const response = await api.get(url,headerConfig)
        console.log('useRest:',response.data)
        return response.data
    })
    console.log('useRest2:',{data})
    return {data, error}
}

export function restaurantFetchById(url:string){
    const token = window.localStorage.getItem('token')
    const headerConfig: AxiosRequestConfig = {headers: {'auth':token ?? ""}}
    const { data, error} = useSWR<RestaurantDetail>(url, async url => {
        const response = await api.get(url,headerConfig)
        return response.data
    })
    return {data, error}
}


