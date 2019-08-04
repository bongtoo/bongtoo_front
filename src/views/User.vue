<template>
  <div class="User">
    <header class="User-Profile contents">
      <div class="User-Profile-ImageBox">
        <div class="User-Profile-Image"></div>
      </div>
      <div class="User-Profile-Info">
        <div class="User-Profile-Name">User_0000</div>
        <div class="User-Profile-Prefer">
          선호 활동
          <b>코딩봉사</b>
        </div>
        <div>게시물 14</div>
        <div>
          <base-button type="line">작성하기</base-button>
          <base-button color="black" type="line">프로필 편집</base-button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "User"
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.User {
  font-family: NanumGothic;
  &-Profile {
    display: flex;
    // background-color: yellow;
    padding-top: 60px;
    padding-bottom: 54px;
    border-bottom: 1px solid #e8e8e8;
    &-Image {
      &Box {
        width: 30%;
      }
      margin: auto;
      width: 150px;
      height: 150px;
      border-radius: 100%;
      background: {
        size: contain;
        position: center;
        image: url("https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");
      }
    }
  }
}
</style>