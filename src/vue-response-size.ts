import { reactive } from 'vue'
import { throttle } from 'lodash-es'

export interface ResponseSizeValue {
  min?: number,
  max?: number
}

export interface ResponseSizeOption {
  xl?: ResponseSizeValue,
  lg?: ResponseSizeValue,
  md?: ResponseSizeValue,
  sm?: ResponseSizeValue,
  xs?: ResponseSizeValue,
}

export interface ResponseSize {
  isXs: boolean,
  isSm: boolean,
  isMd: boolean,
  isLg: boolean,
  isXl: boolean,
  width: number,
  height: number,
  changeSize: (option?: { size: ResponseSizeOption }) => void,
  destroy: () => void
}

// 尺寸范围
const defaultSizeMap = {
  // ≥1920px
  xl: {
    min: 1920
  },
  // ≥1200px
  lg: {
    min: 1200
  },
  // ≥992px
  md: {
    min: 992
  },
  // ≥768px
  sm: {
    min: 768
  },
  // <768px
  xs: {
    max: 768
  }
}

const $vSize = reactive<ResponseSize>({
  isXs: false,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  width: 0,
  height: 0,
  changeSize,
  destroy
})
let sizeMap = getSizeMap()
let onResizeThrottle: () => void
init() 

// 初始化
function init () {
  console.log(window.name ?? '1')
  onResize()
  onResizeThrottle = throttle(onResize, 10) as () => void
  window.addEventListener('resize', onResizeThrottle)
}

function destroy () {
  onResizeThrottle && window.removeEventListener('resize', onResizeThrottle)
}

// 更改尺寸
function changeSize (option?: { size: ResponseSizeOption }) {
  sizeMap = getSizeMap(option)
  onResize()
}

// 获取尺寸映射
function getSizeMap (option?: { size: ResponseSizeOption }) {
  const sizeConfig = option && option.size
  const sizeMap = Object.assign({}, defaultSizeMap, sizeConfig)
  let key: keyof ResponseSizeOption
  for (key in sizeMap) {
    const value = sizeMap[key]
    if (typeof value === 'object') {
      const min = Number(value.min)
      const max = Number(value.max)
      if (Number.isNaN(min)) {
        value.min = -Infinity
      }
      if (Number.isNaN(max)) {
        value.max = Infinity
      }
    }
  }
  return sizeMap
}

// resize事件的回调函数
function onResize () {
  // 设置
  let isXs = false
  let isSm = false
  let isMd = false
  let isLg = false
  let isXl = false
  const width = window.innerWidth || document.documentElement.offsetWidth
  const height = window.innerHeight || document.documentElement.offsetHeight
  
  // 设置尺寸
  if (width >= sizeMap.xl.min && width <= sizeMap.xl.max!) {
    isXl = true
  } else if (width >= sizeMap.lg.min && width <= sizeMap.lg.max!) {
    isLg = true
  } else if (width >= sizeMap.md.min && width <= sizeMap.md.max!) {
    isMd = true
  } else if (width >= sizeMap.sm.min && width <= sizeMap.sm.max!) {
    isSm = true
  } else if (width >= sizeMap.xs.min! && width <= sizeMap.xs.max) {
    isXs = true
  }
  
  $vSize.isXs = isXs
  $vSize.isXs = isXs
  $vSize.isSm = isSm
  $vSize.isMd = isMd
  $vSize.isLg = isLg
  $vSize.isXl = isXl
  $vSize.width = width
  $vSize.height = height
}

export default $vSize
export {
  $vSize
}
