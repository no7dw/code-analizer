import {FileUtil} from './lib/FileUtil'
import {Parser} from './lib/Parser'
import { TLDR } from './rule/TLDR';
import { ImportsAnalyst } from './rule/ImportsAnalyst';

let p = new Parser()

let fileArray: Array<String> = FileUtil.readFiles('./src')
console.log(fileArray)
let contCode = FileUtil.readFile(fileArray[1])
console.log(contCode)
let parseResult = p.parse(contCode)
console.log(parseResult)

console.log(TLDR.rule(contCode))
console.log(ImportsAnalyst.rule(parseResult.importState))
