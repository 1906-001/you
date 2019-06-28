<template>
    <div class='found'>
        查找
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    @import '../common/style/index.less';
    .found{
         .w(375);
            position: fixed;
            .top(0);
            .bottom(0);
            z-index: 2;
            background: #f00;
    }
</style>
