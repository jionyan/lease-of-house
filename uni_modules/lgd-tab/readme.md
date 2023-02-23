### 1.1.0版本起变更了传值方式与方法名，如从旧版本更新需更新写法

## 基础用法
> template

	<lgd-tab v-model="tabIndex" :tabValue="tabValue" />

> script

	export default {
		data() {
			return {
				tabValue: ['示例1',  '示例2'],
				tabIndex: 0
			}
		}
	}

## 参数说明
| 参数名 | 说明 | 默认 | 是否必填 | 参数类型 |
|:-----|---|-----|:-----:|:-----:|
|tabValue|tab列表| - |是| Array |
|tabIndex|tab选中下标|0|否| NumBer |
|textColor|文字颜色|#333|否|String|
|underlineColor|滑块颜色|#34b2fa|否|String|
|fontSize|字体大小|16|否|NumBer|
|background|组件背景颜色|#fff|否|String|

## 事件
| 事件名 | 说明 | 回调参数 |
|:-----|-------|:-----:|
|change|监听TAB切换|index |

## 样式

App.vue中引入css

	<style>
		@import url("./components/lgd-tab/lgd-tab.css");
	</style>