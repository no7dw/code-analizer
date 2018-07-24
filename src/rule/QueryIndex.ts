const indexResult = require('../lib/MongoKeyScan').getKey()

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

