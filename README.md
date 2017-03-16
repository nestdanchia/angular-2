# AppModulos2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
como crear el repositorio
Git tiene tres estados en los cuales pueden encontrarse los archivos
stage es un escenario en el cual se marcan las modificaciones de los archivos luego podemos pasar al estado Modificado en el cual se han detectado esos cambios y se espera que pasen al proximo estado COMMITTED en el cual se guarda a todos los archivos en la base de datos de Git
Configurando git 

A.git config --global user.name "Nestor"
config --global user.email "xxxxxx@ejemplo.com"

B.crear una cuenta en un repositorio por ejemplo github nos dara un usuarioGit y una claveGit

Nos poicionamos en la terminal de comandos en la carpeta que contiene a nuestro proyecto luego
>git init // crea una carpeta .git oculta con lo necesario para nuestro trabajo con git
>agregamos a todos los archivos a git con
git add . //el punto le da a git la ruta actual para agregar el proyecto
git commit -m "Commit Inicial" // pasamos al estado committed con -m le pasamos el mensaje a mostrar para este committed

C. desde nuestra terminal agregamos nuestro proyecto al repositorio que debemos crear antes en github
>git remote add origin https://github.com/nestdanchia/angular-2.git //damos el repositorio origen
>git push -u origin master //subimos los archivos
nos pregunta por 
Username for 'https://github.com/': --------- // completamos nuestro usuario y clave en github
Password for 'https://nestdanchia@github.com/':-------
si todo va bien nos dira finalmente 
Branch master set up to track remote branch master from origin.

Si modificamos archivos en nuestro repositorio con el comando fetch obtenemos los cambios consolidados del repositorio remoto
pero si fue un compañero no se ve reflejada en el git log hasta que la unamos a nuestro arbol de trabajo nuestra rama
si utilizamos el comando fetch y no se encuentran cambios en el servidor el comando no retorna nada. 
luego con 
>git pull //hacemos un updating de los cambios
Como un pull puede tener conflictos ya que hace un fetch y un merge sobre un rama podemos usar rebase que es mas segura lo habilitamos globalmente con
>git config --global --bool pull.rebase true 
si requerimos un merge luego de configurar por defecto a rebase
>git pull --no-rebase
o directamente
>git pull --rebase




