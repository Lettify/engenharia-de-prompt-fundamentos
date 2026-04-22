# Prompt
> *Crie um código funcional para calcular a média das notas de um aluno*

# Resposta
Aqui está um código funcional em Python para calcular a média. Ele é robusto, aceita um número variável de notas e já faz a verificação se o aluno foi aprovado ou não.

---

### Código em Python

```python
def calcular_media_escolar():
    print("--- Calculadora de Média do Aluno ---")
    
    try:
        # Define a quantidade de notas que serão inseridas
        quantidade = int(input("Quantas notas você deseja inserir? "))
        
        if quantidade <= 0:
            print("A quantidade de notas deve ser maior que zero.")
            return

        notas = []
        
        # Coleta as notas dinamicamente
        for i in range(quantidade):
            nota = float(input(f"Digite a nota {i + 1}: "))
            notas.append(nota)
        
        # Cálculo da média aritmética
        media = sum(notas) / len(notas)
        
        # Exibição do resultado
        print("-" * 30)
        print(f"Média Final: {media:.2f}")
        
        # Lógica de aprovação
        if media >= 7.0:
            print("Status: APROVADO! 🎉")
        elif 5.0 <= media < 7.0:
            print("Status: RECUPERAÇÃO. 🧐")
        else:
            print("Status: REPROVADO. 😢")
            
    except ValueError:
        print("Erro: Por favor, insira apenas números válidos para as notas.")

# Executar a função
if __name__ == "__main__":
    calcular_media_escolar()
```

---

### Como a lógica funciona

Para calcular a média aritmética simples, utilizamos a seguinte fórmula matemática:

$$Média = \frac{\sum_{i=1}^{n} Nota_i}{n}$$

Onde:
* **$\sum Notas$**: Representa a soma de todas as notas inseridas.
* **$n$**: É o número total de notas.

### Pontos principais do código:

* **`try/except`**: Protege o programa caso o usuário digite uma letra em vez de um número, evitando que o código "quebre".
* **`sum(notas)`**: Uma função nativa do Python que soma todos os elementos de uma lista de forma eficiente.
* **`len(notas)`**: Conta quantos itens existem na lista, servindo como o nosso divisor.
* **Formatação `.2f`**: Garante que o resultado final mostre apenas duas casas decimais, facilitando a leitura (ex: 7.50 em vez de 7.5000000004).

---

### Tabela de Exemplo de Dados

| Aluno | Notas | Soma | Média | Status |
| :--- | :--- | :--- | :--- | :--- |
| Exemplo A | 8.0, 9.0, 7.0 | 24.0 | 8.0 | **Aprovado** |
| Exemplo B | 5.0, 4.0, 6.0 | 15.0 | 5.0 | **Recuperação** |
| Exemplo C | 3.0, 2.0, 4.0 | 9.0 | 3.0 | **Reprovado** |
