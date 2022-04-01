# CRUD em NextJS e MongoDB

Sistema de CRUD para cadastro de clientes.

# Sobre o projeto

Neste projeto aprendi:

Realizar conexão com o MongoDB Atlas
Ler/Cadastrar/Atualizar/Deletear um cliente no banco de dados (MongoDB)
Utilizar Bibliotecas de interface declarativa (ChakraUI)
NextJS e Serverless Routes

# Foi utilizado 👇

- NextJS (API Routes) 🔥
- Serverless 🔥
- Interface Declarativa (Chakra UI) 📸
- MongoDB & Mongoose 💚

# View
![crud](https://user-images.githubusercontent.com/53384144/161301099-727e35fe-0569-4c31-ad3b-299f035d5403.gif)



# Etapas para intalação:

- 1: Clonar repositório
- 2: Instalar Dependencias:
      > yarn install ou npm install
- 3: Criar um cluster no MongoDB Atlas
- 4: Criar arquivo '.env.local' na raiz do projeto e adicionar variavel:
      NEXT_PUBLIC_MONGO_URI={{uri gerada pelo cluster no mongo atlas}}
- 5: Rodar App:
      > yarn dev
