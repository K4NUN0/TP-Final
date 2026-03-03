# SquanchApp 💬🛸

🔗 **[https://squanchapp.vercel.app/](https://squanchapp.vercel.app/)**

Clon de WhatsApp Web temático de **Rick and Morty**, desarrollado como Trabajo Práctico Final para Laboratorio de Computación III — UTN (2025).

---

## ¿De qué se trata?

SquanchApp simula la interfaz de WhatsApp Web con 8 personajes del universo Rick and Morty como contactos. Cada personaje tiene sus propias respuestas automáticas, hay un grupo de chat (La Ciudadela de Ricks), modo oscuro, panel de perfil, ficha de contacto y un flujo completo de login → pantalla de carga → chats.

---

## Tecnologías

- **React 19** con Vite
- **React Router v7**
- **Context API** para el estado global
- **localStorage** para persistencia de mensajes y sesión
- CSS vanilla con variables para theming (modo claro/oscuro)
- [Rick and Morty API](https://rickandmortyapi.com/) para los avatares

---

## Funcionalidades

- Login con nombre de usuario
- Pantalla de carga animada con portal interdimensional girando y frases aleatorias de la serie
- Lista de chats con búsqueda en tiempo real
- Mensajes con doble tilde de lectura y animación "Escribiendo..."
- Respuestas automáticas únicas por personaje
- Grupo de chat: La Ciudadela de Ricks (con múltiples "Ricks" distintos)
- Panel de perfil propio deslizable (nombre, info, cerrar sesión)
- Ficha de contacto al tocar el avatar en el header del chat
- Modo oscuro / claro persistente
- Diseño responsive — funciona en móvil y desktop
- Navegación tipo WhatsApp: NavRail + Sidebar + ChatWindow
- Búsqueda de contactos con `useSearchParams` — la query queda reflejada en la URL (`/?q=rick`)

---

## Dificultades encontradas

La parte que más tiempo me llevó fue todo lo relacionado al responsive y al layout general de la app.

El mayor dolor de cabeza fue el **layout de 3 columnas** (NavRail + Sidebar + ChatWindow). En desktop se veía bien, pero en móvil había que decidir qué mostrar y qué ocultar según si había un chat abierto o no. Hacer que el sidebar desapareciera correctamente cuando abrías un chat, y que volviera al cerrarlo, requirió bastante prueba y error con las clases CSS y la lógica de rutas.

Lo segundo fue el **sidebar que se iba cuando abrías un chat en móvil** — en desktop tienen que coexistir los dos, pero en celu el chat tiene que ocupar toda la pantalla. Terminé resolviendo eso con una clase `hide-on-mobile` controlada por si había o no un `PhoneNumber` en los params de la ruta.

Y lo tercero fueron los **paneles deslizables** (el de perfil y la ficha de contacto). En desktop se abren al costado sin tapar nada, pero en móvil tenían que cubrir toda la pantalla como una página nueva. Estuve un buen rato hasta entender cómo usar `position: absolute` con `inset: 0` para lograrlo, y cómo combinarlo con un `@media` para que en desktop volviera al comportamiento lateral.

También tuve que pedir ayuda con algunas funciones de JavaScript que no dominaba del todo, como el manejo de `useCallback`, `useMemo` y la lógica de `useSearchParams` para reflejar la búsqueda en la URL.

---

## Uso de herramientas de IA

Durante el desarrollo usé **Claude (Anthropic)** como herramienta de apoyo para mejorar y limpiar el código — principalmente para refactorizar componentes, corregir estilos CSS y revisar que no quedaran imports o comentarios innecesarios. Las decisiones de arquitectura, la lógica de la aplicación, el contenido temático y la integración en el proyecto fueron propias.

---

## Estructura del proyecto

```
src/
├── components/
│   ├── ChatWindow.jsx
│   ├── LoadingScreen.jsx
│   ├── NavRail.jsx
│   └── Sidebar.jsx
├── context/
│   └── ChatContext.jsx
├── data/
│   ├── contacts.Data.jsx
│   └── initialMessages.js
├── pages/
│   ├── ChatPage.jsx
│   └── Login.jsx
├── styles/
│   └── App.css
├── utils/
│   └── constants.js
└── App.jsx
```

---

## Deploy

El proyecto está desplegado en Vercel y el código fuente disponible en GitHub.

- 🚀 **Demo:** [squanchapp.vercel.app](https://squanchapp.vercel.app)
- 💻 **Repositorio:** [github.com/Leonel-rb](https://github.com/Leonel-rb)

> Para ingresar usá cualquier nombre de usuario y contraseña.

---

## Autor

**Leonel Baigorria** 
