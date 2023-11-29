const utilsateur = (noms, email, ...amis) => {
    return {
        noms, email, amis,
        login() {
            console.log(`${email} est connecté(e)`);
        },
        logout() {
            console.log(`${email} est deconncete`);
        }
    }
}

const ley = utilsateur('Ley', 'ley@gmail.com', 'Fatu', 'moustapha')
const modu = utilsateur('modu', 'modu@gmail.com', 'Moussa', 'Ibou')
const babs = utilsateur('babs', 'babs@gmail.com', 'douda', 'lay', 'Mbaye')
console.log(ley);
console.log(modu);
console.log(babs);

ley.login();
ley.logout();

modu.login();
modu.logout();

babs.login();
babs.logout();
