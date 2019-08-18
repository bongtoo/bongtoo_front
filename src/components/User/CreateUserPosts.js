import UserPosts from './UserPosts.vue'

export default function createUserPosts(componentName, url) {
  return {
    name: componentName,
    components: {
      'user-posts': UserPosts
    },
    render(h) {
      return h(UserPosts, {
        props: {
          url: url
        }
      })
    },
  }
}