import router from '../router'
export const goUserView = {
  methods: {
    goUserView(id) {
      console.log('gouUerView', id)
      router.push({
        name: 'userPosts',
        params: {
          userId: id
        }
      })
    }
  }
}
export default {
  goUserView
}