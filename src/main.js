import Vue from 'vue'
import App from './App.vue'
import router from './router'
let instance = null;
Vue.config.productionTip = false

if (!window.__POWERED_BY_QIANKUN__) {
  render();
} else {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
}


export async function bootstrap() {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main app', props);
  render();
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
// export async function bootstrap() {
//   console.log('react app bootstraped');
// }
