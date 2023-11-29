// Encapsulation
const utilisateur = {
    noms : "Moussa Louis",
    email : 'moussa@gamil.com',
    amis : ['steven', 'Jonathan'],
    login() {
        console.log(`${this.email} est connecté(e)`);
    },
    logout() {
        console.log(`${this.email} est deconnecté(e)`);
    }
}

console.log(utilisateur);

// Acces aux propriete d'un objet
console.log(utilisateur.noms);
console.log(utilisateur.email);

// Oubien on utilise cette methode

console.log(utilisateur['noms']);
console.log(utilisateur['email']);

utilisateur.noms = 'Blaise King'
utilisateur['email'] = 'blaise@gmail.com'
console.log(utilisateur);

