# Gender Choose App

Este projeto é um trabalho da faculdade desenvolvido em React Native utilizando Expo. O objetivo do aplicativo é fornecer um sistema para auto declaração de genero.

## Tecnologias Utilizadas

- TypeScript
- JavaScript
- React Native
- Expo
- React Navigation
- React Native Vector Icons

## Funcionalidades

- Login
- Declaração de genero
- Interface amigável e intuitiva
- Navegação utilizando Drawer Navigator

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

## Como baixar e rodar a aplicação

### Passo 1: Clonar o repositório

```bash
git clone https://github.com/pedrofabriciodev/gender-choose.git
```

### Passo 2: Navegar ate o diretorio do projeto

```bash
cd GENDER-CHOOSE
```
### Passo 3: Instalar as dependencias

```bash
npm install
```
ou
```bash
yarn install
```

### Passo 4: Rodar a aplicação
Para rodar o aplicativo no emulador ou dispositivo físico, utilize o comando:
```bash
npx expo start
```
Isso abrirá a interface do Expo no seu navegador.  
Você pode escanear o QR code usando o aplicativo Expo Go no seu dispositivo móvel ou rodar o app no emulador.  
Lembre-se de ter instalado o Expo no seu [SmartPhone Android](https://play.google.com/store/apps/details?id=host.exp.exponent) ou utilize a camera no seu Iphone.

### Passo 5: Configuração Adicional
Se você estiver encontrando problemas para rodar a aplicação, certifique-se de que as seguintes dependências estão corretamente instaladas:

```bash
npm install @react-navigation/native @react-navigation/stack expo expo-linear-gradient expo-sqlite expo-status-bar react react-native react-native-vector-icons
npm install --save-dev @babel/core @types/react babel-plugin-module-resolver typescript
```
ou
```bash
yarn add @react-navigation/native @react-navigation/stack expo expo-linear-gradient expo-sqlite expo-status-bar react react-native react-native-vector-icons
yarn add --dev @babel/core @types/react babel-plugin-module-resolver typescript
```

### ESTRUTURA DO PROJETO
  
├── src                 # Novo diretório para código fonte.  
│   ├── assets          # Arquivos de imagem, ícones, etc.  
│   ├── colors          # Arquivo com paleta de cores.  
│   ├── components      # Componentes reutilizáveis do React Native.  
│   ├── database        # Confirações do banco de dados sqlite.  
│   ├── routes          # Configuração de navegação.  
│   ├── screens         # Telas do aplicativo.  
│   ├── app.json        # Configurações do Expo (verifique se precisa estar dentro de src).  
│   ├── App.js          # Componente principal da aplicação.  
├── package.json        # Dependências e scripts do npm.  
└── README.md           # Documentação do projeto.  


### Contato
Se você tiver algum problema ou sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Desenvolvido por Pedro Fabricio
