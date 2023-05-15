describe('Add Staff', () => {
    let staffName;

beforeEach(() => {
    cy.visit('/')

    cy.get('#id_username').type('TasnimMoh1');
    cy.get('select[name="login_as"]').select('Staff');
    cy.get('#id_password').type('TTGGVVDD$%^&{enter}');
    cy.get('a.nav-link.active.w-100').click();
    cy.get('a.nav-link.text-light').contains('Staff').click();

     cy.visit('https://goal-dev.mdx.ac.uk/staff/59/staffs/')

     cy.get('button[type="button"]').contains('Add staff').as('addStaffBtn');
     cy.get('a.btn.btn-danger.btn-ok').contains('Remove').as('removeStaffBtn');

});

it('Add a user that does not exist in the module',() =>{
     staffName = 'Tasnim';
    cy.get('#new_staff').type(staffName);
    cy.get('@addStaffBtn').click();
});

it('Add  a Student instead a staff name',() =>{
     staffName = 'SajaMoh';
    cy.get('#new_staff').type(staffName);
    cy.get('@addStaffBtn').click();
});

it('Add a correct staff name.',() =>{
     staffName = 'newstaff';
    cy.get('#new_staff').type(staffName);
    cy.get('@addStaffBtn').click();
});

//This test case is to delete the names that have been add and return the system as it was
it('Delete the names that have been added', () => {
    cy.contains('td', 'Tasnim').closest('tr').find('a[data-target="#confirm-delete"]').click({force: true});
    cy.get('@removeStaffBtn').click();

    cy.contains('td', 'SajaMoh').closest('tr').find('a[data-target="#confirm-delete"]').click({force: true});
    cy.get('@removeStaffBtn').click();

    cy.contains('td', 'newstaff').closest('tr').find('a[data-target="#confirm-delete"]').click({force: true});
    cy.get('@removeStaffBtn').click();
});

});
