import { HTTP } from '../utils/http'   //导入打包好的HTTP
import  config from '../utils/config'  // 导入API

class IndexModel extends HTTP {
    getHomeDatas (cityId) {
        return new Promise((resolve, reject) =>{
            this.axiosPost({
                url: config.API.GET_HOME_DATAS,
                data: {
                    cityId
                },
                success(data){
                    resolve({
                        data,
                        status:0
                    });
                },
                error (error) {
                    resolve({
                        error,
                        status:-1
                    })
                }
            })
        })    
    }
}

export { IndexModel }