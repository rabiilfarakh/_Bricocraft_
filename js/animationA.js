

const txtAnim = document.querySelector('h6');

new Typewriter(txtAnim , {
    deleteSpeed: 20
})
.changeDelay(20)
.typeString('BricoCraft est votre partenaire de confiance pour tous vos besoins en bricolage et réparation. Avec des années d expérience dans le secteur, nous proposons une gamme complète de services de qualité, de la rénovation de maison à la plomberie et à l électricité. Notre équipe d experts qualifiés est dédiée à rendre votre maison plus belle et fonctionnelle. Faites confiance à BricoCraft pour des solutions de bricolage exceptionnelles.')
.start()



