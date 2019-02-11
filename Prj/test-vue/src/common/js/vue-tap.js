// 自定义长按,点击事件 2019年1月16日 davey
function CustomTap (el, binding, type) {
  this.binding = binding // 指令数据
  this.el = el // dom
  this.tapMove = this.tapLeave = this.isLangTap = true // tapMove是否移动(true 否) tapLeave是否离开(true 否) isLangTap是否长按(true 否)
  this.isClickTap = this.isTap = true // 是否有效操作(true 有效)  isClickTap 是否点击事件(true 是)
  this.type = type // 'langTap' 长按  'clickTap' 点击
  this.tapPosition = { x: 0, y: 0 } // 触摸位置
  this.el.addEventListener('touchstart', (e) => {
    setTimeout(() => {
      e.preventDefault() // 阻止默认事件 防止长按放大镜等
    }, 10)
    this.isTap = e.changedTouches.length === 1
    if (this.isTap) this.start(e)
  })
  this.el.addEventListener('touchmove', (e) => {
    if (this.isTap) this.move(e)
  })
  this.el.addEventListener('touchend', (e) => {
    if (this.isTap) this.end(e)
  })
}

CustomTap.prototype = {
  start (e) {
    this.tapMove = this.tapLeave = this.isLangTap = this.isClickTap = true
    this.tapPosition.x = e.changedTouches[0].pageX
    this.tapPosition.y = e.changedTouches[0].pageY
    let timeDate = this.type === 'langTap' && 500 || this.type === 'clickTap' && 490 || 500
    this.timer = setTimeout(() => {
      if (this.type === 'langTap' && this.tapLeave && this.tapMove) {
        e.preventDefault()
        this.isLangTap = false
        Object.prototype.toString.call(this.binding.value) === '[object Object]'
        ? this.binding.value.func(e, this.binding.value.data) : this.binding.value(e)
      }
      if (this.type === 'clickTap' && this.tapLeave) this.isClickTap = false
    }, timeDate) // 长按500毫秒不动触发长按事件
  },
  move (e) {
    this.tapMove = false
    if (!this.isLangTap) {
      e.preventDefault()
      e.stopPropagation()
    }
  },
  end (e) {
    this.tapLeave = false // 手已离开
    clearTimeout(this.timer) // 清除定时器
    switch (this.type) {
      case 'langTap': {
        // e.preventDefault()
        break
      }
      case 'clickTap': {
        let moveX = Math.abs(e.changedTouches[0].pageX - this.tapPosition.x)
        let moveY = Math.abs(e.changedTouches[0].pageY - this.tapPosition.y)
        if (this.isClickTap && moveX < 10 && moveY < 10) { // 点击误差距离 左右上下10px
          Object.prototype.toString.call(this.binding.value) === '[object Object]'
          ? this.binding.value.func(e, this.binding.value.data) : this.binding.value(e)
        }
      }
    }
  }
}
export const vueTap = type => (el, binding) => new CustomTap(el, binding, type)
export const keepTap = (el, binding, type) => new CustomTap(el, binding, type)
