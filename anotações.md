**API**

*o que é uma API:*
 - chamado e resposta de informações;
 - carrega informações;
 - comunicação entre diferentes sistemas software;

 RESTFUL: escalabilidade e flexibilidade;

API Restful: representação do status de transferencia, baseada na protocolo HTTP para a realização de ações;

*métodos em HTTP:*

    GET: recupera informações;
    POST: cria uma nova informação;
    PUT: atualiza uma informação;
    DELETE: remove uma informações especificada pela URI;
    PATCH: atualiza parcialmente uma informação;
    HEAD: retorna apenas o cabeçalhos da resposta;
    OPTIONS: retorna o método suportado para determinado recurso;

*códigos de status:*

    1xx - informacional (a requisição foi recebida e servidor está processando)
    2xx - sucesso (tudo ocorreu da maneira esperada)
    3xx - redirecionamento (indica que o cliente precisa incluir dados adicionais para concluir a requisição)
    4xx - erro do cliente (erro de requisição, informações incorretas)
    5xx - erro do servidor (erro do servidor ao tentar processar a informação)

*princípios da API RESTFUL:*

 - arquitetura cliente-servidor -> separação entre a lógica do cliente com o servidor;
 - stateless (sem estado) -> cada requisição do cliente deverá ser completa para a compreensão do servidor;
 - cacheabilidade -> delimitação de uso de cache ou não, para reduzir a demanda sobre servidores;
 - interface uniforme;
 - sistema em camada -> escalabilidade e independência de componentes;
 - codificação opcional;

simplicidade, flexibilidade, interface uniforme, desempenho e escalabilidade são pontos marcantes da API Restful!

*ferramentas e frameworks:*
 - swagger (documentação das APIS - OpenAPI)
 - postman (testes de APIS)
 - insominia (teste de API)

*tipos de usabilidade*

utilizado em aplicações webs e mobiles, integrações de sistemas, IoT e microsserviços;

**TESTE**

*o que é teste de software:*

- validações do código, encontro de bugs;
- teste de segurança da aplicação;
- usabilidade;
- garante uma fácil manutenção;

tradicional: guiada no problema, esquece os outros parametros, segue sem alteração no planejamento de teste, só existe um entrega;

ágeis: análisa todos os parametros, flexível, entrega + demorada, acontece no mesmo tempo de desenvolvimento;

atividades: detecta bugs, segue espificações do projeto, certifica que o código está intuitivo, dá feedback do projeto;

    caixa branca: tem o código na mão, verifica componente por componente - verifica condições;

    caixa preta: avalia o software sem a visibilidade do código - teste de usabilidade;

**teste unitário:** testa de forma isolada;

**teste de integração:** testa a interação entre duas ou mais funções;

**teste end-to-end:** testa todo o percuso da aplicação;