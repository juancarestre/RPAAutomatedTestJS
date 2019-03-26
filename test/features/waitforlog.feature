Feature: Simple maths
  In order to create the RPAAutomatedTestJs
  As the developer
  I to iterate my work with this scenario

  Scenario Outline: The test wait for a word in a log file
    Given test wait for <word1>
    When test wait for <word2>
    Then test wait for <word3>

    Examples:
      | word1 | word2 | word3 |
      | jaja  | jeje  | juju  |