
function UserGAS(name, cellphone, gps) {
    this.name = name;
    this.cellphone = cellphone;
    this.gps = gps;

    const valueGAS = 1500;

    function Cadastro() {
        let nameUser = []
        let cellphoneUser = []
        let gpsUser = []

        nameUser.push(name)
        cellphoneUser.push(cellphone)
        gpsUser.push(gps)

        console.log(nameUser);
        console.log(cellphoneUser);
        console.log(gpsUser);

    }

}

let firtsUSer = new UserGAS('Henrique Mendes', 924495523 , 'jjjjj111')
let SecondUSer = new UserGAS('Ludmar Mendes', 925544512, 'jj444ff') 

