<template>
  <el-aside class="pre_box" width="9%">
    <template v-if="isLeft">
      <div v-for="(n, index) in nav" :key="index" class="nav">
        <router-link :to="n.link">{{ n.text }}</router-link
        ><img :src="n.imgUrl" alt="" />
      </div>
    </template>
    <template v-else>
      <div v-for="(n, index) in nav" :key="index">
        <img :src="n.imgUrl" alt="" />
      </div>
    </template>
  </el-aside>
</template>

<script>
import getAssetsImages from "../hook/getAssetsImages";
export default {
  props: {
    isLeft: {
      type: Boolean,
    },
  },
  setup(props) {
    //导航栏
    const nav = [
      {
        text: "首页",
        link: "/home/swiper",
        imgUrl: getAssetsImages("decoration", "蒸糕.png"),
      },
      {
        text: "美食榜单",
        link: "/home/hotList",
        imgUrl: getAssetsImages("decoration", "米饭.png"),
      },
      {
        text: "美食目录",
        link: "/home/category",
        imgUrl: getAssetsImages("decoration", "鱼.png"),
      },
      {
        text: "美食地图",
        link: "/home/map",
        imgUrl: getAssetsImages("decoration", "面条.png"),
      },
      {
        text: "个人中心",
        link: "/home/personality",
        imgUrl: getAssetsImages("decoration", "豆角.png"),
      },
    ];
    let isLeft = props.isLeft;
    return {
      nav,
      isLeft,
    };
  },
};
</script>

<style lang='less' scoped>
.pre_box {
  margin-left: 0;
  height: 100%;
  background: #ecf0f1;
  overflow: visible;
  .nav,
  div {
    display: flex;
    height: 20%;
    border-radius: 70px;
    background-color: #ecf0f1;
    a {
      display: none;
      width: 80%;
      height: 100%;
      text-align: center;
      line-height: 300%;
      overflow: hidden;
      font-size: 50px;
      white-space: nowrap;
    }
  }
  @keyframes widthMove {
    from {
      width: 100%;
    }
    to {
      width: 400%;
    }
  }
  .nav:hover {
    animation: widthMove 1s ease-in-out;
    width: 400%;
  }
  @keyframes imgmov {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
  .nav:hover img {
    width: 25%;
    animation: imgmov 1s linear;
  }
  .nav:hover a {
    display: block;
    transition: all 2s;
  }
}
</style>