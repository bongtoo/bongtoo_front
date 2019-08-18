<template>
  <section class="UserPosts-PostList">
    <div
      v-for="(post,index) in postList"
      :key="'post'+index"
      class="UserPosts-PostItem"
      @click="watchDetailReview(post.id)"
    >
      <div
        v-if="post.get_thumnail"
        class="UserPosts-PostImg"
        :style="{backgroundImage:`url(http://127.0.0.1:8000${post.get_thumnail.image})`}"
      ></div>
      <div v-else class="UserPosts-PostImg"></div>
    </div>
    <el-dialog :visible.sync="dialogVisible" :close-on-click-modal="false">
      <base-post></base-post>
    </el-dialog>
  </section>
</template>

<script>
import axios from "@/utility/axios";
import basePost from "@/components/Post/BasePost";
export default {
  props: ["url"],
  name: "UserPosts",
  components: {
    "base-post": basePost
  },
  data() {
    return {
      postList: null,
      dialogVisible: false
    };
  },
  methods: {
    watchDetailReview(id) {
      axios
        .get(`/reviews/${id}/`)
        .then(res => {
          console.log(res.data);
          this.$store.commit("setPost", res.data);
        })
        .then(() => {
          axios
            .get(`/reviews/${id}/comments/`)
            .then(res => {
              this.$store.commit("setComments", res.data);
            })
            .then(() => {
              this.toggleDialog();
            });
        });
    },
    toggleDialog() {
      console.log("눌림");
      this.dialogVisible = true;
    }
  },
  created() {
    console.log("생성됨");
    axios.get(`/users/${this.$route.params.userId}/${this.url}`).then(res => {
      console.log(res);
      if (this.url === "likes") {
        this.postList = res.data.map(el => el.review);
      } else {
        this.postList = res.data;
      }
    });
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index.scss";
.UserPosts {
  &-Post {
    &List {
      display: grid;
      margin: auto;
      width: fit-content;
      grid-template-columns: repeat(3, 250px);
      grid-auto-rows: 250px;
      box-sizing: border-box;
      grid-gap: 5px;
      .el-dialog {
        max-width: 920px;
        width: 100%;
      }
    }
    &Item {
      overflow: hidden;
      // box-sizing: border-box;
      &:hover .UserPosts-PostImg {
        transform: scale(1.05);
      }
    }
    &Img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: 0.2s;
      background-color: rgb(170, 170, 170);
      background-size: cover;
      background-position: center;
    }
  }
}
</style>