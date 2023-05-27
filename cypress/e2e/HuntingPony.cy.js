describe('Оформение заказа', function () {
    it('Верные данные', function () {
         cy.visit('https://huntingpony.com/');
         cy.intercept('GET', '/front_api/**').as('api');
         cy.get('[href="/collection/lezhanki"] > .img-ratio_cover > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
         cy.get('[data-product-id="338936003"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.wait('@api');
         cy.get('.add-cart-counter__btn').click();
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа');
         cy.contains('Лежанка "Пони-Колосони" Графит (XS - 50 см (Той-терьер, Чихуахуа и т.д))');
         
    })
})
