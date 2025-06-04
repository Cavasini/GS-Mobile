# Aplicativo de Registro de Falta de Energia

Este é um aplicativo mobile desenvolvido com React Native (Expo) e TypeScript para registrar e visualizar informações sobre episódios de falta de energia causados por eventos naturais.

## Funcionalidades

*   **Panorama Geral:** Exibe um resumo dos eventos de falta de energia registrados.
*   **Cadastro de Evento:** Permite registrar informações sobre um novo evento, incluindo:
    *   Localização Atingida (Bairro, Cidade ou CEP)
    *   Tempo de Interrupção (Estimado ou Real)
    *   Prejuízos Causados (Descrição)
*   **Detalhes do Evento:** Mostra os detalhes completos de um evento selecionado.
*   **Recomendações:** Apresenta orientações preventivas e boas práticas para lidar com faltas de energia.
*   **Persistência Local:** Todos os dados são salvos localmente no dispositivo usando AsyncStorage.

## Estrutura do Projeto

```
PowerOutageApp/
├── src/
│   ├── components/    # Componentes reutilizáveis (se houver)
│   ├── navigation/    # Configuração da navegação (AppNavigator.tsx)
│   ├── screens/       # Arquivos das telas (HomeScreen.tsx, AddEventScreen.tsx, etc.)
│   ├── storage/       # Lógica de armazenamento (eventStorage.ts)
│   └── types/         # Definições de tipos TypeScript (Event.ts)
├── App.tsx            # Ponto de entrada principal do aplicativo
├── package.json       # Dependências e scripts do projeto
├── tsconfig.json      # Configuração do TypeScript
└── todo.md            # Checklist de desenvolvimento (interno)
```

## Tecnologias Utilizadas

*   React Native
*   Expo
*   TypeScript
*   React Navigation (Stack)
*   AsyncStorage

## Como Executar o Projeto

1.  **Pré-requisitos:**
    *   Node.js (LTS recomendado)
    *   npm ou yarn
    *   Expo Go app instalado no seu dispositivo móvel (Android/iOS) ou um emulador/simulador configurado.

2.  **Instalação:**
    *   Clone ou baixe este repositório.
    *   Navegue até o diretório `PowerOutageApp` no seu terminal.
    *   Execute `npm install` (ou `yarn install`) para instalar as dependências.

3.  **Execução:**
    *   Execute `npm start` (ou `yarn start` ou `npx expo start`).
    *   Isso iniciará o Metro Bundler e exibirá um QR code no terminal.
    *   Abra o aplicativo Expo Go no seu dispositivo e escaneie o QR code.
    *   Alternativamente, você pode executar em um emulador/simulador pressionando `a` (Android) ou `i` (iOS) no terminal onde o Metro Bundler está rodando.

## Observações

*   Este projeto foca na funcionalidade principal de registro e visualização local.
*   A persistência é feita exclusivamente via AsyncStorage, o que significa que os dados ficam armazenados apenas no dispositivo do usuário.
*   O design é básico e funcional, priorizando a clareza e usabilidade.

