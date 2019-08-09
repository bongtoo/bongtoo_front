<template>
  <section class="Signup">
    <div class="Signup-Form">
      <label class="Signup-Form-Item" for="id">
        <div class="Signup-Label">아이디</div>
        <input type="text" class="Signup-Input" />
      </label>
      <label class="Signup-Form-Item" for="email">
        <div class="Signup-Label">이메일</div>
        <input type="email" class="Signup-Input" />
      </label>
      <label class="Signup-Form-Item" for="pw1">
        <div class="Signup-Label">비밀번호</div>
        <input type="password" class="Signup-Input" />
      </label>
      <label class="Signup-Form-Item" for="pw2">
        <div class="Signup-Label">비밀번호 확인</div>
        <input type="password" class="Signup-Input" />
      </label>
    </div>
    <div class="Signup-Submit">
      <base-button color="pupple">회원가입</base-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      email: "",
      pw: "",
      pw2: ""
    };
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/index.scss";
.Signup {
  &-Form {
    width: 500px;
    margin: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    &-Item {
      margin: 10px 0px;
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