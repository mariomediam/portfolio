# Guía de inicio rápido: Compose y Astro por Mario Medina

Esta guía de inicio rápido demuestra cómo usar Docker Compose para configurar y ejecutar una aplicación de Astro. Antes de empezar,
[instala Compose](https://docs.docker.com/compose/install/).

### Software utilizado

```
Node==20.9
Astro==3.5.6
Tailwind==5.0.2
Typescript==5.2.2
```


## Deploy con docker compose

```
$ docker compose up -d
```

## Resultados esperados

La lista de contenedores debe mostrar un contenedor en ejecución y la asignación de puertos como se muestra a continuación:
```
$ docker ps
CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS          PORTS                    NAMES
2d29bea7a88e   node02-frontend   "docker-entrypoint.s…"   4 minutes ago    Up 4 minutes    0.0.0.0:4321->4321/tcp   astro_initial
```

Después de que se inicie la aplicación, vaya a `http://localhost:4321` en su navegador web.

