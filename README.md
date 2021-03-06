# vue-response-size

Vue response size library. 
Xs, sm, md, lg, xl size are the same as Element-UI.

# Demo

[___Demo___](https://xiaocheng555.github.io/vue-response-size/demo/dist/index.html)

# Installation

## npm

```bash

$ npm i vue-response-size -S

```

## yarn

```bash

$ yarn add vue-response-size

```

# Usage

```javascript
import Vue from 'vue'
import VueResponseSize from 'vue-response-size'

Vue.use(VueResponseSize)
```

template:

```html
<div v-if="$vSize.isXl">xl visible: {{ $vSize.width }}</div>
<div v-if="$vSize.isLg">lg visible: {{ $vSize.width }}</div>
<div v-if="$vSize.isMd">md visible: {{ $vSize.width }}</div>
<div v-if="$vSize.isSm">sm visible: {{ $vSize.width }}</div>
<div v-if="$vSize.isXs">xs visible: {{ $vSize.width }}</div>
```

## $vSize Prop

Xs, sm, md, lg, xl size are the same as Element-UI.

|prop|description|Type|
|:---|---|---|
|`isXl`|≥1920px|`Boolean`|
|`isLg `|≥1200px|`Boolean`|
|`isMd`|≥992px|`Boolean`|
|`isSm`|≥768px|`Boolean`|
|`isXs`|<768px|`Boolean`|
|`width`|current size|`Number`|
|`changeSize`|change size|`Function`|

## Change Size

```javascript
Vue.use(VueResponseSize, {
  size: {
    xl: { min: 1904 },
    lg: { min: 1264 },
    md: { min: 960 },
    sm: { min: 600 },
    xs: { max: 600 }
  }
})
```

or

```javascript
this.$vSize.changeSize({
  xl: { min: 1904 },
  lg: { min: 1264 },
  md: { min: 960 },
  sm: { min: 600 },
  xs: { max: 600 }
})
```