## build
```
docker build -t koa-react-app .
```
or
```
$ docker-compose build
```

## run
```
docker run -t -p 3000:3000 -i koa-react-app /bin/bash
```
or
```
$ docker-compose run --rm koa-react-app /bin/bash
```

$ docker-compose up
