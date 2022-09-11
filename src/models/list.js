import { HTTP } from '../utils/http'   //导入打包好的HTTP
import  config from '../utils/config'  // 导入API

class ListModel extends HTTP {
    getListDatas (cityId,field) {
        return new Promise ((resolve,reject) =>{     // 看不懂 记得去百度
            this.axiosPost({
                url: {
                data:{
                    cityId,
                    field ,
                    reject,
                },
                success (data) {
                    resolve({
                        data,
                        status: 0
                    });
                },
                error (error) {
                    resolve({
                        error,
                        status: -1
                    });
                }
                }
            })
        })
    } 
}


export { ListModel }