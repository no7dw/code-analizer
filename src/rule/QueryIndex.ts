const keyResult = require('../lib/MongoKeyScan').getKey()
const _ = require('lodash')
export class QueryIndex {  
  name = 'QueryIndex'
  static rule(queries : Array<String>){
    let hitArray = []
    for (let i = 0; i < queries.length; i++) {
      hitArray.push(0)
      let query = queries[i]
      for(const index of keyResult){
        let keyName = _.keys((index.key))[0]
        if(query.indexOf(keyName)){
          hitArray[i] = 1
          break
        }
      }
    }
    // let queryCheck = queries
    // return _.move(queries, (n) => {
    //   return n == 0
    // })
  }
}