describe('Delete Staff', () => {
    let staffName;
     
beforeEach(() => {
    cy.visit('/')

    cy.get('#id_username').type('TasnimMoh1');
    cy.get('select[name="login_as"]').select('Staff');
    cy.get('#id_password').type('TTGGVVDD$%^&{enter}');
    cy.get('a.nav-link.active.w-100').click();
    cy.get('a.nav-link.text-light').contains('Staff').click();

     cy.visit('https://goal-dev.mdx.ac.uk/staff/59/staffs/');
     cy.get('button[type="button"]').contains('Add staff').as('addStaffBtn');
     cy.get('a.btn.btn-danger.btn-ok').contains('Remove').as('removeStaffBtn');
});
    
it('Delete the staff and then add it again.', () => {
    staffName = 'newstaff-RW';
   cy.contains('td', staffName).closest('tr').find('a[data-target="#confirm-delete"]').click({force: true});
   cy.get('@removeStaffBtn').click({force: true});
   cy.get('#new_staff').type(staffName);
   cy.get('@addStaffBtn').click();
});

it('verify delete button', () => {
    staffName = 'TasneemDw';
   cy.contains('td', staffName).closest('tr').find('a[data-target="#confirm-delete"]').click({force: true});
   cy.get('@removeStaffBtn').click({force: true});
});

it('verify cancel button', () => {
    staffName = 'khaled120';
   cy.contains('td', staffName).closest('tr').find('a[data-target="#confirm-delete"]').click({force: true});
   cy.get('button.btn.btn-default').contains('Cancel').click({force: true});
});

it('verify X button', () => {
    staffName = 'khaled120';
   cy.contains('td', staffName).closest('tr').find('a[data-target="#confirm-delete"]').click({force: true});
   cy.get('button.close[aria-hidden="true"]').click({force: true});
});

//This test case is to add the names that have been deleted and return the system as it was
it('Add the deleted name',() =>{
   cy.get('#new_staff').type('TasneemDw');
   cy.get('@addStaffBtn').click();
});


});