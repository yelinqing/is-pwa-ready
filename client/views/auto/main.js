import globalTest from './global/main'
import empty from './empty/main'
import postmessageTest from './postmessage/main'
import lifecycleTest from './lifecycle/main'
import syncTest from './sync/main'
import result from './result/main'
import init from './init/main'
import env from './env/main'
import summary from './summary/main'
import {search2obj} from 'utils'
import './main.css'
import 'vconsole'
import {info} from './helper'
window.addEventListener('unhandledrejection', function (event) {
  console.warn('WARNING: Unhandled promise rejection. Shame on you! Reason: ' + event.reason)
})
info.totalSchedule = 6
const {step = '0'} = search2obj();
(async function main () {
  switch (step) {
    case '0':
      await init()
      await env()
      await result()
      await globalTest()
      await result()
      await empty()
      return
    case '1':
      await result()
      await lifecycleTest()
      await result()
      await postmessageTest()
      await result()
      await syncTest()
      await result()
      await summary()
      break
  }
})()
