<template>
    <div class="root">
        <div class="cell" v-for="i in 5">
            <div class="avatar">
                <div class="dot">1</div>
            </div>
            <div class="info">
                <div class="top">
                    <div class="name">张三</div>
                    <div class="time">08:00</div>
                </div>
                <div class="bottom">
                    <div class="desc">消息预览消息预览消息预览</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
 .root {
    width: 100%;
    height: 100vh;
    background: #eee;

    .cell {
        display: flex;
        background: white;
        padding: 10px 15px;
        /* border-bottom: 1px solid #eee; */
        .avatar {
            position: relative;
            width: 60px;
            height: 60px;
            min-width: 60px;
            background: #eee;
            border-radius: 5px;
            .dot {
                position: absolute;
                right: 0;
                min-width: 6px;
                height: 16px;
                line-height: 16px;
                padding: 0 5px;
                border-radius: 8px;
                font-size: 13px;
                text-align: center;
                color: white;
                background: red;
            }
        }
        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 0 10px;
            overflow: hidden;
            .top {
                display: flex;
                .name {
                    padding-right: 10px;
                    flex: 1;
                    font-size: 15px;
                    font-weight: bold;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .time {
                    color: #666;
                }
            }
            .bottom {
                .desc {
                    font: 14px;
                    font-weight: normal;
                    color: #666;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            
        }
    }
   
 }
</style>