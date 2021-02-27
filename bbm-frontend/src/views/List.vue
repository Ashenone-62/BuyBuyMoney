<template>
    <div>
        {{category}}列表
    </div>
</template>

<script>
export default {
    data(){
        return{
            category:""
        }
    },
    mounted(){
        this.category = this.$route.params.category
    }
}
</script>

<style>

</style>