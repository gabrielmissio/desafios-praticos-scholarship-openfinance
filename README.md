# desafios-praticos-scholarship-openfinance

## 🚀 Atividade Prática - Utilizando o Módulo Fetch no Node.js

💡 **Objetivo:**  
Expandir a API criada anteriormente adicionando um novo endpoint que consulta a API do CoinGecko e fornece uma **sugestão de compra de Bitcoin** com base no preço atual.

⚠ **OBS:** Deve ser utilizado **Node.js 18 ou superior** para utilizar o módulo `fetch` nativo.
---

## **📌 Novo Endpoint: `GET /stock-insight`**  

O endpoint deve:  
1. **Fazer uma requisição HTTP** à API pública do CoinGecko para buscar o preço do **Bitcoin (BTC)** em **BRL** e **USD**.  
2. **Receber opcionalmente o parâmetro de query `currency=usd` ou `currency=brl`** (padrão é `usd`).  
3. **Comparar o preço somente com a moeda fornecida**, conforme a lógica de sugestão de compra.  
4. **Retornar um JSON** contendo o preço (na moeda especificada) e uma **sugestão de compra**.  

---

## **🔧 Lógica de Sugestão de Compra**

Se o usuário escolher **`currency=brl`**:  
- **< R$300.000**: `Bom momento para compra!`  
- **Entre R$450.000 e R$300.000**: `Preço razoável. Avalie antes de comprar.`  
- **> R$450.000**: `Bitcoin está caro. Pode ser melhor esperar.`  

Se o usuário escolher **`currency=usd`** (padrão):  
- **< $60.000**: `Bom momento para compra!`  
- **Entre $60.000 e $80.000**: `Preço razoável. Avalie antes de comprar.`  
- **> $80.000**: `Bitcoin está caro. Pode ser melhor esperar.`  

💡 **Exemplo de Retorno Esperado (para currency=usd):**  
```json
{
  "btc_price": 39500.75,
  "currency": "usd",
  "suggestion": "Bom momento para compra!"
}
```

### 🚀 Instruções para Implementação
1. Criar um novo arquivo server.js (ou atualizar o existente).
2. Adicionar um novo endpoint GET /stock-insight que faz uma requisição HTTP para CoinGecko.
3. Utilizar o fetch (nativo no Node.js 18+) para obter os preços do Bitcoin.
4. Implementar a lógica de sugestão de compra com base nos preços retornados.
5. Tratar erros adequadamente, caso a API do CoinGecko esteja indisponível.

###  🌐 Documentação CoinGecko
* Documentação da API:
[CoinGecko Simple Price - v3.0.1](https://docs.coingecko.com/v3.0.1/reference/simple-price)

* Exemplo de endpoint CoinGecko (BTC vs USD):

```bash
curl --request GET \
     --url 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd' \
     --header 'accept: application/json'
```

* Exemplo de endpoint CoinGecko (BTC vs BRL):

```bash
curl --request GET \
     --url 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl' \
     --header 'accept: application/json'
```

* Exemplo de endpoint CoinGecko (BTC vs USD + BRL):

```bash
curl --request GET \
     --url 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl%2Cusd' \
     --header 'accept: application/json'
```
