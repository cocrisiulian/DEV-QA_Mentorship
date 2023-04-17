describe('TC1', function(){
    it("verify buttons", function(){
        //Am folosit comanda aceasta deoarece am intampinat o problema cu suprapunearea a doua elemente, din moment ce nu a fost specificat in preconditii am luat decizia de a folosi urmatoarea metoda
        cy.viewport(1920, 1080)
        //Viziteaza site-ul
        cy.visit("https://iwanttohelp.bim.assistcloud.services")
        cy.get('.nav-link.router-link-exact-active.router-link-active').click()
        //identifica si face actiunea de click pe butonanele de:
        //Top Voluntari
        cy.get(".nav-link[href='/search']").click()
        //Lista Nevoi
        cy.get(".nav-link[href='/needs_list']").click()
        //Despre noi
        cy.get(".nav-link[href='/about']").click()
        //Ofera Sugestie
        cy.get(".nav-link[href='/contact']").click()
        //Devino Voluntar
        cy.get(".nav-link[href='/auth/register']").click()
        //Autentificare
        cy.get(".nav-link[href='/auth/login']").click()
    })
})



describe('TC2', () => {
    it('displays the map and at least one volunteer', () => {
      cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneza butonul de Top Voluntari
      cy.xpath("//a[normalize-space()='Top voluntari']").click()
      //Actioneaza butonul
      cy.get(".dismissButton").click()
      // Verifica daca harta este afisata
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').should('be.visible')
      // Verifica daca este afisat un voluntar
      cy.get('.container-fluid > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .row > :nth-child(1)').should("exist")
    })
})


describe('TC3', () => {
    it('Verify the user is able to Zoom in or out the map', () => {
      cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneza butonul de Top Voluntari
      cy.xpath("//a[normalize-space()='Top voluntari']").click()
      //Actioneaza butonul
      cy.get(".dismissButton").click()
      // Verifica daca harta este afisata
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').should('be.visible')
      // Verifica daca este afisat un voluntar
      cy.get('.container-fluid > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .row > :nth-child(1)').should('be.visible')
      //Actioneaza butonul de zoom in
      cy.get("button[title='Zoom in']").click()
      //Actioneaza butonul de zoom out
      cy.get("button[title='Zoom out']").click()
    })
})



describe('TC4', () => {
    it('Verify that Login functionality works with valid credentials.', () => {
      cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneaza butonul de Autentificare
      cy.xpath("//a[normalize-space()='Autentificare']").click()
      //Introduce numarul de telefon
      cy.get('[name="phone_number"]').type("0790524492")
      //Introduce parola
      cy.get('[name="password"]').type("parola")
      //Actioneaza buton Autentificare
      cy.xpath("//button[normalize-space()='Autentificare']").click()
    })
})

describe('TC5', () => {
    it('Verify that Login functionality works with invalid credentials.', () => {
      cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneaza butonul de Autentificare
      cy.xpath("//a[normalize-space()='Autentificare']").click()
      //Introduce numarul de telefon
      cy.get('[name="phone_number"]').type("1231231231")
      //Introduce parola
      cy.get('[name="password"]').type("1231231231")
      //Actioneaza buton Autentificare
      cy.xpath("//button[normalize-space()='Autentificare']").click()
    })
})

describe('TC6', () => {
    it('Verify that a user is able to add a new Nevoie recomandata.', () => {
      cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneaza butonul de Autentificare
      cy.get('[href="/auth/login"]').click()
      //Introduce numarul de telefon
      cy.get('[name="phone_number"]').type("0790524492")
      //Introduce parola
      cy.get('[name="password"]').type("parola")
      //Actioneaza buton Autentificare
      cy.xpath("//button[normalize-space()='Autentificare']").click()
      //Actioneaza butonul de Nevoi Recomandate
      cy.url().should('include',"https://iwanttohelp.bim.assistcloud.services/dashboard","timeout: 10.000")
      cy.xpath("//p[normalize-space()='Nevoi recomandate']").click()
      //Actioneaza butonul de new
      cy.get("button[title='Add new']").click()
      //Completare de campuri necesare
      //Prenume
      cy.get('[name="contact_first_name"]').type("prenume")
      //Nume
      cy.get('[name="contact_last_name"]').type("nume")
      //Numar de telefon
      cy.get('[name="contact_phone_number"]').type("1231231231")
      //Tipul de nevoie
      //Apasarea drop-down-button
      cy.get("input[placeholder='Selectati tipul de nevoie']").click()
      cy.get('#vs1__option-0').click()
      //Descriere
      cy.get('[name="description"]').type("Alimentele de baza, precum: apa, faina, ulei, zahar, sare")
      //Strada
      cy.get("input[placeholder='Nume strada, numar ...']").type("Str. 1 Decembrie, Nr. 12")
      //Detalii
      cy.get('[name="details"]').type("Etaj 3, Apartament 15")
      //Judet
      cy.get('[name="county"]').type("Constanta")
      //Oras
      cy.get('[name="city"]').type("Costinesti")
      //Cod Postal
      cy.get('[name="postal_code"]').type("907090")
      //Actioneaza buton Trimite
      cy.get('.btn').click()
    })
})

describe('TC7', () => {
    it('Verify that the Descriere field is required.', () => {
      cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneaza butonul de Autentificare
      cy.get('[href="/auth/login"]').click()
      //Introduce numarul de telefon
      cy.get('[name="phone_number"]').type("0790524492")
      //Introduce parola
      cy.get('[name="password"]').type("parola")
      //Actioneaza buton Autentificare
      cy.xpath("//button[normalize-space()='Autentificare']").click()
      //Actioneaza butonul de Nevoi Recomandate
      cy.url().should('include',"https://iwanttohelp.bim.assistcloud.services/dashboard","timeout: 10.000")
      cy.xpath("//p[normalize-space()='Nevoi recomandate']").click()
      //Actioneaza butonul de new
      cy.get("button[title='Add new']").click()
      //Completare de campuri necesare
      //Prenume
      cy.get('[name="contact_first_name"]').type("prenume")
      //Nume
      cy.get('[name="contact_last_name"]').type("nume")
      //Numar de telefon
      cy.get('[name="contact_phone_number"]').type("1231231231")
      //Tipul de nevoie
      //Apasarea drop-down-button
      cy.get("input[placeholder='Selectati tipul de nevoie']").click()
      cy.get('#vs1__option-0').click()
      //Strada
      cy.get("input[placeholder='Nume strada, numar ...']").type("Str. 1 Decembrie, Nr. 12")
      //Detalii
      cy.get('[name="details"]').type("Etaj 3, Apartament 15")
      //Judet
      cy.get('[name="county"]').type("Constanta")
      //Oras
      cy.get('[name="city"]').type("Costinesti")
      //Cod Postal
      cy.get('[name="postal_code"]').type("907090")
      //Actioneaza buton Trimite
      cy.get('.btn').click()
    })
})

describe('TC8', () => {
    it('Verify that the user is able to use “Vizualizeaza” functionality.', () => {
      cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneaza butonul de Autentificare
      cy.get('[href="/auth/login"]').click()
      //Introduce numarul de telefon
      cy.get('[name="phone_number"]').type("0790524492")
      //Introduce parola
      cy.get('[name="password"]').type("parola")
      //Actioneaza buton Autentificare
      cy.xpath("//button[normalize-space()='Autentificare']").click()
      //Actioneaza butonul de Nevoi Recomandate
      cy.url().should('include',"https://iwanttohelp.bim.assistcloud.services/dashboard","timeout: 10.000")
      cy.xpath("//p[normalize-space()='Nevoi recomandate']").click()
      //Actioneaza buton Vizualizare
      cy.xpath("//i[@title='Vizualizeaza']").should('be.visible').first().click()
    })
})

describe('TC9',() => {
  it('Verify that the user is able to use “Sterge” functionality', () => {
    cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneaza butonul de Autentificare
      cy.xpath("//a[normalize-space()='Autentificare']").click()
      //Introduce numarul de telefon
      cy.get('[name="phone_number"]').type("0790524492")
      //Introduce parola
      cy.get('[name="password"]').type("parola")
      //Actioneaza buton Autentificare
      cy.xpath("//button[normalize-space()='Autentificare']").click()
      //Actioneaza butonul de Nevoi Recomandate
      cy.url().should('include',"https://iwanttohelp.bim.assistcloud.services/dashboard","timeout: 10.000")
      cy.xpath("//p[normalize-space()='Nevoi recomandate']").click()
      //Actioneaza buton Stergere
      cy.xpath("//i[@title='Sterge']").first().click()
      //Actioneaza buton Confirm
      cy.xpath("//button[normalize-space()='Confirma']").click()
  })
})

describe('TC10',() => {
  it('Verify the search functionality', () => {
    cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneaza butonul de Autentificare
      cy.xpath("//a[normalize-space()='Autentificare']").click()
      //Introduce numarul de telefon
      cy.get('[name="phone_number"]').type("0790524492")
      //Introduce parola
      cy.get('[name="password"]').type("parola")
      //Actioneaza buton Autentificare
      cy.xpath("//button[normalize-space()='Autentificare']").click()
      //Actioneaza butonul de Nevoi Recomandate
      cy.url().should('include',"https://iwanttohelp.bim.assistcloud.services/dashboard","timeout: 10.000")
      cy.xpath("//p[normalize-space()='Nevoi recomandate']").click()
      //Cautare dupa descriere
      cy.get("[name='Filter']").type("Alimentele de baza, precum: apa, faina, ulei, zahar, sare")
      //Verificare daca exista element cautat, in cazul in care exista "o nevoie" va returna true, in cazurile contrare va returna o eroare
      cy.xpath("//td[@data-label='Descriere']").should('exist')||("xpath", "//p[normalize-space()='Momentan nu sunt inregistrari.']").should('not.exist')||('xpath',"//p[contains(text(),'Nu s-au gasit rezultate pentru cautarea dumneavoas')]").should('not.exist')
      //Sterge caracterele din input
      cy.get("[name='Filter']").clear()
      //Cautare dupa persoana de contact
      cy.get("[name='Filter']").type("prenume nume")
      //Verificare daca exista element cautat, in cazul in care exista "o nevoie" va returna true, in cazurile contrare va returna o eroare
      cy.xpath("//td[@data-label='Persoana contact']").should('exist')||("xpath", "//p[normalize-space()='Momentan nu sunt inregistrari.']").should('not.exist')||('xpath',"//p[contains(text(),'Nu s-au gasit rezultate pentru cautarea dumneavoas')]").should('not.exist')
      //Sterge caracterele din input
      cy.get("[name='Filter']").clear()
      //Cautare dupa Adresa
      cy.get("[name='Filter']").type("Str. 1 Decembrie, Nr. 12")
      //Verificare daca exista element cautat, in cazul in care exista "o nevoie" va returna true, in cazurile contrare va returna o eroare
      cy.xpath("//td[@data-label='Adresa']").should('exist')||("xpath", "//p[normalize-space()='Momentan nu sunt inregistrari.']").should('not.exist')||('xpath',"//p[contains(text(),'Nu s-au gasit rezultate pentru cautarea dumneavoas')]").should('not.exist')
      //Sterge caracterele din input
      cy.get("[name='Filter']").clear()
      //Cautare dupa numar de telefon
      cy.get("[name='Filter']").type("1231231231")
      //Verificare daca exista element cautat, in cazul in care exista "o nevoie" va returna true, in cazurile contrare va returna o eroare
      cy.xpath("//td[@data-label='Telefon']").should('exist')||("xpath", "//p[normalize-space()='Momentan nu sunt inregistrari.']").should('not.exist')||('xpath',"//p[contains(text(),'Nu s-au gasit rezultate pentru cautarea dumneavoas')]").should('not.exist')
      //Sterge caracterele din input
      cy.get("[name='Filter']").clear()
    })
})

describe('TC11', () => {
    it('Verify that the user is able to use “Vizualizeaza” functionality for another user.', () => {
      cy.viewport(1920, 1080)
      //Viziteaza site-ul
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      //Actioneaza butonul de Autentificare
      cy.get('[href="/auth/login"]').click()
      //Introduce numarul de telefon
      cy.get('[name="phone_number"]').type("0790524492")
      //Introduce parola
      cy.get('[name="password"]').type("parola")
      //Actioneaza buton Autentificare
      cy.xpath("//button[normalize-space()='Autentificare']").click()
      //Actioneaza butonul de Nevoi
      cy.xpath("//p[normalize-space()='nevoi']").click()
      cy.url().should('include',"https://iwanttohelp.bim.assistcloud.services/dashboard/needs", "timeout: 10.000")
      //Actioneaza buton Vizualizare
      cy.xpath("//i[@title='Vizualizeaza']").should('be.visible').first().click()
      //Verificare daca exista Vizualizare nevoie
      cy.xpath("//h5[contains(text(), 'Vizualizare nevoie')]").should('contain', "Vizualizare nevoie")
    })
})

describe('TC12', () => {
  it('Verify “Aplica” functionality.', () => {
    cy.viewport(1920, 1080)
    //Viziteaza site-ul
    cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    //Actioneaza butonul de Autentificare
    cy.get('[href="/auth/login"]').click()
    //Introduce numarul de telefon
    cy.get('[name="phone_number"]').type("0790524492")
    //Introduce parola
    cy.get('[name="password"]').type("parola")
    //Actioneaza buton Autentificare
    cy.xpath("//button[normalize-space()='Autentificare']").click()
    //Actioneaza butonul de Nevoi
    cy.xpath("//p[normalize-space()='nevoi']").click()
    cy.url().should('include',"https://iwanttohelp.bim.assistcloud.services/dashboard/needs", "timeout: 10.000")
    //Actioneaza buton Aplica
    cy.get("[class='fas fa-user-check text-primary action-icon']").should('not.have.css', 'pointer-events', 'none').first().click()
    //Confirmare aplicare
    cy.xpath("//button[normalize-space()='Confirma']").should('be.visible', "timeout: 10.000")
  })
})

describe('TC13', () => {
  it('Verify “Completeaza” functionality.', () => {
    cy.viewport(1920, 1080)
    //Viziteaza site-ul
    cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    //Actioneaza butonul de Autentificare
    cy.get('[href="/auth/login"]').click()
    //Introduce numarul de telefon
    cy.get('[name="phone_number"]').type("0790524492")
    //Introduce parola
    cy.get('[name="password"]').type("parola")
    //Actioneaza buton Autentificare
    cy.xpath("//button[normalize-space()='Autentificare']").click()
    //Actioneaza butonul de Nevoi
    cy.xpath("//p[normalize-space()='nevoi']").click()
    cy.url().should('include',"https://iwanttohelp.bim.assistcloud.services/dashboard/needs", "timeout: 10.000")
    //Actioneaza buton Completeaza
    //Nu am reusit sa gasesc cum sa il fac sa mearga
    //Eu m-am gandit sa caut elementul, apoi sa verific daca este activ si sa actionez pe primul element ce indeplineste cele doua conditii
    cy.get("[title='Completeaza']").should('be.enabled').first().click()
    //Selecteza o stea
    cy.get('svg.vue-star-rating-star').first().click();
    //Adaugare de comentariu
    cy.get("[name='comment']").should('be.visible').type("Acesta este un comentariu")
    //Confirmare aplicare
    cy.xpath("//button[normalize-space()='Trimite']").click()
  })
})

describe('TC14', () => {
  it('Verify that the user is able to properly logout.', () => {
    cy.viewport(1920, 1080)
    //Viziteaza site-ul
    cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    //Actioneaza butonul de Autentificare
    cy.get('[href="/auth/login"]').click()
    //Introduce numarul de telefon
    cy.get('[name="phone_number"]').type("0790524492")
    //Introduce parola
    cy.get('[name="password"]').type("parola")
    //Actioneaza buton Autentificare
    cy.xpath("//button[normalize-space()='Autentificare']").click()
    //Actioneaza buton de deconectare
    cy.xpath("//a[normalize-space()='Deconectare']").click()
  })
})