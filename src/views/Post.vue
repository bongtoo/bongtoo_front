<template>
  <section class="Post">
    <header class="Post-Header"></header>
    <section class="Post-Form contents">
      <div class="Post-Form-Container">
        <div class="Post-Form-Image">
          <el-upload
            :on-success="onSuccess"
            class="el-upload"
            :file-list="fileList"
            :on-change="handleChange"
            action="#"
            list-type="picture-card"
            :auto-upload="false"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
        <div class="Post-Form-Text">
          <input
            class="Post-Form-Head Post-Form-Input"
            type="text"
            placeholder="제목을 입력하세요"
            v-model="postHead"
          />
          <textarea
            class="Post-Form-Body Post-Form-Input"
            placeholder="내용을 입력하세요"
            v-model="postBody"
          ></textarea>
        </div>
      </div>
      <div class="Post-Form-Button">
        <!-- <base-button color="gray">임시저장</base-button> -->
        <span @click="submit">
          <base-button color="pupple">등록</base-button>
        </span>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "@/utility/axios";
import { mapGetters } from "vuex";
import { async } from "q";
export default {
  data() {
    return {
      postHead: "",
      postBody: "",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      fileList: []
    };
  },
  computed: {
    ...mapGetters(["getJwt"])
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    onSuccess(file) {
      console.log(file);
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    submit() {
      const jwt = this.getJwt;
      if (this.jwt || jwt !== "null") {
        axios({
          method: "post",
          url: "/reviews/",
          headers: {
            Authorization: `JWT ${jwt}`
          },
          data: {
            title: this.postHead,
            body: this.postBody
          }
        })
          .then(() => this.$router.push({ name: "home" }))
          .catch(err => console.log(err));
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Post {
  &-Header {
    height: 170px;
    background-color: #f7eff8;
    margin-top: -70.28px;
  }
  &-Form {
    &-Text {
      display: flex;
      flex-direction: column;
    }
    &-Image {
      margin: 30px 0px;
      padding: 20px;
      padding-bottom: 10px;
      border: 1px dashed #a239c0;
      border-radius: 20px;
    }
    &-Input {
      padding: 15px;
      border: 1px solid #dbdbdb;
      &::placeholder {
        color: #dbdbdb;
      }
    }
    &-Head {
      height: 47px;
      font-size: 32px;
    }
    &-Body {
      // width: 100%;
      // display: block;
      height: 270px;
      margin: 35px 0px;
    }
    &-Button {
      text-align: right;
      .BaseButton {
        margin-left: 19px;
      }
    }
  }
}
</style>