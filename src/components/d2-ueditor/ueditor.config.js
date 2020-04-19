const VIDEO_CONFIG = {
  videoActionName: 'UEDITOR_VIDEO_UPLOAD',
  videoFieldName: 'videoFieldName',
  videoUrlPrefix: process.env.VUE_APP_API,
  videoPathFormat: 'uploads/video/{yyyy}-{mm}-{dd}/{filename}',
  videoAllowFiles: [
    '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg', '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid'
  ]
}

export default {
  UEDITOR_HOME_URL: `${process.env.BASE_URL}lib/UEditor/`,
  // 编辑器不自动被内容撑高
  autoHeightEnabled: false,
  // 初始容器高度
  initialFrameHeight: 240,
  // 初始容器宽度
  initialFrameWidth: '100%',
  // 关闭自动保存
  enableAutoSave: false,
  serverUrl: process.env.VUE_APP_API + '/upload',
  ...VIDEO_CONFIG
}
