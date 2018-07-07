
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
        axios.get('/newposts.json').then(response => {
            this.posts = response.data;
        });
    }
});


const routes = [
  { path: '/', component: Homepage },
  { path: '/blog', component: Blog }
]


const router = new VueRouter({
  routes // short for `routes: routes`
})


const app = new Vue({
  router
}).$mount('#app')

function addPostFunction(){
	var obj = document.getElementById("txt-id").value;
	document.getElementById("txt-id").value = "";
	window.open("index.html", "_self");
}

function login(){
	var username = document.getElementById("username1").value;
	var pass = document.getElementById("password1").value;
	window.open("http://172.16.0.164:8080/homepage.html", "_self");
}


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

