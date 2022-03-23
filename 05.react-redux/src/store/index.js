// 创建仓库，引入reducer，并导出store
// 只需初始化一次

import reducer from "./reducer";
import { createStore } from "redux";

export const store = createStore(reducer)