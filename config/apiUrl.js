let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getArticleList: ipUrl + 'getArticleList',  //首页接口
    getArticleById: ipUrl + 'getArticleById/',   //详细页
    getTypeInfo: ipUrl + 'getTypeInfo',   //获得文章类别
    getListById: ipUrl + 'getListById/'   //根据类别Id获得文章列表
}

export default servicePath