import {FileUtil} from './lib/FileUtil'

let fileArray: Array = FileUtil.readFiles('./src')
console.log(fileArray)