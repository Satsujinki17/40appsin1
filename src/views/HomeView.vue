<script setup lang="ts">

import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from 'vue-router'
// Interfaces TypeScript
interface AppItem {
    icon: [string, string]; // [prefix, iconName]
    name: string;
    routeName: string;
    params: { userId: number }
}

interface Testimonial {
    text: string;
    author: string;
    role: string;
}

// Estado reactivo con tipos
const isScrolled = ref<boolean>(false);
const mobileMenuOpen = ref<boolean>(false);

const apps = ref<AppItem[]>([
    { icon: ['fas', 'calendar-alt'], name: 'Calendario Inteligente', routeName: '', params: { userId: 1, } },
    { icon: ['fas', 'tasks'], name: 'Gestor de Tareas', routeName: 'tasks', params: { userId: 2 } },
    { icon: ['fas', 'file-alt'], name: 'Editor de Texto', routeName: '', params: { userId: 3 } },
    { icon: ['fas', 'calculator'], name: 'Calculadora Avanzada', routeName: '', params: { userId: 4 } },
    { icon: ['fas', 'image'], name: 'Editor de Imágenes', routeName: '', params: { userId: 5 } },
    { icon: ['fas', 'video'], name: 'Reproductor Multimedia', routeName: '', params: { userId: 6 } },
    { icon: ['fas', 'cloud'], name: 'Almacenamiento en Nube', routeName: '', params: { userId: 7 } },
    { icon: ['fas', 'chart-line'], name: 'Analíticas de Datos', routeName: '', params: { userId: 8 } }
]);

const testimonials = ref<Testimonial[]>([
    {
        text: "Esta aplicación ha transformado completamente mi flujo de trabajo. Ya no necesito abrir 10 pestañas diferentes, todo está en un solo lugar.",
        author: "Ana Rodríguez",
        role: "Diseñadora UX"
    },
    {
        text: "La integración perfecta entre aplicaciones me ahorra horas cada semana. La experiencia de usuario es excepcional y muy intuitiva.",
        author: "Carlos Méndez",
        role: "Desarrollador Web"
    },
    {
        text: "Como estudiante, tener todas estas herramientas en una sola app es increíble. Me ayuda a mantenerme organizado y productivo.",
        author: "María López",
        role: "Estudiante Universitaria"
    }
]);

// Funciones con tipos explícitos
const handleScroll = (): void => {
    isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = (): void => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Hooks del ciclo de vida
onMounted((): void => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted((): void => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <!-- Hero Section -->
    <section class="hero" id="inicio">
        <div class="container">
            <h1>40 Aplicaciones en Una Solución Integral</h1>
            <p>Descubre la suite todo-en-uno que revolucionará tu productividad. Una única aplicación con 40
                herramientas esenciales para simplificar tu flujo de trabajo y vida digital.</p>
            <div class="hero-buttons">
                <a href="#descargar" class="btn">Comenzar Ahora</a>
                <a href="#demo" class="btn btn-secondary">Ver Demo</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="caracteristicas">
        <div class="container">
            <div class="section-title">
                <h2>Características Principales</h2>
                <p>Descubre por qué nuestra solución todo-en-uno es la mejor opción para tus necesidades digitales</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <font-awesome-icon :icon="['fas', 'layer-group']" />
                    </div>
                    <h3>Interfaz Unificada</h3>
                    <p>Accede a 40 aplicaciones con una experiencia de usuario coherente y fluida, sin necesidad de
                        cambiar entre múltiples pestañas o aplicaciones.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <font-awesome-icon :icon="['fas', 'bolt']" />
                    </div>
                    <h3>Rendimiento Optimizado</h3>
                    <p>Disfruta de un rendimiento excepcional gracias a nuestra tecnología SPA que carga las
                        aplicaciones de manera eficiente y rápida.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                    </div>
                    <h3>Seguridad Integrada</h3>
                    <p>Tus datos están protegidos con protocolos de seguridad avanzados y encriptación de última
                        generación en todas las aplicaciones.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Apps Showcase -->
    <section class="apps-showcase" id="aplicaciones">
        <div class="container">
            <div class="section-title">
                <h2>Algunas de Nuestras Aplicaciones</h2>
                <p>Explora una muestra de las 40 aplicaciones integradas en nuestra suite</p>
            </div>
            <div class="apps-grid">

                <div class="app-item" v-for="(app, index) in apps" :key="index">

                    <RouterLink :to="{ name: app.routeName, params: app.params }">
                        <font-awesome-icon :icon="app.icon" class="app-icon" />
                        <h3>{{ app.name }}</h3>
                    </RouterLink>
                </div>

            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials" id="testimonios">
        <div class="container">
            <div class="section-title">
                <h2>Lo que Dicen Nuestros Usuarios</h2>
                <p>Descubre las experiencias de quienes ya usan 40AppsEnUna</p>
            </div>
            <div class="testimonial-grid">
                <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
                    <p class="testimonial-text">"{{ testimonial.text }}"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">{{ testimonial.author.charAt(0) }}</div>
                        <div>
                            <h4>{{ testimonial.author }}</h4>
                            <p>{{ testimonial.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta" id="descargar">
        <div class="container">
            <h2>¿Listo para Revolucionar tu Productividad?</h2>
            <p>Únete a miles de usuarios que ya disfrutan de las 40 aplicaciones en una sola solución. Totalmente
                gratuito para empezar.</p>
            <a href="#registro" class="btn">Crear Cuenta Gratuita</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>40AppsEnUna</h3>
                    <p>La solución todo-en-uno para todas tus necesidades digitales. 40 aplicaciones integradas en una
                        experiencia seamless.</p>
                    <div class="social-icons">
                        <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#aplicaciones">Aplicaciones</a></li>
                        <li><a href="#caracteristicas">Características</a></li>
                        <li><a href="#testimonios">Testimonios</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Aplicaciones Populares</h3>
                    <ul>
                        <li><a href="#">Calendario</a></li>
                        <li><a href="#">Editor de Texto</a></li>
                        <li><a href="#">Gestor de Tareas</a></li>
                        <li><a href="#">Reproductor Multimedia</a></li>
                        <li><a href="#">Calculadora</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contacto</h3>
                    <ul>
                        <li><font-awesome-icon :icon="['fas', 'envelope']" /> info@40appsenuna.com</li>
                        <li><font-awesome-icon :icon="['fas', 'phone']" /> +34 912 345 678</li>
                        <li><font-awesome-icon :icon="['fas', 'map-marker-alt']" /> Madrid, España</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 40AppsEnUna. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --primary: #1a1a1a;
    --secondary: #494947;
    --accent: #ff6b6b;
    --light: #dcdad9;
    --dark: #51504E;
    --gray: #6c757d;
    --transition: all 0.3s ease;
}

body {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    color: var(--dark);
    line-height: 1.6;
}

#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
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
    box-shadow: 0 6px 20px rgba(201, 201, 201, 0.4);
}

/* Hero Section */
.hero {
    padding: 150px 0 100px;
    text-align: center;
    margin-top: 80px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 30px;
    color: var(--gray);
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.btn-secondary {
    background: white;
    color: var(--primary);
    border: 2px solid var(--primary);
}

/* Features Section */
.features {
    padding: 100px 0;
    background: white;
}

.section-title {
    text-align: center;
    margin-bottom: 60px;
}

.section-title h2 {
    font-size: 2.5rem;
    color: var(--dark);
    margin-bottom: 15px;
}

.section-title p {
    color: var(--gray);
    max-width: 600px;
    margin: 0 auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.feature-card {
    background: var(--light);
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 1.8rem;
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--dark);
}

/* Apps Showcase */
.apps-showcase {
    padding: 100px 0;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
}

.apps-showcase .section-title h2 {
    color: white;
}

.apps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 50px;
}

.app-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: var(--transition);
    cursor: pointer;
}

.app-item:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.2);
}

.app-item i {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: white;
}

/* Testimonials */
.testimonials {
    padding: 100px 0;
    background: white;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background: var(--light);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.testimonial-text {
    font-style: italic;
    margin-bottom: 20px;
    color: var(--gray);
}

.testimonial-author {
    display: flex;
    align-items: center;
}

.author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--secondary);
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
}

/* CTA Section */
.cta {
    padding: 100px 0;
    background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
    color: white;
    text-align: center;
}

.cta h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.cta p {
    max-width: 600px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
}

/* Footer */
footer {
    background: var(--dark);
    color: white;
    padding: 60px 0 30px;
    margin-top: auto;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-column h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #fff;
}

.footer-column ul {
    list-style: none;
}

.footer-column ul li {
    margin-bottom: 10px;
}

.footer-column a {
    color: #adb5bd;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-column a:hover {
    color: white;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: background 0.3s;
}

.social-icons a:hover {
    background: var(--primary);
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #adb5bd;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .features-grid,
    .apps-grid,
    .testimonial-grid,
    .footer-content {
        grid-template-columns: 1fr;
    }

    .mobile-menu-btn {
        display: block;
    }
}

/* Mobile menu */
.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--dark);
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }

    .nav-links {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition: var(--transition);
    }

    .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
    }

    .nav-links li {
        margin: 15px 0;
    }
}
</style>