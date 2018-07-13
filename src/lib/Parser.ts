export class Parser {
  result = {importState: [], classState: [], functionState: []}
  parse(content : String) {
    for(let i = 0 ; i < content.length; i++){
      if(content[i].includes('import') || content[i].includes('require')) {
        this.result.importState.push(content[i])
      }
      if(content[i].includes('class') ) {
        this.result.classState.push(content[i])
      }
      if(content[i].includes('function') || content[i].includes('async') ) {
        this.result.classState.push(content[i])
      }
    }
    return this.result
  }
}
