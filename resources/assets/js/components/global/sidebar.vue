<template>
    <div>
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside class="app-sidebar">
            <div class="app-sidebar__user">
                <img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image">
                <div>
                    <p class="app-sidebar__user-name">John Doe</p>
                    <p class="app-sidebar__user-designation">Frontend Developer</p>
                </div>
            </div>
            <ul class="app-menu">
                <li>
                    <router-link class="app-menu__item active"  :to="{name:'dashboard'}">
                        <i class="app-menu__icon fa fa-dashboard"></i>
                        <span class="app-menu__label">Dashboard</span>
                    </router-link>
                </li>

                <li class="treeview">
                    <a class="app-menu__item" href="#" data-toggle="treeview">
                        <i class="app-menu__icon fa fa-shopping-basket"></i>
                        <span class="app-menu__label">Products</span>
                        <i class="treeview-indicator fa fa-angle-right"></i>
                    </a>
                    <ul class="treeview-menu">

                        <li>
                            <router-link :to="{name:'addProduct'}" class="treeview-item">
                                <i class="icon fa fa-plus-square-o"></i>Add Product
                            </router-link>

                        </li>
                        <li>
                            <router-link :to="{name:'viewProduct'}" class="treeview-item">
                                <i class="icon fa fa-circle-o"></i>View Product
                            </router-link>

                        </li>


                    </ul>
                </li>
            </ul>
        </aside>
    </div>
</template>
<script>
    export default {
        name: "sidebar"
    }
</script>
<style scoped></style>