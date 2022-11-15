<template>
  <div>
    <table class="caigou-header">
      <tr>
        <th>采购单</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </table>

    <table class="caigou-header caigou-special">
      <tr>
        <th>采购商品</th>
        <th>供应商</th>
        <th>数量</th>
        <th>供应商总价</th>
        <th>采购单状态</th>
        <th>采购链接</th>
        <th>售后状态</th>
        <th>操作</th>
      </tr>
    </table>

    <table class="caigou-header caigou-special">
      <tr>
        <th style="width: 25%; font-weight: normal;">采购单单号：C20191109115538084800003</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </table>

    <table class="caigou-both">
      <tr>
        <td class="first-info">
          <div>
            <img src="../assets/yizi.png" alt="" />
            <h3>简约餐桌椅子</h3>
            <p>材质：樟木，长50cm<sup>2</sup> 高165cm</p>
          </div>
        </td>
        <td>￥70.00</td>
        <td>2</td>
        <td>￥140.00</td>
        <td>已发货</td>
        <td><span style="color: rgb(129, 154, 197)">采购链接</span></td>
        <td></td>
        <td class="last-info">
          <p><span style="color: rgb(129, 154, 197)">查看采购单</span></p>
          <p><span style="color: rgb(129, 154, 197)">更换采购单</span></p>
        </td>
      </tr>
    </table>

    <table class="caigou-header">
      <tr>
        <th style="width: 25%; font-weight: normal;">采购单单号：C20191109115538084800004</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </table>

    <table class="caigou-both">
      <tr>
        <td class="first-info">
          <div>
            <img src="../assets/zhuozi.png" alt="" />
            <h3>日系书柜</h3>
            <p>长：0.9m，层数：3层</p>
          </div>
        </td>
        <td>￥70.00</td>
        <td>2</td>
        <td>￥140.00</td>
        <td>已发货</td>
        <td><span style="color: rgb(129, 154, 197)">采购链接</span></td>
        <td></td>
        <td class="last-info">
          <p><span style="color: rgb(129, 154, 197)">查看采购单</span></p>
          <p><span style="color: rgb(129, 154, 197)">更换采购单</span></p>
        </td>
      </tr>
    </table>

    <table class="caigou-both">
      <tr>
        <td class="first-info">书柜安装</td>
        <td>￥0/次</td>
        <td>1</td>
        <td>￥0</td>
        <td>已发货</td>
        <td><span style="color: rgb(129, 154, 197)">采购链接</span></td>
        <td></td>
        <td class="last-info">
          <p><span style="color: rgb(129, 154, 197)">查看采购单</span></p>
          <p><span style="color: rgb(129, 154, 197)">更换采购单</span></p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
table {
  font-size: 12px;
}

.caigou-header {
  width: 100%;
  height: 32px;
  text-align: left;
  line-height: 32px;
  margin-top: 16px;
}

.caigou-special {
  margin-top: 5px;
}

.caigou-header th {
  width: 11.42%;
  padding-left: 18px;
  font-weight: bold;
  background: #f1f2f6;
}

.caigou-header th:first-child {
  width: 20%;
}

.caigou-both {
  width: 100%;
}

.caigou-both tr {
  height: 65px;
  line-height: 65px;
  border-bottom: 2px solid #f5f5f7;
}

.caigou-both td {
  padding: 5px 18px;
  border-right: 2px solid #f5f5f7;
  width: 11.42%;
}

.caigou-both td:first-child {
  width: 20%;
}

.caigou-both td:last-child {
  border-right: none;
}

.caigou-both .first-info {
  position: relative;
}

.caigou-both .first-info > div {
  width: 80%;
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.caigou-both .first-info img {
  float: left;
  width: 60px;
  margin-right: 5px;
}

.caigou-both .first-info h3 {
  height: 28px;
  line-height: normal;
}

.caigou-both .first-info p {
  line-height: normal;
  color: #a4a5a8;
}

.caigou-both .last-info p {
  line-height: 14px;
}

.caigou-both .last-info p:first-child {
  position: relative;
  top: -12px;
}

</style>