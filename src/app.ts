import {FileUtil} from './lib/FileUtil'

let fileArray: Array<String> = FileUtil.readFiles('./src')
console.log(fileArray)