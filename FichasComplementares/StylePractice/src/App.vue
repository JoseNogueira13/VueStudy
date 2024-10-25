<template>
  <div>
    <h1 :class="theme" class="title">Welcome to the styles testing playground</h1>
    <p>Use this dropbox to change the color of the title</p>
    <select @change="changeTheme($event.target.value)">
      <option value="red">red</option>
      <option value="blue">purple</option>
      <option value="green">green</option>
    </select>
    <p>Lets change the title to times new roman click the button!</p>
    <button @click="changeFont">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "red",
      currentFont: "Times New Roman",
      buttonText: "Times New Roman",
    };
  },
  methods: {
    changeTheme(selectedTheme) {
      this.theme = selectedTheme;
    },
    changeFont() {
      const titleElement = document.querySelector(".title");
      if (this.currentFont === "Times New Roman") {
        titleElement.style.fontFamily = "Arial";
        this.currentFont = "Arial";
        this.buttonText = "Arial Black";
      } else {
        titleElement.style.fontFamily = "Times New Roman";
        this.currentFont = "Times New Roman";
        this.buttonText = "Times New Roman";
      }
    },
  },
};
</script>

<style>
.red {
  color: red;
}
.blue {
  color: indigo;
}
.green {
  color: green;
}
</style>