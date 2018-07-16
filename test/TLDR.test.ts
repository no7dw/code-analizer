import {expect} from 'chai'
import {FileUtil} from '../src/lib/FileUtil'
import {Parser} from '../src/lib/Parser'

//should autowire
import { TLDR } from '../src/rule/TLDR'
import { ImportsAnalyst } from '../src/rule/ImportsAnalyst'
import { TestCase } from '../src/rule/TestCase'

// import * as _ from '_@types_lodash@4.14.112@@types/lodash'


describe('rule', ()=> {
  it('should return in TLDR', () => {
    //before
    // let fileArray: Array<String> = FileUtil.readFiles('../src')
    // fileArray = _.remove(fileArray, (n)=> {
    //   return !n.endsWith('.map')
    // })
    // let contCode = FileUtil.readFile(fileArray[1])
    // let p = new Parser()
    // let parseResult = p.parse(contCode)

    // expect(TLDR.rule(contCode)).to.be.true
    // expect(ImportsAnalyst.rule(parseResult.importState)).to.be.true
  })
  it.only('should return true in testcase', () => {
    expect(TestCase.rule()).to.be.true
  })
})

