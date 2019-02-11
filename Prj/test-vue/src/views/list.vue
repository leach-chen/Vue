<template>
  <div id="list-content">
    <el-button
      type="primary"
      v-for="value in lists"
      :key="value"
      v-on:click="btnrun(value.id)"
    >{{value.value}}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { id: 1, value: "MiniUI Toast" },
        { id: 2, value: "CSS 布局" },
        { id: 3, value: "单张图片加载" }
      ]
    };
  },
  methods: {
    btnrun: function(id) {
      switch (id) {
        case 1:
          this.$toast({
            message: "hello world!",
            position: "bottom",
            duration: 1000
          });
          break;
        case 2:
          this.$router.push("/csslayout");
          break;
        case 3:
          this.$router.push("/singleimageload");
          break;
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#list-content {
  width: 100%;
  height: 100%;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
}

#list-content button {
  margin-top: 10px;
  margin-left: 0px;
}
</style>


