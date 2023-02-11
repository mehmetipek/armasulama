import {  page,uploadImage,pageList,pageDelete,pageUpdate,announce,announceUpdate,announceList,
  announceDelete} from '@/api/article'


const state = {
 
}

const mutations = {

}

const actions = {
    page({commit,state,dispatch},data) {
        return new Promise((resolve, reject) => {
            page(data).then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      uploadImage({commit,state,dispatch},data) {
        
        return new Promise((resolve, reject) => {
            uploadImage(data).then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      pageList({commit,state,dispatch},data) {
        
        return new Promise((resolve, reject) => {
          pageList().then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      pageDelete({commit,state,dispatch},data) {
        return new Promise((resolve, reject) => {
          pageDelete(data).then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      pageUpdate({commit,state,dispatch},data) {
        return new Promise((resolve, reject) => {
          pageUpdate(data).then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      announce({commit,state,dispatch},data) {
        return new Promise((resolve, reject) => {
          announce(data).then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      announceUpdate({commit,state,dispatch},data) {
        return new Promise((resolve, reject) => {
          announceUpdate(data).then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      announceList({commit,state,dispatch},data) {
        
        return new Promise((resolve, reject) => {
          announceList().then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      announceDelete({commit,state,dispatch},data) {
        
        return new Promise((resolve, reject) => {
          announceDelete().then(res => {
      
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
}

export default {
//   namespaced: true,
  state,
  mutations,
  actions
}
