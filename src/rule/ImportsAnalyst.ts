export class ImportsAnalyst {  
  name = 'ImportsAnalyst'
  static rule(importState : Array<String>){
    let importTime = importState.length
    if(importTime > 1) return true
  }
}