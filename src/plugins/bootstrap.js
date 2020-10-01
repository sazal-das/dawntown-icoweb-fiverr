
// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {
    // Plugins
    ModalPlugin,
    CardPlugin,
    IconsPlugin,
    ButtonPlugin,
    // Components
} from 'bootstrap-vue'

export default {
    init: Vue => {

        // Plugins
        Vue.use(ModalPlugin)
        Vue.use(CardPlugin)
        Vue.use(IconsPlugin)
        Vue.use(ButtonPlugin)
    }
}