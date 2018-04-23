 app = new Vue({
  el: '#app',
  data: {
	photos:[],		
  },
  created: function() {
    this.getPhoto();
  },
  
  methods: {
    getPhoto: function() {
      axios.get("http://localhost:3000/api/photos").then(response => {
	this.photos = response.data;
	return true;
      }).catch(err => {
      });
    },
    
   
  }
});

