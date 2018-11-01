Vue.component('post', {
  props: ['title', 'author', 'date', 'content'],
  template: `
  <div class="post">
    <h3>{{ title }}</h3>
    <h4>by: {{ author }}</h4>
    <p>posted on: {{ date }}</p>
    <p>{{ content }} <span>[more...]</span></p>
  </div>`
});

const vm =new Vue({
  el: '#posting',
  data: {
    query: '',
    posts: [{ 
        id: 1, 
        title: 'How to Pick Shingle Colors',
        author: 'Moana',
        date: (new Date('2018-10-1')).toLocaleDateString(),
        content: 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.'
      },
      { 
        id: 2, 
        title: 'Selecting the Best Floor Material',
        author: 'Te-Ka',
        date: (new Date('2018-9-10')).toLocaleDateString(),
        content: 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.'
      },
      { 
        id: 3, 
        title: 'Roof Leak and Simple Repair',
        author: 'Moana',
        date: (new Date('2018-9-3')).toLocaleDateString(),
        content: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.'
      },
      { 
        id: 4, 
        title: 'Sprinkler System A to Z',
        author: 'Maui',
        date: (new Date('2018-8-8')).toLocaleDateString(),
        content: 'Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.'
      }
    ]
  },
  computed: {
    computedList: function() {
      var vm = this
      return this.posts.filter(function (item) {
        return item.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  }
});

const newV = new Vue({
  el: "#new-post",
  data: {
    title: '',
    author: '',
    content: ''
  },
  methods: {
    submit: function() {
      if (this.title && this.author && this.content) {
        vm.posts.unshift({
          title: this.title,
          author: this.author,
          date: (new Date()).toLocaleDateString(),
          content: this.content
        });
        window.alert(`A new article, "${this.title}", has been posted.`)
        this.title = '';
        this.author = '';
        this.content = '';
      } else {
        window.alert(`Unable to post a new article!`);
      }
    }
  }
});