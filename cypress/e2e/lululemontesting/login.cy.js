///<reference types="cypress"/>

describe("login suite",()=>{
    it("login test",()=>{
       
    // Step 1: Visit login page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait(5000);

    // Step 2: Login with credentials
        cy.get('input[name="username"]',{timeout:10000}).type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        cy.get('.oxd-button').click();
//kkiran
  // Step 3: Navigate to My Info
      cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
       cy.wait(5000);

       
  // Step 4: Navigate to Qualifications tab
        cy.contains('a', 'Qualifications').click();
        cy.wait(5000);
   
 //Step5:Click Add
        cy.get(':nth-child(5) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click();
        cy.wait(5000);
  
  //Step 6:language dropdwn
         cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
         cy.wait(5000);

// Step 7: Select English from Language dropdown
         cy.contains('span', 'English').click();
         cy.wait(5000);

// Step 8: Select Good from fluency dropdown
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
       cy.wait(5000);
       cy.contains('span', 'Writing').click();
       cy.wait(5000);

// Step 9: Select Good from Competency dropdown
       cy.get(':nth-child(3) > .oxd-input-group').click();
       cy.wait(5000);
       cy.contains('span', 'Good').click();
       cy.wait(5000);

// Step 10: Enter comments
     cy.get('textarea').type('English reading skills are good');

 // Step 10: Save
    cy.get('.oxd-button--secondary').click();
    cy.wait(5000);

// ✅ Step 11: Verification
    cy.contains('English').should('be.visible');
    cy.contains('Writing').should('be.visible');
    cy.contains('Good').should('be.visible');
   
  })
})     
 
 
 
 
