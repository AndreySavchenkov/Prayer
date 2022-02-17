import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";


//---------------------------AuthApi-----------------------------------------------------------------------------------
export const authApi = {
    signUp(email: string, name: string, password: string, ) {
        return axios.post('https://prayer.herokuapp.com/auth/sign-up/', {email, name, password,})
    }
}

//---------------------------UserApi----------------------------------------------------------------------------------
//nothing hooks - neef fix!!!!!!!!!!!!!!!!!!!
// const token = useSelector<RootState>(state => state.login.token)

const instance = axios.create({
    baseURL: 'https://prayer.herokuapp.com',
    timeout: 5000,
    // headers: {'Authorization': `Bearer ${token}`}
});

export const columnApi = {
    getPrayers() {
        return instance.post('/column')
    }
}