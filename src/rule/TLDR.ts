// import {BaseRule} from "./base";
// export class TLDR extends BaseRule {
export class TLDR {  
  name = 'TLDR'
  //file too long
  static rule(FileContent : String){
    let contLOC = FileContent.split('\n').length
    if(contLOC>10) return true
  }
  //function too long
  static rule2(FunctionContent : String){
    let contLOC = FunctionContent.split('\n').length
    if(contLOC>10) return true
  }
}