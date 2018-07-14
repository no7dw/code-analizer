import {FileUtil} from './lib/FileUtil'
import {Parser} from './lib/Parser'
import { TLDR } from './rule/TLDR';

let p = new Parser()

let fileArray: Array<String> = FileUtil.readFiles('./src')
console.log(fileArray)
let contCode = FileUtil.readFile(fileArray[1])
console.log(contCode)
console.log(p.parse(contCode))

console.log(TLDR.rule(contCode))
