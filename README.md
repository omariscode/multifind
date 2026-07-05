# MultiFind — ATMs em Luanda

Plataforma web para mapeamento e monitorização de ATMs em Luanda, Angola. Permite visualizar o estado dos ATMs (com dinheiro, sem dinheiro, papel, avariado) num mapa interactivo, encontrar o ATM mais próximo e traçar rotas.

## Funcionalidades

- **Mapa interactivo** com 60 ATMs mapeados em Luanda
- **Estado em tempo real**: com dinheiro, sem dinheiro, só papel, dinheiro+papel, avariado
- **Pesquisa** por nome, banco ou bairro
- **Filtros** por estado e por banco
- **Geolocalização** para ordenar ATMs por proximidade
- **Roteamento** com distância, tempo estimado e instruções passo-a-passo (OSRM)
- **Fallback de rota** com distância em linha recta e link para Google Maps
- **Reporte de estado** para a comunidade actualizar a informação dos ATMs
- **Design responsivo** (desktop e mobile)
- **Modo escuro**

## Como usar

1. Abre o `index.html` num browser
2. Clica em **Localizar** para obter a tua localização
3. Navega no mapa ou pesquisa por banco/bairro
4. Clica num ATM para ver detalhes
5. Clica em **Ir para aqui** para traçar a rota

## Tecnologias

- [Leaflet](https://leafletjs.com/) — mapa interactivo
- [Leaflet Routing Machine](https://www.lleaflet.com/) — roteamento OSRM
- [OpenStreetMap](https://www.openstreetmap.org/) — dados cartográficos
- HTML + CSS + JavaScript (organizado em `index.html`, `css/style.css`, `js/app.js`)


## Dados

Os ATMs estão concentrados em Luanda, cobrindo bairros como:
Ingombota, Maianga, Rangel, Alvalade, Viana, Talatona, Kilamba, Sequele, Morro Bento, Camama, Benfica, Belas, Corimba, Futungo, Prenda, Sambizanga, São Paulo, Cazenga, Cacuaco, Palanca, Ilha do Cabo.

## Licença

MIT
