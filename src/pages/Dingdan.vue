<template>
  <div>
    <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>一级菜单</el-breadcrumb-item>
        <el-breadcrumb-item>二级菜单</el-breadcrumb-item>
        <el-breadcrumb-item>三级菜单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <h3 class="title">成品订单</h3>

    <div class="order">
      <h4>订单单号：{{ order }}</h4>

      <div class="info">
        <div class="info-left">
          <div>
            <h2>月球发货中</h2>
            <p>{{ time | date2time }}</p>
          </div>
        </div>
        <div class="info-right">
          <div>
            <div class="rightTop">
              <ul>
                <li class="iconfont icon-duigou"></li>
                <li class="iconfont icon-duigou"></li>
                <li class="iconfont icon-duigou"></li>
                <li class="iconfont icon-duigou"></li>
              </ul>
            </div>
            <div class="rightBottom">
              <ol>
                <li>
                  <h3>等待买家付款</h3>
                  <p>2019-11-02 11:55:38</p>
                </li>
                <li>
                  <h3>等待月球发货</h3>
                  <p>2019-11-02 11:55:38</p>
                </li>
                <li>
                  <h3>月球发货中</h3>
                  <p>2019-11-02 11:55:38</p>
                </li>
                <li>
                  <h3>交易完成</h3>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="wuliu-tabs">物流信息</div>

      <div class="kuaidi-tabs">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="包裹一" name="first">
            <div class="package">
              <div class="package-top" style="overflow: hidden">
                <div style="width: 75px; float: left">
                  <p>发货方式：</p>
                  <p>发货人：</p>
                </div>

                <div style="float: left">
                  <p>{{ logistics[0].delivery }}</p>
                  <p>{{ logistics[0].sendname }}</p>
                </div>
              </div>

              <div class="package-bottom">
                <div class="package-bottom-l">
                  <div style="overflow: hidden">
                    <div style="width: 75px; float: left">
                      <p>发货时间：</p>
                      <p>运单号：</p>
                    </div>

                    <div style="float: left">
                      <p>{{ logistics[0].sendtime }}</p>
                      <p>{{ logistics[0].sendordernum }}</p>
                    </div>
                  </div>

                  <div class="special">
                    <img src="../assets/zhuozi.png" alt="" width="70" />
                    <p>{{ logistics[0].goods }}</p>
                    <p>×{{ logistics[0].goodsnum }}</p>
                  </div>
                </div>
                <div class="package-bottom-r">
                  <p>
                    物流状态：<span style="color: rgb(129, 154, 197)"
                      >已发货</span
                    >
                  </p>
                  <div>
                    <h5>2019-11-02 11:55:38</h5>
                    <p>
                      【深圳市】快件已在【深圳新福永】签收,签收人:A9
                      203,如有疑问请电联:13543311871/0755-36551113,您的快递已经安投。风里来雨里去,只为客官您满意。
                    </p>
                    <p>已签收</p>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="包裹二" name="second">
            <div class="package">包裹二</div>
          </el-tab-pane>

          <el-tab-pane label="包裹三" name="third">
            <div class="package">包裹三</div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="message-tabs">
        <div class="msg-left">
          <dl>
            <dt>收货人信息</dt>
            <div style="width: 75px; float: left">
              <dd>收货人：</dd>
              <dd>联系电话：</dd>
              <dd>地址：</dd>
            </div>

            <div style="float: left">
              <dd>{{ logistics[2].name }}</dd>
              <dd>{{ logistics[2].phone }}</dd>
              <dd>{{ logistics[2].address }}</dd>
            </div>
          </dl>
        </div>
        <div class="msg-right">
          <dl>
            <dt>买家信息</dt>
            <div style="width: 75px; float: left">
              <dd>用户名：</dd>
            </div>
            <div style="float: left">
              <dd>{{ logistics[1].name }}</dd>
            </div>
          </dl>

          <dl>
            <dt>付款信息</dt>
            <div style="width: 75px; float: left">
              <dd>支付金额：</dd>
              <dd>付款方式：</dd>
              <dd>付款时间：</dd>
              <dd>支付流水号：</dd>
            </div>
            <div style="float: left">
              <dd>{{ logistics[1].money }}</dd>
              <dd>{{ logistics[1].montype }}</dd>
              <dd>{{ logistics[1].montime }}</dd>
              <dd>{{ logistics[1].ordernum }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../filters";
import { getLogistics } from "../api";

export default {
  data() {
    return {
      time: new Date(),
      activeName: "first",
      order: "E20191109115538084800003",
      logistics: "",
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  async mounted() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    let logistics = await getLogistics(this.order);

    this.logistics = logistics;
    console.log(this.logistics);
  },
};
</script>

<style scoped>
/* 订单样式 */
.bread {
  margin-left: 16px;
  margin-bottom: 16px;
}

.title {
  font-weight: 600;
  margin-left: 16px;
  margin-bottom: 16px;
}

.order {
  background: white;
  padding: 16px 16px 0;
}

.order > h4 {
  font-size: 13px;
  margin-bottom: 16px;
}

.info {
  height: 122px;
  border: 2px solid #f5f5f7;
  display: flex;
}

.info-left {
  width: 261px;
  border-right: 2px solid #f5f5f7;
  display: flex;
  align-items: center;
  padding-left: 18px;
}

.info-left h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.info-left p {
  font-size: 12px;
  color: #c4c4c6;
}

.info-right {
  flex: 1;
  position: relative;
}

.info-right > div {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.content .info-right .rightTop {
  height: 50%;
}

.content .info-right .rightTop ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #819ac5;
  font-size: 22px;
  position: relative;
}

.content .info-right .rightTop li::after {
  content: "";
  display: block;
  width: 15%;
  height: 2px;
  background: #819ac5;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.content .info-right .rightTop li:nth-of-type(1)::after {
  left: 25%;
}

.content .info-right .rightTop li:nth-of-type(2)::after {
  left: 50%;
}

.content .info-right .rightTop li:nth-of-type(3)::after {
  left: 75%;
  background: #dddce1;
}

.content .info-right .rightTop li:last-child {
  color: #dddce1;
}

.content .info-right .rightTop li:last-child::after {
  content: "";
  width: 0;
  height: 0;
}

.content .info-right .rightBottom {
  height: 50%;
}

.content .info-right .rightBottom ol {
  display: flex;
  height: 100%;
  align-items: center;
}

.content .info-right .rightBottom ol h3 {
  font-size: 13px;
  margin-bottom: 8px;
}

.content .info-right .rightBottom ol p {
  font-size: 12px;
  color: #c4c4c6;
}

.content .info-right .rightBottom ol li {
  flex: 1;
  text-align: center;
}

.content .wuliu-tabs {
  height: 32px;
  background: #f6f6f6;
  margin-top: 16px;
  line-height: 32px;
  font-size: 13px;
  padding-left: 10px;
}

.content .kuaidi-tabs {
  margin-top: 16px;
  font-size: 13px;
}

.content .kuaidi-tabs .package {
  height: 206px;
  border: 2px solid #f5f5f7;
  padding: 18px 18px;
  font-size: 12px;
  overflow: hidden;
  box-sizing: border-box;
}

.kuaidi-tabs .package .package-top p,
.kuaidi-tabs .package .package-bottom-l p {
  height: 24px;
}

.kuaidi-tabs .package .package-bottom {
  overflow: hidden;
  display: flex;
}

.kuaidi-tabs .package .package-bottom-l {
  width: 40%;
}

.kuaidi-tabs .package .package-bottom-l div > img {
  float: left;
  margin-right: 5px;
}

.kuaidi-tabs .package-bottom-l div.special > p {
  height: 18px;
}

.kuaidi-tabs .package .package-bottom-r {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.kuaidi-tabs .package .package-bottom-r > p {
  height: 24px;
}

.kuaidi-tabs .package .package-bottom-r > div {
  border-left: 2px solid #f5f5f7;
  padding: 2px 16px;
  color: #afafb1;
  box-sizing: border-box;
  flex: 1;
  position: relative;
}

.kuaidi-tabs .package .package-bottom-r > div::before {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  background: red;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: -3px;
}

.kuaidi-tabs .package .package-bottom-r > div > h5 {
  height: 24px;
}

.kuaidi-tabs .package .package-bottom-r > div > p {
  line-height: 16px;
}

.message-tabs {
  background: #f6f6f6;
  margin-top: 16px;
  display: flex;
  font-size: 12px;
  padding: 18px;
  box-sizing: border-box;
}

.message-tabs dt {
  font-weight: bold;
}

.message-tabs dt,
.message-tabs dd {
  height: 24px;
}

.message-tabs .msg-left {
  width: 40%;
}

.message-tabs .msg-right {
  width: 60%;
  display: flex;
}

.message-tabs .msg-right > dl {
  width: 50%;
}
</style>