// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Homepage = Vue.component('Blogs', {
    template: '#blogs-block-template'
});

const Blog = Vue.component('Blog', {
    template: '#blog-template',
    data: function () {
        return {
            posts: []
        }
    },
    mounted: function () {
        axios.get('/posts.json').then(response => {
            this.posts = response.data;
        });
    }
});


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Homepage },
  { path: '/blog', component: Blog }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!

document.addEventListener('DOMContentLoaded', function () {
   [].forEach.call(document.querySelectorAll('.scroll-button'), function(item) {
       item.addEventListener('click', function (event) {
           event.preventDefault();
           const target = event.target.href.replace(location.origin + '/', '');
           const el = document.querySelector(target);
           window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': el.offsetTop
           })
       })
   }) 
});

