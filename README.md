# directus-docker
Docker Container [Directus:latest + PostgreSQL:latest + Redis:latest + Sevelvekit]

Allows you to manage the application family in a docker container. 

1- docker application (win/macos/linux) or extension (vscode) must be installed.
2- replace db with postgis if you need geopoints or add the postgis extension to postgres.
3- automatic snapshot will be added later.

** I recommend using ".env" file for in-app access passwords and keys.

docker image creation: 
docker build -t <imagename:tag> -f Dockerfile .

docker compose:
docker run -d -p ExternalPort:InternalPort <imagename:tag>

or install vscode docker extension and right click on "docker-compose.yml" file and say up /down /restart.

Translated with DeepL.com (free version)
