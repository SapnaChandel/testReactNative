import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { CONFIG } from '../constants';


export function Api(endpoint, method = 'GET', body = null, hastoken = true, onInit, onSuccess, onError) {
    return async dispatch => {
        dispatch(onInit())
        var headers = {};
        var apiUrl = CONFIG.baseUrl + endpoint;
        let token = await AsyncStorage.getItem('token', null) || global.token

        headers["device-type"] = Platform.OS == 'ios' ? 'I' : 'A'
        headers["device-token"] = global.notiToken
        headers["app-version"] = "1"

        if (hastoken) {
            headers["Authorization"] = `${token}`
        }

        if (body instanceof FormData) {
            headers["Content-Type"] = "multipart/form-data"
        } else {
            headers["Content-Type"] = "application/json"
        }

        console.log('header-->', headers, method)
        console.log('url-->', apiUrl)
        console.log('body-->', body)

        try {
            const response = await fetch(apiUrl, {
                method,
                body,
                headers
            })
            const data = await response.json()
            if (response.status == 200)
                dispatch(onSuccess(data))
            else {
                Messager.toast(data.error.message)
                dispatch(onError(data))
            }
        } catch (error) {
            dispatch(onError(error))
        }
    }
}