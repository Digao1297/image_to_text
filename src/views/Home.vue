<template>
  <div class="home center-x-y ">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card center-x-y">
            <input
              ref="fileInput"
              required
              :disabled="creatingProduct"
              style="display: none"
              type="file"
              @change="pickFile"
            />

            <input type="checkbox" @click="selectImage" v-model="checkbox" />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <p>{{ getText }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data: () => ({
    creatingProduct: false,
    image: null,
    checkbox: false,
  }),
  computed: {
    ...mapGetters({
      getText: "home/getText",
    }),
  },
  methods: {
    ...mapActions({
      actionSetText: "home/actionSetText",
      actionSendImage: "home/actionSendImage",
    }),

    selectImage() {
      this.$refs.fileInput.click();
      document.body.onfocus = this.roar;
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;

      if (file[0].type != "" && file[0].type.split("/")[0] == "image") {
        this.checkbox = true;

        if (file && file[0]) {
          // let reader = new FileReader();
          //   reader.onload = (e) => {
          //     this.actionSendImage(e.target.result);
          //   };
          // reader.readAsDataURL(file[0]);
          this.image = file[0];
          this.$emit("input", file[0]);
        }
        console.log(this.image);
        this.actionSendImage(file[0]);
      } else {
        alert("Arquivo não é uma imagem");
        this.checkbox = false;
      }
    },

    roar() {
      let input = this.$refs.fileInput;
      let files = input.files;

      if (files.length == 0) {
        this.checkbox = false;
      } else {
        this.checkbox = true;
      }
      document.body.onfocus = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}

.center-x-y {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.center-x {
  display: flex !important;
  justify-content: center !important;
}

input[type="checkbox"] {
  height: 200px;
  width: 200px;
  -webkit-appearance: none;
  border-radius: 50%;
  background: #274659;
  box-shadow: 20px 20px 40px #203948, -20px -20px 40px #2e536a;
  border: 2px solid #274659;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
input[type="checkbox"]:after {
  font-family: "FontAwesome";
  content: "\f093";
  color: #fff;
  font-size: 70px;
}
input[type="checkbox"]:checked {
  box-shadow: 20px 20px 60px #213c4c, -20px -20px 60px #2d5166,
    inset 20px 20px 60px #213c4c, inset -20px -20px 60px #2d5166;
}

.col {
  margin: 2rem;
}

.card {
  min-height: 400px;
  padding: 3rem;
  background-color: #274659;
  border-radius: 20px;
  color: #fff;
}
.card > p {
  line-height: 1.5;
}
</style>
