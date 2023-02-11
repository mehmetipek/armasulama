<template>
  <div class="app-container">
    <el-table
    :data="pageLists.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Uzantılar"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Kategoriler"
      prop="category">
    </el-table-column>
    <el-table-column
      label="İçerik"
      prop="Düzenle ile görebilirsiniz">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Kategori Arayınız"/>
      </template>
      <template slot-scope="scope">
        <!-- <router-link :to="{ name: 'Annocent', params: { data: scope.row } }">
      Düzenle
    </router-link> -->
        <el-button
          size="mini"
          @click="handleEdit(scope.$index,scope.row)">Düzenle</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row.id)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
export default {
  name: 'ArticleList', 
  data() {
    return{
    pageLists:[],
     search: '',
    }
  },
  created() {
    this.pageList();
  },
  methods: {
    pageList(){
      this.$store.dispatch("pageList").then(res => {
            console.log(res);
            this.pageLists=res;
        })
    },
     handleEdit(index, data) {
       this.$router.push({name:'Annocent',params:{data}})
      },
      handleDelete(index, data) {
      
      this.$store.dispatch("pageDelete",data).then(res => {
            console.log(res);
        })
      }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>