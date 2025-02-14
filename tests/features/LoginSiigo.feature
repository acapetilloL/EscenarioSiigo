@SetupEnvironments
Feature: Logueo Inicial ambiente MX

Scenario Outline: Iniciar sesion en SiigoNubeMX
    Given que estoy en siigo "<env>" "<country>"
    When Inicio sesión
    Then quedo en la vista del dashboard
    Examples: 
        |env|country|
        |QA |MX    | 