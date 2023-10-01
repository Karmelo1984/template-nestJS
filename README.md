<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

[Template-NestJS](https://github.com/Karmelo1984/template-nestJS) es una plantilla que simplifica el iniciar proyectos
NestJS ya que proporciona una configuración inicial estandar para ahorrar tiempo en los primeros pasos. Utiliza Docker,
PostgreSQL y Yarn. Además, es personalizable a través de típicos archivos JSON de configuración del proyecto.

## Características de este `TEMPLATE`

1. `Configuración Inicial:` Este proyecto sirve como base para proyectos NestJS, eliminando la necesidad de realizar la
   instalación y configuración inicial.

2. `Uso de Docker:` Uso de Docker para gestionar el entorno de desarrollo.

3. `Base de Datos Postgres:` Incluye la configuración de una base de datos PostgreSQL como parte de la configuración
   inicial.

4. `Gestión de Paquetes con Yarn:` Se ha optado por Yarn como gestor de paquetes.

5. `Personalización Flexible:` Aunque el proyecto se inicia con una configuración predefinida, es altamente
   personalizable modificando los típicos ficheros de configuración **JSON**, adaptándolos a tus necesidades
   específicas.

6. [`Estandarización de Commits:`](https://medium.com/nosolosoftware/estandariza-tus-commits-y-automatiza-tu-changelog-con-estas-herramientas-bb83c404f02f)
   Este template fomenta el uso de mensajes de commit estandarizados para mejorar la trazabilidad de los cambios en el
   repositorio. Para ello implementa:

   -  **Commitlint:** Determina si un mensaje de commit se adecúa a un estándar en concreto
   -  **Husky:** Ejecuta Commitlint antes de cada commit. Abortará el commit en caso de que el mensaje escrito no se
      adapte al estándar de Commitlint.
   -  **Commitizen:** Genera mensajes compatibles con Commitlint de una forma sencilla, a través de un wizard.

7. [`Automatiza el Changelog:`](https://medium.com/nosolosoftware/estandariza-tus-commits-y-automatiza-tu-changelog-con-estas-herramientas-bb83c404f02f)
   Automatización de la generación de changelogs basados en los mensajes de commit, lo que simplifica la documentación
   de los cambios. Se hace uso de:

   -  **[standard-version](https://github.com/conventional-changelog/standard-version)** Se encarga de procesar los
      mensajes de commit para generar un Changelog y subir la versión del proyecto.

## Aplicaciones necesarias

Para poder inicializar este template sin problemas, es necesario que revises e instales las siguientes aplicaciones.

```bash
   node --version      --> `v18.17.1`
   npm --version       --> `v9.6.7`
   docker --version    --> `24.0.6, build ed223bcs`
```

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

## [¿Cómo hacer commits estandarizados?](https://medium.com/nosolosoftware/estandariza-tus-commits-y-automatiza-tu-changelog-con-estas-herramientas-bb83c404f02f)

1. Los commits se hacen a partir del CLI de git para registrar los cambios de archivos/carpetas en el repositorio. Se
   pueden usar las formas usuales.

   ```bash
      git add archivo1.js archivo2.js ## Agrega archivos específicos.
      git add "*.js" ## Agrega archivos por patrones.
      git add -p ## Agrega cambios de forma interactiva.
      git add directorio/ ## Agrega todos los archivos en un directorio.
   ```

2. Con el siguiente comando abrimos el wizard de commitizien, donde solo tendremos que seguir los pasos.

   ```bash
      yarn cz
   ```

3. Después haremos **push** al repositorio, bien a través de **CLI**, **github desktop** o **gitkraken**.

## [¿Cómo lanzar una versión nueva?](https://medium.com/nosolosoftware/estandariza-tus-commits-y-automatiza-tu-changelog-con-estas-herramientas-bb83c404f02f)

Para la primera versión (que no aumentará la versión del fichero `package.json`), ejecutamos:

```bash
   yarn run release --first-release
```

Después para cada versión siguiente, solo tendremos que ejecutar:

```bash
   yarn run release
```

La subida de versión se hace forma automática a partir del fichero **package.json** de nuestro proyecto, y tiene en
cuenta, entre otros:

-  La versión se especifica como **MAJOR.MINOR.PATCH**.
-  Si entre una versión y la siguiente sólo hay commits de **fix**, se incrementará la versión **PATCH**.
-  Si entre una versión y la siguiente algún commit incluye **feat**, se incrementará la versión **MINOR** y la versión
   **PATCH** volverá a cero.
-  Si entre una versión y la siguiente algún commit lleva especificado un **BREAKING CHANGE**, se aumentará la versión
   **MAJOR**, devolviendo las versiones **MINOR** y **PATCH** a cero.

Por defecto, en el changelog, sólo se incluyen los commits que marquen un **BREAKING CHANGE**, **feat** y **fix**.
Aunque esto es posible configurarlo a gusto en la propia herramienta.

## A tener en cuenta en la configuración

Prettier ha sido configurado con los siguientes parámetros:

```json
{
   "arrowParens": "always", // Siempre utiliza paréntesis alrededor de los parámetros de funciones flecha.
   "bracketSpacing": true, // Coloca espacios en blanco alrededor de las llaves en objetos.
   "endOfLine": "lf", // Usa saltos de línea Unix (LF) en lugar de saltos de línea Windows (CRLF).
   "jsxBracketSameLine": false, // Coloca el corchete de apertura de JSX en una línea nueva.
   "jsxSingleQuote": false, // Utiliza comillas dobles en lugar de comillas simples en JSX.
   "printWidth": 120, // Establece la longitud máxima de línea en 120 caracteres.
   "proseWrap": "always", // Envuelve siempre el texto en markdown y comentarios.
   "quoteProps": "as-needed", // Cita las propiedades de los objetos solo cuando sea necesario.
   "requirePragma": false, // No requiere un comentario especial para formatear.
   "semi": true, // Siempre añade punto y coma al final de las declaraciones.
   "singleQuote": true, // Utiliza comillas simples en lugar de comillas dobles.
   "tabWidth": 3, // Establece el tamaño de la sangría en 3 espacios.
   "trailingComma": "all", // Coloca comas finales en objetos y arrays multilinea.
   "useTabs": false // Utiliza espacios en lugar de tabuladores.
}
```

## Contacto

-  Author - [Carmelo Molero Castillo](https://linkedin.com/in/carmelomolerocastillo)

## Licencia

Template-NestJS usa la licencia [MIT licensed](LICENSE).
