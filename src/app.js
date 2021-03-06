import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from  './input'
import Row from  './row'
import  Col from './col'

Vue.component('g-button-group',ButtonGroup)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-iput',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:'hi'
    },
    methods:{
        created(){
            setTimeout(()=>{
                let event = new Event('change');
                let inputElement = this.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                console.log('hi');
            },3000)
        },
        inputChange(e){
            console.log(e);
        }
    }
})

