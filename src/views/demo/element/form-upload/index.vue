<template>
  <d2-container>
    <el-upload
      class="upload-demo"
      drag
      action="http://localhost:5000/upload/upload_blog"
      name="upload"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
