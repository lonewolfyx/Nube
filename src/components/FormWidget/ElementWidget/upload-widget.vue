<template>
    <el-form-item label="上传">
        <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="sd"/>
            <el-icon v-else class="avatar-uploader-icon">
                <icon-upload/>
            </el-icon>
        </el-upload>
    </el-form-item>
</template>

<script setup>
import {ref} from "vue";

const imageUrl = ref('')
const handleAvatarSuccess = () => {
}
const beforeAvatarUpload = () => {

}
</script>

<style scoped lang="scss">
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>