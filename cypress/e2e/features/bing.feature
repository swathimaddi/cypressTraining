# Amazon search functionality feature file

Feature: Bing Test Suite
    This feature file will validate title of home page and search functionality

    Background: setupblock
        Given User is on Bing home page


    @sanity
    Scenario: Title Validation
        It will validate the title of home page

        Then Title should contain "Bing"


    @smoke
    Scenario: Search Validation
        It will validate the search functionality

        When User types a word as "cypress"
        # Then User is able to view the given word matches list
        And User should be able to select from list
        # When User select or click on  "cypress" from list
        Then Search result should be displayed on the page


    # @ddt
    # Scenario Outline: Search ddt Validation
    #     It will validate the search functionality for each set of values defined in examples block

    #     When User types a word as "<search>"
    #       # Then User is able to view the given word matches list
    #     And User should be able to select from list
    #     When User select or click on  "cypress" from list
    #     Then Search result should be displayed

    #     Examples:
    #         | search    |
    #         | cypress   |
