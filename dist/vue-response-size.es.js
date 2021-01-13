function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

// 尺寸范围
var defaultSizeMap = {
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
};
var vueResponseSize = {
  install: function install(Vue) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var vm;
    var sizeMap = getSizeMap(option);
    init(); // 初始化尺寸映射

    function getSizeMap(option) {
      var sizeConfig = option && option.size;
      var sizeMap = Object.assign({}, defaultSizeMap, sizeConfig);

      for (var key in sizeMap) {
        var value = sizeMap[key];

        if (_typeof(value) === 'object') {
          var min = Number(value.min);
          var max = Number(value.max);

          if (Number.isNaN(min)) {
            value.min = -Infinity;
          }

          if (Number.isNaN(max)) {
            value.max = Infinity;
          }
        } else {
          sizeMap[key] = {};
        }
      }

      return sizeMap;
    } // 初始化


    function init() {
      // 防止多次创建
      if (window._isInitResponseSize) return;
      window._isInitResponseSize = true; // 创建响应式数据

      vm = new Vue({
        data: {
          responseSize: {
            isXs: false,
            isSm: false,
            isMd: false,
            isLg: false,
            isXl: false,
            width: undefined,
            changeSize: function changeSize(config) {
              sizeMap = getSizeMap(config);
              onResize();
            }
          }
        }
      }); // 将全局变量$vSize绑定响应式数据

      Vue.prototype.$vSize = vm.responseSize; // 处理resize事件

      onResize();
      window.addEventListener('resize', onResize);
    } // resize事件的回调函数


    function onResize() {
      var isXs = false;
      var isSm = false;
      var isMd = false;
      var isLg = false;
      var isXl = false;
      var width = window.innerWidth || document.documentElement.offsetWidth; // 设置

      if (width >= sizeMap.xl.min && width <= sizeMap.xl.max) {
        isXl = true;
      } else if (width >= sizeMap.lg.min && width <= sizeMap.lg.max) {
        isLg = true;
      } else if (width >= sizeMap.md.min && width <= sizeMap.md.max) {
        isMd = true;
      } else if (width >= sizeMap.sm.min && width <= sizeMap.sm.max) {
        isSm = true;
      } else if (width >= sizeMap.xs.min && width <= sizeMap.xs.max) {
        isXs = true;
      }

      vm.responseSize.isXs = isXs;
      vm.responseSize.isXs = isXs;
      vm.responseSize.isSm = isSm;
      vm.responseSize.isMd = isMd;
      vm.responseSize.isLg = isLg;
      vm.responseSize.isXl = isXl;
      vm.responseSize.width = width;
    }
  }
};

export default vueResponseSize;
