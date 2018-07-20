const indexResult = require('../lib/MongoKeyScan').getKey()
// const indexResult = [{
//   "v": 1,
//   "key": {
//       "_id": 1
//   },
//   "name": "_id_",
//   "ns": "SSO.User"
// },
// {
//   "v": 1,
//   "unique": true,
//   "key": {
//       "username": 1
//   },
//   "name": "username_1",
//   "ns": "SSO.User",
//   "background": true
// }
// ]
const _ = require('lodash')
export class QueryIndex {  
  name = 'QueryIndex'
  static rule(queries : Array<String>){
    let hitArray = []
    for (let i = 0; i < queries.length; i++) {
      let query = queries[i]
      for(const index of indexResult){
        let keyName = _.keys((index.key))[0]
        if(query.indexOf(keyName)>=0){
          console.log(query, keyName)
          hitArray.push(query)
          break
        }
      }
    }
    return _.xor(hitArray, queries)
  }
}
let tempQuery =[ 'xx.findxx("username")', 'yy.findyy(_id)' , 'yy.update(item)']
console.log(QueryIndex.rule(tempQuery))
