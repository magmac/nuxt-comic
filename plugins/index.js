import Vue from 'vue'
import FontAwesomeIcon from './font-awesome'
import { Carousel, CarouselItem, Form, Input, Button, Loading } from 'element-ui'
// import elementUI from 'element-ui'

// Vue.use(elementUI)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Loading)
Vue.component('font-awesome-icon', FontAwesomeIcon)