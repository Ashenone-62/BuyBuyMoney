<template>
<!-- 分类页面 -->
  <div>
      <!-- 大类别嵌套小类别的分类组件 -->
      <goods-list></goods-list>
  </div>
</template>

<script>
import goodsList from '@/components/GoodsList.vue'

export default {
  name: 'Category',
  components: {
    goodsList
  },
  mounted(){

  }
}
</script>

<style>

</style>