<template>
  <div class="container">
    <div class="header">
      <img src="./assets/logo.png" class="header__logo" />
      <span class="header__title">H5-SDK</span>
    </div>
    <div class="group">
      <div class="group__name">组件</div>
      <div class="group__item">
        <span class="group__item__name">Button 按钮</span>
        <img src="./assets/arrows.png" class="group__item__icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
  .container {
    padding: 30px;
    background-color: #eff2f5;
    min-height: 100vh;

    .header {
      display: flex;
      align-items: center;

      &__logo {
        width: 35px;
        height: 35px;
        margin-right: 20px;
      }

      &__title {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .group {
      margin-top: 30px;

      &__name {
        color: #969799;
        font-size: 14px;
      }

      &__item {
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
