<template>
    <div>
      <commonback></commonback>
        {{msg}}
        
    </div>    
</template>

<script>

 //局部注册组件
//import back from '@/components/back'
export default {
    data(){
        return{
            msg:"aaa"
        };
    },
    //  components:{
    //     "commonback":back
    //  }
}
</script>
