<template>
  <div>
    <table class="table-header">
      <tr>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
        <th>采购单状态</th>
        <th>售后状态</th>
      </tr>
    </table>

    <div v-for="(item, index) in shangpinInfo" :key="index">
      <table class="table-header">
        <tr>
          <th>SPU ID：{{ item.id }}</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </table>

      <table class="table-both">
        <tr>
          <td class="first-info">
            <div>
              <img src="../assets/yizi.png" alt="" />
              <h3>
                <span style="color: rgb(129, 154, 197)">{{ item.name }}</span>
              </h3>
              <p>{{ item.production }}</p>
            </div>
          </td>
          <td>￥{{ item.price }}</td>
          <td>{{ item.num }}</td>
          <td>￥{{ item.price * 1 * (item.num * 1) }}</td>
          <td>
            <span style="color: rgb(129, 154, 197)">{{ item.state }}</span>
          </td>
          <td></td>
        </tr>
      </table>

      <table class="table-both" v-if="item.service">
        <tr>
          <td class="first-info">书柜安装</td>
          <td>￥0/次</td>
          <td>1</td>
          <td>￥0</td>
          <td><span style="color: rgb(129, 154, 197)">已发货</span></td>
          <td></td>
        </tr>
      </table>

      <el-alert
        title="买家备注：请快快发货，如果好看还会继续下单，谢谢！！"
        type="error"
        v-if="item.remark"
      ></el-alert>
    </div>

    <table class="table-both zongji">
      <tr>
        <td class="first-info"></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <p>商品总价:</p>
          <h3>实收金额:</h3>
        </td>
        <td>
          <p>￥850.00</p>
          <h3><span style="color: #f56c6c">￥850.00</span></h3>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shangpinInfo: [],
    };
  },
  mounted() {
    this.shangpinInfo = [
      {
        id: "lh1300001",
        img: "../assets/yizi.png",
        name: "简约餐桌椅子",
        production: "材质：樟木，长50cm2 高165cm",
        price: 100,
        num: 2,
        state: "已发货",
        serive: false,
        remark: false,
      },
      {
        id: "lh1300002",
        img: "zhuozi.png",
        name: "日系书柜",
        production: "长：0.9m，层数：3层",
        price: 480,
        num: 1,
        state: "已发货",
        serive: true,
        remark: true,
      },
      {
        id: "lh1300003",
        img: "chaichu.png",
        name: "拆除服务",
        production: "",
        price: 70,
        num: 1,
        state: "待支付首期款",
        serive: false,
        remark: false,
      },
    ];
  },
};
</script>

<style scoped>
table {
  font-size: 12px;
}

.table-header {
  width: 100%;
  height: 32px;
  text-align: left;
  line-height: 32px;
}

.table-header th {
  width: 15%;
  padding-left: 18px;
  font-weight: bold;
  background: #f1f2f6;
}

.table-header th:first-child {
  width: 25%;
}

.table-header {
  margin-top: 16px;
}

.table-header:nth-of-type(2) {
  margin-top: 5px;
}

.table-both {
  width: 100%;
}

.table-both tr {
  height: 65px;
  line-height: 65px;
  border-bottom: 2px solid #f5f5f7;
}

.table-both td {
  padding: 5px 18px;
  border-right: 2px solid #f5f5f7;
  width: 15%;
}

.table-both td:first-child {
  width: 25%;
}

.table-both td:nth-of-type(5),
.table-both td:last-child {
  border-right: none;
}

.table-both .first-info {
  position: relative;
}

.table-both .first-info > div {
  width: 80%;
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.table-both .first-info img {
  float: left;
  width: 60px;
  margin-right: 5px;
}

.table-both .first-info h3 {
  height: 28px;
  line-height: normal;
}

.table-both .first-info p {
  line-height: normal;
  color: #a4a5a8;
}

.zongji td {
  border: none;
}

.zongji td p {
  line-height: normal;
  font-size: 14px;
  text-align: right;
  height: 32px;
}

.zongji td h3 {
  line-height: normal;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
}
</style>