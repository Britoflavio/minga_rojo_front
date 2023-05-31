Procedimientos y pasos realizados para incorporar la API de Mercado Pago en el frontend de la aplicacion MINGA.

1-Ingresar al sitio oficial de la API de Mercado Pago, link -----> https://www.mercadopago.com.ar/developers/es

2-Registrarse y solicitar credenciales de prueba (Public key & Access token).

3-Seleccionar el metodo Checkout Pro

4-Instalar la libreria oficial de Mercado Pago para utilizar con React con el comando 'npm install @mercadopago/sdk-react'.

5-Crear el modal de acceso con el boton de donacion, para renderizar el componente de pagina con las distintas donaciones.


7-Utilizamos la public-key para acceder a la API de Mercado Pago.

8-Se generan los estados necesarios para las distintas funcionalidades de la pagina.

9-Utilizo redux para incorporar el preference desde el backed, utilizando .POST .
