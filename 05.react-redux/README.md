React Redux基于Redux，因此安装时需要两者一起安装：
$ npm i redux react-redux --save

store：公共状态(State)管理仓库，在store/index.js中初始化
reducer：将公共state映射成Props，使公共state可以在组件中使用（通过props.value去调用state.value）