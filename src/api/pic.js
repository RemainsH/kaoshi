import request from '../utils/request'

const api_name = '/flower/pic'
export default {
  getById() {
    return request({
      url: `${api_name}`,
      method: 'get'
    })
  },
}
