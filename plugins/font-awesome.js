import Vue from 'vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
// import solid from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(brands);
fontawesome.config = {
    autoAddCss: false
}
Vue.component(fontawesome);