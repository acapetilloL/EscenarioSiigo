@SetupEnvironments
Feature: Acceder a la vista Nota de Venta

Scenario Outline: Ingresar al modulo Nota de venta
    Given que estoy en el dashboard siigo "<env>" "<country>"
    When seleccione "Crear Una nota de Venta"
    Then quedo en la plantilla principal "Crear Nota de Venta"
    
    Examples: 
        |env|country|
        |QA |MX    | 