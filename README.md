<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

[Template-NestJS](https://github.com/Karmelo1984/template-nestJS) es una plantilla que inicializa un proyecto NestJS,
con la configuración inicial para que solo tengamos que preocuparnos de empezar nuestra aplicación.

Evita hacer toda la instalación inicial, y preocúpate solo de iniciar a desarrollar tu aplicación.

Hace uso de docker, postgres y como gestor de paquetes se ha elegido yarn.

Aunque puedes personalizar el proyecto ajustándolo a tus necesidades, modificando los típocos ficheros de configuración
'.json' de la raiz del proyecto

## Características de este `TEMPLATE`

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
