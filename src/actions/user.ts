import api from "../services/api"

interface Login
    {data:{
        user: {
            id: string,
            name: string,
            email: string,
            cpf: string,
            hasAddress: boolean,
            address: string
        },
        token: string
    }
}


export const userLogin= async (email:string, password:string):Promise<string | void> => {
    try {
        const response: Login = await api.post(
                `/login`,
                {"email":email,"password":password})
        window.localStorage.setItem("token", response.data.token)
        console.log(response.data.token)
        return response.data.token

    } catch (error) {
        window.alert("Erro no Login")
    }
}

export default { userLogin }
