import * as http from '@/common/js/http'

export function queryData (data) {
  return http.post('/test/test', data)
}
