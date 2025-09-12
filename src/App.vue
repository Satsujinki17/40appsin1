<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from "vue";


const isScrolled = ref<boolean>(false);
const mobileMenuOpen = ref<boolean>(false);



const toggleMobileMenu = (): void => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

</script>

<template>


    <header :class="{ scrolled: isScrolled }">
        <div class="container">
            <nav>
                <a href="#" class="logo">
                    <font-awesome-icon :icon="['fas', 'cubes']" />

                    <span>40AppsEnUna</span>
                </a>
                <ul class="nav-links" :class="{ active: mobileMenuOpen }">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#aplicaciones">Aplicaciones</a></li>
                    <li><a href="#caracteristicas">Características</a></li>
                    <li><a href="#testimonios">Testimonios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <button class="btn">Probar Ahora</button>
                <button class="mobile-menu-btn" @click="toggleMobileMenu">
                    <i class="fas" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
                </button>
            </nav>
        </div>
    </header>





    <!--
  <RouterLink to="/">Home </RouterLink>
        ||
       
  -->
    <RouterView />
</template>

<style scoped>
/* Header y Navegación */
header {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: var(--transition);
}

header.scrolled {
    padding: 5px 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    transition: var(--transition);
}

header.scrolled nav {
    padding: 10px 0;
}

.logo {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--primary);
    text-decoration: none;
}

.logo i {
    margin-right: 10px;
    font-size: 1.8rem;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-links a:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--primary);
    transition: var(--transition);
}

.nav-links a:hover:after {
    width: 100%;
}

.nav-links a:hover {
    color: var(--primary);
}

.btn {
    display: inline-block;
    padding: 12px 25px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    color: white;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(230, 230, 230, 0.3);
    border: none;
    cursor: pointer;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(196, 196, 196, 0.4);
}
</style>
