const keyResult = require('../db/mongo.data.json')
export class MongoKeyScan {
  static getKey () {
    return keyResult
  }
}