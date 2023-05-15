describe('Apply filter test', () => {

   beforeEach(() => {
      cy.visit('https://goal-dev.mdx.ac.uk/');
      cy.get('form[action="/login/"]').should('exist');
     cy.get('#id_username').type('RaghadAhmad');
     cy.get('#id_password').type('TTGGVVDD$%^&');
     cy.get('select[name="login_as"]').select('staff');
     cy.get('.btn').click();
     cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
     cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
  });

 /*
 Test case 1: "click apply filter without any goals selected"

   This test case simulates clicking the "Apply Filter" button without selecting any goals.
   It verifies the behavior of the system when no goals are chosen.
  */
   it('click apply filter without any goals selected', ()=> {
      cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
       
   });

   /* 
   Test case 2: "click apply filter with all goals selected"

    This test case selects all goals and then clicks the "Apply Filter" button.
    It tests the behavior of the system when all goals are chosen.
   */
   it('click apply filter with all goals selected', ()=> {
      cy.get(':nth-child(1) > .custom-control-label > h5').click();// select all goals
     cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
       
   });
 /*
 Test case 3: "click apply filter with all goals selected & all groups"

    This test case selects all goals and all groups, and then clicks the "Apply Filter" button.
    It checks the behavior of the system when all goals and groups are chosen.
 */
   it('click apply filter with all goals selected & all groubs', ()=> {
      cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click()// select all groubs
      cy.get(':nth-child(1) > .custom-control-label > h5').click();;// select all goals
     cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
       
   });
 /*
 Test case 4: "click apply filter with all goals selected & all groups & without any other filter"

    This test case selects all goals, all groups, and removes the selection from the "Unobserved" filter.
    Then it clicks the "Apply Filter" button to test the behavior when all goals, groups, and no other filters are applied.
 */
   it('click apply filter with all goals selected & all groubs & without any other filter', ()=> {
      cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').click();// remove select from unobserved
      cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();// select all groubs
      cy.get(':nth-child(1) > .custom-control-label > h5').click();// select all goals
     cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
       
   });
 /*
 Test case 5: "click apply filter with all goals selected & none groups"

    This test case selects all goals and deselects all groups, then clicks the "Apply Filter" button.
    It verifies the behavior of the system when all goals are chosen but no groups are selected.
    */
   it('click apply filter with all goals selected & none groubs ', ()=> {
     cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(2) > .custom-control-label').click();// select none
     cy.get(':nth-child(1) > .custom-control-label > h5').click();// select all goals
     cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
       
   });
/*
Test case 6: "click apply filter with one topic selected & all groups"

    This test case selects one topic, selects all groups, and then clicks the "Apply Filter" button.
    It tests the behavior of the system when one topic and all groups are chosen.
*/
   it('click apply filter with one topic selected & all groubs ', ()=> {
      cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();// select all groubs
      cy.get(':nth-child(3) > .custom-control-label > h5').click();// select topic 1
      cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
        
    });
/*
Test case 7: "click apply filter with all goals selected & all groups & just medium level"

    This test case selects all goals, all groups, and the "Medium" level in the level filter.
    Then it clicks the "Apply Filter" button to test the behavior with the specified filters applied.
*/
   it('click apply filter with all goals selected & all groubs & just medium level', ()=> {
      cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click()// select all groubs
      cy.get(':nth-child(1) > .custom-control-label > h5').click();// select all goals
      cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').click();// un selecte all level filter
      cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(3) > .custom-control-label').click();// selecte meduim level
      cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
       
   });
 /*
 Test case 8: "click apply filter with all goals selected & all groups & all levels except medium level"

    This test case selects all goals, all groups, and deselects the "Medium" level in the level filter.
    Then it clicks the "Apply Filter" button to test the behavior with the specified filters applied.
 */
 it('click apply filter with all goals selected & all groubs & all levels except medium level', ()=> {
         cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click()// select all groubs
         cy.get(':nth-child(1) > .custom-control-label > h5').click();// select all goals
         cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(3) > .custom-control-label').click();// selecte meduim level
         cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
          
      });
/*
Test case 9: "click apply filter with all goals selected & group 1"

    This test case selects all goals and selects "Group 1" in the group filter.
    Then it clicks the "Apply Filter" button to test the behavior with the specified filters applied.
*/
 it('click apply filter with all goals selected & groub1 ', ()=> {
        cy.get(':nth-child(3) > .custom-control > .custom-control-label').click();// selecte groub 1
        cy.get(':nth-child(1) > .custom-control-label > h5').click();// select all goals
        cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
          
      });
/*
Test case 10: "click apply filter with all goals selected & all groups & with expected by now filter"

    This test case removes the selection from the "Unobserved" filter, selects the "Expected by Now" filter,
    selects all goals, all groups, and then clicks the "Apply Filter" button.
    It tests the behavior of the system with the specified filters applied.
*/
 it('click apply filter with all goals selected & all groubs & with  expected by now filter', ()=> {
         cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').click();// remove select from unobserved
         cy.get('[style="height: 10vh"] > :nth-child(2) > .custom-control-label').click();// selevte expected by now
           cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click();// select all groubs
         cy.get(':nth-child(1) > .custom-control-label > h5').click();// select all goals
        cy.get('.align-items-center > :nth-child(3) > .btn').click();// click apply filter
          
      });
})
