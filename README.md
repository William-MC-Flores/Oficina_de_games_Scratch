# 🎮 Oficina de Games Scratch

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/William-MC-Flores/Oficina_de_games_Scratch?style=social)

**Uma plataforma educativa interativa para aprender programação criando jogos de pesca em Scratch!** 

Este projeto oferece uma experiência completa de aprendizado com design inspirado no Scratch, blocos interativos arrastáveis e uma progressão pedagógica estruturada do básico ao avançado.

![Scratch-inspired Design](https://img.shields.io/badge/Design-Scratch_Inspired-9966CC?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_Ready-4DA6FF?style=flat-square)
![Interactive](https://img.shields.io/badge/Interactive-Drag_%26_Drop-FFCC00?style=flat-square)

### 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| 📄 **Total de Linhas de Código** | ~3.200+ linhas |
| 🎨 **CSS (style.css)** | 2.202 linhas |
| 🎮 **Scratch Engine (scratch-canvas.js)** | 602 linhas |
| 🖼️ **Layout Canvas (layout-canvas.js)** | 327 linhas |
| 📱 **Breakpoints Responsivos** | 5 tiers (desktop → tiny mobile) |
| 🎯 **Páginas HTML** | 8 páginas completas |
| 🧩 **Blocos Interativos** | Sistema de 3 camadas (DOM/Layout/Scratch) |
| 🎓 **Níveis de Curso** | 3 (Iniciante, Intermediário, Avançado) |
| 🔧 **Desafios Técnicos Resolvidos** | 10+ problemas complexos |

---

## 🚀 Quick Start

```bash
# Clone o repositório
git clone https://github.com/William-MC-Flores/Oficina_de_games_Scratch.git

# Entre na pasta
cd Oficina_de_games_Scratch

# Abra index.html no navegador ou use Live Server
```

**🎯 Destaques:**
- 🖱️ **Arraste** qualquer palavra dos títulos na página inicial
- 🏴 **Clique na bandeira verde** no Mini Scratch para ver execução
- 📱 **Teste em mobile** - totalmente responsivo e touch-friendly
- 🎨 **3 camadas de blocos** - DOM, Layout Canvas e Scratch Engine

---

## 📑 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Conceitos Aprendidos](#conceitos-aprendidos)
- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura Técnica](#arquitetura-técnica)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Desafios e Soluções](#desafios-e-soluções)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

Este projeto é um hub educativo focado em ensinar desenvolvimento de games usando Scratch. A ideia é oferecer um caminho claro, prático e gratuito para qualquer pessoa aprender a programar criando jogos — desde os conceitos básicos até técnicas avançadas — com exemplos, exercícios e projetos aplicados.

### Contexto e Motivação
Muitas pessoas têm interesse em aprender a programar, mas encontram barreiras como cursos caros, conteúdo fragmentado ou linguagem técnica excessiva. Scratch é uma plataforma ideal para educação porque usa blocos visuais e incentiva a aprendizagem ativa por meio de projetos. O projeto nasceu para democratizar o acesso a esse conhecimento, criando uma trilha pedagógica voltada para a construção de games — uma forma motivadora e prática de ensinar lógica, criatividade e resolução de problemas.

### Quais problemas ele resolve
- Acesso limitado: elimina a necessidade de pagar por material básico, oferecendo conteúdos e projetos gratuitos.
- Falta de estrutura: organiza o aprendizado em níveis (iniciante → intermediário → avançado) com objetivos claros e projetos práticos.
- Conteúdo não prático: prioriza "aprender fazendo" com exercícios e mini-projetos que reforçam conceitos.
- Barreiras de idioma e contexto: fornece materiais em português e exemplos locais, tornando o aprendizado mais acessível.

### O que torna seu projeto único ou interessante
- Foco em games: todas as aulas e projetos têm aplicação direta em criação de jogos, o que aumenta o engajamento e permite construir um portfólio.
- Progressão clara por níveis: cada nível tem metas, recursos e projetos próprios que evoluem em complexidade.
- Gratuito e aberto: o projeto é pensado para ser acessível a todos, com materiais reutilizáveis e exemplos que educadores podem adaptar.
- Comunidade e prática: incentiva compartilhamento de projetos e aprendizado colaborativo (por exemplo via Discord ou repositórios), algo essencial para crescer como desenvolvedor.

### Público-alvo
- Crianças e adolescentes interessados em games e programação.
- Professores e educadores que querem inserir programação baseada em projetos nas aulas.
- Iniciantes de qualquer idade que buscam uma forma prática e visual de aprender lógica de programação.
- Hobbystas e autodidatas que desejam construir um portfólio de jogos simples a intermediários.

### Por que este projeto foi criado?

Este projeto foi desenvolvido como parte do curso **Gamelab** com o objetivo de aplicar conhecimentos práticos em desenvolvimento web front-end, criando uma aplicação completa e funcional com foco em jogos de pesca educativos.

---

## 🎓 Conceitos Aprendidos

Durante o desenvolvimento deste projeto, foram aplicados e consolidados diversos conceitos fundamentais e avançados de desenvolvimento web:

### 🎨 **Design e UX/UI**

#### **Design System Scratch**
- Implementação de paleta de cores temática (roxo `#9966CC`, amarelo `#FFCC00`, azul `#4DA6FF`, laranja `#FF8C33`)
- Criação de componentes visuais consistentes inspirados no Scratch
- Aplicação de Font Awesome para ícones de marca
- Integração de Google Fonts (Fredoka para títulos, Cascadia Code para blocos/código)

#### **Responsividade Completa**
- **Mobile-first approach** com breakpoints em 320px, 480px, 900px e 1200px
- Media queries CSS para adaptação de layouts
- Touch-friendly interactions para dispositivos móveis
- Hamburger menu funcional com animações suaves
- Fonte responsiva com `clamp()` para escalonamento automático

#### **Microinterações e Animações**
- Transições CSS com `cubic-bezier` para efeitos naturais
- Hover states com `transform` e `box-shadow`
- Animações de fade-in para elementos ao entrar no viewport (Intersection Observer)
- Feedback visual em todos os elementos interativos

### 🧩 **HTML5 Semântico**

- Estrutura de marcação semântica (`<header>`, `<section>`, `<article>`, `<footer>`)
- Acessibilidade com atributos ARIA (`aria-label`, `aria-live`)
- Formulários com validação HTML5 nativa
- Meta tags para SEO e redes sociais

### 🎨 **CSS3 Avançado**

#### **Layouts Modernos**
- **Flexbox** para alinhamento e distribuição de espaço
- **CSS Grid** para layouts complexos e responsivos
- Positioning (relative, absolute, fixed) para camadas e overlays

#### **Pseudo-elementos e Pseudo-classes**
- `::before` e `::after` para criar notch e tab dos blocos Scratch
- `:hover`, `:active`, `:focus` para estados interativos
- Shadows e bordas arredondadas para profundidade 3D

#### **Variáveis CSS**
```css
:root {
    --primary-purple: #9966CC;
    --primary-yellow: #FFCC00;
    --primary-blue: #4DA6FF;
}
```

#### **Técnicas de Estilização**
- `clip-path` para formas customizadas
- `box-shadow` múltiplos para efeitos 3D
- `border-radius` para elementos arredondados
- `backdrop-filter` para efeitos de glassmorphism

### 💻 **JavaScript Moderno (ES6+)**

#### **Canvas API**
- Renderização de blocos Scratch em HTML5 Canvas
- Manipulação de contexto 2D (`getContext('2d')`)
- DPI scaling para alta resolução
- Path drawing com `quadraticCurveTo` para curvas suaves
- `measureText()` para cálculo dinâmico de larguras

#### **Event Handling**
- **Pointer Events** (mouse + touch unificados)
- `pointerdown`, `pointermove`, `pointerup`
- `setPointerCapture()` para arrastar fora do canvas
- Event delegation para performance
- `preventDefault()` e `stopPropagation()` para controle de eventos

#### **Sistema de Coordenadas**
- Conversão viewport ↔ document coordinates
- Cálculo de scroll offset (`window.scrollX`, `window.scrollY`)
- `getBoundingClientRect()` para posicionamento preciso
- Sistema de z-index dinâmico para layering

#### **DOM Manipulation**
- Query selectors (`querySelector`, `querySelectorAll`)
- Criação dinâmica de elementos
- Manipulação de classes e estilos inline
- LocalStorage para persistência de dados

#### **Programação Orientada a Objetos**
- Módulos IIFE (Immediately Invoked Function Expressions)
- Closures para encapsulamento
- Factory pattern para criação de objetos
- Singleton pattern para canvas overlay

#### **Performance e Otimização**
- `requestAnimationFrame` para renderização suave
- Debouncing de scroll events
- Lazy loading de recursos
- Minimização de reflow/repaint

### 🎮 **Interatividade Avançada**

#### **Drag and Drop System**
- Implementação de sistema completo de arrastar e soltar
- Detecção de colisão (hit testing)
- Offset tracking para posicionamento preciso
- Visual feedback durante drag
- `Set` para tracking de blocos movidos manualmente

#### **Modo Layout Interativo**
- Canvas overlay com `position: fixed`
- Pointer-events dinâmicos (ativado apenas sobre blocos)
- Sincronização de posições DOM ↔ Canvas
- Ativação automática ao carregar página

#### **Mini Scratch Engine**
- Sistema de blocos com notch/tab para conexão
- Execução de comandos sequenciais
- Variáveis e sistema de pontuação
- Animação de sprite (gato Scratch)
- Hat block com bandeira verde

### 📐 **Matemática e Lógica**

- Cálculo de distâncias e colisões
- Interpolação para animações suaves
- Proporções e escalas responsivas
- Trigonometria básica para curvas (quadratic curves)

### 🔧 **Ferramentas e Workflow**

- **Git & GitHub** para controle de versão
- Branch `feature/scratch-visual-redesign` para desenvolvimento
- Commits semânticos descritivos
- VS Code com extensões (Live Server, Prettier)

### 🌐 **Web Standards e Best Practices**

- Separação de concerns (HTML/CSS/JS)
- Código modular e reutilizável
- Comentários descritivos em código complexo
- Nomenclatura consistente (camelCase para JS, kebab-case para CSS)
- Progressive enhancement (funciona sem JS, melhor com JS)

### 📱 **Touch e Mobile**

- Touch events (`touchstart`, `touchmove`)
- `touch-action: none` para prevenir scroll nativo
- Viewport meta tag para zoom correto
- Áreas de toque adequadas (mínimo 44x44px)

### 🎯 **Conceitos Pedagógicos Aplicados**

#### **Progressão Estruturada**
- **Nível Iniciante**: Movimentação, cenário, animação simples
- **Nível Intermediário**: Colisão, pontuação, variáveis, condicionais
- **Nível Avançado**: IA dos peixes, física, níveis, power-ups

#### **Aprender Fazendo**
- Projeto prático: Jogo de Pesca completo
- Conceitos aplicados a cada etapa
- Feedback visual constante

---

## 🎬 Demonstração

### **Páginas Disponíveis**

Navegue pelas páginas do projeto para explorar todas as funcionalidades:

- **🏠 [index.html](index.html)** - Página inicial com títulos interativos e Mini Scratch demonstrativo
- **📚 [cursos.html](cursos.html)** - Catálogo de cursos com foco em jogo de pesca
- **📖 [recursos.html](recursos.html)** - Materiais de apoio e tutoriais
- **📧 [contato.html](contato.html)** - Formulário de contato e suporte
- **🔐 [Conta/Login.html](Conta/Login.html)** - Sistema de autenticação
- **✏️ [Conta/Cadastro.html](Conta/Cadastro.html)** - Cadastro de usuários

### **Recursos Interativos**

#### **1. Títulos Draggable Scratch-Style**
Na página inicial, cada palavra dos títulos é um bloco Scratch arrastável:
- **Clique e arraste** qualquer palavra
- **Scroll da página**: blocos seguem o conteúdo (coordenadas documento)
- **Z-index dinâmico**: último bloco arrastado fica por cima
- **Touch-friendly**: funciona perfeitamente em dispositivos móveis

#### **2. Mini Scratch Engine**
Demonstração funcional de execução de blocos Scratch:
- **▶️ Clique na bandeira verde** para executar
- **⏹️ Botão stop** para interromper
- **Variáveis em tempo real**: veja `pontos` sendo modificados
- **Animação do gato**: rotação, movimento e transformações

#### **3. Responsividade Completa**
Teste em diferentes dispositivos:
- Desktop (>1200px): blocos 15px, design completo
- Tablet (900-1200px): blocos 14px, layout adaptativo
- Mobile (480-900px): blocos 13px, menu hamburger
- Pequeno (320-480px): blocos 12px, otimizado para touch

---

## ⚙️ Funcionalidades

### **🎓 Pedagógicas**

- ✅ **Trilha Progressiva de Aprendizado**
  - **Iniciante**: Interface Scratch, movimentação básica, cenário do lago, animação de peixes, sons
  - **Intermediário**: Sistema de colisão (vara + peixe), pontuação, variáveis, condicionais, múltiplos tipos de peixes
  - **Avançado**: IA dos peixes com comportamento, física da vara de pescar, sistema de níveis, power-ups, otimização de desempenho

- ✅ **Projeto Prático Unificado**: Jogo de Pesca completo em Scratch
  - Cada nível adiciona funcionalidades ao mesmo projeto
  - Progressão natural de conceitos
  - Aplicação prática imediata dos aprendizados

- ✅ **Conteúdo 100% Gratuito**: Todos os materiais básicos disponíveis sem custo

### **💻 Técnicas**

- ✅ **Blocos Scratch Interativos**
  - Sistema de 3 camadas (DOM, Layout Canvas, Scratch Engine)
  - Drag & drop com Pointer Events (mouse + touch)
  - Largura dinâmica baseada em texto (`measureText()`)
  - Notch/tab rendering perfeito em todos os contextos

- ✅ **Design Responsivo Premium**
  - 5 breakpoints com escalamento proporcional
  - Pseudo-elementos redimensionados proporcionalmente
  - Touch-action otimizado para mobile
  - Layout adaptativos (column em mobile, row em desktop)

- ✅ **Canvas API Avançado**
  - DPI-aware rendering com `devicePixelRatio`
  - Path-based drawing com `quadraticCurveTo`
  - Coordenadas documento para scroll-aware positioning
  - Sistema custom de z-index

- ✅ **Performance Otimizada**
  - Pointer-events dinâmicos (click-through quando inativo)
  - Event delegation para menos listeners
  - `requestAnimationFrame` para renderização suave
  - Caching de medições de texto

### **🎨 UX/UI**

- ✅ **Animações e Microinterações**
  - Transitions suaves com cubic-bezier
  - Hover states com transform e box-shadow
  - Feedback visual em elementos interativos
  - Fade-ins com Intersection Observer

- ✅ **Navegação Intuitiva**
  - Menu responsivo com hamburger em mobile
  - Header reutilizável em todas as páginas
  - Breadcrumbs visuais para orientação
  - Links e CTAs destacados

- ✅ **Acessibilidade**
  - Tags semânticas HTML5
  - Atributos ARIA para screen readers
  - Navegação por teclado
  - Contraste adequado de cores

### **🔐 Funcionalidades de Conta**

- ✅ **Sistema de Autenticação**
  - Formulário de login com validação client-side
  - Cadastro de usuários com verificação
  - Estilos customizados Scratch-inspired

- ✅ **Formulário de Contato**
  - Validação HTML5 nativa
  - Design responsivo
  - Preparado para integração backend

### **🔄 Roadmap Futuro**

- 🔄 **Comunidade**: Integração Discord para troca de projetos
- 🔄 **Avaliação Automatizada**: Checagem automática de exercícios
- 🔄 **Certificados**: Emissão ao completar cursos
- 🔄 **Backend**: API para persistência de progresso

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias e técnicas avançadas:

### **Core Technologies**

- **HTML5** - Estrutura semântica e Canvas API
  - Tags semânticas (`<header>`, `<section>`, `<article>`)
  - Canvas 2D Context para renderização de blocos
  - Data attributes para state management
  - Formulários com validação nativa

- **CSS3** - Estilização Scratch-inspired
  - **Layouts**: Flexbox & CSS Grid
  - **Pseudo-elementos**: `::before`/`::after` para notch/tab dos blocos
  - **Variáveis CSS**: Paleta de cores customizável
  - **Animações**: Transitions com cubic-bezier
  - **Responsive Design**: 5 breakpoints com media queries
  - **Box-shadow**: Múltiplas sombras para profundidade 3D
  - **Border-radius**: Cantos arredondados nos blocos

- **JavaScript (ES6+)** - Lógica e Interatividade
  - **Canvas API**: Path rendering, quadraticCurveTo, measureText()
  - **Pointer Events**: Mouse + touch unificados
  - **Event Handling**: setPointerCapture, preventDefault
  - **Módulos IIFE**: Encapsulamento e closures
  - **Coordinate Systems**: Viewport ↔ Document transformations
  - **Dynamic Sizing**: Cálculo de larguras baseado em texto
  - **Z-index Management**: Sistema custom de layering
  - **State Management**: Set/Map para tracking de estado

### **Técnicas Avançadas Aplicadas**

#### **Canvas Rendering**
- DPI-aware scaling com `devicePixelRatio`
- Path-based drawing para formas complexas (notch/tab)
- `requestAnimationFrame` para renderização suave
- Conversão de coordenadas para scroll-aware positioning

#### **Touch & Mobile**
- Pointer Events API (unificação mouse/touch)
- `touch-action: none` para controle total
- `preventDefault()` seletivo em touchstart
- Áreas de toque otimizadas (mínimo 44×44px)

#### **Performance Optimization**
- Pointer-events dinâmicos (`none` para click-through)
- Set para tracking O(1) de blocos movidos
- Caching de medições de texto
- Event delegation para menos listeners

#### **Responsive Strategy**
- Escalamento proporcional de todos os elementos
- Breakpoints baseados em dispositivos reais
- Font-size responsivo mantendo legibilidade
- Layout adaptativos (column em mobile)

### **Design Patterns Utilizados**

- **IIFE (Immediately Invoked Function Expression)**: Módulos `LayoutCanvas` e `ScratchEngine`
- **Singleton Pattern**: Canvas overlay único
- **Factory Pattern**: Criação de blocos Scratch
- **Observer Pattern**: Event listeners para interatividade
- **State Management**: Tracking de estado sem frameworks

### **Bibliotecas e Recursos Externos**

- [Font Awesome](https://fontawesome.com/) - Ícones de marca (GitHub, Twitter, etc.)
- [Google Fonts](https://fonts.google.com/)
  - **Fredoka**: Títulos e headings (display font)
  - **Cascadia Code**: Blocos Scratch e código (monospace)
- **Git & GitHub** - Controle de versão e hospedagem

---

## 🏗️ Arquitetura Técnica

### **Sistema de Blocos em Três Camadas**

O projeto implementa um sistema sofisticado de renderização de blocos Scratch em três contextos diferentes:

#### **1. Blocos DOM (.draggable-word)**
```html
<span class="draggable-word scratch-yellow" data-word-id="0" data-word-text="Aprenda">
  Aprenda
</span>
```

**Características:**
- Elementos HTML nativos estilizados com CSS
- Pseudo-elementos `::before` (notch) e `::after` (tab)
- Dimensões: 52px altura, 44×14px notch, 44×18px tab
- Font-size: 15px, padding: 16px 20px 16px 16px
- Escalona proporcionalmente em media queries

#### **2. Layout Canvas Overlay (layout-canvas.js)**
```javascript
const LayoutCanvas = (() => {
  let layoutCanvas, layoutCtx;
  let layoutBlocks = [];
  let dragging = null;
  let maxZIndex = 100;
  
  // Renderiza blocos interativos sobre o DOM
  function drawStackBlock(b) {
    const padX = 40, padY = 16;
    const notchW = 44, notchH = 14;
    const tabH = 18;
    
    // Largura dinâmica baseada no texto
    const textWidth = layoutCtx.measureText(b.text).width;
    b.w = Math.max(120, Math.round(textWidth + padX * 2));
    
    // Path rendering com notch/tab...
  }
})();
```

**Características:**
- Canvas fixo overlay com `z-index: 50`
- Renderização path-based com `quadraticCurveTo`
- Largura dinâmica via `measureText()`
- Coordenadas documento (viewport + scroll offset)
- Pointer Events unificados (mouse + touch)
- Z-index dinâmico para layering

#### **3. Mini Scratch Engine (scratch-canvas.js)**
```javascript
const blocks = [
  { 
    type: 'hat', 
    text: 'quando 🏴 clicada', 
    color: '#FFCC00' 
  },
  { 
    type: 'stack', 
    text: 'mova 10 passos', 
    color: '#4DA6FF' 
  }
  // ...
];
```

**Características:**
- Canvas demonstração com engine de execução
- Sistema de variáveis e pontuação
- Animação de sprite (gato Scratch)
- Stack execution com flag/stop

### **Sistema de Coordenadas**

```javascript
// Conversão Viewport → Document
function hitTest(viewportX, viewportY) {
  const docX = viewportX + window.scrollX;
  const docY = viewportY + window.scrollY;
  
  for (let i = layoutBlocks.length - 1; i >= 0; i--) {
    const b = layoutBlocks[i];
    if (docX >= b.x && docX <= b.x + b.w &&
        docY >= b.y && docY <= b.y + b.h) {
      return b;
    }
  }
  return null;
}
```

**Fluxo de Renderização:**
1. **DOM inicial**: Elementos renderizados pelo browser
2. **Layout Mode ativado**: `LayoutCanvas.enable(words)`
   - Coleta posições via `getBoundingClientRect()`
   - Converte para coordenadas documento
   - Cria array `layoutBlocks`
   - Oculta DOM words (`visibility: hidden`)
3. **Canvas draw loop**: `requestAnimationFrame`
   - Calcula `scrollX/scrollY` atual
   - Ajusta posições de blocos não-movidos
   - Renderiza todos os blocos ordenados por z-index
4. **Drag & Drop**:
   - `pointerdown`: Hit test, incrementa z-index, inicia drag
   - `pointermove`: Atualiza posição, marca como movido
   - `pointerup`: Finaliza drag, libera capture

### **State Management**

```javascript
// Estado global do modo layout
window._layoutEnabled = false;

// Blocos renderizados no canvas
let layoutBlocks = [];

// Blocos movidos manualmente (não re-sincronizam)
const manuallyMovedBlocks = new Set();

// Z-index para layering
let maxZIndex = 100;
```

### **Event Flow**

```
Usuário clica/toca em bloco
    ↓
pointerdown event
    ↓
hitTest(clientX, clientY) → encontra bloco
    ↓
Incrementa bloco.z, maxZIndex++
    ↓
Inicia drag: dragging = bloco, offset = {x, y}
    ↓
[Loop] pointermove
    ↓
Atualiza bloco.x/y com offset
    ↓
Adiciona ID a manuallyMovedBlocks
    ↓
Renderiza frame via draw()
    ↓
pointerup event
    ↓
Finaliza drag: dragging = null
```

### **Responsive Strategy**

```css
/* Desktop (>1200px) */
.draggable-word { font-size: 15px; height: 52px; }
.draggable-word::before { width: 44px; height: 14px; }
.draggable-word::after { width: 44px; height: 18px; }

/* Tablet (900-1200px) */
@media (max-width: 1200px) {
  .draggable-word { font-size: 14px; height: 48px; }
  .draggable-word::before { width: 40px; height: 12px; }
  .draggable-word::after { width: 40px; height: 16px; }
}

/* Mobile (480-900px) */
@media (max-width: 900px) {
  .draggable-word { font-size: 13px; height: 44px; }
  .draggable-word::before { width: 36px; height: 11px; }
  .draggable-word::after { width: 36px; height: 14px; }
}

/* Small Mobile (320-480px) */
@media (max-width: 480px) {
  .draggable-word { font-size: 12px; height: 40px; }
  .draggable-word::before { width: 32px; height: 10px; }
  .draggable-word::after { width: 32px; height: 12px; }
}
```

**Princípios:**
- Escalamento proporcional mantendo proporções visuais
- Touch-friendly: `touch-action: none`, áreas de toque adequadas
- Performance: largura dinâmica calculada uma vez, cached
- Breakpoints alinhados com dispositivos reais

---

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- Um navegador web moderno (Chrome, Firefox, Edge, Safari)
- [Git](https://git-scm.com) (para clonar o repositório)
- Um editor de código como [VSCode](https://code.visualstudio.com/)

### Extensões VSCode Recomendadas

- Live Server
- HTML CSS Support
- JavaScript (ES6) code snippets
- Prettier - Code formatter

## 🔧 Instalação

Siga estas etapas para configurar o projeto localmente:

```bash
# Clone este repositório
git clone https://github.com/William-MC-Flores/Oficina_de_games_Scratch.git

# Acesse a pasta do projeto no terminal
cd Oficina_de_games_Scratch

# Abra o arquivo index.html no navegador
# Ou use a extensão Live Server do VSCode
```

**Opção 1: Abrir Diretamente no Navegador**
1. Navegue até a pasta do projeto
2. Dê duplo clique em `index.html`
3. O site abrirá no seu navegador padrão

**Opção 2: Usar Live Server (Recomendado)**
1. Abra o projeto no VSCode
2. Clique com botão direito no arquivo `index.html`
3. Selecione **"Open with Live Server"**
4. O site abrirá em `http://localhost:5500` com hot-reload

**Opção 3: Servir com Python**
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

---

## 💻 Como Usar

### **🎮 Interagindo com os Blocos Scratch**

#### **Na Página Inicial (index.html)**

1. **Títulos Interativos**
   - Cada palavra dos títulos é um bloco Scratch arrastável
   - **Clique e segure** qualquer palavra
   - **Arraste** para qualquer posição da página
   - **Solte** para fixar na nova posição
   - O bloco arrastado automaticamente fica por cima dos outros

2. **Mini Scratch Engine**
   - Localize o canvas demonstrativo no lado direito
   - **Clique na bandeira verde 🏴** para executar os blocos
   - Observe o gato Scratch se mover e rotacionar
   - Veja a variável `pontos` sendo atualizada em tempo real
   - **Clique no botão STOP ⏹️** para interromper

#### **Navegação por Cursos**

1. **Acesse [cursos.html](cursos.html)**
2. Visualize os 3 níveis disponíveis:
   - **Iniciante**: Fundamentos do jogo de pesca
   - **Intermediário**: Lógica e interatividade
   - **Avançado**: IA, física e otimização
3. Clique em **"Ver Detalhes"** para acessar a página específica do curso
4. Cada página de curso (ex: `cursos/curso-iniciante.html`) detalha:
   - Objetivos de aprendizado
   - Conceitos abordados
   - Etapas do projeto

#### **Testando Responsividade**

1. **Desktop**: Abra normalmente no navegador
2. **Tablet/Mobile**:
   - Pressione `F12` para abrir DevTools
   - Clique no ícone de dispositivo móvel (ou `Ctrl+Shift+M`)
   - Selecione um dispositivo: iPhone, iPad, etc.
3. **Teste os blocos no mobile**:
   - Use touch (arraste com o dedo na tela simulada)
   - Verifique o menu hamburger
   - Observe o escalamento proporcional dos blocos

---

### **⚙️ Personalizando o Projeto**

#### **1. Mudando as Cores do Tema Scratch**

Edite as variáveis CSS em `style.css`:

```css
:root {
  --primary-purple: #9966CC;   /* Roxo Scratch */
  --primary-yellow: #FFCC00;   /* Amarelo Scratch */
  --primary-blue: #4DA6FF;     /* Azul Scratch */
  --primary-orange: #FF8C33;   /* Laranja Scratch */
}

/* Altere para suas cores preferidas */
:root {
  --primary-purple: #8B5CF6;   /* Roxo mais vibrante */
  --primary-yellow: #FCD34D;   /* Amarelo mais suave */
  --primary-blue: #3B82F6;     /* Azul mais escuro */
  --primary-orange: #F97316;   /* Laranja mais forte */
}
```

#### **2. Ajustando Dimensões dos Blocos**

Em `style.css`, localize `.draggable-word`:

```css
.draggable-word {
  font-size: 15px;           /* Tamanho da fonte */
  height: 52px;              /* Altura do bloco */
  padding: 16px 20px 16px 16px;
  border-radius: 10px;
}

/* Notch (encaixe superior) */
.draggable-word::before {
  width: 44px;               /* Largura do notch */
  height: 14px;              /* Altura do notch */
  top: -12px;
}

/* Tab (encaixe inferior) */
.draggable-word::after {
  width: 44px;               /* Largura do tab */
  height: 18px;              /* Altura do tab */
  bottom: -18px;
}
```

#### **3. Modificando o Conteúdo dos Cursos**

Em `cursos.html`, edite os curso-cards:

```html
<div class="curso-card">
  <div class="curso-header">
    <div class="curso-icon">🎣</div>
    <h3>Curso Iniciante</h3>
  </div>
  <ul class="curso-topics">
    <li>✅ Seu novo tópico aqui</li>
    <li>✅ Outro conceito importante</li>
    <!-- Adicione quantos quiser -->
  </ul>
  <a href="cursos/curso-iniciante.html" class="curso-cta">Ver Detalhes</a>
</div>
```

#### **4. Personalizando o Mini Scratch Engine**

Em `scratch-canvas.js`, modifique o array `blocks`:

```javascript
const blocks = [
  { 
    type: 'hat', 
    text: 'quando 🏴 clicada', 
    color: '#FFCC00' 
  },
  { 
    type: 'stack', 
    text: 'seu comando customizado', 
    color: '#4DA6FF',
    action: () => {
      // Adicione sua lógica aqui
      console.log('Executando comando customizado!');
    }
  }
  // Adicione mais blocos...
];
```

#### **5. Adicionando Novos Blocos Interativos**

Em `script.js`, adicione títulos em outras páginas:

```javascript
// Adicione esta chamada em qualquer página HTML
document.addEventListener('DOMContentLoaded', () => {
  enableInteractiveTitles(); // Transforma palavras em blocos
  
  // Ativa layout mode automaticamente após 100ms
  setTimeout(() => {
    activateLayoutMode();
  }, 100);
});
```

No HTML, adicione a classe aos títulos:

```html
<h1 class="interactive-title">Seu Título Interativo Aqui</h1>
```

---

### **🔧 Configurando Formulário de Contato (Backend)

```javascript
// Edite o arquivo scripts/form.js para configurar o envio
const formConfig = {
  emailDestino: 'seu-email@example.com',
  mensagemSucesso: 'Mensagem enviada com sucesso!'
};
```

## 📁 Estrutura de Pastas

```
Oficina_de_games_Scratch/
│
├── index.html                      # Página inicial com hero e Mini Scratch
├── README.md                       # Documentação completa do projeto
│
├── css/                            # 📁 Estilos CSS
│   ├── style.css                   # Estilos globais Scratch-inspired (2202 linhas)
│   └── style-conta.css             # Estilos específicos para páginas de conta
│
├── js/                             # 📁 Scripts JavaScript
│   ├── script.js                   # Interatividade: títulos interativos, layout mode
│   ├── hamburger-menu.js           # Menu mobile responsivo
│   ├── layout-canvas.js            # Canvas overlay para blocos draggable (327 linhas)
│   └── scratch-canvas.js           # Mini Scratch engine com execução (602 linhas)
│
├── images/                         # 📁 Recursos visuais
│   ├── ScratchCat.png              # Mascote Scratch (usado em hero/recursos)
│   └── backgroundScratch.png       # Background opcional (não usado atualmente)
│
└── pages/                          # 📁 Páginas HTML
    ├── cursos.html                 # Catálogo de cursos com 3 níveis
    ├── recursos.html               # Recursos educacionais e tutoriais
    ├── contato.html                # Formulário de contato e suporte
    ├── header.html                 # Componente de header reutilizável
    │
    ├── conta/                      # 📁 Autenticação
    │   ├── Login.html              # Formulário de login
    │   └── Cadastro.html           # Formulário de cadastro
    │
    └── cursos/                     # 📁 Páginas detalhadas dos cursos
        ├── curso-iniciante.html    # Curso: Jogo de pesca básico
        ├── curso-intermediario.html # Curso: Colisão, pontuação, variáveis
        └── curso-avancado.html     # Curso: IA, física, níveis, power-ups
```

### Descrição dos Arquivos Principais

#### **HTML Pages**
- **index.html** (Página Principal)
  - Hero section com texto à esquerda e ScratchCat.png à direita
  - Títulos interativos com blocos Scratch draggable
  - Mini Scratch canvas demonstrativo com execução
  - Destaques dos 3 níveis de curso

- **cursos.html** (Catálogo de Cursos)
  - Hero simplificado com título/subtítulo centralizados
  - 3 curso-cards detalhados focados em jogo de pesca:
    - **Iniciante**: Interface, movimentação, cenário, animação básica
    - **Intermediário**: Colisão, scoring, variáveis, condicionais
    - **Avançado**: IA dos peixes, física, sistema de níveis, power-ups
  - CTA para inscrição em cada curso

- **recursos.html** (Materiais de Apoio)
  - Links para tutoriais Scratch
  - Documentação oficial
  - Comunidade e fóruns
  - ScratchCat.png como mascote

- **contato.html** (Contato e Suporte)
  - Formulário de contato com validação
  - Informações de suporte
  - Links para redes sociais

- **header.html** (Componente Reutilizável)
  - Navegação principal
  - Logo e branding
  - Hamburger menu para mobile

#### **JavaScript Modules** (`js/`)

- **js/script.js** (Core Functionality)
  - `enableInteractiveTitles()`: Transforma palavras em blocos Scratch draggable
  - `activateLayoutMode()`: Ativa canvas overlay permanentemente
  - Coleta posições DOM via `getBoundingClientRect()`
  - Oculta elementos DOM originais (`visibility: hidden`)
  - Inicialização: `setTimeout(() => activateLayoutMode(), 100)`

- **js/layout-canvas.js** (327 linhas - Canvas Overlay)
  - `LayoutCanvas` IIFE module
  - `initLayoutCanvas()`: Cria canvas fixo overlay (z-index: 50)
  - `drawStackBlock()`: Renderiza blocos com notch/tab, font 22px bold
  - `draw()`: Loop de renderização com coordenadas documento
  - `hitTest()`: Detecção de colisão viewport → documento
  - `enable(words)`: Cria array `layoutBlocks` com largura dinâmica via `measureText()`
  - **Eventos**: pointerdown/move/up, touchstart com preventDefault
  - **State**: `dragging`, `maxZIndex`, `manuallyMovedBlocks Set`

- **js/scratch-canvas.js** (602 linhas - Mini Scratch Engine)
  - Renderização de blocos hat/stack com notch (44×14px) e tab (44×18px)
  - Execução sequencial de comandos (flag start, stop button)
  - Sistema de variáveis (`pontos`, valores dinâmicos)
  - Animação do gato Scratch (rotação, movimento, transformações)
  - `drawStackBlock()`: Path rendering com quadraticCurveTo
  - `drawBottomTab()`: Tab inferior com curvas suaves
  - Side panel com botões de execução

- **js/hamburger-menu.js** (Menu Mobile)
  - Toggle de menu mobile
  - Animações de abertura/fechamento
  - Overlay com backdrop

#### **Stylesheets** (`css/`)

- **css/style.css** (2202 linhas - Global Styles)
  - **Variáveis CSS**: `--primary-purple`, `--primary-yellow`, `--primary-blue`, `--primary-orange`
  - **Tipografia**: Fredoka (headings), Cascadia Code (blocos/code)
  - **Blocos Scratch (.draggable-word)**:
    - Base: 15px font, 52px height, padding 16px 20px 16px 16px
    - `::before` (notch): 44×14px, top -12px, border-radius 0 0 10px 10px
    - `::after` (tab): 44×18px, bottom -18px, border-radius 10px 10px 8px 8px
    - Box-shadows múltiplos para profundidade 3D
  - **Responsive Design** (5 breakpoints):
    - Desktop (>1200px): 15px font, 52px height
    - Tablet (900-1200px): 14px font, 48px height, notch/tab 40px
    - Mobile (480-900px): 13px font, 44px height, notch/tab 36px
    - Small mobile (320-480px): 12px font, 40px height, notch/tab 32px
    - Tiny mobile (<320px): 11px font, 36px height, notch/tab 28px
  - **Touch Optimization**: `touch-action: none` em canvas overlay
  - **Animações**: transitions, hover states, fade-ins
  - **Layouts**: Flexbox para hero, Grid para cursos

- **css/style-conta.css** (Styles para Autenticação)
  - Formulários estilizados
  - Validação visual
  - Responsividade para mobile

#### **Assets** (`images/`)

- **images/ScratchCat.png**
  - Mascote oficial do Scratch
  - Usado em: `index.html` (280px no hero), `pages/recursos.html`
  - Formato: PNG transparente

- **images/backgroundScratch.png**
  - Background opcional inspirado em Scratch
  - Atualmente não utilizado (removido para evitar bugs visuais)

### Fluxo de Arquivos

```
Usuário acessa index.html
    ↓
Carrega css/style.css (Scratch theme)
    ↓
Carrega js/script.js → enableInteractiveTitles()
    ↓
Carrega js/layout-canvas.js → LayoutCanvas module
    ↓
Carrega js/scratch-canvas.js → Mini Scratch demo
    ↓
setTimeout(100) → activateLayoutMode()
    ↓
LayoutCanvas.enable(words) → Títulos viram blocos draggable
    ↓
Usuário interage: drag & drop, scroll, resize
    ↓
draw() loop → Renderiza blocos com coordenadas documento
```

### Organização por Tipo

**🎨 Front-end:**
- `index.html` (raiz) - ponto de entrada principal
- `pages/*.html` - páginas secundárias
- `pages/cursos/*.html` - detalhes dos cursos
- `pages/conta/*.html` - autenticação

**💅 Estilos:**
- `css/style.css` - estilos globais (2202 linhas)
- `css/style-conta.css` - estilos específicos de conta

**⚙️ Lógica:**
- `js/script.js` - funcionalidades gerais
- `js/layout-canvas.js` - canvas overlay interativo
- `js/scratch-canvas.js` - engine Scratch demonstrativo
- `js/hamburger-menu.js` - menu mobile

**🖼️ Assets:**
- `images/` - recursos visuais (PNG)

---

## 🔧 Desafios e Soluções

Durante o desenvolvimento, diversos desafios técnicos foram encontrados e solucionados. Aqui está um resumo dos principais problemas enfrentados e como foram resolvidos:

### **1. Blocos Aparecendo em Um Único Ponto ao Ativar Layout Mode**

**Problema:**
Ao ativar o modo layout, todos os blocos apareciam empilhados em um único ponto da tela ao invés de manterem suas posições originais.

**Causa:**
A função `LayoutCanvas.enable()` não recebia as posições reais dos elementos DOM, usando valores padrão (0, 0) para todos os blocos.

**Solução:**
```javascript
// Antes
LayoutCanvas.enable(words); // Sem posições

// Depois
const words = Array.from(wordElements).map(el => {
  const rect = el.getBoundingClientRect();
  return {
    id: el.dataset.wordId,
    text: el.dataset.wordText,
    color: /* ... */,
    x: rect.left + window.scrollX,  // Coordenadas documento
    y: rect.top + window.scrollY
  };
});
LayoutCanvas.enable(words);
```

**Lição Aprendida:** Sempre converter coordenadas viewport para documento ao trabalhar com elementos fixos.

---

### **2. Canvas Overlay Bloqueando Cliques na Página**

**Problema:**
O canvas overlay com `position: fixed` cobria toda a tela, impedindo interação com links, botões e outros elementos da página.

**Causa:**
Canvas fixo sempre capturava todos os eventos de mouse, mesmo quando não havia blocos sob o cursor.

**Solução:**
```javascript
// CSS dinâmico
layoutCanvas.style.pointerEvents = dragging ? 'auto' : 'none';

// Event delegation
function onPointerDown(e) {
  const block = hitTest(e.clientX, e.clientY);
  if (!block) return; // Ignora cliques fora dos blocos
  
  layoutCanvas.style.pointerEvents = 'auto';
  // ... inicia drag
}

function onPointerUp(e) {
  layoutCanvas.style.pointerEvents = 'none';
  dragging = null;
}
```

**Lição Aprendida:** Use `pointer-events: none` para click-through e ative dinamicamente apenas quando necessário.

---

### **3. Blocos Re-sincronizando Após Drag Manual**

**Problema:**
Após arrastar um bloco manualmente, ele voltava à posição original ao rolar a página.

**Causa:**
A função `draw()` atualizava as posições de TODOS os blocos baseado em scroll, sobrescrevendo posições manuais.

**Solução:**
```javascript
const manuallyMovedBlocks = new Set();

function onPointerMove(e) {
  if (!dragging) return;
  
  dragging.x = /* nova posição */;
  dragging.y = /* nova posição */;
  manuallyMovedBlocks.add(dragging.id); // Marca como movido
}

function draw() {
  // ...
  layoutBlocks.forEach(b => {
    if (!manuallyMovedBlocks.has(b.id)) {
      // Apenas blocos não-movidos seguem o scroll
      b.x = originalPositions[b.id].x + window.scrollX;
      b.y = originalPositions[b.id].y + window.scrollY;
    }
  });
}
```

**Lição Aprendida:** Mantenha tracking de estado para elementos interativos que devem preservar modificações do usuário.

---

### **4. Blocos Fixos ao Viewport em Vez de Seguir Documento**

**Problema:**
Os blocos ficavam fixos na tela como elementos com `position: fixed`, não acompanhando o scroll do conteúdo.

**Causa:**
Sistema de coordenadas usava apenas `clientX/clientY` sem considerar offset de scroll.

**Solução:**
```javascript
// Sistema de coordenadas documento
function draw() {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  
  layoutBlocks.forEach(b => {
    // Renderiza na posição do canvas considerando scroll
    const canvasX = b.x - scrollX;
    const canvasY = b.y - scrollY;
    drawStackBlock(b, canvasX, canvasY);
  });
}

function hitTest(viewportX, viewportY) {
  // Converte viewport → documento para hit detection
  const docX = viewportX + window.scrollX;
  const docY = viewportY + window.scrollY;
  
  return layoutBlocks.find(b => 
    docX >= b.x && docX <= b.x + b.w &&
    docY >= b.y && docY <= b.y + b.h
  );
}
```

**Lição Aprendida:** Canvas fixo renderiza em coordenadas viewport, mas lógica deve trabalhar com coordenadas documento.

---

### **5. Inconsistência Visual Entre Blocos DOM e Canvas**

**Problema:**
Blocos DOM eram retangulares simples, enquanto blocos canvas tinham notch/tab característicos do Scratch.

**Iterações:**
1. **Tentativa 1:** `clip-path` - Não funcionou em todos os browsers
2. **Tentativa 2:** Pseudo-elementos com dimensões aproximadas (40×12, 40×8)
3. **Solução Final:** Pseudo-elementos com dimensões exatas (44×14, 44×18)

**Solução:**
```css
.draggable-word {
  position: relative;
  padding: 16px 20px 16px 16px;
  height: 52px;
  font-size: 15px;
}

/* Notch (encaixe superior) */
.draggable-word::before {
  content: '';
  position: absolute;
  top: -12px;
  left: 16px;
  width: 44px;
  height: 14px;
  background: inherit;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Tab (encaixe inferior) */
.draggable-word::after {
  content: '';
  position: absolute;
  bottom: -18px;
  left: 16px;
  width: 44px;
  height: 18px;
  background: inherit;
  border-radius: 10px 10px 8px 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
}
```

**Lição Aprendida:** Pseudo-elementos CSS são poderosos para criar formas complexas sem adicionar markup extra.

---

### **6. Mini Scratch Blocos Desapareceram**

**Problema:**
Ao implementar modo layout permanente, os blocos do mini Scratch canvas desapareceram completamente.

**Causa:**
A ativação automática do layout mode estava cobrindo TODA a página, incluindo o canvas do mini Scratch.

**Solução:**
```javascript
// Remover ativação automática temporariamente
// setTimeout(() => activateLayoutMode(), 100); // COMENTADO

// Ou: ativar apenas em elementos específicos
function activateLayoutMode() {
  const titleWords = document.querySelectorAll('.hero-title .draggable-word');
  // Não ativa em .scratch-demo-area
  LayoutCanvas.enable(Array.from(titleWords).map(/* ... */));
}
```

**Lição Aprendida:** Overlays devem ser scope-aware para não interferir com outros componentes interativos.

---

### **7. Background Images Quebrando Visual dos Blocos**

**Problema:**
Ao adicionar `backgroundScratch.png` com opacity, os blocos ficaram com visual bugado, cores incorretas e bordas pixeladas.

**Causa:**
Background com opacity afetava todos os elementos filhos, incluindo pseudo-elementos dos blocos.

**Solução:**
```css
/* Antes (bugado) */
.hero {
  background-image: url('image/backgroundScratch.png');
  opacity: 0.15;
}

/* Depois (correto) */
.hero {
  position: relative;
  /* Remove background image completamente */
}
```

**Lição Aprendida:** Use pseudo-elementos (::before) para backgrounds com opacity, evitando afetar conteúdo.

---

### **8. Blocos Com Largura Fixa Desproporcional ao Texto**

**Problema:**
Blocos tinham largura fixa, fazendo palavras curtas criarem blocos largos e palavras longas ficarem espremidas.

**Causa:**
Largura hardcoded no código de renderização.

**Solução:**
```javascript
function drawStackBlock(b) {
  const padX = 40; // 20px cada lado
  
  // Calcula largura baseada no texto
  layoutCtx.font = 'bold 22px "Fredoka", sans-serif';
  const textWidth = layoutCtx.measureText(b.text).width;
  b.w = Math.max(120, Math.round(textWidth + padX * 2));
  
  // Renderiza com largura dinâmica
  // ...
}
```

**Lição Aprendida:** Use `measureText()` do Canvas para cálculos precisos de dimensões de texto.

---

### **9. Responsividade Quebrando Interatividade**

**Problema:**
Implementar responsividade mantendo blocos interativos funcionando em todos os tamanhos de tela.

**Desafios:**
- Escalar blocos proporcionalmente (notch/tab devem manter proporção)
- Touch events em mobile não funcionavam
- Font size não escalava adequadamente

**Solução:**
```css
/* Escalonamento proporcional */
@media (max-width: 900px) {
  .draggable-word {
    font-size: 13px;        /* 86.6% do original */
    height: 44px;           /* 84.6% */
    padding: 12px 16px 12px 12px;
  }
  
  .draggable-word::before {
    width: 36px;            /* 81.8% */
    height: 11px;           /* 78.5% */
    top: -10px;
  }
  
  .draggable-word::after {
    width: 36px;
    height: 14px;           /* 77.7% */
    bottom: -14px;
  }
}
```

```javascript
// Touch support
layoutCanvas.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  const block = hitTest(touch.clientX, touch.clientY);
  if (block) {
    e.preventDefault(); // Previne scroll nativo
  }
}, { passive: false });
```

```css
/* Touch-friendly */
#layout-overlay-canvas {
  touch-action: none; /* Previne gestos nativos */
}
```

**Lição Aprendida:** Responsividade real requer escalonamento proporcional de TODOS os elementos, não apenas font-size.

---

### **10. Z-Index Não Funcionando para Blocos Dragged**

**Problema:**
Ao arrastar um bloco, ele ficava atrás de outros blocos, dificultando visualização e criando experiência ruim.

**Causa:**
Canvas renderiza elementos na ordem do array, sem considerar z-index.

**Solução:**
```javascript
let maxZIndex = 100;

function onPointerDown(e) {
  const block = hitTest(e.clientX, e.clientY);
  if (!block) return;
  
  // Incrementa z-index do bloco clicado
  block.z = ++maxZIndex;
  
  dragging = block;
}

function draw() {
  // Ordena por z-index antes de renderizar
  const sorted = [...layoutBlocks].sort((a, b) => a.z - b.z);
  
  sorted.forEach(b => drawStackBlock(b));
}
```

**Lição Aprendida:** Em canvas, você controla a ordem de renderização manualmente - implemente seu próprio sistema de layers.

---

### **Resumo das Principais Lições**

1. ✅ **Coordenadas:** Sempre diferencie viewport vs. documento
2. ✅ **Performance:** Use `pointer-events: none` para click-through eficiente
3. ✅ **State:** Mantenha tracking de modificações do usuário (Set, Map)
4. ✅ **Responsividade:** Escalamento proporcional > alterações isoladas
5. ✅ **Touch:** `preventDefault` + `touch-action: none` para controle total
6. ✅ **Canvas:** Implementar próprio z-index, ordenando antes de renderizar
7. ✅ **Medições:** `measureText()` para layouts dinâmicos precisos
8. ✅ **Pseudo-elementos:** Poderosos para formas sem markup adicional
9. ✅ **Overlay Scope:** Overlays devem ser conscientes de seu contexto
10. ✅ **Opacity:** Use pseudo-elementos para backgrounds transparentes

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, siga estas etapas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Código de Conduta

Este projeto adota um código de conduta para garantir um ambiente acolhedor. Por favor, seja respeitoso e construtivo em todas as interações.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✉️ Contato

**William Flores** - [GitHub](https://github.com/William-MC-Flores)

Link do Projeto: [https://github.com/William-MC-Flores/Oficina_de_games_Scratch](https://github.com/William-MC-Flores/Oficina_de_games_Scratch)

## 🎓 Agradecimentos

* **Gamelab** - Curso que inspirou o desenvolvimento deste projeto
* **MIT Scratch Team** - Pela plataforma inspiradora e design icônico
* [Font Awesome](https://fontawesome.com) - Ícones de marca utilizados
* [Google Fonts](https://fonts.google.com) - Tipografias Fredoka e Cascadia Code
* **MDN Web Docs** - Documentação técnica de Canvas API e Web Standards
* **Stack Overflow** - Comunidade que ajudou a resolver desafios técnicos complexos
* **VS Code & GitHub Copilot** - Ferramentas que auxiliaram no desenvolvimento

---

<div align="center">

### 🎮 Desenvolvido com paixão para ensinar programação através de jogos! 🚀

**Scratch-inspired Design** 💜 **Canvas API Mastery** 🎨 **Responsive Excellence** 📱

⌨️ por [William Flores](https://github.com/William-MC-Flores)

</div>