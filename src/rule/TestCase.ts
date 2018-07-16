import * as fs from 'fs'
import * as path from 'path'
// import {FileUtil} from '../lib/FileUtil'

export class TestCase {  
  name = 'TestCase'
  //file too long
  static rule(){
    let filePath = '/Users/dengwei/projects/github/code-analizer/build/test/TLDR.test.js'
    // const files = FileUtil.readFiles(path.resolve(__dirname, '../../test'))
    let files = [filePath]
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8')
      if (content.indexOf('.only(') >= 0) {
        return true
      }
    }
  }
}