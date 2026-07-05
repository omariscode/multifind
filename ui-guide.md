# 🎯 GUIA DE UI/UX COMPLETO - PLATAFORMA MULTIFIND

## Visão Geral do Projeto
**Nome:** MultiFind - Plataforma de Mapeamento e Monitorização de ATMs em Angola
**Objetivo:** Permitir que utilizadores identifiquem o estado dos ATMs (com dinheiro, sem dinheiro, papel, avariado) em Luanda, reduzindo deslocações desnecessárias
**Plataforma:** Web responsiva (desktop, tablet, mobile)
**Público-alvo:** Cidadãos angolanos que utilizam ATMs

---

## 1. PALETA DE CORES E IDENTIDADE VISUAL

### Cores Primárias
- **Cor Principal (Laranja/Accent):** `#f97316` - Confiança, energia, ação
- **Fundo Escuro (Dark Mode):** `#0a0e1a` - Reduz fadiga ocular, melhor para mapas
- **Fundo Secundário:** `#111827` e `#1a2236` - Hierarquia visual
- **Texto Principal:** `#f1f5f9` - Alto contraste em fundo escuro
- **Texto Secundário:** `#94a3b8` - Para informações menos importantes

### Cores dos Estados dos ATMs (CRÍTICO - Deve ser intuitivo)
- **Com Dinheiro:** `#22c55e` (Verde claro) - Operacional, disponível
- **Sem Dinheiro:** `#ef4444` (Vermelho) - Problema imediato
- **Só Papel Disponível:** `#eab308` (Amarelo) - Parcialmente funcional
- **Dinheiro + Papel:** `#3b82f6` (Azul) - Totalmente operacional
- **Avariado/Quebrado:** `#64748b` (Cinzento) - Não funcional
- **Fundo/Hover:** `rgba(255,255,255,0.08)` - Interatividade sutil

### Cores por Banco (Para identificação visual rápida)
```
BFA: #c53030 (Vermelho intenso)
BIC: #b45309 (Âmbar)
BAI: #1d4ed8 (Azul profundo)
Atlântico: #065f46 (Verde escuro)
BancSol: #7c3aed (Roxo)
Keve: #0891b2 (Ciano)
Standard Bank: #1a1a2e (Cinzento escuro)
BMA: #b91c1c (Vermelho vivo)
Caixa: #15803d (Verde)
```

---

## 2. TIPOGRAFIA

### Fontes
- **Headings/Títulos:** `Syne` (Google Fonts) - Bold (700, 800)
  - H1: 20px / 28pt, Bold
  - H2: 16px / 14pt, Bold
  - H3: 14px / 12pt, Bold + Italic

- **Corpo de Texto:** `DM Sans` (Google Fonts) - Regular (400, 500)
  - Parágrafo: 14px / 12pt
  - Small: 12px / 11pt
  - Tiny: 11px / 10pt

- **Fallback:** Times New Roman para ambiente corporativo

### Espaçamento de Linha
- Normal: 1.5x (360 DXA units)
- Compacto: 1.15x
- Amplo: 2x (para títulos)

---

## 3. LAYOUT GERAL DA APLICAÇÃO

### 3.1 Estrutura Master (Desktop/Tablet)
```
┌─────────────────────────────────────────────────────────────┐
│  HEADER (Altura: 64px | Padding: 24px)                     │
│  ┌─────┐  MultiFind   │  Estatísticas   │  Botões Ação    │
│  │Logo │                                                    │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────┬───────────────────────────────────────┐
│                     │                                       │
│   SIDEBAR           │       MAPA INTERACTIVO               │
│   (380px)           │       (Leaflet.js)                   │
│                     │                                       │
│  • Pesquisa         │  [Marcadores com código de cores]    │
│  • Filtros          │                                       │
│  • Lista de ATMs    │                                       │
│  • Detalhes         │  [Painel de Detalhe: Slide-up]       │
│  (Scroll 800px)     │                                       │
│                     │                                       │
└─────────────────────┴───────────────────────────────────────┘
```

### 3.2 Estrutura Mobile (< 768px)
```
┌──────────────────────────┐
│  HEADER (64px)           │
│  Logo | Título | Menu    │
└──────────────────────────┘
┌──────────────────────────┐
│                          │
│    MAPA (Full Width)     │
│    [Botões Flutuantes]   │
│                          │
│    [Painel Detalhe]      │
│    (Slide-up 70%)        │
│                          │
└──────────────────────────┘
```

---

## 4. HEADER - BARRA SUPERIOR

### Dimensões
- Altura: 64px
- Padding: 24px (horizontal), 16px (vertical)
- Background: `#111827` (dark2)
- Border-bottom: 1px solid `rgba(255,255,255,0.08)`
- Z-index: 1000 (sempre visível)

### Elementos (Esquerda para Direita)

#### 4.1 Logo + Título (Esquerda)
```
┌─────────────────────────┐
│ [🏧] MultiFind          │
└─────────────────────────┘
```
- **Ícone:** 36px × 36px, gradiente laranja-vermelho
- **Fundo do ícone:** `rgba(249,115,22,0.2)`
- **Raio:** 10px
- **Texto:** "MultiFind" em Syne Bold, 20px
- **Cor do "Find":** `#f97316` (destaque)
- **Espaçamento:** 10px entre ícone e texto

#### 4.2 Estatísticas (Centro)
Apenas em Desktop (hide em mobile)

```
┌──────────┬──────────┬──────────┐
│ ● 24 ops │ ● 3 sem  │ ● 2 ava  │
└──────────┴──────────┴──────────┘
```

- **Container:** Flexbox, gap 24px
- **Cada Pill:**
  - Padding: 6px 14px
  - Background: `#1a2236`
  - Border: 1px solid `rgba(255,255,255,0.08)`
  - Border-radius: 20px
  - Font-size: 13px
  - Cor do ponto: cor do estado
  - Animação: pulse suave (0.5s, opacity 0.6-1)

#### 4.3 Ações (Direita)
Dois botões:

**Botão 1: Legenda**
```
┌────────────────┐
│ 📋 Legenda     │
└────────────────┘
```
- Classe: `btn-ghost`
- Padding: 8px 16px
- Border-radius: 8px
- Font-size: 13px
- Border: 1px solid `rgba(255,255,255,0.08)`
- Hover: Background `#1a2236`, border `rgba(255,255,255,0.15)`
- Função: Mostra/esconde a legenda de cores

**Botão 2: Minha Localização**
```
┌──────────────────────────────┐
│ 📍 Minha Localização         │
└──────────────────────────────┘
```
- Classe: `btn-accent`
- Padding: 8px 16px
- Border-radius: 8px
- Background: `#f97316`
- Hover: Background `#fb923c`, transform translateY(-1px)
- Font-size: 13px, bold
- Font-weight: 500
- Cor: white
- Função: Obter localização do utilizador, zoom no mapa, mostrar marcador, reordenar lista por proximidade

**Responsividade:**
- Desktop: Ambos visíveis
- Tablet (> 900px): Ambos visíveis, texto reduzido
- Mobile (< 768px): Apenas ícones, gap reduzido

---

## 5. SIDEBAR (Painel Lateral Esquerdo)

### Dimensões Gerais
- Largura: 380px (desktop), 100% (mobile)
- Background: `#111827`
- Border-right: 1px solid `rgba(255,255,255,0.08)`
- Altura: calc(100vh - 64px)
- Overflow-y: auto com scrollbar personalizada
- Z-index: 100 (abaixo do header)

### Scrollbar Personalizada
```css
width: 4px;
background: transparent;
thumb: #94a3b8;
thumb-hover: #cbd5e1;
border-radius: 2px;
```

---

### 5.1 Zona Superior - Pesquisa

#### 5.1.1 Caixa de Pesquisa
```
┌─────────────────────────────┐
│ 🔍 Pesquisar banco, bairro..│
└─────────────────────────────┘
```

- **Container:**
  - Padding: 16px
  - Border-bottom: 1px solid `rgba(255,255,255,0.08)`
  - Margin-bottom: 12px

- **Input:**
  - Width: 100%
  - Padding: 10px 12px 10px 38px
  - Background: `#1a2236`
  - Border: 1px solid `rgba(255,255,255,0.08)`
  - Border-radius: 8px
  - Font-size: 14px
  - Font-family: DM Sans
  - Color: `#f1f5f9`
  - Placeholder-color: `#94a3b8`
  - Focus: Border-color `#f97316`, box-shadow nenhuma
  - Transition: border 0.15s

- **Ícone de Pesquisa:**
  - Position: absolute, left 12px, top 50%
  - Transform: translateY(-50%)
  - Color: `#94a3b8`
  - Pointer-events: none
  - Width/Height: 16px

- **Funcionalidade:**
  - Filtra ATMs em tempo real por nome, banco, endereço
  - Case-insensitive
  - Accents-insensitive (ã = a, etc)

#### 5.1.2 Filtros por Estado
```
┌──────────────────────────────────────────────────┐
│ [Todos] [✓ Dinheiro] [✓ Papel] [✓ Sem...]       │
└──────────────────────────────────────────────────┘
```

- **Container:**
  - Padding: 0 16px 12px
  - Display: flex
  - Gap: 6px
  - Flex-wrap: wrap
  - Border-bottom: 1px solid `rgba(255,255,255,0.08)`
  - Margin-bottom: 12px

- **Cada Filtro (Chip):**
  - Padding: 5px 12px
  - Border-radius: 20px
  - Font-size: 12px
  - Font-weight: 500
  - Border: 1px solid `rgba(255,255,255,0.08)`
  - Background: transparent
  - Color: `#94a3b8`
  - Cursor: pointer
  - Transition: all 0.15s

- **Estados do Chip:**
  - Default: border `rgba(255,255,255,0.08)`, color `#94a3b8`
  - Hover: border `#f97316`, color `#f97316`, background `rgba(249,115,22,0.1)`
  - Active: border cor do estado, color cor do estado, background `rgba(cor, 0.1)`
  
- **Chip "Todos" quando ativo:**
  - Border: `#f1f5f9`
  - Color: `#f1f5f9`
  - Background: `rgba(255,255,255,0.08)`

- **Funcionalidade:**
  - Clique ativa/desativa filtro
  - Apenas um filtro pode estar ativo de cada vez
  - Filtra a lista e atualiza o mapa em tempo real

#### 5.1.3 Filtro por Banco
```
┌──────────────────────────────────┐
│ FILTRAR POR BANCO               │
│ [BFA] [BIC] [BAI] [ATL]...      │
└──────────────────────────────────┘
```

- **Título Secção:**
  - Font-size: 11px
  - Font-weight: 500
  - Text-transform: uppercase
  - Letter-spacing: 0.08em
  - Color: `#94a3b8`
  - Margin-bottom: 10px
  - Padding: 12px 16px 0 16px

- **Container de Chips:**
  - Padding: 12px 16px
  - Border-bottom: 1px solid `rgba(255,255,255,0.08)`
  - Display: flex
  - Gap: 6px
  - Flex-wrap: wrap

- **Cada Bank Chip:**
  - Padding: 4px 10px
  - Border-radius: 6px
  - Font-size: 12px
  - Font-weight: 600
  - Cursor: pointer
  - Transition: all 0.15s
  - Border: 1px solid transparent
  - Opacity: 0.5
  - Color: cor específica do banco
  - Background: background específico do banco (com 15% opacidade)

- **Bank Chip Hover:**
  - Opacity: 0.85

- **Bank Chip Active:**
  - Opacity: 1
  - Border-color: cor do banco

- **Funcionalidade:**
  - Toggle individual (clique ativa/desativa)
  - Apenas um banco pode estar filtrado de cada vez
  - Se clicado novamente, remove o filtro (mostra todos)
  - Atualiza lista e mapa em tempo real

---

### 5.2 Zona Central - Resultados

#### 5.2.1 Cabeçalho de Resultados
```
┌──────────────────────────────────────┐
│ 24 ATMs encontrados | Ordenar A-Z ▼  │
└──────────────────────────────────────┘
```

- **Container:**
  - Padding: 12px 16px 8px
  - Display: flex
  - Justify-content: space-between
  - Align-items: center

- **Contador:**
  - Font-size: 13px
  - Color: `#94a3b8`
  - Dentro do texto: `<strong>24</strong>` em `#f1f5f9`

- **Botão de Ordenação:**
  - Background: none
  - Border: none
  - Color: `#94a3b8`
  - Font-size: 12px
  - Cursor: pointer
  - Display: flex
  - Gap: 4px
  - Align-items: center
  - Transition: color 0.15s
  - Hover: color `#f1f5f9`

- **Funcionalidade de Ordenação:**
  - Clique para ciclar entre: "A-Z" → "Estado" → "Próximo"
  - "Próximo" apenas aparece se o utilizador ativou geolocalização
  - Atualiza a lista em tempo real

---

#### 5.2.2 Lista de ATMs (Scrollável)
```
┌─────────────────────────────────────┐
│ [Card ATM 1]                        │
├─────────────────────────────────────┤
│ [Card ATM 2]                        │
├─────────────────────────────────────┤
│ [Card ATM 3]                        │
│ ...                                 │
└─────────────────────────────────────┘
```

- **Container:**
  - Flex: 1
  - Overflow-y: auto
  - Padding: 4px 16px 16px
  - Max-height: calc(100vh - 64px - 240px)

#### 5.2.3 Card de ATM (Individual)
```
┌─────────────────────────────────────────┐
│▐ BFA │ há 12 min                        │
│                                         │
│ BFA Mutamba                             │
│ 📍 Largo da Mutamba, Ingombota          │
│                                         │
│ [✓ Com dinheiro] [📍 0.5 km]            │
└─────────────────────────────────────────┘
```

- **Card Container:**
  - Background: `#1a2236`
  - Border: 1px solid `rgba(255,255,255,0.08)`
  - Border-radius: 12px
  - Padding: 14px
  - Margin-bottom: 8px
  - Cursor: pointer
  - Transition: all 0.15s
  - Position: relative
  - Overflow: hidden

- **Card Hover:**
  - Border-color: `rgba(255,255,255,0.15)`
  - Background: `#111827`
  - Transform: translateX(2px)

- **Card Selected (Active):**
  - Border-color: `#f97316`
  - Background: `rgba(249,115,22,0.08)`

- **Left Border Color (Indicador de Estado):**
  - Width: 3px
  - Height: 100%
  - Position: absolute, left 0, top 0
  - Com dinheiro: `#22c55e`
  - Sem dinheiro: `#ef4444`
  - Só papel: `#eab308`
  - Dinheiro+Papel: `#3b82f6`
  - Avariado: `#64748b`

- **Header do Card:**
  - Display: flex
  - Justify-content: space-between
  - Align-items: center
  - Margin-bottom: 8px

  - **Bank Badge:**
    - Padding: 3px 8px
    - Border-radius: 6px
    - Font-size: 11px
    - Font-weight: 700
    - Letter-spacing: 0.03em
    - Background: `#faf5ff` (ou cor específica do banco com 20% opacidade)
    - Color: cor do banco (ou contraste apropriado)

  - **Timestamp:**
    - Font-size: 11px
    - Color: `#94a3b8`

- **Nome do ATM:**
  - Font-size: 14px
  - Font-weight: 500
  - Color: `#f1f5f9`
  - Margin: 4px 0

- **Endereço:**
  - Font-size: 12px
  - Color: `#94a3b8`
  - Display: flex
  - Gap: 4px
  - Align-items: center
  - Ícone 📍: 11px

- **Metadata (Estilo flexível):**
  - Margin-top: 10px
  - Display: flex
  - Gap: 6px
  - Flex-wrap: wrap

  - **Status Tag:**
    - Padding: 3px 8px
    - Border-radius: 20px
    - Font-size: 11px
    - Font-weight: 500
    - Display: flex
    - Gap: 4px
    - Align-items: center
    - Cores:
      ```
      Dinheiro: bg rgba(34,197,94,0.15), color #4ade80
      Sem dinheiro: bg rgba(239,68,68,0.12), color #f87171
      Papel: bg rgba(234,179,8,0.15), color #fbbf24
      Dinheiro+Papel: bg rgba(59,130,246,0.15), color #60a5fa
      Avariado: bg rgba(148,163,184,0.1), color #94a3b8
      ```

  - **Dot (Ponto colorido):**
    - Width/Height: 6px
    - Border-radius: 50%
    - Cor correspondente ao estado

  - **Distance Tag (Se geolocalização ativa):**
    - Margin-left: auto
    - Font-size: 11px
    - Color: `#94a3b8`
    - Ícone: 📍
    - Conteúdo: "0.5 km", "1.2 km", etc

- **Funcionalidade do Card:**
  - Click: Abre painel de detalhe
  - Destaca-se visualmente no mapa (zoom suave)
  - Estado selected persiste até novo clique

---

## 6. MAPA INTERACTIVO (Centro)

### 6.1 Container do Mapa
- **Width:** calc(100vw - 380px) em desktop, 100% em mobile
- **Height:** calc(100vh - 64px)
- **ID:** `#map`
- **Background:** `#0d1117`
- **Position:** relative
- **Z-index:** 50

### 6.2 Tiles do Mapa
- **Fornecedor:** CartoDB Dark Matter ou OpenStreetMap
- **Center:** Luanda (aproximadamente -8.836, 13.234)
- **Zoom Inicial:** 13
- **Zoom Min:** 10
- **Zoom Max:** 19
- **Atribuição:** Visível no canto inferior esquerdo

### 6.3 Marcadores de ATM

#### 6.3.1 Estilo do Marcador
```
┌───────────────┐
│  ┌─────────┐  │
│  │  32×32  │  │
│  │  FA, BA │  │  (Sigla do banco)
│  │         │  │
│  └─────────┘  │
│               │
└───────────────┘
```

- **Formato:** Circular (divIcon do Leaflet)
- **Tamanho:** 32×32 px
- **Border:** 2px solid rgba(255,255,255,0.3)
- **Font-size:** 10px
- **Font-weight:** 700
- **Font-family:** Syne
- **Color:** white
- **Text-shadow:** 0 1px 2px rgba(0,0,0,0.5)
- **Cursor:** pointer
- **Box-shadow:** 0 2px 8px rgba(0,0,0,0.5)
- **Transition:** transform 0.15s

#### 6.3.2 Cores do Marcador (Fundo)
Siga o mapa de cores dos estados:
- Com dinheiro: `rgba(34,197,94,0.9)` com border `#4ade80`
- Sem dinheiro: `rgba(239,68,68,0.85)` com border `#f87171`
- Só papel: `rgba(234,179,8,0.9)` com border `#fbbf24`
- Dinheiro+Papel: `rgba(59,130,246,0.9)` com border `#60a5fa`
- Avariado: `rgba(100,116,139,0.85)` com border `#94a3b8`

#### 6.3.3 Interatividade do Marcador
- **Hover:** 
  - Transform: scale(1.2)
  - Elevation aumentada
  
- **Click:**
  - Abre painel de detalhe
  - Destaca o ATM na lista lateral
  - Sem zoom automático
  - Sem mudança de estilo (a cor do painel indica seleção)

### 6.4 Marcador de Localização do Utilizador

```
      ◎ (respiração)
     ◉ (núcleo)
```

- **Formato:** Círculo sólido com animação de respiração
- **Tamanho:** 20px × 20px (círculo)
- **Background:** `#f97316` (laranja)
- **Border:** 3px solid white
- **Box-shadow (parado):** 0 0 0 6px rgba(249,115,22,0.25)
- **Animação (respiração):**
  ```css
  @keyframes location-pulse {
    0% { box-shadow: 0 0 0 0 rgba(249,115,22,0.4); }
    100% { box-shadow: 0 0 0 12px rgba(249,115,22,0); }
  }
  animation: location-pulse 2s infinite;
  ```
- **Aparece após:** Clique em "Minha Localização"
- **Atualiza:** A cada 5 segundos (opcional)

### 6.5 Legenda (Overlay do Mapa)

```
┌─────────────────────────┐
│ ESTADO DOS ATMs        │
├─────────────────────────┤
│ ● Com dinheiro          │
│ ● Dinheiro + Papel      │
│ ● Só papel disponível   │
│ ● Sem dinheiro          │
│ ● Avariado              │
└─────────────────────────┘
```

- **Position:** absolute, bottom 32px, left 16px
- **Background:** rgba(17,24,39,0.92)
- **Backdrop-filter:** blur(8px)
- **Border:** 1px solid `rgba(255,255,255,0.08)`
- **Border-radius:** 12px
- **Padding:** 14px 16px
- **Z-index:** 500
- **Display:** Ativa por padrão em desktop, toggle em mobile

- **Title:**
  - Font-size: 11px
  - Font-weight: 600
  - Text-transform: uppercase
  - Letter-spacing: 0.08em
  - Color: `#94a3b8`
  - Margin-bottom: 10px

- **Item (Cada linha):**
  - Display: flex
  - Gap: 8px
  - Align-items: center
  - Font-size: 12px
  - Color: `#f1f5f9`
  - Margin-bottom: 6px

- **Dot (Ponto colorido):**
  - Width/Height: 12px
  - Border-radius: 50%
  - Flex-shrink: 0
  - Cores conforme estados

- **Funcionalidade:**
  - Não é interactiva
  - Toggle com botão "Legenda" no header
  - Hide em mobile por padrão

### 6.6 Controles de Zoom

- **Posição:** bottom-right, 16px de bottom, 16px de right
- **Estilo:** Leaflet default customizado
  - Background dos botões: `#111827`
  - Color: `#f1f5f9`
  - Border: 1px solid `rgba(255,255,255,0.08)`
  - Hover: Background `#1a2236`

---

## 7. PAINEL DE DETALHE (Slide-up)

### 7.1 Posicionamento e Tamanho
- **Desktop:**
  - Position: absolute
  - Bottom: 0
  - Left: 0
  - Right: 0
  - Max-height: 70vh (máximo 70% da viewport)
  - Background: `#111827`
  - Border-top: 1px solid `rgba(255,255,255,0.08)`
  - Border-radius: 16px 16px 0 0
  - Z-index: 600
  - Transform: translateY(100%) by default (hidden)
  - Transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)

- **Mobile:**
  - Position: fixed
  - Bottom: 0
  - Width: 100%
  - Max-height: 70vh
  - (Resto similar)

### 7.2 Handle (Asa de Arrasto)
```
    ──────
```
- **Width:** 40px
- **Height:** 4px
- **Background:** `rgba(148,163,184,0.4)` (cinzento claro)
- **Border-radius:** 2px
- **Margin:** 0 auto 16px
- **Cursor:** grab
- **Função:** Indicador visual que o painel pode ser arrastado (mobile)

### 7.3 Fechar (X)
- **Position:** top-right dentro do painel
- **Width/Height:** 28px
- **Background:** `#1a2236`
- **Border:** 1px solid `rgba(255,255,255,0.08)`
- **Border-radius:** 6px
- **Display:** flex, center
- **Font-size:** 16px
- **Color:** `#94a3b8`
- **Cursor:** pointer
- **Hover:** Color `#f1f5f9`
- **Função:** Fecha o painel (remove class "open")

### 7.4 Conteúdo Principal

#### 7.4.1 Cabeçalho
```
┌─────────────────────────┐
│ X                       │
│                         │
│ [BFA]                   │
│ BFA Mutamba             │
│ 📍 Largo da Mutamba...  │
└─────────────────────────┘
```

- **Bank Badge:**
  - Mesmo estilo do card na sidebar
  - Margin-bottom: 4px

- **Nome do ATM:**
  - Font-family: Syne
  - Font-size: 20px
  - Font-weight: 700
  - Margin-bottom: 4px

- **Endereço:**
  - Font-size: 14px
  - Color: `#94a3b8`
  - Display: flex
  - Gap: 4px
  - Align-items: center

#### 7.4.2 Status Tags (Horizontais)
```
┌───────────────┬───────────────┬───────────────┐
│ 💵 Dinheiro   │ 🧾 Papel      │ ✅ Operacional│
└───────────────┴───────────────┴───────────────┘
```

- **Container:**
  - Display: flex
  - Gap: 8px
  - Margin: 16px 0
  - Flex-wrap: wrap (se necessário)

- **Cada Status Tag:**
  - Padding: 8px 14px
  - Border-radius: 8px
  - Font-size: 13px
  - Font-weight: 500
  - Display: flex
  - Gap: 6px
  - Align-items: center
  - Flex: 1, min-width 120px

- **Cores (conforme estado):**
  ```
  Dinheiro: bg rgba(34,197,94,0.12), border rgba(34,197,94,0.3), color #4ade80
  Papel: bg rgba(234,179,8,0.15), border rgba(234,179,8,0.3), color #fbbf24
  Quebrado: bg rgba(148,163,184,0.08), border rgba(148,163,184,0.2), color #94a3b8
  ```

#### 7.4.3 Grid de Informações
```
┌──────────────────┬──────────────────┐
│ Horário          │ Última Actualiz. │
│ 🕐 24h           │ ⏱ há 12 min      │
├──────────────────┼──────────────────┤
│ Estado           │ Rede             │
│ Com dinheiro     │ Multicaixa       │
└──────────────────┴──────────────────┘
```

- **Container:**
  - Display: grid
  - Grid-template-columns: 1fr 1fr
  - Gap: 10px
  - Margin-top: 12px

- **Cada Célula:**
  - Font-size: 13px

- **Label:**
  - Color: `#94a3b8`
  - Margin-bottom: 2px
  - Font-size: 11px
  - Text-transform: uppercase
  - Letter-spacing: 0.05em

- **Value:**
  - Color: `#f1f5f9`
  - Font-weight: 500

#### 7.4.4 Botões de Ação
```
┌─────────────────┬──────────────────┐
│ 📝 Reportar     │ ➡️ Ir para aqui  │
└─────────────────┴──────────────────┘
```

- **Container:**
  - Display: flex
  - Gap: 8px
  - Margin-top: 16px

- **Botão 1: Reportar Estado**
  - Flex: 1
  - Padding: 10px
  - Border-radius: 8px
  - Border: 1px solid `rgba(255,255,255,0.08)`
  - Background: `#1a2236`
  - Color: `#f1f5f9`
  - Font-size: 13px
  - Font-weight: 500
  - Display: flex
  - Align-items: center
  - Justify-content: center
  - Gap: 6px
  - Cursor: pointer
  - Hover: Background `#111827`, border `rgba(255,255,255,0.15)`
  - Função: Abre modal de reporte

- **Botão 2: Ir para Aqui**
  - Flex: 1
  - Padding: 10px
  - Border-radius: 8px
  - Border: 1px solid `#f97316`
  - Background: `#f97316`
  - Color: white
  - Font-size: 13px
  - Font-weight: 500
  - Display: flex
  - Align-items: center
  - Justify-content: center
  - Gap: 6px
  - Cursor: pointer
  - Hover: Background `#fb923c`
  - Função: Abre Google Maps com coordenadas do ATM em nova aba

---

## 8. MODAL DE REPORTE

### 8.1 Estrutura do Modal
```
┌──────────────────────────────┐
│  Reportar estado             │
│  Actualizar informação       │
│                              │
│  ○ 💵 Com dinheiro           │
│  ○ 💵🧾 Dinheiro + Papel    │
│  ○ 🧾 Só papel               │
│  ○ ❌ Sem dinheiro           │
│  ○ 🔧 Avariado              │
│                              │
│  [Cancelar] [Enviar]        │
└──────────────────────────────┘
```

- **Overlay:**
  - Position: fixed
  - Inset: 0 (covers entire screen)
  - Background: rgba(0,0,0,0.7)
  - Display: flex
  - Align-items: center
  - Justify-content: center
  - Z-index: 2000
  - Opacity: 0, pointer-events: none by default
  - Transition: opacity 0.2s
  - Classe `.open`: Opacity 1, pointer-events auto

- **Modal Box:**
  - Background: `#111827`
  - Border: 1px solid `rgba(255,255,255,0.08)`
  - Border-radius: 16px
  - Padding: 24px
  - Width: 420px
  - Max-width: 90vw
  - Box-shadow: Nenhuma (overlay escuro suficiente)

### 8.2 Conteúdo do Modal

- **Título:**
  - Font-family: Syne
  - Font-size: 18px
  - Font-weight: 700
  - Margin-bottom: 4px
  - Color: `#f1f5f9`

- **Subtítulo:**
  - Font-size: 13px
  - Color: `#94a3b8`
  - Margin-bottom: 20px
  - Conteúdo: "Actualizar informação deste ATM"

- **Grupo de Rádios:**
  - Display: flex
  - Flex-direction: column
  - Gap: 8px
  - Margin-bottom: 20px

  - **Cada Opção:**
    ```
    ○ 💵 Com dinheiro disponível
    ```
    - Display: flex
    - Gap: 10px
    - Padding: 12px 14px
    - Border-radius: 8px
    - Border: 1px solid `rgba(255,255,255,0.08)`
    - Background: transparent
    - Cursor: pointer
    - Font-size: 14px
    - Transition: all 0.15s

  - **Hover:**
    - Border-color: `#f97316`
    - Background: `rgba(249,115,22,0.06)`

  - **Selected (.selected):**
    - Border-color: `#f97316`
    - Background: `rgba(249,115,22,0.1)`
    - Color: `#f97316`

  - **Ícone:**
    - Font-size: 18px
    - Flex-shrink: 0

- **Botões de Ação:**
  - Display: flex
  - Gap: 8px
  - Justify-content: flex-end

  - **Cancelar:**
    - Classe: btn-ghost
    - Padding: 10px 16px
    - Função: Fecha modal (remove class .open)

  - **Enviar:**
    - Classe: btn-accent
    - Padding: 10px 16px
    - Função: Atualiza estado do ATM, mostra toast, fecha modal

---

## 9. TOAST DE NOTIFICAÇÃO

```
┌─────────────────────────────┐
│ ✅ Relatório enviado!       │
└─────────────────────────────┘
```

- **Position:** fixed, top 16px, left 50%
- **Transform:** translateX(-50%) translateY(-80px) (hidden), translateX(-50%) translateY(0) (shown)
- **Background:** `#111827`
- **Border:** 1px solid `rgba(255,255,255,0.08)`
- **Border-radius:** 12px
- **Padding:** 10px 16px
- **Font-size:** 13px
- **Display:** flex
- **Gap:** 8px
- **Z-index:** 900
- **Transition:** transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)
- **Classe `.show`:** Transforma para visível
- **Auto-hide:** Após 3 segundos, remove classe `.show`

- **Ícone:**
  - Font-size: 18px
  - Flex-shrink: 0

---

## 10. RESPONSIVIDADE

### 10.1 Breakpoints
```
Mobile (xs): < 480px
Mobile+ (sm): 480px - 640px
Tablet (md): 640px - 768px
Tablet+ (lg): 768px - 1024px
Desktop (xl): > 1024px
```

### 10.2 Mobile (< 768px)

#### Layout:
- Sidebar torna-se hidden (z-index negativo ou display none)
- Mapa ocupa 100% da largura
- Painel de detalhe muda de posição (bottom da viewport)

#### Header:
- Logo + texto visível
- Estatísticas hidden
- Botões: Apenas ícones
- Gap e padding reduzido

#### Mapa:
- Full-width
- Controles de zoom repositionados para bottom-left

#### Painel Detalhe:
- Max-height: 70vh em vez de fixed width
- Arrastável (handle visível)
- Fechar visível

#### Lista de ATMs:
- Acesso via painel detalhe ou sidebar deslizável (toggle com ícone no header)

#### Legenda:
- Hidden por padrão
- Toggle com botão no header

### 10.3 Desktop (> 768px)
- Tudo conforme especificado acima

### 10.4 Orientação em Dispositivos Móveis
- Landscape: Reduz altura do painel detalhe, aumenta altura do sidebar
- Portrait: Aumenta altura do painel detalhe, normal

---

## 11. ANIMAÇÕES E TRANSIÇÕES

### 11.1 Transições Globais
- **Padrão:** 0.15s ease-out
- **Suave:** 0.3s cubic-bezier(0.16, 1, 0.3, 1)

### 11.2 Animações Específicas

#### Pulse (Respiração)
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}
animation: pulse 2s infinite;
```
Usado em: Estatísticas do header

#### Slide Up (Painel Detalhe)
```css
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
```

#### Spin (Botão Geolocalização carregando)
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
animation: spin 1s linear infinite;
```
Ativa enquanto o geolocalização está a carregar

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 0.2s ease-out;
```
Usado em: Overlay do modal

---

## 12. INTERAÇÕES E FLUXOS

### 12.1 Fluxo: Pesquisar ATM
1. Utilizador digita na caixa de pesquisa
2. Lista filtra em tempo real (debounce 300ms)
3. Mapa atualiza (remove marcadores não filtrados, mantém visibilidade)
4. Contador de resultados atualiza
5. Se nenhum resultado: Mostrar mensagem vazia ("Nenhum ATM encontrado")

### 12.2 Fluxo: Filtrar por Estado
1. Utilizador clica num chip de filtro
2. Outros filtros desativam-se
3. Lista refiltra
4. Mapa atualiza
5. Painel de detalhe fecha (se aberto)

### 12.3 Fluxo: Filtrar por Banco
1. Utilizador clica numa bank chip
2. Se já ativo, desativa (mostra todos)
3. Se inativo, ativa e desativa outros
4. Lista refiltra
5. Mapa atualiza

### 12.4 Fluxo: Geolocalização
1. Utilizador clica "Minha Localização"
2. Botão muda para estado carregando (spinner)
3. Browser solicita permissão de geolocalização
4. Se permitido:
   - Adiciona marcador azul no mapa com animação de respiração
   - Zoom para a localização (nível 14)
   - Lista reordena por proximidade
   - Mostra distância em cada card
5. Se negado:
   - Toast com mensagem "Geolocalização negada"
   - Usa localização simulada (Luanda centro)

### 12.5 Fluxo: Seleccionar ATM
1. Utilizador clica num card na lista OU num marcador no mapa
2. Card destaca-se (border + background)
3. Painel de detalhe abre (slideUp)
4. Marcador no mapa também pode ter efeito visual subtil
5. Se clicado novamente (card já selecionado):
   - Painel fecha
   - Deselecciona

### 12.6 Fluxo: Reportar Estado
1. Utilizador abre painel de detalhe
2. Clica "Reportar Estado"
3. Modal abre com fade-in
4. Utilizador selecciona novo estado
5. Clica "Enviar"
6. Modal fecha
7. Card no sidebar e marcador no mapa atualizam cor
8. Toast confirma "Relatório enviado! Obrigado."
9. Painel de detalhe atualiza informação (se mantido aberto)

### 12.7 Fluxo: Ir para Aqui
1. Utilizador abre painel de detalhe
2. Clica "Ir para aqui"
3. Abre Google Maps em nova aba com as coordenadas do ATM
4. Painel permanece visível

### 12.8 Fluxo: Ordenação
1. Utilizador clica "Ordenar"
2. Cicla entre: A-Z → Estado → Próximo (se geolocalizado)
3. Label atualiza
4. Lista reordena
5. Animação suave (fade rápido)

---

## 13. DADOS DOS ATMs (Exemplo Estrutura)

```javascript
{
  id: 1,
  bank: "BFA",
  name: "BFA Mutamba",
  address: "Largo da Mutamba, Ingombota",
  latitude: -8.8190,
  longitude: 13.2340,
  status: "dinheiro", // "dinheiro" | "sem-dinheiro" | "papel" | "dinheiro-papel" | "quebrado"
  updated: "há 12 min",
  schedule: "24h",
  district: "Ingombota"
}
```

---

## 14. MENSAGENS E LABELS

### Vazio
"Nenhum ATM encontrado para os critérios seleccionados."

### Carregando Geolocalização
"A obter localização..."

### Geolocalização Negada
"Geolocalização negada. A usar localização simulada: Luanda Centro."

### Sucesso Reporte
"Relatório enviado! Obrigado pela sua contribuição."

### Estados (Tradução PT-Angola)
- "Com dinheiro"
- "Sem dinheiro"
- "Só papel disponível"
- "Dinheiro + Papel"
- "Avariado / Fora de serviço"

---

## 15. ACESSIBILIDADE (A11y)

- **Contrast Ratio:** Mínimo AA (WCAG 2.1)
  - Text on background
  - Icon on background
  
- **Font Size:** Mínimo 12px para corpo de texto

- **Touch Targets:** Mínimo 44×44px (mobile)

- **Keyboard Navigation:**
  - Tab navega entre elementos interactivos
  - Enter ativa botões
  - Escape fecha modais/painéis

- **ARIA Labels:**
  - Buttons: `aria-label` descritivo
  - Modal: `role="dialog"`, `aria-labelledby="modal-title"`
  - Icons: `aria-hidden="true"` se decorativo

- **Sem Dependência de Cor:**
  - Ícones acompanham o significado de cor
  - Estados claros além de cor (ícones, texto)

---

## 16. PERFORMANCE

- **Lazy Loading:**
  - Imagens do mapa (tiles)
  - Ícones de bancos (se em ficheiro separado)

- **Debouncing:**
  - Pesquisa: 300ms
  - Reordenação: Imediato (lista pequena)

- **Throttling:**
  - Geolocalização: Atualizar a cada 5 segundos máximo

- **Bundle Size Target:**
  - HTML: < 50KB
  - CSS: < 20KB (inline recomendado)
  - JS: < 100KB (inclui Leaflet.js)

---

## 17. CASOS DE USO ESPECÍFICOS

### Caso 1: Utilizador quer levantar dinheiro
1. Abre MultiFind
2. Permite geolocalização
3. Vê ATMs mais próximos ordenados por distância
4. Filtra por estado "Com dinheiro"
5. Selecciona o ATM mais próximo
6. Clica "Ir para aqui"
7. Abre Google Maps para navegação

### Caso 2: Utilizador quer reportar que um ATM está avariado
1. Abre MultiFind
2. Pesquisa por ATM específico
3. Clica no ATM
4. Abre painel de detalhe
5. Clica "Reportar Estado"
6. Selecciona "Avariado"
7. Clica "Enviar"
8. Recebe confirmação
9. Card e marcador atualizam cor

### Caso 3: Utilizador quer encontrar ATMs de um banco específico
1. Abre MultiFind
2. Clica numa bank chip (ex. "BFA")
3. Lista filtra apenas ATMs da BFA
4. Pode ordenar por A-Z ou proximidade
5. Selecciona um
6. Vê detalhes

---

## 18. DARK MODE (Implementado por Padrão)

A aplicação é totalmente em dark mode. Não há toggle de tema. Justificação:
- Melhor para mapas (tiles escuros padrão)
- Menos fadiga ocular em ambientes interiores
- Mais moderno e alinhado com aplicações móveis contemporâneas
- Código de cores é mais visível em fundo escuro

---

## 19. CHECKPOINTS DE DESIGN

Antes de iniciar development, validar:

- [ ] Paleta de cores aprovada e aplicada a todos componentes
- [ ] Tipografia e tamanhos de fonte consistentes
- [ ] Spacing vertical e horizontal padronizado (múltiplos de 4px/8px)
- [ ] Componentes responsivos em mobile, tablet, desktop
- [ ] Acessibilidade WCAG AA mínimo
- [ ] Performance < 3s load time em 3G
- [ ] Não há elementos em "development mode" ou placeholders
- [ ] Animações suave e sem lag
- [ ] Modal e painel funcionam em mobile (draggable, etc)
- [ ] Toast notificações funcionam
- [ ] Geolocalização trata permissões corretamente
- [ ] Mapa Leaflet renderiza com tiles corretos
- [ ] Marcadores são clicáveis e responsivos
- [ ] Lista sidebar é scrollável e não perde contexto
- [ ] Filtros e pesquisa reais (não mockados)
- [ ] Dados ATMs são realistas (29 ATMs de Luanda)

---

## 20. FICHEIROS E ESTRUTURA RECOMENDADA

```
multifind/
├── index.html                 (Template base)
├── css/
│   └── styles.css            (Todas as estilos, bem organizado)
├── js/
│   └── app.js                (Toda a lógica, modularizado)
├── assets/
│   ├── fonts/                (Syne, DM Sans)
│   └── icons/                (SVG ou emoji)
└── data/
    └── atms.js               (Array com 29 ATMs)
```

---

## 21. NOTA FINAL

Este é um guia completo que uma IA pode seguir para criar a interface perfeita para MultiFind. Cada detalhe é intencional e contribui para uma experiência de utilizador coerente, intuitiva e acessível. A chave é manter a consistência em cores, espaçamento, tipografia e comportamento interactivo.

**A qualidade é garantida pela atenção aos pequenos detalhes.**

✅ Pronto para desenvolvimento!