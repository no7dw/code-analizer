// import {BaseRule} from "./base";
// export class TLDR extends BaseRule {
export class TLDR {  
  name = 'TLDR'
  static rule(contCode : String){
    let contLOC = contCode.split('\n').length
    if(contLOC>10) return true
  }
}