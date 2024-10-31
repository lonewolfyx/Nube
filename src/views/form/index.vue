<template>
    <div class="edit-wrapper">
        <div class="edit-sidebar">
            <FormSidebar/>
        </div>
        <div class="edit-container">
            <FormContainer/>
        </div>
        <div class="edit-configuration">
            <FormConfiguration/>
        </div>
    </div>
</template>

<script setup>
import FormSidebar from "@/views/form/components/FormSidebar.vue";
import FormConfiguration from "@/views/form/components/FormConfiguration.vue";
import FormContainer from "@/views/form/components/FormContainer.vue";
</script>

<style scoped lang="scss">
.edit-sidebar, .edit-configuration, .edit-container {
    height: calc(100vh - var(--nube-header-height));
    @apply relative flex flex-col;
}

.edit-container {
    @apply p-2.5;
}
</style>