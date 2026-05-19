# Projeto Módulo 3 – Low Code/No Code/Vibecode

## 📌 Desafio Escolhido

Controle de Vendas.

---

## 🖥️ Protótipo

- **Site:** https://controle-vendas-gold.vercel.app/

- **Breve explicação de funcionamento:** Esta plataforma foi pensada para uma loja física onde o controle das vendas são realizadas manualmente com anotações em blocos de papel. Cada venda anotada é repassada para a plataforma identificando devidamente o vendedor e o valor da venda. É possível acompanhar as estatísticas financeiras em vários níveis.

- **Documentação original:** https://github.com/Lettify/controle_vendas

---

## ⚙️ Plataforma Utilizada

- **Nome da plataforma:** ManusAI, VSCode - GitHub Copilot (LLM: GPT Codex)

- **Justificativa da escolha:** Comecei utilizando ManusAI para implementação de toda a estrutura robusta do site pois esta plataforma age como um agente de planejamento completo, e posteriormente utilizei o GitHub Copilot integrado ao VSCode para continuar a construção do projeto a partir da estrutura levantada pelo Manus.

---

## ✅ Vantagens Identificadas

Liste pelo menos **3 vantagens** percebidas no uso da abordagem low code/no code/vibecode:

1. Protótipo rápido

2. Automação de processos

3. Análises práticas de códigos e erros

---

## ⚠️ Limitações Encontradas

Liste pelo menos **3 limitações** percebidas:

1. Dependência da plataforma (ManusAI).

2. Alucinação de memória do LLM na sessão.

3. Perda de tempo na correção de erro mal interpretado pelo LLM.

4. Segurança digital.

---

## 📚 Reflexão Crítica

O ManusAI foi fundamental para tornar o projeto robusto, complexo e cheio de recursos. Porém foi com o decorrer disso que foi notado problemas devido à alguma possível limitação de plano da plataforma de IA, pois ela estava errando em vários momentos em problemas de servidor e cliente. Quando dada as informações do erro e o prompt para guiar para a resolução, o ManusAI parecia corrigir o problema quando na verdade só o deixou maior, causando uma perda de memória na sessão.

Foi quando decidi migrar todo o projeto para um ambiente mais "aberto" e controlado, baixei todos os arquivos gerados pelo Manus, criei e aloquei os arquivos localmente e fui o desenvolvendo no VS Code usando GitHub Copilot com a LLM *GPT Codex*. O principal problema nessa migração eram os recursos que dependiam do servidor do Manus, referente à autenticação, base de dados integrada, entre outros. GPT resolveu este problema depois de um bom tempo de trabalho através de vários prompts-guia o ensinando sobre a plataforma Manus.

Após a migração para sair do domínio do ManusAI, tive maior liberdade de customização da plataforma sem ter nenhum limite baixo por plano de assinatura digital. Consegui aprimorar o site em todos os aspectos para torná-lo funcional e prático seguindo minha visão de praticidade para a minha rotina de trabalho. Neste percurso percebi um problema ao seguir minha visão de praticidade, a autenticação da plataforma precisava ser simples exageradamente e totalmente eficaz, mas parecia ser algo bem complicado para uma LLM que nunca viu tal contexto, contudo ela produziu algo próximo ao que precisava.

Aquela autenticação de e-mail e senha seria um pouco menos prático do que eu precisava para o estilo de trabalho que a gestão do caixa adota. Decidi impor um código único e possivelmente memorável para que a gestão pudesse se autenticar com maior facilidade no site, isso funcionou por um tempo até perceber as brechas que isso deixou. Fui varrendo tudo com a IA, analisando terminais cliente e servidor, além da UX.

A autenticação por código único funciona até certo momento, ele foi implementado para que assim que o código for utilizado pela primeira vez o sistema salvasse informações úteis da máquina do usuário e impedisse a utilização do mesmo código em outros locais (inclusive navegadores), além de um sistema de rate limitin para casos diversos, como bruteforce, entre outros. A ideia de limitar desta forma é meio chula pois não é possível trabalhar com esse tipo de identificação com total confiança, ela pode ser manipulada. Mas isso é um problema para ser resolvido na versão 2.0, né?!

---

## 👥 Colaboração

Apenas eu, ManusAI, e GitHub Copilot.

---

## 📝 Registro da Aula

Data: **11/05/2026**  

Atividade: Discussão crítica + mini-projeto de aplicação  

Local: Laboratório de informática / Quadro branco  

Professor(a): Kadidja Valéria  

---

## 🚀 Próximos Passos

- Melhorias sugeridas para o protótipo.
  > Melhorar segurança na autenticação

- Possíveis evoluções para o Projeto Final da Unidade 3.
  > Trabalhar com multiplataformas.
  > Exportação de relatórios estatísticos.
  > Melhorar gráficos com mais outras bibliotecas para visualização mais interativa
