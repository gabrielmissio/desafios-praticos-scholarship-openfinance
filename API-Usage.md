# 📌 Guia de Uso da API  

Este documento fornece exemplos de como interagir com a API usando `cURL`. A API possui múltiplos endpoints para lidar com requisições básicas.  

## 🚀 Como iniciar a API  

Antes de testar os endpoints, **certifique-se de que o servidor está rodando**. Execute o seguinte comando no terminal:  

```bash
node server.js
```

## 🚀 Endpoints Disponíveis

### 1️⃣ `GET /hello`  
Retorna uma mensagem de saudação com o nome fornecido.

#### 🔹 **Request:**  
```bash
curl --location 'http://localhost:3000/hello?name=Nakamoto'
```

#### 🔹 **Response:**
```json
 "message": "Hello Nakamoto"
```

📌 Notas:

* O parâmetro name é opcional. Se não for informado, a resposta será "Hello stranger".

### 2️⃣ `POST /goodbye`  
Retorna uma mensagem de despedida com base no nome fornecido.

#### 🔹 **Request:**  
```bash
curl --location 'http://localhost:3000/goodbye' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Nakamoto"
}'
```

#### 🔹 **Response:**
```json
"message": "Goodbye nakamoto"
```

📌 Notas:

* O parâmetro name é opcional. Se não for informado, a resposta será "Goodbye stranger".


### 3️⃣ `ANY /does-not-exist`  
Lida com requisições para rotas inexistentes, retornando uma mensagem de erro.

#### 🔹 **Request:**  
```bash
curl --location 'http://localhost:3000/any/route/does/not/exists'
```

#### 🔹 **Response:**
```json
 "error": "Route not found"
```