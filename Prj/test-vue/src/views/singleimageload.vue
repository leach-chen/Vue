<template>
  <div>
    <commonback></commonback>
    <img v-bind:src="imgurl">
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: "",
      getImgUrl: "https://www.leachchen.com/blog/other/api/image.html" //存数据接口
    };
  },

  created: function() {
    this.getImg(); //定义方法
  },
  methods: {
    getImg: function() {
      this.$http.get(this.getImgUrl).then(response => {
        this.imgurl = response.data;
        //alert(response.data)
        //alert(this.imgList.length);
      });
    }
  }
};
</script>

<style>
</style>
