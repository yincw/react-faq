# Redux Form

> "redux-form": "^6.0.5"

- `<Field>`
- `<Fields>`
- `<FieldArray>`
- `SubmissionError()`
- `formValueSelector()`
- `reduxForm()`

## `<Field>`

http://redux-form.com/6.0.2/docs/api/Field.md/

属性 | 说明 | 类型 | 默认值
---|---|---|---
component | HTML 元素，可选值：input, textarea, select | string | -
type | HTML input 类型，可选值：text, password, radio, checkbox, email, number, ...| string | -
name | - | string | -
value | - | string | -
id | - | string | -
placeholder | - | string | -
normalize | 标准化 | function | bound normalize()

## `<Fields>`

http://redux-form.com/6.0.2/docs/api/Fields.md/

## `<FieldArray>`

http://redux-form.com/6.0.2/docs/api/FieldArray.md/

属性 | 说明 | 类型 | 默认值
---|---|---|---
component | HTML 元素，可选值：input, textarea, select | string | -

## `SubmissionError()`

http://redux-form.com/6.0.2/docs/api/SubmissionError.md/

## `formValueSelector()`

http://redux-form.com/6.0.2/docs/api/FormValueSelector.md/

## `reduxForm()`

http://redux-form.com/6.0.2/docs/api/ReduxForm.md/

> 表单接口

属性 | 类型 | 默认值 | 说明
---|---|---|---
form | string | - | 表单唯一的标识符，**必须项**
pure | boolean | true | 纯的
initialValues  | object | {} | 初始化值
enableReinitialize | boolean | false | 启用重新初始化
keepDirtyOnReinitialize | boolean | false | 表单重新初始化时将保留脏的字段的值
destroyOnUnmount | boolean | true | 组建卸载时销毁
getFormState | function | fn() | 获得表单状态
propNamespace | string | - | 属性命名空间
shouldAsyncValidate | boolean | - | -
touchOnBlur | boolean | true | -
touchOnChange | boolean | false | -

> 事件接口

属性 | 类型 | 默认值 | 说明
---|---|---|---
handleSubmit | function | bound submit() | 处理表单 submit()
onSubmit | function | fn() | 表单提交
submitting | boolean | false | 提交
onSubmitFail | function | fn(errors, dispatch) | 表单提交错误
submitFailed | boolean | false | 提交失败
onSubmitSuccess | function | fn(result, dispatch) | 表单提交成功
submitSucceeded | boolean | false | 提交成功
initialize | function | fn() | 初始化
initialized | boolean | false | 初始化的
destroy | function | fn() | 销毁
blur | function | fn() | 模糊
change | function | fn() | 改变
autofill | function | fn() | 自动填充
touch | function | fn() | 触摸
untouch | function | fn() | 不可触摸
anyTouched | boolean | false | 任何接触

> 验证接口

属性 | 类型 | 默认值 | 说明
---|---|---|---
validate | function | `(values, props) => ({})` | 同步验证函数的值和 属性 传递到你的组件，如果验证通过，返回 `{}`, 如果验证不通过，返回一个验证错误 `{ field1: <String>, field2: <String> }`。
asyncBlurFields | array | [] | 包含的字段名称在触发 onBlur 时会调用 asyncValidate 函数
asyncValidate | function | bound asyncValidate() | 异步验证
dispatch | function | fn() | 派遣
asyncValidating | boolean | false | 异步验证

> 实例 API

属性 | 类型 | 默认值 | 说明
---|---|---|---
dirty | boolean | false | 当当前表单的值与 initialValues 不同时为 true，否则为 false
pristine | boolean | true | 当当前表单的值与 initialValues 相同时为 true，否则为 false
submit | Promise | - | 提交表单
reset | function | fn() | 重置表单到 initialValues，重置之后将回到 pristine
invalid | boolean | false | 当表单无效（有验证错误）时为 true，否则为 false
valid | boolean | true | 当表单有效（没有验证错误）时为 true，否则为 false
values | object | - | 表单中所有字段的当前值
registeredFields | array | - | 每个由 name 和 type 字段代表表单中的所有字段组成的一个对象数组。主要用于测试。
wrappedInstance | - | ReactElement | 对组件实例的引用，装饰于 reduxForm()，主要用于测试。
