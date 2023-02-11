<template>
    <div>
    <el-badge :value="notifications" class="item">
        <el-button class="share-button"  @click="dialogTableVisible = true" icon="el-icon-bell" ></el-button>
    </el-badge> 
    </div>
</template>

<script>


export default {
  components: {
  },
  data(){
    return {
      dialogTableVisible:false,
      notifications:0,
    }
  },
  computed: {
   
  },
  created() {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>
