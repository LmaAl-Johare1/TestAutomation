describe('Observer Functionality', () => {

    // Before running the tests, perform these setup steps
    before(() => {
        cy.visit('https://goal-dev.mdx.ac.uk/')  // Visit the specified URL
        cy.loginAsStaff()  // Perform staff login
        cy.selectModule('GroupTLR120/Palestine: GroupTLR120')  // Select a specific module
        cy.visit('https://goal-dev.mdx.ac.uk/staff/59/goals/')  // Visit the goals page
    })

    // Test case 1 - Display a group for observation in a topic
    it('TC1 - Displays a group for observation in a topic', () => {
        cy.contains('label', 'Topic 1').click();  // Click on the label with 'Topic 1'
        cy.get('#topic_126').should('be.checked');  // Verify that the checkbox with ID 'topic_126' is checked
        cy.contains('label', 'Group1').click();  // Click on the label with 'Group1'
        cy.get('#group_Group1').should('be.checked');  // Verify that the checkbox with ID 'group_Group1' is checked
        cy.get('#all_levels').should('be.checked');  // Verify that the checkbox with ID 'all_levels' is checked
        cy.get('.col-sm-2').contains('Apply filters').click();  // Click on the element with class 'col-sm-2' and containing the text 'Apply filters'
    });
    
// Test case 2 - Observe all goals appear
it('TC2 - Observe all goals appear', () => {
    cy.get('.container > .align-items-center').click();
    // Click on the element with class 'container' and the child element with class 'align-items-center'

    cy.get('.col-sm-2:nth-child(5) > .btn').click();
    // Click on the fifth child element with class 'col-sm-2' and the nested element with class 'btn'

    cy.get('.col-sm-2 > .btn-danger').click();
    // Click on the element with class 'col-sm-2' and the nested element with class 'btn-danger'
});


    // Custom Cypress commands

    // Custom command to perform staff login
    Cypress.Commands.add('loginAsStaff', () => {
        cy.get('select[name="login_as"]').select('Staff');  // Select the option with name 'Staff' from the dropdown with name 'login_as'
        cy.get('input#id_username').type('LmaAlJohare');  // Enter the staff username
        cy.get('input#id_password').type('11924075CAP');  // Enter the staff password
        cy.get('form').submit();  // Submit the login form
    });

    // Custom command to select a module
    Cypress.Commands.add('selectModule', (moduleName) => {
        cy.contains('.list-group-item', moduleName)
          .find('.nav-link')
          .click();  // Find the element with class 'list-group-item' and containing the specified moduleName, then click on the nested element with class 'nav-link'
    });
});
