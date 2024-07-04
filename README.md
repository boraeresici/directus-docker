# directus-docker
Docker Container [Directus:latest + PostgreSQL:latest + Redis:latest + Sevelvekit]

Allows you to manage the application family in a docker container. 

1- docker application (win/macos/linux) or extension (vscode) must be installed.

2- replace db with postgis if you need geopoints or add the postgis extension to postgres.

3- automatic snapshot will be added later.

4- The ".env" file is given as base and should be edited according to the needs.

5- sveltekit (https://kit.svelte.dev/) must be installed in the prje folder. 

npm create svelte@latest my-app
cd my-app
npm install

5.1- A "build" folder must be created in the folder where sveltekit is installed (in the example /app).

(This file is docker's script for sveltekit and should be located in the (example:app/) folder where sveltekit is installed. the file name should be just "dockerfile".)

** I recommend using ".env" file for in-app access passwords and keys.

docker image creation: 
docker build -t <imagename:tag> -f Dockerfile .

docker compose:
docker run -d -p ExternalPort:InternalPort <imagename:tag>

or install vscode docker extension and right click on "docker-compose.yml" file and say up /down /restart.
