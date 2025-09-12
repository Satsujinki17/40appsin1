<template>
        <h1>Sobre Nosotros</h1>

        <section class="intro">
            <p>40 Apps in One es un proyecto innovador que consiste en abarcar las siguientes aplicaciones webs en una
                única
                aplicación de página única (SPA). Esta solución integral busca simplificar la experiencia digital del
                usuario al reunir herramientas esenciales en un solo lugar, eliminando la necesidad de cambiar entre
                múltiples pestañas, aplicaciones o servicios.</p>

            <p>El proyecto nace de la necesidad de centralizar las funcionalidades más utilizadas en el día a día,
                ofreciendo una experiencia cohesiva, interfaz unificada y flujo de trabajo optimizado. Cada aplicación
                está
                diseñada para integrarse perfectamente con las demás, permitiendo transferencia de datos y mantenimiento
                del
                contexto entre las diferentes herramientas.</p>
        </section>

        <section class="features">
            <div class="feature-card">
                <h3>Productividad</h3>
                <ul>
                    <li>Gestor de tareas y listas pendientes</li>
                    <li>Calendario y planificador de eventos</li>
                    <li>Bloc de notas y editor de markdown</li>
                    <li>Temporizador Pomodoro</li>
                    <li>Calculadora avanzada</li>
                    <li>Generador de informes</li>
                </ul>
            </div>

            <div class="feature-card">
                <h3>Comunicación</h3>
                <ul>
                    <li>Cliente de correo electrónico</li>
                    <li>Chat en tiempo real</li>
                    <li>Videollamadas</li>
                    <li>Foros de discusión</li>
                    <li>Mensajería interna</li>
                    <li>Notificaciones unificadas</li>
                </ul>
            </div>

            <div class="feature-card">
                <h3>Multimedia</h3>
                <ul>
                    <li>Reproductor de audio y video</li>
                    <li>Editor de imágenes básico</li>
                    <li>Galería de medios</li>
                    <li>Conversor de formatos</li>
                    <li>Grabadora de voz</li>
                    <li>Visualizador de PDF</li>
                </ul>
            </div>
        </section>

        <section class="benefits">
            <h2>Ventajas del Enfoque Integrado</h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <h3>Unificación de Interfaz</h3>
                    <p>Experiencia de usuario consistente en todas las aplicaciones con patrones de diseño y navegación
                        uniformes.</p>
                </div>

                <div class="benefit-item">
                    <h3>Menos Cambios de Contexto</h3>
                    <p>Los usuarios permanecen en el mismo entorno, reduciendo la carga cognitiva al evitar cambios
                        entre
                        aplicaciones.</p>
                </div>

                <div class="benefit-item">
                    <h3>Datos Compartidos</h3>
                    <p>Información sincronizada entre aplicaciones: contactos, calendarios y documentos accesibles desde
                        cualquier herramienta.</p>
                </div>
            </div>
        </section>
</template>


<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

 

h1 {
    margin-top: 5rem;
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 40px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--light);
}

h2 {
    font-size: 2.2rem;
    margin-bottom: 25px;
    color: var(--dark);
    text-align: center;
}

h3 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: var(--secondary);
}

section {
    margin-bottom: 60px;
}

/* Intro Section */
.intro {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 50px;
}

.intro p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    color: var(--gray);
    line-height: 1.8;
}

/* Features Section */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.feature-card {
    background: var(--light);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-card ul {
    list-style-type: none;
    padding-left: 0;
}

.feature-card li {
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    position: relative;
    padding-left: 25px;
}

.feature-card li:before {
    content: "•";
    color: var(--accent);
    font-weight: bold;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
}

/* Benefits Section */
.benefits {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    padding: 50px 30px;
    border-radius: 15px;
    margin: 40px 0;
}

.benefits h2 {
    color: white;
    margin-bottom: 40px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.benefit-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 25px;
    transition: var(--transition);
}

.benefit-item:hover {
    transform: scale(1.03);
    background: rgba(255, 255, 255, 0.15);
}

.benefit-item h3 {
    color: white;
    font-size: 1.4rem;
    margin-bottom: 15px;
}

.benefit-item p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
}

/* Responsive */
@media (max-width: 768px) {
    h1 {
        font-size: 2.2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    .features,
    .benefits-grid {
        grid-template-columns: 1fr;
    }

    .feature-card,
    .benefit-item {
        padding: 20px;
    }
}
</style>
