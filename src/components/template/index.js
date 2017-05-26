import React from 'react'
import active1 from './active1'
import active2 from './active2'
import active3 from './active3'

// 后期调整为动态引入
const templates = [
    {
        type: 1,
        component: active1
    },
    {
        type: 2,
        component: active2
    },
    {
        type: 3,
        component: active3
    }
]

export const getTemplateByType = (type) => {
    return templates.filter(v=>v.type===type)[0].component
}