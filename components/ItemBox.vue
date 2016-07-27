<template>
<div class="item-box col-xs-3">
    <div class="thumbnail">
        <div class="item-img" style="background-image:url({{imgSrc}})"></div>
        <div class="caption">
            <h3>{{item.name}}</h3>
            <p class="item-desc">{{item.description}}</p>
        </div>
        <div class="btn-gp">
            <a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a>
        </div>
    </div>
</div>   
</template>
<script>
export default {
    props: {
        item: Object
    },
    computed: {
        imgSrc () {
            return 'http://tnfs.tngou.net/image' + this.item.img;
        }
    }
};
</script>
<style>
.item-box {
    padding: 0px 8px;
    overflow: hidden;
}

.item-box:hover .thumbnail {
    box-shadow: 1px 3px 5px #aaa;
    cursor: pointer;
}

.item-box > .thumbnail {
    position: relative;
    transition: all 0.3s linear;
}

.item-box img {
    height: 150px;
}

.item-img {
    height: 150px;
    width: 100%;
    background-size: 100% auto;
    background-repeat:no-repeat;
}

.item-box h3 {
    white-space:nowrap; 
    text-overflow:ellipsis;
    overflow: hidden;
}

.item-box .btn-gp {
    position: absolute;
    text-align: center;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0;
    transition: all 0.3s linear;
}

.item-box:hover .btn-gp {
    bottom: 8px;
    opacity: 1;
}

.item-desc {
    height: 3em;
    overflow: hidden;
}
</style>