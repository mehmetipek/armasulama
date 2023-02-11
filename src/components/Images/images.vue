<template>
<div>
  <div class="createPost-container">
    <el-form   class="form-container">

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput v-model="uploadImage.name" :maxlength="100" name="name" required>
                Adını Giriniz
              </MDinput>
            </el-form-item>
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput v-model="uploadImage.category" :maxlength="100" name="name" required>
                Alt Başlık
              </MDinput>
            </el-form-item>
            
          </el-col>
        </el-row>
          <div class="col-md-5 text-center">
          <el-upload
            class="avatar-uploader"
            action="#"
            :file-list="fileList"
            :show-file-list="true"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-change="handleChange"
            :auto-upload="false"
            :on-error="handleError"
          >
            <img v-if="uploadImage.image" :src="uploadImage.image" class="avatar" width="100%" />
            <i v-else class="el-icon-plus avatar-uploader-icon" />
            <br />Resim Eklemek İçin Tıklayın
          </el-upload>
        </div>
        
      </div>
    </el-form>
  </div>
  <button @click="uploadImages">KAYIT</button>
  </div>
</template>

<script>
import MDinput from '@/components/MDinput'

export default {
  name: 'Images',
  components: {  MDinput},
  
  data() {
    return {
      fileList: [],
      uploadImage:{
        name:'',
        category:'',
        image:null
      }
    }
  },
  created() {
   
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log("handleAvatarSuccess");
      this.uploadImage.image = URL.createObjectURL(file.raw);
      this.modelImageFile = file;
      console.log(this.modelImageFile);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      console.log("beforeAvatarUpload");
      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-1);
      console.log("handleChange");
      console.log(file);
      this.uploadImage.image = URL.createObjectURL(file.raw);
      this.modelImageFile = file;
    },
    handleError(err, file, fileLis) {
      console.log(err);
      this.$message.error(err);
    },
     uploadImages(){
      this.uploadImage.image=this.modelImageFile.raw;
    var bodyFormData = new FormData()
    bodyFormData.set('name', this.uploadImage.name)
    bodyFormData.set('image', this.uploadImage.image)
    bodyFormData.set('category', this.uploadImage.category)
      this.$store.dispatch("uploadImage",bodyFormData).then(res => {
         console.log(res);
        })
    },
    
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea /deep/ {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
