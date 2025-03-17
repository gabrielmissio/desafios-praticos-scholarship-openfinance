# desafios-praticos-scholarship-openfinance

## 🚀 Atividade Prática - Criando uma API com o Módulo HTTP no Node.js

### 📌 Descrição  
Neste desafio, você deve **criar uma API simples usando apenas o módulo `http`** do Node.js, sem utilizar frameworks como Express.  

A API deve conter **três endpoints**:  

1. `GET /health-check`  
2. `GET /is-prime-number`  
3. `POST /count`
   
📌 **Para facilitar a implementação, consulte o arquivo [`server.js`](./server.js)**, que contém uma **estrutura básica de API**, incluindo exemplos de:  
✔ Como extrair informações dos **queryParams**  
✔ Como fazer o **parse do body** de uma requisição `POST`  
✔ Como retornar respostas no formato **JSON** corretamente  

📌 **Além disso, veja o arquivo [`API-Usage.md`](./API-Usage.md)**, que explica:  
✔ Como **subir a API**  
✔ Exemplos de chamadas usando **cURL** 

---

## 🔧 **Requisitos da API**  

### **1️⃣ Endpoint: `GET /health-check`**  
✔ Retorna um **status code `200`** e um JSON no formato:  
```json
{
  "success": true,
  "timestamp": "2025-03-13T10:00:00.000Z"
}
```

📌 Observações:
 - O campo timestamp deve conter a data atual no formato ISO string (new Date().toISOString()).

### **2️⃣ Endpoint: GET /is-prime-number/:number**
✔ Recebe um número na URL e verifica se ele é primo.


📌 **Observação:**  
- O ideal seria utilizar **path parameters** (`GET /is-prime-number/42`), mas, para facilitar a implementação, estamos utilizando **query parameters** (`GET /is-prime-number?number=42`).  
- Quem quiser se desafiar, pode modificar a implementação para usar **path parameters** e tratar ambos os formatos! 🚀  

📌 Regras:

* Se o input for inválido (não numérico ou menor que 1), retorna status 400 com { error: "Invalid input" }.
* Se o número for primo, retorna:
```json
{
  "isPrime": true
}
```
* Se o número não for primo, retorna:

```json
{
  "isPrime": false
}
```

📌 Exemplos de chamadas e respostas:

* Requisição: GET /is-prime-number?number=7
  *  Resposta: { "isPrime": true } (status 200)
* Requisição: GET /is-prime-number?number=42
  * Resposta: { "isPrime": false } (status 200)
* Requisição: GET /is-prime-number?number=abc
  * Resposta: { "error": "Invalid input" } (status 400)
* Requisição: GET /is-prime-number
  * Resposta: { "error": "Invalid input" } (status 400)

### **3️⃣ Endpoint: POST /count**
✔ Mantém um contador no servidor e permite incrementá-lo via requisições.

📌 Regras:

* O cliente deve enviar um JSON no corpo da requisição com o seguinte formato:
```json
{ "incrementBy": 3 }
```
* Se o incrementBy for válido (número inteiro positivo), o contador deve ser incrementado e a API retorna:
```json
{ "counter": 3 }
```
* Se o input for inválido, retorna status 400 com { "error": "Invalid input" }.
📌 Exemplos de chamadas e respostas:

* Requisição:
```http
POST /count
Content-Type: application/json

{ "incrementBy": 5 }
```
  * Resposta: { "counter": 5 }

* Requisição com input inválido:

```http
POST /count
Content-Type: application/json

{ "incrementBy": "abc" }
```
  * Resposta: { "error": "Invalid input" } (status 400)

💡 Se precisar de ajuda, revise a documentação oficial: Node.js HTTP Module.
Boa programação! 🚀😃
