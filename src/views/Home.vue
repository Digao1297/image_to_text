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
  created() {
    this
      .actionSetText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ipsum erat. Curabitur auctor et urna eu bibendum. Aenean vel nisl velit. Mauris turpis dolor, tempor quis tempus non, aliquam at ligula. Fusce tristique nisi urna, et volutpat nisl malesuada vel. Nunc porttitor a orci vitae porttitor. Vivamus pretium accumsan orci, sed pulvinar arcu euismod ut. Vestibulum sagittis a velit sed pretium. Maecenas et diam quis mauris luctus consequat id eget augue. Vivamus eu dui luctus, euismod ligula et, malesuada mauris. Etiam eu finibus velit, at pulvinar leo. Sed placerat interdum est, in dictum mi efficitur vitae. Fusce condimentum odio mauris, sit amet vulputate lorem suscipit id. Etiam congue bibendum ornare. Nunc et nunc eu dui sodales dictum. Donec interdum ipsum neque, sit amet blandit urna euismod nec.

Vivamus molestie luctus erat id convallis. Curabitur est dui, congue nec metus in, imperdiet dignissim nisi. In ullamcorper, massa et eleifend convallis, orci leo tristique massa, vitae eleifend eros nisl vel ex. Nunc euismod maximus elementum. Donec nec enim gravida, ultrices augue sodales, fringilla magna. Proin fringilla ante vel vehicula dapibus. Aenean mollis iaculis turpis et placerat. Cras vitae pharetra ante. Praesent commodo risus ante, sed vehicula libero dictum vitae. Integer dapibus massa porta, semper lacus at, imperdiet ipsum. Ut dapibus posuere fermentum. Donec vehicula cursus tortor, ac ultricies lectus lacinia eu. Donec dapibus tincidunt sapien, id vestibulum dui accumsan id. Pellentesque non maximus erat, sed efficitur libero.

Ut mollis justo non purus faucibus, ac ultricies elit feugiat. Nulla non nulla vitae tellus sagittis tristique at in est. Praesent dapibus nunc id mi fringilla sodales. Fusce placerat tortor justo, in commodo leo tempus quis. Sed at risus dictum, tempor justo in, ultricies mauris. Suspendisse id felis tristique, mollis nunc id, molestie quam. Integer vel pellentesque purus. Phasellus ac diam diam. Curabitur consectetur, lectus quis finibus porta, urna risus vulputate lorem, sed tempus quam nisl sed felis.

Aliquam ultricies diam ut odio lacinia mollis. Aliquam ut risus in libero molestie ultricies a id dolor. Nam nunc quam, accumsan quis nunc non, tincidunt ullamcorper dui. Donec in diam quis risus lobortis tincidunt. Pellentesque auctor dolor est, eu laoreet mi consequat quis. Donec varius nisi ac lacinia feugiat. Pellentesque ipsum felis, fringilla ut neque vel, malesuada ornare nulla. Duis et scelerisque diam. Nullam dapibus varius eros id ullamcorper. Aenean vitae sollicitudin ante. Nullam dapibus dolor ipsum, tincidunt interdum ante sollicitudin ut. Donec tincidunt dapibus enim.

Nam quis magna blandit, suscipit ex sed, facilisis ex. Nullam imperdiet risus eu arcu vulputate, laoreet porttitor odio dignissim. Duis ac urna non est ullamcorper scelerisque sit amet at diam. Quisque rhoncus, velit in tristique suscipit, ipsum turpis congue massa, eu ullamcorper nisl enim a eros. Ut in elementum ligula. Mauris efficitur vestibulum nibh sed luctus. Etiam molestie tempor placerat.`);
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
