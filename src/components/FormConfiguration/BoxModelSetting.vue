<template>
    <DividerHeader title="盒模型属性"/>
    <a-form-item>
        <div class="box-model">
            <div class="box-margin">
                <span class="title">margin</span>
                <span class="top">
                <a-input-number class="input-top" size="mini" :min="0"/>
            </span>
                <span class="left">
                <a-input-number class="input-left" size="mini" :min="0"/>
            </span>
                <span class="bottom">
                <a-input-number class="input-bottom" size="mini" :min="0"/>
            </span>
                <span class="right">
                <a-input-number class="input-right" size="mini" :min="0"/>
            </span>
                <div class="box-border">
                    <span class="title">border</span>
                    <span class="top">
                    <a-input-number class="input-top" size="mini" :min="0"/>
                </span>
                    <span class="left">
                    <a-input-number class="input-left" size="mini" :min="0"/>
                </span>
                    <span class="bottom">
                    <a-input-number class="input-bottom" size="mini" :min="0"/>
                </span>
                    <span class="right">
                    <a-input-number class="input-right" size="mini" :min="0"/>
                </span>
                    <div class="box-padding">
                        <span class="title">padding</span>
                        <span class="top">
                        <a-input-number class="input-top" size="mini" :min="0"/>
                    </span>
                        <span class="left">
                        <a-input-number class="input-left" size="mini" :min="0"/>
                    </span>
                        <span class="bottom">
                        <a-input-number class="input-bottom" size="mini" :min="0"/>
                    </span>
                        <span class="right">
                        <a-input-number class="input-right" size="mini" :min="0"/>
                    </span>
                        <div class="box-content">
                            <span class="title">content</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a-form-item>
</template>

<script setup>

import DividerHeader from "@/components/DividerHeader/DividerHeader.vue";
</script>

<style scoped lang="scss">
:deep(.arco-input) {
    text-align: center;
}

:deep(.arco-input-wrapper .arco-input-suffix) {
    @apply hidden;
}

.box-model {
    --input-width: 30px;
    --input-width2: 30px;
    --top: 36px;
    --left: 36px;
    --right: var(--left);
    --bottom: var(--top);
    border: 1px dotted #ccc;
    width: 100%;
    min-height: 100px;
    @apply relative overflow-hidden rounded border-neutral-600;

    .box-margin {
        @apply relative overflow-hidden;
        .title {
            position: absolute;
            top: 3px;
            left: 6px;
            @apply text-neutral-600;
        }

        .top {
            top: 6px;
            left: 50%;
            transform: translateX(-50%);
            @apply absolute;

            .input-top {
                width: var(--input-width);
                padding: 0;
            }
        }

        .left {
            top: 50%;
            left: 3px;
            transform: translateY(-50%);
            @apply absolute;

            .input-left {
                width: var(--input-width2);
                padding: 0;
            }
        }

        .bottom {
            bottom: 6px;
            left: 50%;
            transform: translateX(-50%);
            @apply absolute;

            .input-bottom {
                width: var(--input-width);
                padding: 0;
            }
        }

        .right {
            top: 50%;
            right: 3px;
            transform: translateY(-50%);
            @apply absolute;

            .input-right {
                width: var(--input-width2);
            }
        }

        .box-border {
            border: 1px solid #ccc;
            margin: var(--top) var(--right) var(--bottom) var(--left);
            @apply relative overflow-hidden rounded border-neutral-400;

            .box-padding {
                border: 1px dashed #ccc;
                margin: var(--top) var(--right) var(--bottom) var(--left);
                @apply relative overflow-hidden;

                .box-content {
                    height: 60px;
                    border: 1px solid #1c1917;
                    margin: var(--top) var(--right) var(--bottom) var(--left);
                    @apply relative overflow-hidden rounded border-neutral-400 flex items-center justify-center;

                    .title {
                        @apply relative top-auto left-auto;
                    }
                }
            }
        }
    }
}
</style>