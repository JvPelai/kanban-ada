navague até a pasta BACK e suba o db:

### `docker-compose up -d`

ainda na pasta BACK, subir o back-end

### `npm install && npm start`

na pasta raíz, com a versão do node correta, rodar o app

### `nvm use && npm install && npm start`

OBS: a criação de usuário ainda não foi implementada via interface, portanto é necessário criar um usuário via api para poder fazer login

rota: localhost:8080/signup
payload: `{"login": string, "senha": string}`
