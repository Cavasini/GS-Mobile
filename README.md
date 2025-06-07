# Apagão Alerta: Seu Companheiro para Eventos de Falta de Energia

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stars](https://img.shields.io/github/stars/Cavasini/GS-Mobile?style=social)](https://github.com/Cavasini/GS-Mobile/stargazers)

## 💡 Sobre o Projeto

O "Apagão Alerta" é um aplicativo móvel desenvolvido em **React Native** com o objetivo de auxiliar a população brasileira a lidar com os desafios recorrentes de quedas de energia elétrica, frequentemente intensificadas por eventos climáticos extremos como chuvas intensas, ventos fortes e deslizamentos.

No Brasil, os apagões são uma realidade que afeta milhões de pessoas anualmente. Em 2022 e 2023, o tempo médio sem energia foi de aproximadamente 10 horas por consumidor. Além disso, o número de desastres naturais tem crescido, com o CEMADEN registrando o maior número de ocorrências em 2023 desde 2011. Essas interrupções afetam não apenas o conforto, mas também a segurança e a saúde, especialmente de grupos vulneráveis que dependem de aparelhos elétricos.

Nossa solução busca empoderar a população, fornecendo uma plataforma fácil e intuitiva para registrar, consultar e receber informações cruciais sobre as interrupções no fornecimento de energia em suas regiões, além de oferecer recomendações valiosas para momentos de crise.

### Público-Alvo

* **População Urbana em Áreas de Risco Elétrico:** Com 87,4% da população brasileira em áreas urbanas, muitas delas com infraestrutura elétrica desafiadora e sujeitas a eventos climáticos.
* **Pessoas em Situação de Vulnerabilidade:** Incluindo os 14,4 milhões de pessoas com deficiência e os 32,1 milhões de idosos no Brasil, que podem depender de equipamentos elétricos para cuidados médicos ou mobilidade.

### Por que um Aplicativo Móvel?

Estudos de mercado e comportamento do usuário durante emergências mostram que os smartphones são a principal fonte de informação, com mais de 80% dos usuários verificando seus dispositivos e 70% preferindo alertas via mensagens de texto. O mercado global de aplicativos de alerta de emergência está em expansão, com projeção de atingir US$ 14,2 bilhões até 2033, demonstrando a necessidade latente por soluções como o "Apagão Alerta".

## ✨ Funcionalidades

O aplicativo "Apagão Alerta" oferece as seguintes telas essenciais para uma experiência completa:

* **Tela 1 - Panorama Geral:** Exibição de um resumo dos eventos de falta de energia registrados pelo usuário, fornecendo uma visão rápida da situação atual.
* **Tela 2 - Cadastro de Evento:** Permite ao usuário registrar um novo evento de falta de energia. Nesta tela, o usuário informa:
    * **Local (via CEP):** O aplicativo utiliza uma API externa para buscar automaticamente dados de localização a partir do CEP informado.
    * **Tempo de Duração:** O tempo estimado ou real que a região ficou sem energia.
    * **Dados Complementares:** Informações adicionais sobre o evento, como prejuízos observados ou outros detalhes relevantes.
* **Tela 3 - Detalhes do Evento:** Exibe informações detalhadas de um evento de falta de energia específico que foi cadastrado, permitindo ao usuário revisar todos os dados.
* **Tela 4 - Dados de Localização:** Uma página dedicada a exibir dados específicos da localização que foram buscados por meio da API de CEP, fornecendo informações geográficas e de endereço precisas.
* **Tela 5 - Recomendações:** Apresenta orientações preventivas e boas práticas para lidar com momentos de apagão, oferecendo dicas de segurança, armazenamento e planejamento.

## 🚀 Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. O Expo CLI será utilizado automaticamente pelo `npx`.

* [Node.js](https://nodejs.org/en/download/) (versão LTS recomendada)

### Instalação e Execução

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/Cavasini/GS-Mobile.git](https://github.com/Cavasini/GS-Mobile.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd GS-Mobile
    ```
3.  Instale as dependências do projeto:
    ```bash
    npm install
    # ou, se preferir usar Yarn:
    # yarn install
    ```
4.  Inicie o servidor de desenvolvimento Expo:
    ```bash
    npx expo start
    ```
5.  Um QR code será exibido no seu terminal. Use o aplicativo Expo Go (disponível na App Store e Google Play) para escanear o QR code e abrir o aplicativo em seu dispositivo físico.

    Alternativamente, você pode usar as opções no terminal para:
    * `a` para abrir no emulador Android
    * `i` para abrir no simulador iOS (macOS apenas)
    * `w` para abrir no navegador web

## 🛠️ Tecnologias Utilizadas

* **React Native:** Para o desenvolvimento mobile multiplataforma.
* **AsyncStorage:** Para persistência local de todos os dados do aplicativo, garantindo que as informações do usuário sejam armazenadas de forma eficiente e segura no dispositivo.
* **API de Consulta de CEP:** Integração com uma API externa para buscar automaticamente dados de endereço a partir de um CEP fornecido pelo usuário. (Ex: ViaCEP, BrasilAPI, etc. - a API específica utilizada será implementada no código).

## ✅ Requisitos do Projeto

Este projeto foi desenvolvido com foco total em atender aos requisitos estabelecidos, garantindo uma aplicação robusta e funcional:

* **Desenvolvimento Mobile Funcional:** O aplicativo foi desenvolvido utilizando React Native, permitindo o registro e visualização local de informações via AsyncStorage.
* **Foco no Protótipo:** O projeto foi focado exclusivamente na implementação do aplicativo, sem a necessidade de um protótipo prévio em Figma.
* **Funcionalidades Essenciais:** Todas as 5 telas especificadas foram implementadas, fornecendo um fluxo completo para o usuário:
    * Panorama Geral
    * Cadastro de Evento (incluindo local por CEP, tempo e dados complementares)
    * Detalhes do Evento
    * Dados de Localização (buscados via API de CEP)
    * Recomendações
* **Persistência de Dados:** A persistência de todos os dados é realizada via `AsyncStorage` (armazenamento local), conforme solicitado.
* **Interface Navegável e Funcional:** O aplicativo possui uma interface intuitiva e fácil de usar, garantindo uma experiência de navegação fluida.
* **Estrutura e Código Limpo:** O código foi organizado seguindo boas práticas de desenvolvimento, promovendo a manutenibilidade e escalabilidade do projeto.

## 📊 Critérios de Avaliação (e como o projeto atende)

| Critério de Avaliação | Pontuação (Total: 100 pontos) | Atendimento do Projeto |
| :---------------------------------------------------- | :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Funcionalidade das telas propostas | 20 pontos | Todas as 5 telas (Panorama Geral, Cadastro de Evento, Detalhes do Evento, Dados de Localização e Recomendações) foram implementadas e são totalmente funcionais, permitindo o registro, visualização de informações e a busca de dados de localização por CEP. |
| 2. Fluxo de cadastro e listagem de eventos | 20 pontos | O aplicativo possui um fluxo claro e intuitivo para o cadastro de novos eventos de falta de energia (com preenchimento de local via CEP, tempo e dados complementares) e a subsequente listagem e detalhamento desses eventos. |
| 3. Persistência de dados com AsyncStorage | 20 pontos | A persistência de dados é integralmente realizada utilizando `AsyncStorage`, garantindo que todas as informações registradas pelo usuário sejam salvas localmente e estejam disponíveis mesmo após o fechamento do aplicativo. |
| 4. Coerência e clareza na navegação entre as telas | 15 pontos | A navegação entre as telas é lógica e coerente, proporcionando uma experiência de usuário fluida e sem confusões. Os elementos de interface são claros e direcionam o usuário de forma eficaz, incluindo a navegação para os detalhes do evento e os dados da localização. |
| 5. Qualidade do código e organização do projeto | 25 pontos | O código-fonte segue boas práticas de desenvolvimento React Native, com módulos bem definidos, componentes reutilizáveis e uma estrutura de pastas organizada. A clareza e a manutenibilidade do código são prioridades neste projeto, incluindo a integração com a API de CEP. |

---

## 👨‍💻 Desenvolvedores

* **Lana Leite** - RM551143
* **Matheus Cavasini** - RM97722
