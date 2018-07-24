export class Example {
  Object dbModel 
  async findOne (uid: String){
    return await dbModel.find(uid)
  }
  async update (uid: String){
    return await dbModel.update(uid)
  }
}