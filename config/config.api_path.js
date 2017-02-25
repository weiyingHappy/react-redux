module.exports = {
    api_path: {
        login: '/post_api/login', //登录
        getJsSdk: '/post_api/getJsSdk',
        toPay: '/post_api/toPay',
        uniPayOpenid: '/post_api/uniPayOpenid',
        toRefund: '/post_api/toRefund'
    },
    remote_path: {
        isMember: '/CMS/CmsBasic/isMember',
        register: '/CMS/CmsBasic/register',
        sendSMS: '/SMS/sendSMS',
        checkSMS: '/SMS/checkSMS',
        wechatInfo: '/CMS/CmsBasic/wechatInfo',
        hotelInfo: '/FE/Room/rooms',
        inventory: '/FE/Order/inventory',
        getComments: '/FE/Evaluation/evaluations',
        orderPrice: '/FE/Order/calcuPrice',
        orderAdd: '/FE/Order/add',
        orderInfo: '/FE/Order/orderInfo',
        getSnap: '/CMS/CmsActivity/activities',
        changeNickname: '/CMS/CmsBasic/changeNickname',
        myOrder: '/CMS/CmsBasic/myOrders',
        finishOrder: '/FE/Order/pay'
    }
};