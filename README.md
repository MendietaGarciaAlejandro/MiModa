# E-commerce Angular

Esta aplicación es una tienda online moderna y responsiva construida con **Angular v18+**. Está diseñada para ser desplegada fácilmente en **GitHub Pages** y utiliza un diseño "premium" con CSS nativo.

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

## Despliegue (GitHub Pages)

Este proyecto incluye un script configurado para desplegar en GitHub Pages.

1.  Asegúrate de que tu repositorio en GitHub está creado.
2.  Si el nombre de tu repositorio **no** es `ecommerce-shop`, edita el archivo `package.json` y actualiza el script `build:gh-pages`:
    ```json
    "build:gh-pages": "ng build --base-href /NOMBRE-DE-TU-REPO/ --output-path docs"
    ```
3.  Ejecuta el comando de build:
    ```bash
    npm run build:gh-pages
    ```
4.  Sube los cambios a GitHub (asegúrate de incluir la carpeta `docs`).
5.  En la configuración de tu repositorio en GitHub, ve a la sección **Pages** y selecciona la rama `main` y la carpeta `/docs` como fuente.

## Estructura del Proyecto

*   `src/app/core`: Componentes estructurales (Header, Footer, Layout) y servicios singleton.
*   `src/app/features`: Componentes funcionales (Home, Listado de productos, Detalle).
*   `src/styles.css`: Definiciones de estilos globales y variables CSS.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
