<template>
    <div>
      <div>
          <router-link to = "/Home" >Home</router-link><br>
          <router-link to = "/About">About</router-link>
      </div>
      <div>
            <router-view></router-view>
      </div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="info">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
