# dawdiw_202503_Campo_Sanchez_RobertoCarlos

## Pasos para ejecutar el proyecto

1.  **Clonar el repositorio**:

    - Si no has clonado el repositorio, ejecuta:

    ```bash
    git clone https://github.com/tu-usuario/nba-teams.git
    ```

2.  **Navegar a la carpeta del proyecto**:

    - Abre una terminal y ve a la carpeta del proyecto:

    ```bash
    cd nba-teams
    ```

3.  **Instalar dependencias**:

    - Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

    ```bash
    npm install
    ```

4.  **Iniciar el servidor de desarrollo**:

    - Una vez instaladas las dependencias, inicia el servidor de desarrollo con:

    ```bash
    ng serve
    ```
    - El servidor estará disponible en `http://localhost:4200/`.
    La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

---
  

  













# Guía de Estilos

## Introducción

Breve descripción del proyecto:

- **Nombre del proyecto**: NBA Teams.
- **Tipo de proyecto**: Aplicación web de equipos de la NBA.
- **Objetivo**: Mostrar información detallada de los equipos de la NBA, incluyendo jugadores, entrenadores, títulos y números retirados, con un diseño atractivo y funcional.

---

## Paleta de Colores

Colores principales:

1. **Azul NBA** (`#1d428a`): Color principal para encabezados, barra de navegación y botones principales.
2. **Rojo NBA** (`#c8102e`): Color secundario para botones y elementos destacados en modo oscuro.
3. **Dorado NBA** (`#fdb927`): Color de acento para bordes, efectos hover y detalles decorativos.
4. **Gris claro** (`#f0f0f0`): Fondo principal en modo claro.
5. **Gris oscuro** (`#121212`): Fondo principal en modo oscuro.
6. **Gris más oscuro** (`#1e1e1e`): Fondo de tarjetas en modo oscuro.

### Ejemplo de uso:

- **Fondo (modo claro)**: `#f0f0f0`.
- **Fondo (modo oscuro)**: `#121212`.
- **Títulos**: `#1d428a` (modo claro), `#c8102e` (modo oscuro).
- **Enlaces y botones al pasar el mouse**: `#fdb927`.

---

## Tipografías

- **Fuentes predeterminadas**: Se utilizan las fuentes que vienen por defecto con Angular y Bootstrap.
- **Estilos**:
  - **Títulos**: `2.5rem` (40px) para H1, `2rem` (32px) para H2.
  - **Subtítulos**: `1.75rem` (28px) para H3, `1.5rem` (24px) para H4.
  - **Texto general**: `1rem` (16px).
  - **Textos secundarios**: `0.875rem` (14px).

---

## Imágenes y Recursos Gráficos

Imágenes utilizadas:

1. **Logos de equipos**:

   - **Formato**: PNG. Alojados en `src/app/assets/logos`
   - **Descripción**: Logos oficiales de los equipos de la NBA.
   - **Uso**: Tarjetas de equipos y detalles de equipo.

2. **Fotografías de jugadores y entrenadores**:
   - **Formato**: JPG/PNG.
   - **Descripción**: Fotografías de los jugadores y entrenadores de los equipos.
   - **Dimensiones**: Las imágenes de los jugadores son de `150x150px` para mantener la consistencia.

---

## Botones y Estilos Interactivos

Diseño de botones:

1. **Botón primario**:

   - **Fondo**: `#1d428a` (modo claro), `#c8102e` (modo oscuro).
   - **Texto**: `#ffffff`.
   - **Borde**: Sin borde.
   - **Radio del borde**: `5px`.
   - **Hover**:
     - Fondo cambia a `#fdb927`.
     - Transición suave (`0.3s`).

2. **Botón secundario**:
   - **Fondo**: `#fdb927`.
   - **Texto**: `#000000`.
   - **Hover**: Fondo ligeramente más oscuro (`#e0a722`).

---

## Tamaños y Espaciados

Encabezados y texto:

- **Espaciado entre líneas**: `1.5` para texto, `1.2` para encabezados.
- **Márgenes**:
  - Entre secciones: `2rem`.
  - Entre párrafos: `1rem`.

Imágenes:

- **Ancho máximo**: `100%` (responsivas).
- **Espaciado interno en la galería**: `10px`.

---

## Componentes y Ejemplos

### Header

- **Fondo**: Hereda el color del modo activo (claro u oscuro).
- **Botones**:
  - Color de texto: Heredado del modo activo.
  - Hover: Cambio de color de fondo y escala ligera.
- **Botón de hamburguesa**: Visible solo en pantallas pequeñas.

### Tarjetas de Equipos y Jugadores

- **Fondo**: Blanco en modo claro, gris oscuro en modo oscuro.
- **Borde**: Dorado NBA (`#fdb927`).
- **Hover**: Escala ligera y sombra suave.

### Formulario de Contacto

- **Campos con bordes redondeados**: `5px`.
- **Color de borde**: `#ccc`.
- **Texto del botón**: "Enviar".

### Modales

- **Fondo del modal**: Blanco.
- **Sombras**: Para diferenciarlo del fondo.

---

## Herramientas y Referencias

- **Framework**: Angular 19.2.0.
- **Framework CSS**: Bootstrap 5.3.3.

