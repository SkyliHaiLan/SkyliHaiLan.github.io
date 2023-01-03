import Vue from 'vue'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


if (typeof window !== "undefined")
    window.global = window;

 
export default ({
 Vue,
 options,
 router
}) => {
 Vue.use(element);
}