Feature: UC002 - Entrar no Sistema
    Este caso de uso permite que usuários cadastrados possam se autenticar no sistema.
	Pré-condição: Usuário ter realizado um cadastro no sistema. UC001
    Caminho no sistema: Página inicial > Entrar
    O usuário preencher os campos: E-mail e senha.
    O usuário clica no botão 'Entrar'.
    O sistema exibe uma mensagem de sucesso.      
    
    Scenario: Fluxo Principal

    Given usuario acessa a pagina inicial
    When preenche campos email,senha e botao Entrar 
    Then o sistema exibe uma mensagem de sucesso
