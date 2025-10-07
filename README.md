[README.md](https://github.com/user-attachments/files/22752838/README.md)

# STK Sistematika Gestión - Sitio Web

Este repositorio contiene el sitio web multipágina estático de **STK Sistematika Gestión**, listo para desplegar en **Vercel**.

## Estructura del repositorio

```
/stk-web/
│
├── index.html               → Página principal
├── servicios/               → Páginas de cada servicio
├── contacto.html            → Página de contacto
├── nosotros.html            → Página sobre la empresa
├── css/style.css            → Estilos personalizados
├── js/main.js               → Interactividad mínima
├── images/logo.png          → Logo de la empresa
└── vercel.json              → Configuración para deploy en Vercel
```

## Instrucciones para subir a GitHub

1. Descomprime el ZIP en tu computadora.
2. Abre terminal o PowerShell en la carpeta del proyecto.
3. Inicializa git y sube a tu repositorio:
```bash
git init
git add .
git commit -m "Versión inicial del sitio STK"
git branch -M main
git remote add origin https://github.com/<TU_USUARIO>/stk-web.git
git push -u origin main
```
Reemplaza `<TU_USUARIO>` con tu nombre de usuario de GitHub.

## Despliegue en Vercel

1. Ve a [https://vercel.com/new](https://vercel.com/new) y conecta tu cuenta de GitHub.
2. Importa el repositorio `stk-web`.
3. Vercel detectará un sitio estático automáticamente y hará el deploy.
4. En minutos tendrás tu sitio en `https://stk-web.vercel.app`.

## Opcional: dominio personalizado

1. Compra un dominio (.cl, .com, etc.) en cualquier proveedor.
2. En Vercel, ve a Settings → Domains → Add Domain.
3. Ingresa tu dominio y sigue las instrucciones de configuración DNS.

## Notas

- Todos los estilos usan Tailwind CSS y fuente Poppins.
- Se incluyen todas las páginas multipágina: Inicio, Nosotros, Contacto y Servicios.
- Puedes modificar el contenido HTML, CSS o agregar JS según necesites.
