<script></script>
<template>
  <div class="header__user user">
    <img
      class="user__image"
      src="../assets/icons/user.svg"
      width="20px"
      height="20px"
      alt="user icon"
    />

    <div class="user__settings">
      <h3 class="user__name">Alexandr Boltenkov</h3>

      <button class="user__settings-button">
        <img
          class="user__image"
          src="../assets/icons/triangle.svg"
          width="15px"
          height="15px"
          alt="open user settings"
        />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.user__settings {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user__name {
  margin: 0;
}

.user__settings-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.user__image {
  padding: 8px;
}

.user__settings-button:hover {
  opacity: 0.5;
  transform: scale(1.1);
}
</style>
