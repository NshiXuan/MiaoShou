<template>
  <!-- 头部 -->
  <header>
    <div class="content">
      <div class="navbar">
        <span class="help">帮助</span>
        <span>关于我们</span>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="content">
      <!-- 图标 -->
      <div class="icon">
        <!-- <img src="../public/images/icon.png" alt="" /> -->
        <div class="img"></div>
      </div>

      <!-- 输入框 -->
      <div class="search-box">
        <div class="search-keys">
          <input
            type="text"
            placeholder="请输入1~4个关键字"
            v-model="keyWords"
          />
          <button class="btn">词语</button>
        </div>
        <div class="search-keys">
          <input type="text" placeholder="请输入数字0~7" v-model="styleWords" />
          <button class="btn">格式</button>
        </div>
        <div class="search-keys">
          <input type="text" placeholder="请输入数字1~30" v-model="rhyming" />
          <button class="btn">韵律</button>
        </div>
      </div>

      <!-- 生成按钮 -->
      <div class="produce-box">
        <button class="produceBtn btn" @click="getPoems">生成诗歌</button>
      </div>

      <!-- 诗歌展示 -->
      <div class="display-box">
        <div class="display-content-box">
          <img src="../public/images/left.png" alt="" class="img-left" />
          <img src="../public/images/right.png" alt="" class="img-right" />
          <img src="../public/images/left.png" alt="" class="img-left-bottom" />
          <img
            src="../public/images/right-bottom.png"
            alt=""
            class="img-right-bottom"
          />
          <div class="display-content" v-if="display">
            <span>欢迎使用妙手</span>
            <span>Welcome to Miaoshou</span>
          </div>
          <div class="display-content" v-else>
            <span v-for="(item, index) in poems" :key="index">
              {{ item }}
            </span>
          </div>
        </div>
      </div>

      <!-- 分享按钮 -->
      <div class="share">
        <button class="shareBtn btn">分享</button>
      </div>

      <!-- 备注 -->
      <div class="notes">
        <span>备注：</span>
        <span>1、点击“生成诗歌”才可生成诗歌，再次点击即可生成不同的诗歌；</span>
        <span>2、访问人数较多时可能会有延迟，请耐心等待；</span>
        <span
          >3、为了妙手的健康和谐发展，不被强制下线，严禁用政治相关的主题填词，感谢你的配合！</span
        >
      </div>
    </div>

    <!-- 底部 -->
    <footer>
      <div class="content">
        <div class="footer-box">
          <span>友情链接：</span>
          <span>清华九歌·人工智能诗歌写作系统</span>
          <span>华为乐府·人工智能作诗小程序</span>
          <span>微软小冰·AI现代诗歌创作系统</span>
          <span>微软亚洲研究院·电脑对联系统</span>
          <span>王斌·人工智能自动对对联系统</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      keyWords: "",
      styleWords: "",
      rhyming: "",
      poems: [],
      display: true,
    };
  },
  methods: {
    getPoems() {
      axios
        .get(`/index/${this.keyWords}/${this.styleWords}/${this.rhyming}`)
        .then((res) => {
          console.log(res);
          this.poems = res.data.data[1].poem;
          console.log(this.poems);
          this.display = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}

body {
  background: url(../public/images/bg.png) no-repeat;
  background-size: cover;
}

header {
  max-width: 120rem;
  height: 2.5rem;
  background: #5a8ba9;
  opacity: 1;
  margin: auto;
}

.container {
  max-width: 120rem;
  margin: auto;
}

.btn:hover {
  cursor: pointer;
}

.navbar {
  line-height: 2.5rem;
  text-align: right;
}

.navbar span {
  width: 2.25rem;
  height: 1.1875rem;
  font-size: 1.125rem;
  font-family: STXingkai;
  font-weight: 400;
  line-height: 1.25rem;
  color: #ffffff;
  letter-spacing: 0.625rem;
  opacity: 1;
  padding: 0 1.5625rem;
}

.help {
  border-right: 0.0625rem solid #fff;
}

.content {
  max-width: 96.4375rem;
  margin: auto;
}

.icon {
  display: flex;
  align-items: center;
}

.icon .img {
  width: 21.125rem;
  height: 21.125rem;
  margin: auto;
  background: url(../public/images/icon.png) no-repeat;
  background-size: cover;
}

.search-box {
  display: flex;
  justify-content: space-between;
}

.search-keys input {
  width: 19.8125rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.39);
  opacity: 1;
  background-color: #ffffff;
}

input::-webkit-input-placeholder {
  height: 1.625rem;
  font-size: 1.5625rem;
  font-family: STXingkai;
  font-weight: 400;
  line-height: 1.6875rem;
  color: rgba(97, 131, 153, 0.6);
  opacity: 1;
}

.search-keys button {
  width: 6.125rem;
  height: 3.5rem;
  background-color: #5a8ba9;
  font-size: 1.5625rem;
  font-family: STXingkai;
  font-weight: 400;
  line-height: 1.6875rem;
  color: #ffffff;
  letter-spacing: 0.625rem;
}

.produce-box {
  display: flex;
  justify-content: center;
  margin: 2.1875rem 0 2.4375rem 0;
}

.produceBtn {
  width: 12.75rem;
  height: 3.5rem;
  background: #5a8ba9;
  font-size: 1.5625rem;
  font-family: STXingkai;
  font-weight: 400;
  line-height: 1.6875rem;
  color: #ffffff;
  letter-spacing: 0.625rem;
  opacity: 1;
}

.display-box {
  display: flex;
  justify-content: center;
}

.display-content-box {
  width: 74.0625rem;
  background: #5a8ba9;
  opacity: 1;
  position: relative;
}

.img-right {
  position: absolute;
  right: 0;
}

.img-left-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotate(270deg);
}

.img-right-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
}

.display-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 75px 20px;
}

.display-content span {
  height: 2.625rem;
  font-size: 2.5rem;
  font-family: STXingkai;
  font-weight: 400;
  line-height: 2.625rem;
  color: #ffffff;
  letter-spacing: 0.625rem;
  opacity: 1;
  padding: 10px;
}

.share {
  display: flex;
  justify-content: center;
  margin: 2rem 0 2.6875rem 0;
}

.shareBtn {
  width: 6.125rem;
  height: 3.5rem;
  background: #5a8ba9;
  font-size: 1.5625rem;
  font-family: STXingkai;
  font-weight: 400;
  line-height: 3.5rem;
  color: #ffffff;
  text-align: center;
}

.notes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2.625rem;
}

.notes span {
  font-size: 1.125rem;
  font-family: STXingkai;
  font-weight: 400;
  color: #5a8ba9;
  opacity: 1;
  margin: 0;
  height: auto;
  line-height: 1.25rem;
}

footer {
  max-width: 120rem;
  height: 2.5rem;
  background: #5a8ba9;
  opacity: 1;
  margin: auto;
}

.footer-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  height: 24px;
  font-size: 18px;
  line-height: 2.5rem;
  font-family: Microsoft YaHei;
  color: #ffffff;
}

@media (max-width: 1600px) {
  .search-box {
    margin: 0 20px;
  }

  input::-webkit-input-placeholder {
    height: 1.25rem;
    font-size: 1.25rem;
  }

  .display-content {
    padding: 20px 20px 75px 20px;
  }

  footer {
    display: none;
  }
}

@media (max-width: 1350px) {
  .search-keys button {
    width: 4.375rem;
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  .display-content {
    padding: 20px 20px 70px 20px;
  }
}

@media (max-width: 1250px) {
  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .search-keys input {
    width: 19.8125rem;
    height: 3.5rem;
    margin: 20px 0;
  }

  .display-content {
    padding: 20px 20px 50px 20px;
  }

  .display-content-box {
    width: 90%;
  }

  .display-content span {
    font-size: 2rem;
    line-height: 2rem;
  }
}

@media (max-width: 768px) {
  .display-content {
    padding: 20px 20px 50px 20px;
  }

  .display-content span {
    font-size: 1.75rem;
    line-height: 1.75rem;
  }
}

@media (max-width: 567px) {
  .display-content {
    padding: 20px 20px 50px 20px;
  }

  .display-content span {
    font-size: 1.5625rem;
    line-height: 1.5625rem;
  }

  .icon .img {
    width: 12.5rem;
    height: 12.5rem;
  }

  header {
    display: none;
  }
}

@media (max-width: 430px) {
  .search-keys input {
    width: 12.5rem;
    height: 2.5rem;
    margin: 15px 0;
    font-size: 1rem;
    line-height: 1rem;
  }

  .search-keys button {
    width: 5rem;
    height: 2.5rem;
    background-color: #5a8ba9;
    font-size: 1.25rem;
  }

  .display-content-box {
    width: 80%;
  }

  .display-content {
    padding: 20px 20px 50px 20px;
  }

  .display-content-box img {
    width: 30px;
  }

  .display-content span {
    font-size: 1.25rem;
    line-height: 1.25rem;
    letter-spacing: 0;
  }

  .produce-box {
    margin: 15px 0 30px 0;
  }

  .produceBtn {
    width: 10rem;
    height: 2.5rem;
    font-size: 1.25rem;
    line-height: 2.5rem;
  }

  .share {
    margin: 15px 0;
  }

  .shareBtn {
    width: 5rem;
    height: 2.5rem;
    font-size: 1.25rem;
    line-height: 2.5rem;
    margin: 1px 0;
  }

  .notes {
    padding: 0 10px;
  }

  .notes span {
    font-size: 0.75rem;
  }
}
</style>
