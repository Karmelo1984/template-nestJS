<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

[Template-NestJS](https://github.com/Karmelo1984/template-nestJS) es una plantilla que simplifica el iniciar proyectos
NestJS ya que proporciona una configuración inicial estandar para ahorrar tiempo en los primeros pasos. Utiliza Docker,
PostgreSQL y Yarn. Además, es personalizable a través de típicos archivos JSON de configuración del proyecto.

## Características de este `TEMPLATE`

1. `Configuración Inicial:`` Este template proporciona una configuración inicial completa para proyectos NestJS,
   eliminando la necesidad de realizar la instalación y configuración inicial por separado.

2. `Uso de Docker:` Utiliza Docker para gestionar el entorno de desarrollo, lo que facilita la gestión de contenedores y
   la portabilidad del proyecto.

3. `Base de Datos Postgres:` Incluye una base de datos PostgreSQL como parte de la configuración inicial, lo que permite
   una integración sencilla con bases de datos relacionales.

4. `Gestión de Paquetes con Yarn:` Se ha elegido Yarn como gestor de paquetes, lo que puede mejorar la velocidad de
   instalación y gestión de dependencias.

5. `Personalización Flexible:` Aunque el proyecto se inicia con una configuración predefinida, es altamente
   personalizable. Puedes modificar los archivos de configuración JSON en la raíz del proyecto para adaptarlos a tus
   necesidades específicas.

6. `Fácil Inicio:` Con las instrucciones proporcionadas en este readme, puedes clonar el proyecto, instalar las
   dependencias y configurar las variables de entorno en poco tiempo, lo que te permite comenzar a desarrollar tu
   aplicación rápidamente.

## Ejecutar la aplicación

1. Clona el proyecto.

2. Inicializa el proyecto, instalando todas las dependencias.

```bash
  $ yarn install
```

3. Clona el archivo `.env.template` y renombralo a `.env`.

4. Completa la variables de entorno. Todas son necesarias, para inicializar el proyecto.

5. Levantar base de datos.

```bash
  $ docker-compose up -d

  # Puedes monitorizar el contenedor de docker desde otro terminal mediante:
  $ docker logs -f ${process.env.DB_CONTAINER_NAME}

  # Y puedes parar la ejecución del contenedor mediante:
  $ docker stop ${process.env.DB_CONTAINER_NAME}

```

6. Levantar el proyecto en modo 'desarrollo':

```bash
  $ yarn start:dev
```

## Contacto

-  Author - [Carmelo Molero Castillo](https://linkedin.com/in/carmelomolerocastillo)

## Licencia

Template-NestJS usa la licencia [MIT licensed](LICENSE).
