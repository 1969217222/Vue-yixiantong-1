import { HTTP } from '../utils/http'   //导入打包好的HTTP
import  config from '../utils/config'  // 导入API

// DetailModel class 相当于包装器,它是不能调用的
// 包装器要被实例化才能调用new 
// 实例化后class的方法才能被调用

class DetailModel extends HTTP {
    getDetail (field,id) {
        return new Promise((resolve, reject) =>{
            this.axiosPost({
                url: config.API.GET_DETAIL,
                data:{
                    field,
                    id,
                    reject: reject
                },
                success (data) {    //成功
                    resolve({
                        data,
                        status:0
                    })
                },
                error (error) {   // 失败
                    resolve({
                        error,
                        status: -1
                    })
                }
            })
        })
    }
}

export { DetailModel }


// const data = {}
// export default data

// import data from './x'

// export {
//     data,
//     a,
//     b
// }

// import {a} from './a'
