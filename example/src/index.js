import React from 'react';
import ReactDOM from 'react-dom';

import { TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;

const Demo = React.createClass({
  getInitialState() {
    return {
      value: '',
    };
  },
  onChange(value) {
    console.log(arguments);
    this.setState({ value });
  },
  render() {
    return (
      <TreeSelect style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="请选择xxxxxx"
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  },
});

ReactDOM.render(
    <Demo />,
    document.getElementById('app')
);
//
// import { List, InputItem, Switch, Stepper, Slider, Radio, Checkbox, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
// import { Form, createForm } from 'rc-form';
//
// import Icon from './components/Icon/js/Icon';
// import './components/Icon/less/icon';
// import geren from './components/Icon/images/geren.svg';
// import lock from './components/Icon/images/lock.svg';
//
// let Signin = React.createClass({
//     render () {
//         const { getFieldProps } = this.props.form;
//
//         return (
//             <div>
//                 <WhiteSpace size={24} />
//                 <List>
//                     {/* <List.Header>登录</List.Header> */}
//                     <List.Body>
//                         <InputItem
//                             { ...getFieldProps('input1') }
//                             labelNumber={2}
//                             clear
//                             placeholder="用户名">
//                             <Icon glyph={geren} />
//                         </InputItem>
//                         <InputItem
//                             { ...getFieldProps('input2') }
//                             format="password"
//                             labelNumber={2}
//                             placeholder="密码">
//                             <Icon glyph={lock} />
//                         </InputItem>
//                     </List.Body>
//                 </List>
//                 <WhiteSpace size={24} />
//                 <WingBlank size={16}>
//                     <Button type="primary">下一步</Button>
//                 </WingBlank>
//             </div>
//         )
//     }
// });
//
// Signin = createForm()(Signin);
//
// ReactDOM.render(<Signin />, document.getElementById('app'));
