import request from '@/utils/request'
import data from '@/views/pdf/content'


export function page(data) {
  return request({
    url: '/page',
    method: 'post',
    data:data
  })
}

export function uploadImage(data) {
  return request({
    url: '/images/upload',
    method: 'post',
    data
  })
}

export function pageList() {
  return request({
    url: '/page',
    method: 'get',
  })
}
export function pageDelete(data) {
  return request({
    url: '/page/'+data+'/delete',
    method: 'post',
  })
}
export function pageUpdate(data) {
  return request({
    url: '/page/'+data.id+'/update',
    method: 'post',
    data
  })
}
export function announce(data) {
  return request({
    url: '/announce',
    method: 'post',
    data
  })
}
export function announceUpdate(data) {
  return request({
    url: '/announce/'+data.id+'/update',
    method: 'post',
    data
  })
}
export function announceList() {
  return request({
    url: '/announce',
    method: 'get',
  })
}
export function announceDelete(data) {
  return request({
    url: '/announce/'+data+'/delete',
    method: 'post',
  })
}
