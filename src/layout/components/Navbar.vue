<template>
  <div class="navbar">    
    <div>
      <p style="margin-bottom: -17px;margin-left: 11px;font-size: 12px;">menü</p>
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    </div>
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="right-menu">
      <div class="row">
      <template v-if="device!=='mobile'">
        <!-- <label style="color: #97a8be;">{{firmaAdi}}</label> -->
        <search id="header-search" class="right-menu-item" />
        <!-- <error-log class="errLog-container right-menu-item hover-effect" /> -->
        <screenfull id="screenfull" class="right-menu-item hover-effect" />
        <!-- <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip> -->
        <Badge />
      </template>
      
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png"  class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <!-- <router-link to="/profile/index">
            <el-dropdown-item>Profil</el-dropdown-item>
          </router-link> -->
          <router-link to="/">
            <el-dropdown-item>Ana Sayfa</el-dropdown-item>
          </router-link>
          <!-- <a target="_blank" href="#">
            <el-dropdown-item>deneme</el-dropdown-item>
          </a> -->
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">Çıkış</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'
import Badge from '@/components/Share/Badge'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    Search,
    Badge
  },
  data(){
    return {
      firmaAdi: null
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
    ])
  },
  created() {
  },
  methods: {  
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      this.$store.dispatch('user/logout').then(res=>{
          this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      }).catch(err=>{
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  padding-bottom: 0px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  display: block;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          //width: 40px;
          height: 35px;
          //border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
.men{
    margin-left: -102px;
    font-size: 0.7rem;
}
</style>
