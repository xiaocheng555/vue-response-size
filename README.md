# vue-response-size

Vue response size library. 
Xs, sm, md, lg, xl size are the same as Element-UI.

# Demo

[___Demo___](https://xiaocheng555.github.io/vue-response-size/demo/dist/index.html)

# Installation

## npm

```bash

# vue2
$ npm i vue-response-size@1 -S 

# vue3
$ npm i vue-response-size -S

```

## yarn

```bash

# vue2
$ yarn add vue-response-size@1

# vue3
$ yarn add vue-response-size

```

# Usage

```javascript
import $vSize from 'vue-response-size'
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
|`width`|current width size|`Number`|
|`height`|current height size|`Number`|
|`changeSize`|change size|`Function`|

## Change Size

```javascript
import $vSize from 'vue-response-size'

$vSize.changeSize({
  xl: { min: 1904 },
  lg: { min: 1264 },
  md: { min: 960 },
  sm: { min: 600 },
  xs: { max: 600 }
})
```