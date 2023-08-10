<template>
    <div class="AIGC-index-container van-hairline--surround">

      <van-index-bar :index-list="indexList">
        <div class="section-header">
            {{ firstTabName }}
            <button class="editButton" @click="editAction">{{ editButtonTitle }}</button>
        </div>
        <div class="icons" ref="listDom">
            <div :class="isEdit ? 'icon sortable-item' : 'icon' " v-for="app in firstAppList" :key="app.id" @click="deleteApp(app)">
                <van-icon v-show="isEdit" class="editIcon" name="minus"/>
                <div class="icon-img">
                    <img class="icon-img-content" :src="app.appIcon">
                </div>
                <p class="icon-desc">{{ app.appName }}</p>
            </div>        
        </div>

      <div v-for="(item, index) in noFirstSections" :key="index">
        <van-index-anchor :index="index + 1">{{ item.tabName }}</van-index-anchor>
        <div class="icons">
            <div class="icon" v-for="app in item.aiAppList" :key="app.id" @click="addOrDeleteApp(app)">
                <van-icon v-show="isEdit" :class="headerAppIds.includes(app.id) ? 'editIcon' : 'editIcon plus'" :name="headerAppIds.includes(app.id) ? 'minus' : 'plus'"/>
                <div class="icon-img">
                    <img class="icon-img-content" :src="app.appIcon">
                </div>
                <p class="icon-desc">{{ app.appName }}</p>
            </div>        
        </div>
      </div>
    </van-index-bar>

    </div>
</template>

<script>
import { onMounted } from "vue";
import {ref, inject} from "vue";
import Sortable from 'sortablejs';
import { computed } from "vue";

export default {
    name: 'demoHome',
    setup() {
        const axios = inject("$axios")
        const indexList = ref([])
        const sections = ref([])
        const firstTabName = ref('')
        const firstAppList = ref([])
        // const headerAppIds = ref([])
        const noFirstSections = ref([])
        const listDom = ref(null)
        const editButtonTitle = ref('编辑')
        const isEdit = ref(false)

        const headerAppIds = computed(() => {
            const arr = firstAppList.value.map((item) => { return item.id })
            console.log(arr, 'arr')
            return arr
        })

        onMounted(() => {
            getListByUserId()

            console.log(listDom, 'listDom')
            new Sortable(listDom.value, {
                //sort: false,
                draggable: ".sortable-item",

                onStart: function (evt) {                    
                    console.log(evt.oldIndex, '开始拖拽')
                },

                onEnd: function(evt) {
                    console.log(evt.oldIndex, evt.newIndex, '结束拖拽');
                    [firstAppList.value[evt.oldIndex], firstAppList.value[evt.newIndex]] = [firstAppList.value[evt.newIndex], firstAppList.value[evt.oldIndex]]
                    //console.log(page.value)
                    finishEdit(firstAppList.value)
                }
            })
        })

        const finishEdit = ()=> {
            //console.log(arr, '编辑后的数据')
        }

        const editAction = ()=> {
            //editButtonTitle.value = editButtonTitle.value === '编辑' ? '完成' : '编辑'
            if (editButtonTitle.value === '编辑') {
                // 开始编辑操作
                editButtonTitle.value = '完成'
                isEdit.value = true
            } else {
                // 编辑完成
                editButtonTitle.value = '编辑'
                isEdit.value = false
                const appIds = firstAppList.value.map((item) => {
                    return item.appName
                })
                console.log(appIds)
            }
        }

        const deleteApp = (app) => {
            if (isEdit.value) {
                firstAppList.value = firstAppList.value.filter((item) => {
                    return item.id != app.id
                })                
            } else {
                console.log('跳转', app)
            }
        }

        const addOrDeleteApp = (app) => {
            if (isEdit.value) {                
                if (headerAppIds.value.includes(app.id)) {
                    //showToast('应用已存在，请勿重复添加')
                    deleteApp(app)
                } else {
                    firstAppList.value.push(app)
                }

            } else {
                console.log('跳转', app)
            }
        }

        const getListByUserId = ()=> {
            // 模拟数据
            axios.get('/mock/home').then(getHomeInfo)
        }

        const getHomeInfo = (json)=> {
            if (json.data.flag === 1) {
                sections.value = json.data.data                
                firstTabName.value = sections.value[0].tabName
                firstAppList.value = sections.value[0].aiAppList
                noFirstSections.value = sections.value.filter((item, index) => {
                    return index != 0
                })
                //console.log(sections.value, '模拟数据')
                //console.log(firstSection, noFirstSections, '构造数据')
            }
        }

        return {
            indexList,
            firstTabName,
            firstAppList,
            noFirstSections,
            getListByUserId,
            getHomeInfo,
            finishEdit,
            editAction,
            editButtonTitle,
            isEdit,
            listDom,
            headerAppIds,
            deleteApp,
            addOrDeleteApp
        }
    }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/mixins.styl'

@media screen and (min-width: 750px){
    .AIGC-index-container {
      max-width: 600px;
      background-color: #fefefe;
    }
}

.AIGC-index-container
    height: 100%
    margin: 0 auto
  .section-header
    padding: 0 16px
    line-height: 40px
    font-weight: bold
    .editButton
        position absolute
        top 5px
        right 16px
        width 50px
        line-height 30px
        border-radius 6px
  .icons
    overflow: hidden
    padding: 5px 0
    .icon
        position: relative
        overflow: hidden
        float: left 
        width: 25% 
        height 0
        padding-bottom: 20%
        .editIcon
            position: absolute
            right 5px
            background red
            color #fff
            border-radius 7px
        .plus
            background blue
        .icon-img
            position: absolute
            left: 0
            right: 0
            bottom: 20px
            padding 10px
            box-sizing border-box
            text-align center
            .icon-img-content
                width: 36px
                height: 36px
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            color: #333
            height 20px
            line-height 20px
            padding 0 5px
            text-align center
            ellipsis()



</style>