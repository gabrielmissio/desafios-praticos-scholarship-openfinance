# Desafios Praticos Scholarship OpenFinance

## **Desafios de Programação em JavaScript**  
💡 **Os desafios podem ser resolvidos tanto no Node.js quanto no navegador.**
🚫 **Não utilize nenhuma biblioteca externa.**

## **1️⃣ Somar Todos os Elementos de um Array Unidimensional**
📌 **Descrição:**  
Escreva uma função que recebe um array de números e retorna a soma de todos os seus elementos.  

📌 **Instruções:**  
- Retorne a soma total dos elementos do array.
- Uma mensagem de erro deve ser retornada quando um valor invalido for enviado.

💡 **Exemplo de Entrada e Saída:** 
```javascript
input: [1, 2, 3, 4, 5]
output: 15

input: [-1, 10, 20]
output: 29

input: [45, 5, "xpto"]
output: "valor invalido detectado"
```


## **2️⃣ Verificar se um Número é Primo**
📌 **Descrição:**  
Crie uma função que verifica se um número é primo.  

📌 **Instruções:**  
- Um número primo é aquele que só pode ser dividido por 1 e por ele mesmo.
- Retorne true se for primo e false caso contrário.
- Uma mensagem de erro deve ser retornada quando um valor invalido for enviado.

💡 **Exemplo de Entrada e Saída:** 
```javascript
input: 7
output: true

input: 10
output: false

input: "xpto"
output: "valor invalido detectado"
```

## **3️⃣ Verificar se uma String é um Palíndromo**
📌 **Descrição:**  
Uma palavra ou frase é considerada um palíndromo quando pode ser lida da mesma forma de trás para frente, ignorando espaços e acentos

📌 **Instruções:**  
- Remova espaços e transforme tudo para letras minúsculas antes da verificação.
- Retorne true se for palíndromo e false caso contrário.

💡 **Exemplo de Entrada e Saída:** 
```javascript
input: "arara"
output: true

input: "A base do teto desaba"
output: true

input: "xpto"
output: false
```

## **4️⃣ Codificar o Jogo "Pedra, Papel, Tesoura"**
📌 **Descrição:**  
Implemente um jogo simples de "Pedra, Papel, Tesoura" onde o usuário joga contra o computador.

📌 **Instruções:**  
- O usuário escolhe "pedra", "papel" ou "tesoura".
- O computador escolhe aleatoriamente uma dessas opções.
- O jogo segue as regras clássicas: 
  - Pedra ganha de Tesoura
  - Tesoura ganha de Papel
  - Papel ganha de Pedra

💡 **Exemplo de Entrada e Saída:** 
```javascript
input: "pedra"
*cpu escolheu tesoura*
output: Você ganhou!

input: "papel"
*cpu escolheu papel*
output: Empate!

input: "tesoura"
*cpu escolheu pedra*
output: Você perdeu!
```

## **5️⃣ (Desafio Bônus) Desenvolver o Jogo da Cobrinha (Snake Game)**
📌 **Descrição:**  
Implemente uma versão simples do jogo da cobrinha em JavaScript puro, **sem bibliotecas externas**.

📌 **Instruções:**  
- A cobrinha deve se mover automaticamente na direção escolhida pelo jogador (setInterval).
- O jogador pode controlar a direção com as teclas W, A, S, D ou as setas do teclado.
- A cobrinha cresce ao comer a comida.
- O jogo termina se a cobrinha bater nas paredes ou em si mesma.

💡 Dicas:
- Use um array para representar o corpo da cobra.
- Use os metodos `unshift()` e `pop()` para movimentar a cobrinha.
- Atualize a posição da cobra a cada intervalo de tempo.
