# 📱 QRVibe: Professional QR Generation & Real-Time Customization

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)


## 📝 Descrição do Projeto
O **QRVibe** é uma ferramenta de alta performance para geração e personalização de códigos QR, projetada com uma estética **Elegant Dark** e efeitos de **Glassmorphism**. O sistema permite que empresas e desenvolvedores criem pontos de contato físicos modernos, oferecendo controle total sobre a paleta cromática e garantindo exportações em alta definição (HD) prontas para impressão ou uso digital.

Com um motor de renderização em tempo real, o QRVibe elimina o delay entre a entrada de dados e a visualização, enquanto utiliza o **Firebase Remote Config** para gerenciar o branding da interface dinamicamente e o **Firebase Analytics** para monitorar o engajamento e as métricas de conversão de cada código gerado.

---
![Dashboard QRVibe](./qrvibe/qrvibe1)
*Figura 1: Interface principal do sistema apresentando o painel de configuração e o preview com animação de scanner.*

## 🚀 Tecnologias Utilizadas
* **Frontend:** React 19 + TypeScript + Vite
* **Estilização:** Tailwind CSS (Engine v4 com JIT)
* **Backend & Cloud:** Firebase (Remote Config & Google Analytics)
* **Motor de QR:** qrcode.react (Renderização via HTML5 Canvas)
* **Ícones & UI:** Lucide React + Glassmorphism UI Pattern
* **Animações:** CSS Keyframes customizados (Scanning Line & Pulse Glow)

## 📊 Resultados e Funcionalidades
A plataforma foi otimizada para oferecer uma experiência fluida e orientada a dados:
* **Real-Time Preview:** Sincronização instantânea entre o State do React e o componente de Canvas do QR Code.
* **Branding Dinâmico:** Integração com Firebase Remote Config, permitindo alterar o título da Hero e elementos de UI sem novos deployments.
* **Exportação HD:** Algoritmo de captura de canvas que garante downloads em PNG de alta fidelidade e correção de erro nível "H".
* **Monitoramento de Eventos:** Telemetria via Analytics para rastrear downloads, compartilhamentos e o conteúdo mais frequente nos códigos.
* **Design Sistêmico:** Implementação de uma arquitetura de temas baseada em variáveis CSS para fácil manutenção da estética "Elegant Dark".

![Visualização de Customização](./qrvibe2)
*Figura 2: Detalhes do sistema de seleção de cores e integração com o motor de renderização.*

## 🔧 Como Executar
1. Clone o repositório.
2. Certifique-se de ter as credenciais do Firebase configuradas em `firebase-applet-config.json`.
3. Instale as dependências do projeto: `npm install`.
4. Inicie o servidor de desenvolvimento: `npm run dev`.

---
[Voltar ao início](https://github.com/GiovanneRenato/portfolio-giovanne-renato-da-silva-vieira)
