<template>
  <section class="Signup">
    <div class="Signup-Form">
      <label class="Signup-Form-Item __vert" for="image">
        <div class="Signup-Label">프로필 이미지</div>
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :on-change="handleAvatarSuccess"
          :auto-upload="false"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </label>
      <label class="Signup-Form-Item" for="id">
        <div class="Signup-Label">아이디</div>
        <input type="text" v-model="id" class="Signup-Input" />
      </label>
      <label class="Signup-Form-Item" for="email">
        <div class="Signup-Label">이메일</div>
        <input type="email" v-model="email" class="Signup-Input" />
      </label>
      <label class="Signup-Form-Item" for="pw1">
        <div class="Signup-Label">비밀번호</div>
        <input type="password" v-model="pw" class="Signup-Input" />
      </label>
      <label class="Signup-Form-Item" for="pw2">
        <div class="Signup-Label">비밀번호 확인</div>
        <input type="password" v-model="pw2" class="Signup-Input" />
      </label>
    </div>
    <div class="Signup-Submit">
      <span @click="signup">
        <base-button color="pupple">회원가입</base-button>
      </span>
    </div>
  </section>
</template>

<script>
import axios from "@/utility/axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: "",
      email: "",
      pw: "",
      pw2: "",
      image: false
    };
  },
  computed: {
    ...mapGetters(["getSubject", "getActivity"])
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.image = res;
    },
    signup() {
      // file은 그냥 안보내지네
      const formData = new FormData(),
        schema = {
          username: this.id,
          email: this.email,
          password1: this.pw,
          password2: this.pw2,
          activity: this.getActivity,
          subject: this.getSubject
        };

      Object.keys(schema).forEach(key => {
        const val = schema[key];
        if (val) {
          formData.append(key, schema[key]);
        }
      });
      formData.append("profile_image", this.image.raw, this.image.name);

      axios({
        method: "post",
        url: "/users/registration/",
        data: formData
      })
        .then(res => {
          console.log(res);
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          console.log(err);
          alert("잘못된 요청입니다.");
        });
    }
  },
  computed: {
    imageUrl() {
      if (this.image) {
        return URL.createObjectURL(this.image.raw);
      }
      return false;
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index.scss";
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.Signup {
  &-Form {
    width: 500px;
    margin: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    &-Item {
      margin: 10px 0px;
      &.__vert {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  &-Label {
    margin-bottom: 5px;
    padding-left: 5px;

    color: $pupple-darken1;
    font-size: 24px;
    font-weight: bold;
  }
  &-Input {
    all: unset;
    padding: 5px 15px;
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid $pupple;
    box-sizing: border-box;

    border-radius: 32px;
  }
  &-Submit {
    text-align: right;
    margin-top: 10%;
    padding-right: 20%;
  }
}
</style>