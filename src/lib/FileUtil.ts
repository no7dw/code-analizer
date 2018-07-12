import * as fs  from 'fs'
import * as path from 'path'

export class FileUtil {
  /**
   * 读取某个目录下所有文件名
   */
  static readFiles (dir) {
    const files = fs.readdirSync(dir)
    let allFiles = []
    for (const file of files) {
      const filename = path.resolve(dir, file)
      const stat = fs.statSync(filename)
      let theFiles = []
      if (stat && stat.isDirectory()) {
        theFiles = this.readFiles(filename)
      } else {
        theFiles = [filename]
      }
      allFiles = allFiles.concat(theFiles)
    }
    return allFiles
  }
}
