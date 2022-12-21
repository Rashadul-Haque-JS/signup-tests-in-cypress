describe("signup tests exercise", () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:3000/');
    })

    // ******************************************API TESTS*********************************************

    // Test level POST method
    it('should get successful API response message with stausCode 200', () => {
        cy.request('POST', 'http://localhost:3000/signup/', {
            "firstname": "Foo",
            "lastname": "Bar",
            "email": "foo.bar@example.com",
            "password": "password"
        }).then(
            (response) => {
                // In cypress response.body is automatically serialized into JSON 
                expect(response.body).to.have.property('message', 'Successful', 'status', 200)
            }
        )
    })

    // ******************************************E2E TESTS*********************************************

    // Selector 'sup' stands for signup which is used to maintain unique name

    // Test level 1
    it('should dispaly all input fields border in red and error message in gold with name of empty fields.', () => {
        // Now cypress API (get) will click submit button to check
        cy.get('[data-cy="form-sup"]').submit()
        cy.get('[data-cy="info-sup"]').should('have.length', 1)
        cy.get('[data-cy="info-sup"]').contains("firstname,lastname,email,password is required")
    })

    // Test level 2
    it('should dispaly only empty input fields border in red and error message in gold with its name.', () => {
        // Now cypress API (get) will click submit button to check
        cy.get('[data-cy="fname-sup"]').type('Foo')
        cy.get('[data-cy="email-sup"]').type('foo.bar@example.com')
        cy.get('[data-cy="form-sup"]').submit()
        cy.get('[data-cy="info-sup"]').should('have.length', 1)
        cy.get('[data-cy="info-sup"]').contains("lastname,password is required")
    })

    // Test level 3
    it('should display greetings message with mentioning users firstname in white and uppercase.', () => {
        // Now cypress API (get) will click submit button to check
        cy.get('[data-cy="fname-sup"]').type('Foo')
        cy.get('[data-cy="lname-sup"]').type('Bar')
        cy.get('[data-cy="email-sup"]').type('foo.bar@example.com')
        cy.get('[data-cy="password-sup"]').type('password')
        cy.get('[data-cy="form-sup"]').submit()
        cy.get('[data-cy="info-sup"]').should('have.length', 1)
        cy.get('[data-cy="api-info-sup"]').contains("Successful")
        cy.get('[data-cy="info-sup"]').should('have.css', 'letter-spacing', '6px')
    })


})