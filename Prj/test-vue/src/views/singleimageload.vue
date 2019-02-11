<template>
  <div>
    <commonback></commonback>
    <p v-on:click="getImg">加载</p>
    <img
      v-for="imgItem in imgList"
      v-bind:key="imgItem"
      v-bind:src="imgItem.img"
      alt
      width="100%"
      height="100%"
    >
  </div>
</template>

<script>
export default {
  data: {
    imgList: [],
    getImgUrl: "https://www.leachchen.com/blog/other/api/image.html" //存数据接口
  },
  created: function() {
    this.getImg(); //定义方法
  },
  methods: {
    getImg: function() {
      alert('aa');
      var that = this;
      that
        .$http({
          //调用接口
          method: "GET",
          url: this.getImgUrl //this指data
        })
        .then(
          function(response) {
            //接口返回数据
            this.imgList = response.data;
            alert(response.data);
          },
          function(error) {}
        );
    }
  }
};
</script>

<style>
</style>
