Feature: SwagLabs Login Functionality


  Scenario Outline: User attempts to log in with invalid credentials
    Given SwagLabs application is opened
    When I enter the username <username> and password <password>
    And I click the login button
    Then I should see the error <result_message>

    Examples:
      | username        | password     | result_message                                               |
      | locked_out_user | secret_sauce | Sorry, this user has been locked out.                        |
      | 1@2.com         | f-o-o        | Username and password do not match any user in this service. |
      |                 |              | Username is required                                         |
      | bob@example.com |              | Password is required                                         |


  Scenario Outline: User attempts to log in with valid credentials
    Given SwagLabs application is opened
    When I enter the username <username> and password <password>
    And I click the login button
    Then I should see the PRODUCTS page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |