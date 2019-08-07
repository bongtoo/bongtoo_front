import UserPosts from './UserPosts.vue'

export default function createUserPosts(componentName) {
  return {
    name: componentName,
    computed: {
      url() {
        return this.$attrs.url;
      }
    },
    components: {
      'user-posts': UserPosts
    },
    render(h) {
      return h(UserPosts, {
        props: {
          url: this.$attrs.url
        }
      })
    },
  }
}