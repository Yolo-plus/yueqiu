<template>
  <div id="app">
    <div class="nav-left">
      <div class="logo">
        <h3 @click="$router.push('/')" style="cursor: pointer;">LUNA HOME 运营端</h3>
      </div>

      <div class="list">
        <el-collapse v-model="activeName" accordion @change="handleChange">
          <el-collapse-item title=" 商品" name="1" class="shangpin">
            <div>- 商品管理列表</div>
          </el-collapse-item>
          <el-collapse-item title=" 采购单" name="2" class="caigou">
            <div>-</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <div class="content">
      <div class="content-top">
        <div class="header">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            size="medium"
          ></el-avatar>
          Timothy Hayes
        </div>
      </div>

      <div class="content-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "./filters";

export default {
  name: "App",
  data() {
    return {
      activeName: "1",
      time: new Date(),
      activeName: "first",
    };
  },
  methods: {
    handleChange(val) {
      if (val == "1") {
        this.$router.push('/shangpin')
      } else if (val == "2") {
        this.$router.push('/caigou')
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  computed: {},
  mounted() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  },
};
</script>

<style>
/* 头部和左侧样式 */
.nav-left {
  width: 183px;
  height: 2000px;
  background: rgb(39, 38, 55);
  position: fixed;
  top: 0;
  left: 0;
}

.nav-left .logo {
  height: 42px;
  box-shadow: -2px 0 0 2px rgb(28, 27, 41);
  color: white;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  line-height: 42px;
}

.nav-left .list {
  margin-top: 25px;
}

.content {
  padding-left: 183px;
  background: #f1f2f6;
}

.content .content-top {
  height: 42px;
  background: white;
  box-shadow: -2px 0 0 2px rgb(236, 237, 240);
}

.content .content-top .header {
  width: 151px;
  height: 100%;
  float: right;
  font-size: 13px;
  display: flex;
  align-items: center;
}

.content .content-main {
  padding: 16px 16px 0;
}

/* 改变组件库自带样式 */
.el-collapse {
  border: none;
}

.el-collapse-item__header {
  font-family: "iconfont" !important;
  background: rgb(39, 38, 55);
  border: none;
  padding-left: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.el-collapse-item__header:focus {
  color: #409eff;
}

.el-collapse-item__wrap {
  background: rgb(28, 27, 41);
  border: none;
  padding-left: 15px;
}

.el-collapse-item__content {
  color: rgba(255, 255, 255, 0.8);
  padding-bottom: 0;
  height: 48px;
  line-height: 48px;
}

.el-avatar {
  margin-right: 5px;
}

.el-breadcrumb {
  font-size: 12px;
}

.el-breadcrumb__inner {
  color: #909195;
}

.el-tabs__item:focus.is-active.is-focus:not(:active) {
  box-shadow: none;
  border-radius: 0;
}

.el-tabs__item {
  font-size: 13px;
}
</style>
