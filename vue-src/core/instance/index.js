import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
/*Github:https://github.com/answershuto*/
// 构造函数Vue
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    // 如果是用new Vue(options) this instance of Vue 为 true
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  /*初始化 Vue的构造类就做了一件事件 调用_init方法*/
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
