<template>
  <div>
    <!-- <el-button id="common-back" icon="back" slot="left" v-on:click="goBack"></el-button> -->
    <mt-header id="common-back">
      <mt-button  icon="back" slot="left" @click="goBack">返回</mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: "commonback",
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>


<style>
#common-back {
  width: 100%;
  height: 50px;
}
</style>

