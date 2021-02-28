<template>
<!-- 详情商品列表的的过滤器
    - 按好评升序降序
    - 按销量升序降序
    - 按价格升序降序
 -->
    <div class="filterRow">
        <van-popover v-model="showPopover1" trigger="click" :actions="actions1" @select="clickFilter">
            <template #reference>
                <van-button plain type="info">按好评</van-button>
            </template>
        </van-popover>
        <van-popover v-model="showPopover2" trigger="click" :actions="actions2" @select="clickFilter">
            <template #reference>
                <van-button plain type="info">按销量</van-button>
            </template>
        </van-popover>
        <van-popover v-model="showPopover3" trigger="click" :actions="actions3" @select="clickFilter">
            <template #reference>
                <van-button plain type="info">按价格</van-button>
            </template>
        </van-popover>
    </div>
</template>

<script>
    export default {
        props: ['goodsList'],
        data() {
            return {
                showPopover1: false,
                showPopover2: false,
                showPopover3: false,
                actions1: [{
                        text: '按好评增多排序',
                        icon: 'arrow-up',
                        state: "00"
                    },
                    {
                        text: '按好评减少排序',
                        icon: 'arrow-down',
                        state: "01"
                    },
                ],
                actions2: [{
                        text: '按销量增多排序',
                        icon: 'arrow-up',
                        state: "10"
                    },
                    {
                        text: '按销量减少排序',
                        icon: 'arrow-down',
                        state: "11"
                    },
                ],
                actions3: [{
                        text: '按价格增多排序',
                        icon: 'arrow-up',
                        state: "20"
                    },
                    {
                        text: '按价格减少排序',
                        icon: 'arrow-down',
                        state: "21"
                    },
                ],
            };
        },
        methods: {
            clickFilter: function (action) {
                let state = action.state
                if (state == '00') {
                    this.goodsList.sort(this.compareSort('goodcommit', false))
                }
                if (state == '01') {
                    this.goodsList.sort(this.compareSort('goodcommit'))
                }
                if (state == '10') {
                    this.goodsList.sort(this.compareSort('salenum', false))
                }
                if (state == '11') {
                    this.goodsList.sort(this.compareSort('salenum'))
                }
                if (state == '20') {
                    this.goodsList.sort(this.compareSort('gprice', false))
                }
                if (state == '21') {
                    this.goodsList.sort(this.compareSort('gprice'))
                }

            },
            // 第一个参数要作为重排标准的属性
            // 第二个参数是升序还是降序
            // 默认降序，升序传false
            compareSort: function (filed,isSort) {
                if (isSort == undefined) {
                    isSort = 1;
                } else {
                    isSort = (isSort) ? 1 : -1;
                }
                return function (a, b) {
                    a = a[filed];
                    b = b[filed];
                    if (a < b) {
                        return isSort * -1;
                    }
                    if (a > b) {
                        return isSort * 1;
                    }
                    return 0;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .filterRow {
        display: flex;
        justify-content: space-around;
        width: 100vw;
        margin-bottom: 4vh;
    }
</style>