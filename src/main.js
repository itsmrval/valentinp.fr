import { createApp } from "vue";
import App from "./App.vue";
import { createMetaManager } from "vue-meta";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub, faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { createRouter, createWebHistory } from "vue-router";
import homepage from "./views/homepage";
const router = createRouter({
  history: createWebHistory(), routes: [{path: "/",component: homepage}]
})

library.add(faLinkedinIn, faGithub, faEnvelope, faTwitter, faTelegram);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(createMetaManager())
  .mount("#app");

