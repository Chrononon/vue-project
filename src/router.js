import Vue from "vue";
import Router from "vue-router";
import ToDoPage from "./Pages/TodoPage.vue";
import ArchivePage from "./Pages/ArchivePage.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "todo",
            component: ToDoPage
        },
        {
            path: "/archive",
            name: "archive",
            component: ArchivePage
        }
    ]
})