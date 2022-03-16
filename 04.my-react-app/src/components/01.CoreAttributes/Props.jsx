import React, { Component } from 'react'
import PropTypes from 'prop-types';

/* 
    props: 外部定义组件标签时可以传抵标签属性(<Props name='a'/>)
    函数式组件直接传参:
        function Props(props){...}
        使用限制时：Props.propTypes={...}
*/

export default class Props extends Component {
    
    render() {
        // 获取props
        const {name,age,gender,myDefault} = this.props
        return (
            <div className='cb'>
                <p className='h'>props:</p>
                <ul>
                    <li>name:{name}</li>
                    <li>age:{age}</li>
                    <li>gender:{gender}</li>
                    <li>default:{myDefault}</li>
                </ul>
            </div>
        )
    }


    /*
        props添加限制：需引入import PropTypes from 'prop-types';
    */
    // propTypes对props的类型、必要性限制,用,隔开
    // 注意对象内部使用大写的PropTypes
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.string
    }

    // 为props设置默认值,用,隔开
    static defaultProps = {
        age : 0,
        gender: '男',
        myDefault: '默认值'
    }

}

