import {expect} from 'chai'
import {FileUtil} from '../src/lib/FileUtil'
import {Parser} from '../src/lib/Parser'
import { TLDR } from '../src/rule/TLDR'
import { ImportsAnalyst } from '../src/rule/ImportsAnalyst'
import * as _ from 'lodash'

let fileArray: Array<String> = FileUtil.readFiles('../src')
fileArray = _.remove(fileArray, (n)=> {
  return !n.endsWith('.map')
})
let contCode = FileUtil.readFile(fileArray[1])
let p = new Parser()
let parseResult = p.parse(contCode)
describe('rule', ()=> {
  it('should return hello world', () => {
    expect(TLDR.rule(contCode)).to.be.true
    expect(ImportsAnalyst.rule(parseResult.importState)).to.be.true
  })
})

