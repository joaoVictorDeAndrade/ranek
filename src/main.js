import { createApp, h } from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PaginaCarregando from "@/components/PaginaCarregando.vue";
import ErroNotificacao from "@/components/ErroNotificacao.vue";

const app = createApp({
  render: () => h(App)
});

app.component("PaginaCarregando", PaginaCarregando);
app.component("ErroNotificacao", ErroNotificacao);

app.use(router);
app.use(store);
app.mount('#app');
