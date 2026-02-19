# MiModa (E-commerce Angular)

Esta aplicación es una tienda online moderna y responsiva construida con **Angular v18+**. Está diseñada para ser desplegada fácilmente en **Vercel** y utiliza un diseño "premium" con CSS nativo.

## Características

*   **Diseño Moderno**: Interfaz minimalista y elegante enfocada en la experiencia de usuario.
*   **Gestión de Productos**: Catálogo filtrable por categorías y vista de detalle de producto.
*   **Responsive**: Totalmente adaptable a dispositivos móviles y de escritorio.
*   **Arquitectura Angular**: Uso de Standalone Components y las últimas prácticas del framework.
*   **Listo para Despliegue**: Configuración pre-establecida para hosting estático en GitHub Pages.

## Comenzando

Sigue estas instrucciones para obtener una copia del proyecto y ejecutarlo en tu máquina local.

### Prerrequisitos

Necesitas tener instalado **Node.js** (versión LTS recomendada) y **npm**.

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/ecommerce-shop.git
    cd ecommerce-shop
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```

### Desarrollo Local

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

## Despliegue (Vercel)

La forma más sencilla de desplegar esta aplicación Angular es usando [Vercel](https://vercel.com). The project requires zero configuration.

1.  Push your code to a git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into Vercel.
3.  Vercel will automatically detect that it's an Angular project and configure the build settings.
4.  Click **Deploy**.

## Estructura del Proyecto

*   `src/app/core`: Componentes estructurales (Header, Footer, Layout) y servicios singleton.
*   `src/app/features`: Componentes funcionales (Home, Listado de productos, Detalle).
*   `src/styles.css`: Definiciones de estilos globales y variables CSS.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
