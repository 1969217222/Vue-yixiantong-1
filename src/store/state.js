let cityInfo = {              //封装对象
    cityID: '0',
    cityName: '全部',
    field: 'all'
}
try {
    if(localStorage.cityInfo) {
        cityInfo = JSON.parse(localStorage.cityInfo);
    }
} catch (e) {};
export default cityInfo