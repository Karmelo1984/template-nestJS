<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

[Template-NestJS](https://github.com/Karmelo1984/template-nestJS) es una plantilla que simplifica el iniciar proyectos
NestJS ya que proporciona una configuración inicial estandar para ahorrar tiempo en los primeros pasos. Utiliza Docker,
PostgreSQL y Yarn. Además, es personalizable a través de típicos archivos JSON de configuración del proyecto.

## Características de este `TEMPLATE`

1. `Configuración Inicial:` Este template proporciona una configuración inicial completa para proyectos NestJS,
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

7. `Estandariza los Commits:` Este template fomenta el uso de mensajes de commit estandarizados siguiendo convenciones
   específicas, lo que mejora la claridad y la trazabilidad de tus cambios en el repositorio. Para ello implementa:

   -  **Commitlint:** Determina si un mensaje de commit se adecúa a un estándar en concreto
   -  **Husky:** Ejecuta Commitlint antes de cada commit. Abortará el commit en caso de que el mensaje escrito no se
      adapte al estándar de Commitlint.
   -  **Commitizen:** Genera mensajes compatibles con Commitlint de una forma sencilla, a través de un wizard.

8. `Automatiza el Changelog:` Utiliza herramientas como
   [standard-version](https://github.com/conventional-changelog/standard-version) para automatizar la generación de
   changelogs basados en los mensajes de commit, lo que simplifica la documentación de tus cambios. Para ello hace uso
   de:

   -  **Standard-version:** Se encarga de procesar los mensajes de commit para generar un Changelog y subir la versión
      del proyecto.

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

## ¿Cómo hacer commits estandarizados?

Para agregar archivos/carpetas a un commit en GIT, usaremos las formas usuales.

```bash
   git add archivo1.js archivo2.js ## Agrega archivos específicos.
   git add "*.js" ## Agrega archivos por patrones.
   git add -p ## Agrega cambios de forma interactiva.
   git add directorio/ ## Agrega todos los archivos en un directorio.
```

Después usaremos el siguiente comando para abrir el wizard de commitizien, donde solo tendremos que seguir los pasos que
nos indica.

```bash
   yarn cz
```

## ¿Cómo lanzar una versión nueva?

Para la primera versión (que no aumentará la versión del fichero `package.json`), ejecutamos:

```bash
   yarn run release --first-release
```

Después para cada versión siguiente, solo tendremos que ejecutar:

```bash
   yarn run release
```

La subida de versión tiene en cuenta, entre otras, estas cosas:

-  La versión se especifica como **MAJOR.MINOR.PATCH**.
-  Si entre una versión y la siguiente sólo hay commits de **fix**, se incrementará la versión **PATCH**.
-  Si entre una versión y la siguiente algún commit incluye **feat**, se incrementará la versión **MINOR** y la versión
   **PATCH** volverá a cero.
-  Si entre una versión y la siguiente algún commit lleva especificado un **BREAKING CHANGE**, se aumentará la versión
   **MAJOR**, devolviendo las versiones **MINOR** y **PATCH** a cero.

Por defecto, en el changelog, sólo se incluyen los commits que marquen un **BREAKING CHANGE**, **feat** y **fix**.
Aunque esto es posible configurarlo a gusto en la propia herramienta.

## Contacto

-  Author - [Carmelo Molero Castillo](https://linkedin.com/in/carmelomolerocastillo)

## Licencia

Template-NestJS usa la licencia [MIT licensed](LICENSE).
