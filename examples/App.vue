<template>
  <div class="container">
    <div class="logo">
      <img src="./assets/logo.png" class="logo__icon" />
      <span class="logo__title">H5-SDK</span>
    </div>
    <div class="desc">基于 Vue3 的开发工具包</div>
    <div
      class="group"
      v-for="(group, groupIndex) of state.groupList"
      :key="groupIndex"
    >
      <div class="group__title">{{ group.title }}</div>
      <div
        class="group__render"
        v-for="(render, renderIndex) of group.renderList"
        :key="renderIndex"
        @click="handleRenderClick(render)"
      >
        <span class="group__render__name">{{ render.name }}</span>
        <img src="./assets/arrows.png" class="group__render__icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'

  interface RenderInfo {
    name: string
    url: string
  }

  interface GroupInfo {
    title: string
    renderList: RenderInfo[]
  }

  interface State {
    groupList: GroupInfo[]
  }

  const state = reactive<State>({
    groupList: [
      {
        title: '组件',
        renderList: [
          {
            name: 'Button 按钮',
            url: ''
          }
        ]
      }
    ]
  })

  const handleRenderClick = (render: RenderInfo) => {
    console.log(
      '%c render==========>',
      'color: #4FC08D; font-weight: bold',
      render
    )
  }
</script>

<style lang="scss">
  .container {
    padding: 30px;
    background-color: #eff2f5;
    min-height: 100vh;

    .logo {
      display: flex;
      align-items: center;

      &__icon {
        width: 35px;
        height: 35px;
        margin-right: 20px;
      }

      &__title {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .desc {
      color: #969799;
      font-size: 14px;
      margin-top: 15px;
    }

    .group {
      margin-top: 30px;

      &__title {
        color: #969799;
        font-size: 14px;
      }

      &__render {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 15px;
        margin-top: 10px;
        font-size: 14px;
        border-radius: 30px;
        background-color: #fff;

        &__name {
          font-weight: bold;
          color: #34495e;
        }

        &__icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
</style>
