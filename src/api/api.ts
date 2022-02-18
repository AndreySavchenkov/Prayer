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
    headers: {'Authorization': `Bearer c5d7b17681772419da162c1fd3e57ae3871a147449fd78e62d452e34c8974ed5`}
});

export const columnApi = {
    getColumns() {
        return instance.get('/columns')
    },
    getColumn(columnId){
        return instance.get(`/columns/${columnId}`)
    }
}

export const prayersApi = {
    getPrayers(){
        return instance.get(`/prayers`)
    }
}