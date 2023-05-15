describe('Search Staff', () => {
    let staffName;
    const partOfStaffName = 'Tasnim';
    const staffEmailExist = 's12028850@stu.najah.edu';
    const partOfStaffEmail = 'najah';
    const staffEmailNotExist = 'Sal@gmail.com';
    const firstName ='Zain';
    const situationis  = 'N/A';


beforeEach(() => {
    cy.visit('/')

    cy.get('#id_username').type('TasnimMoh1');
    cy.get('select[name="login_as"]').select('Staff');
    cy.get('#id_password').type('TTGGVVDD$%^&{enter}');
    cy.get('a.nav-link.active.w-100').click();
    cy.get('a.nav-link.text-light').contains('Staff').click();

     cy.visit('https://goal-dev.mdx.ac.uk/staff/59/staffs/')
     cy.get('table#staffs').as('StaffTable');
     cy.get('input[type="search"]').as('inputSearch')
});
    

it('Search for the name of the staff', () => {
    staffName = 'TasnimMoh1';
   cy.get('@inputSearch').type(staffName);
   cy.get('@StaffTable').contains('td', staffName).should('be.visible');
});

it('Search for the part of name of the staff', () => {
   cy.get('@inputSearch').type(partOfStaffName);
   cy.get('@StaffTable').contains('td', partOfStaffName).should('be.visible');
});

it('Search for the email of the staff', () => {
   cy.get('@inputSearch').type(staffEmailExist);
   cy.get('@StaffTable').contains('td', staffEmailExist).should('be.visible' );
});

it('Search for the part of email of the staff', () => {
   cy.get('@inputSearch').type(partOfStaffEmail);
   cy.get('@StaffTable').contains('td', partOfStaffEmail).should('be.visible');
});

it('Search for the name of staff does not exist', () => {
    staffName = 'Rama';
   cy.get('@inputSearch').type(staffName);
   cy.get('@StaffTable').contains('td', staffName).should('not.exist');
});

it('Search for the email of staff does not exist', () => {
   cy.get('@inputSearch').type(staffEmailNotExist);
   cy.get('@StaffTable').contains('td', staffEmailNotExist).should('not.exist');
});

it('Search for the staff using his first name', () => {

   cy.get('@inputSearch').type(firstName);
   cy.get('@StaffTable').contains('td', firstName).should('be.visible');
});

it('Search for staff names based on the situation', () => {
   cy.get('@inputSearch').type(situationis );
   cy.get('@StaffTable').contains('td', situationis ).should('be.visible');

});

});