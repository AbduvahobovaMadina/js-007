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
    // console.log(dayName(3));
}
{
    // case2
    function result(n) {
        switch (n) {
            case 1:
                return `${1} - yomon`
            case 2:
                return `${2} - qoniqarsiz`
            case 3:
                return `${3} - qoniqarli`
            case 4:
                return `${4} - yaxshi`
            case 5:
                return `${5} - a'lo`
            default:
                return `xato`;
        }
    }
    // console.log( result(1) );
    // console.log( result(2) );
    // console.log( result(3) );
    // console.log( result(4) );
    // console.log( result(5) );
    // console.log( result(6) );
    // console.log( result(0) );   
}

{
    // case3
    function monthSeaon(n) {
        switch (n) {
            case 1:
                return `birinchi oy - Qish`
            case 2:
            case 12:
            return `Qish`
            case 3:
            case 4:
            case 5:
            return `Bahor`
            case 6:
            case 7:
            case 8:
            return `Yoz`
            case 9:
            case 10:
            case 11:
            return `Kuz`
            default:
                return `bunday oy mavjud emas`
        }
    }
    // console.log( monthSeaon(0) );
    // console.log( monthSeaon(1) );
    // console.log( monthSeaon(2) );
    // console.log( monthSeaon(3) );
    // console.log( monthSeaon(4) );
    // console.log( monthSeaon(5) );
    // console.log( monthSeaon(6) );
    // console.log( monthSeaon(7) );
    // console.log( monthSeaon(8) );
    // console.log( monthSeaon(9) );
    // console.log( monthSeaon(10) );
    // console.log( monthSeaon(11) );
    // console.log( monthSeaon(12) );
    // console.log( monthSeaon(13) );
}


{
    // case4
    function monthDay(n) {
        switch (n) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                 return `${n} - oy 31 kun `
            case 2:
                return `${n} - oy 28 kun`   
            case 4:
            case 6:
            case 9:
            case 11:
                return `${n} oy 30 kun`
            default:
                return  `bunday oy mavjud emas`
        }
    }
    
    // console.log( monthDay(0) );
    // console.log( monthDay(1) );
    // console.log( monthDay(2) );
    // console.log( monthDay(3) );
    // console.log( monthDay(4) );
    // console.log( monthDay(5) );
    // console.log( monthDay(6) );
    // console.log( monthDay(7) );
    // console.log( monthDay(9) );
    // console.log( monthDay(10) );
    // console.log( monthDay(11) );
    // console.log( monthDay(12) );
    // console.log( monthDay(13) );
}


{
    // case5
    function number(a, b, amal) {
        let bPlus = "qo'shish"
        let bMinus = "ayirish"
        let bBoluv = "bo'lish"
        let bKopaytiruv = "ko'paytirish"
        switch (a, b, amal) {
            case 1:
            return a + b
            case 2:
            return a - b
            case 3:
                if (b !== 0) {
                    return a / b               
                }else{
                    return` 0 ga bo'lib bo'lmaydi`
                }
            case 4:
            return a * b
            default:
                return `bunday amal yo'q`
        }
    }
    
    // console.log( `Natija: ${number (2, 1, 1)}. Kiritlgan sonlar a = ${2} b = ${1}. kiritilgan amal =  qo'shish ` );
    // console.log(` Natija: ${number (5, 3, 2)}. Kiritlgan sonlar a = ${5} b = ${3}. kiritilgan amal = ayirish ` );
    // console.log( `Natija: ${number (8, 2, 3)}. Kiritlgan sonlar a = ${8} b = ${2}. kiritilgan amal =  bo'lish ` );
    // console.log( `Natija: ${number (8, 0, 3)}. Kiritlgan sonlar a = ${8} b = ${0}. kiritilgan amal = bo'lish`  );
    // console.log( `Natija: ${number (8, 3, 4)}. Kiritlgan sonlar a = ${8} b = ${3}. kiritilgan amal =  ko'paytirish ` );
    // console.log( `Kiritlgan sonlar a = ${8} b = ${3}. kiritilgan amal = ${0} - c${number (8, 3, 0)}  `);
}


{
    // case6
    function metr( m, length) {
        switch (length) {
            case 1:
                return  ` ${ m } dm = ${m * 0.1} m`   
            case 2:
                return  ` ${ m } km = ${m * 1000} m`
            case 3:
                return  ` ${ m } m = ${m} m`
            case 4:
                return  `${ m } mm = ${m * 0.001} m`
            case 5:
                return   `${ m } sm = ${m * 0.01} m`
            default:
                return `Noto'g'ri birlik soni kiritildi. Iltimos 1 - 5 gacha bo'lgan birlikni tanlang.`
        }
    }
    // console.log( metr(9, 1) );
    // console.log( metr(7, 2) );
    // console.log( metr(5, 3) );
    // console.log( metr(6, 4) );
    // console.log( metr(2, 5) );
    // console.log( metr(6, 6) );
}

{
    // case7
    function massa( kg, weight ) {
        switch ( weight ) {
            case 1:
                return `${ kg } kg = ${kg} kg`
            case 2:
                return `${ kg } mg = ${ kg * 0.000_001 } kg`
            case 3:
                return ` ${ kg } g = ${ kg * 0.001 } kg`
            case 4:
                return ` ${ kg } t = ${ kg * 1000 } kg`
            case 5:
                return `${ kg } st = ${ kg * 100 } kg`
            default:
                return `Noto'g'ri birlik soni kiritildi. Iltimos 1 dan 5 gacha son kiriting`
        }
    }
    
    // console.log( massa(3, 1) );
    // console.log( massa(6, 2) );
    // console.log( massa(2, 3) );
    // console.log( massa(9, 4) );
    // console.log( massa(4, 5) );
    // console.log( massa(7, 6) );
}



{
    //case8 
    function yil(year){
                return`(year % 4 === 0 &&  year % 100 !== 0) || year % 400 === 0;`
            }
            function andyil(year){
                return `yil(year) ? 366 : 365;`
            }
            // console.log(andyil(2024));
        
}
{
    //case9
    function yil(year, moon) {
                let sum;
                switch (moon) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        sum = 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        sum = 30;
                        break;
                    case 2:
                        `sum = isLeapyear(year) ? 29 : 28;`
                        break;
                    default:
                        `sum = "bunday javob yoq";`
                }
                return sum
            }
            // console.log(yil(2023, 3));
        
}
{
    //caes10
    function robot(commands) {
                let sum = [0, 0];
                let andsum = 0; 
        
                for (let command of commands) {
                    switch (command) {
                        case 's':
                            sum[1]++;
                            break;
                        case 'j':
                            sum[1]--;
                            break;
                        case 'q':
                            sum[0]++;
                            break;
                        case 'g':
                            sum[0]--;
                            break;
                        case '1':
                            andsum = (andsum + 3) % 4;
                            break;
                        case '2':
                            andsum = (andsum + 1) % 4;
                            break;
                        case '0':
                            if (andsum === 0) sum[1]++;
                            else if (andsum === 1) sum[0]++;
                            else if (andsum === 2) sum[1]--;
                            else if (andsum === 3) sum[0]--;
                            break;
                    }
                }
                return sum;
            }
            // console.log(robot(['s', 's', '2', 'q', '0']));
}






{
    // for1
    function number( k, n ) {
        if ( n > 0) {
            for (let i = 0; i < n; i++) {
            console.log(k);            
            }       
        } else {
            return n `soni musbat bo'lishi kerak.`
        }
    }
    
    // console.log( number(2, 5) );
}

{
    // for2
    function numbers(a, b) {
        let sum = 0
        if ( a < b) {
            for (let i = a; i <= b; i++) {
                console.log(i);          
            }
        } else {
            return `a soni b sonidan kichik bo'lishi kerak`
        }
        console.log(b - a + 1);
    }
    
    // console.log( numbers(3, 7 ) );
}

{
    // for3
    function numbers( a, b ) {
        if ( a < b ) {
            for (let i = b -= 1; i > a; i--) {
                console.log(i);            
            }
        } else {
            return `a soni b dan kichik bo'lishi kerak`
        }
        console.log( b - a );
    }
    
    // console.log( numbers(1, 5) );
}

{
    // for4   
    function son(a){
                for(let i = 1; i <= 10; i++){
                    // console.log(i);
                    console.log(a * i);
                }
            }
            // console.log(son(10000));
}

{
    // for5
    function chocolate(prise) {
        for (let i = 0; i < 1; i += 0.1) {
            console.log( `i * prise`);        
        }   
    }
    // console.log( chocolate(10000) );
}

{
    // for6
    function chocolate( prise ) {
        for (let i = 1; i <= 2; i += 0.2) {
            console.log( `i * prise`);        
        }
    }
    // console.log( chocolate(1000) );
}

{
    // for7
    function number( a, b ) {
        let sum = 0
        if ( a < b ) {
            for (let i = a; i < b; i++) {
                sum = sum + i            
            }
        } else {
            return` a soni b sonidan kichik bo'lishi kerak`
        }
        console.log(sum);
    }
    // console.log( number( 2, 7 ) );
}

{
    // for8
    function number( a, b ) {
        let sum = 1
        if ( a < b) {
            for (let i = a; i < b; i++) {
                sum = sum * i            
            }
        } else {
            return `a soni b sonidan kichik bo'lishi kerak`
        }
        // console.log(`${a} dan ${b} gacha bo'lgan sonlar ko'paytmasi ${sum} ga teng`);
    }
    
    // console.log( number(2, 7) );
}

{
    // for9
    function numbers( a, b) {
        let sum = 0
        if ( a < b) {
            for (let i = a; i < b; i++) {
                sum = sum + (i * i)            
            }
        } else {
            return `a soni b sonidan kichik bo'lishi kerak`
        }
        // console.log(`${a} dan ${b} gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisi =  ${sum}`);
    }
    // console.log( numbers(3, 7) );
}

{
    // for10
    function number(n) {
        let sum = 0
        if ( n > 0 ) {
            for (let i = 1; i <= n; i++) {
                sum = i/n + sum
            }
        } else {
            return `n soni 0 dan kichik bo'lishi mumkin emas`
        }
        // console.log(sum);
    }
    // console.log( number(5) );
}