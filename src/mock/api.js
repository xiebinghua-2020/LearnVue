import Mock from 'mockjs'

Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|1-300": 0,
        "username": "xiebinghua",
        "email": "xiebinghua@163.com",
        "phone|1-9{11}": 0,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})