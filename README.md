# Jalisco Tech Week 🌐
Sitio web oficial para **Jalisco Tech Week**, un evento que reúne a emprendedores, devs e inversionistas del ecosistema de tecnológico en Guadalajara.

## 🚀 Tech Stack
- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Custom Domain:** https://jaliscotechweek.com

## 🧱 Estructura del Proyecto
```
src/
├── assets/              # Imágenes, íconos y otros recursos estáticos
├── components/          # Componentes reutilizables de UI
│   ├── Countdown.jsx
│   ├── Footer.jsx
│   ├── HeadingCounter.jsx
│   └── ...
├── App.jsx              # Componente raíz
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales (Tailwind)
```

## 🛠️ Cómo correr el proyecto localmente

1. **Clona el repositorio**
```bash
git clone https://github.com/juanmcervantes/Jalisco_Tech_Week_Infra.git
cd Jalisco_Tech_Week_Infra
```

2. **Instala dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre en tu navegador**
```
http://localhost:5173
```

## 🌍 Despliegue en Producción

El sitio está desplegado en [Vercel](https://vercel.com) y vinculado con el dominio personalizado:  
🔗 https://jaliscotechweek.com  

Para actualizar la versión en producción:
```bash
git add .
git commit -m "Tu mensaje"
git push origin main
```
Vercel detectará automáticamente el cambio y desplegará la nueva versión.

## 👥 Autores
- Juan Cervantes – [@juanmcervantes](https://github.com/juanmcervantes)

## 📄 Licencia
MIT License. Feel free to fork and adapt for other community tech events.