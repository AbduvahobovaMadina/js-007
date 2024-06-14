// const navbar = document.querySelector(".navbar__collection")

// function toggleShow (){
//     navbar.classList.toggle("show")
// }








{
    // case1
    function dayName(n){
        switch (n){
            case 1:
                return "Dushanba"
            case 2:
                return "Seshanba"
            case 3:
                return "Chorshanba"
            case 4: 
                return "Payshanba"
            case 5:
                return "Juma"
            case 6:
                return "Shanba"
            case 7:
                return "Yakshanba"
            default :
                return "Bunday kun yo'q"
        }
    }
    console.log(dayName(3));
}