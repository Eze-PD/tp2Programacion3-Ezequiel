# Facultad de Ciencias de la Administración – UNER  
## Programación III - TP 2: API Fetch & FileSystem  
**2do Cuatrimestre 2025**  
**Tecnicatura Universitaria en Desarrollo Web**  

---

### 📌 Grupo BB, integrado por:

- 👨🏻‍💻 **Sanchez, David**
- 👨🏻‍💻 **Villalba Olmedo, Delcy Adalis**
- 👨🏻‍💻 **Ovejero, Yamila Mailen**
- 👨🏻‍💻 **Conte Garcia, Emanuel**
- 👨🏻‍💻 **Medina, Ricardo Daniel**
- 👨🏻‍💻 **Pereyra Diaz, Ezequiel**

---

## 📜 Descripción del Proyecto

Este trabajo práctico tiene como objetivo aplicar los conceptos de **API Fetch** y manejo de archivos con **FileSystem** (`fs`) en JavaScript, ejecutando las operaciones en entorno **Node.js**.

Se realizan consultas de tipo **GET, POST, PUT y DELETE** a la API pública [FakeStoreAPI](https://fakestoreapi.com/) y se persisten los datos obtenidos en un archivo local en formato **JSON**, sobre el cual también se aplican transformaciones.

---

## ⚙️ Requisitos Previos

**Instalación de:**
- Node.js (v16 o superior)
- Conexión a Internet (para consumir la API)
- Editor de código (Visual Studio Code u otro)

---

## 📂 Estructura del Proyecto

tp2Programacion3-Ezequiel/
┣ main.js
┣ data.json
┣ package.json
┣ README.md
┗ otros_archivos.js

---

## 🛠 Funcionalidades Implementadas

### 🔗 API Fetch – Operaciones con la API:

- ✅ Obtener todos los productos de la API (GET)
- ✅ Obtener un número limitado de productos (GET)
- ✅ Guardar respuesta en archivo `data.json` (FileSystem)
- ✅ Agregar nuevo producto vía API (POST)
- ✅ Buscar producto por ID (GET)
- ✅ Eliminar producto por ID (DELETE)
- ✅ Modificar producto por ID (PUT)

### 📁 FileSystem – Operaciones sobre archivo local:

- ✅ Agregar un producto al archivo `data.json`
- ✅ Eliminar productos con precio mayor a un valor específico
- ✅ Mostrar en consola los productos luego de cada operación

---

## ▶️ Instrucciones de Ejecución

1. Clonar este repositorio: git clone https://github.com/TU_USUARIO/tp2Programacion3-Ezequiel.git
2. Instalar dependencias si es necesario: npm install
3. Ejecutar el script principal: node main.js

🔐 Condiciones de Entrega

Trabajo grupal (Grupo BB)

Repositorio con nombre identificatorio de grupo e integrante principal

Subido al campus virtual en formato comprimido o como enlace a GitHub

Entregado antes del plazo informado

Solución de autoría propia

Se permite el uso asistido de IA, pero no generar todo el código con ella

📖 Conclusión

Este trabajo práctico permitió reforzar el uso de APIs y manipulación de archivos en JavaScript, trabajando en equipo sobre las herramientas básicas del backend con Node.js.

📅 Fecha de Entrega

Viernes 23 de Agosto de 2025

🙌 Agradecimientos

Agradecemos a nuestros docentes y compañeros por su acompañamiento en este segundo trabajo práctico.