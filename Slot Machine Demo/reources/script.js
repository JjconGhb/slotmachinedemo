// First of all we need to disable right click.
document.addEventListener('contextmenu', event => event.preventDefault());

// ---- Game Autostart ----

const startmusic = async () => {
    var symbol = new Audio();
    symbol.src = "reources/soundtrack/Symbol.mp3";
    symbol.play();
    while (soundtracke == true) {
        var drums = new Audio();
        drums.src = "reources/soundtrack/Drum Set.mp3";
        drums.play();
        await sleep(2344)
    }
}


var soundtracke = true;

window.onload = startmusic;

// ---- Credit Variables ----

var cplayed = document.getElementById('credit');
var credt = document.getElementById('credt');
var accepted = document.getElementById('coins_accepted');
var gameover = document.getElementById('insert_coin');
var wpaid = document.getElementById('paid');

var credit_played = 0;
var credit = 0;
var paid = 0;

// ---- Slot Machine Variables ----
var slot1 = document.getElementById('s11');
var slot2 = document.getElementById('s22');
var slot3 = document.getElementById('s33');
var spinbt = document.getElementById('spinbt');               
var se1 = true;
var se2 = true;
var se3 = true;
var rolle = true;
var e = 0;
var eii = 0;
var eiii = 0;
var sltmv1 = 0;
var sltmv2 = 0;
var sltmv3 = 0;
var halt1 = 0;
var halt2 = 0;
var halt3 = 0;
var integr = 28;
spinav = true;

/// ---- Configuration ----

credit = 100;
credt.innerHTML = credit;
gameover.style.opacity = "100%";

/// ---- Wheel Stoppers ----
function stop3(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stop2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function stop2a(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function stop1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

///Symbol Credits

grape = 10;
bar = 50;
tebar = 100;
seven = 200;
sevenelv = 500;
ufd = 1000;

function begin () {
    var menu = document.getElementById('title');
    menu.style.opacity = "0%";
    menu.style.zIndex = "-3";
    soundtracke = false;
}

// Program Begin Config
const start = async () => {
    if (credit >= 3) {
        gameover.style.opacity = "0%";
        if (spinav == true) {
            spinav = false;
            l = stop2a(400, 550);
            d = stop2(400, 550);
            v = stop3(400, 550);
            console.log(halt1, halt2, halt3)
            wpaid.innerHTML = "";
            spinbt.style.backgroundImage = "url('reources/slotimages/button.png')";
            var click = new Audio();
            click.src = "reources/sounds/click.mp3";
            var clickd = new Audio();
            clickd.src = "reources/sounds/click.mp3";

            for (i = 0; i < 3; i++) {
                var coin = new Audio();
                credit_played += 1;
                cplayed.innerHTML = credit_played;
                accepted.style.opacity = "100%";
                credit -= 1;
                credt.innerHTML = credit;
                coin.src = "reources/sounds/Coin.mp3";
                await sleep(150)
                coin.play();
            }
            credit_played = 0;
            await sleep(700)
            accepted.style.opacity = "0%";
            roll();
            sl0t2();
            await sleep(1000)
            click.play();
            se1 = false;
            await sleep(l)
            clickd.play();
            se2 = false;
            await sleep(d)
            click.play();
            se3 = false;
            rolle = false;
            await sleep(v)
            se1 = true;
            se2 = true;
            se3 = true;
            rolle = true;
            console.log("Stops for all Slots: " + halt1, halt2, halt3);
            if (sltmv3 >= 784) {
                i = 0;
                sltmv3 = 0;
                slot3.style.bottom = '0px';
            }
            jackpot();
        }
    }
}
const jackpot = async () => {
    if (credit >= 3) {

        if (halt1 == 2 & halt2 == 2 & halt3 == 2) {
            var add = tebar * 3;
            console.log(add);
            while (paid < add) {
                var coin = new Audio();
                paid += 10;
                credit += 10;
                credt.innerHTML = credit;
                wpaid.innerHTML = paid;
                coin.src = "reources/sounds/Coin.mp3";
                await sleep(150)
                coin.play();
            }
            paid = 0;
            spinav = true;
            if (credit >= 3) {
                spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
            }
        }
    }

    if (halt1 == 6 & halt2 == 6 & halt3 == 6) {
        var add = bar * 3;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 10;
            credit += 10;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 8 & halt2 == 8 & halt3 == 8) {
        var add = sevenelv * 3;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 10;
            credit += 10;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 10 & halt2 == 10 & halt3 == 10) {
        var add = ufd * 3;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 50;
            credit += 50;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 12 & halt2 == 12 & halt3 == 12) {
        var add = seven * 3;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 10;
            credit += 10;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 14 & halt2 == 14 & halt3 == 14) {
        var add = grape * 3;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 0 & halt2 == 0 & halt3 == 0) {
        var add = grape * 3;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 12 & halt2 == 6 & halt3 == 6) {
        var add = seven + bar + bar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 6 & halt2 == 12 & halt3 == 6) {
        var add = seven + bar + bar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 6 & halt2 == 6 & halt3 == 12) {
        var add = seven + bar + bar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 6 & halt2 == 12 & halt3 == 12) {
        var add = bar + seven + seven;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 12 & halt2 == 6 & halt3 == 12) {
        var add = bar + seven + seven;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 12 & halt2 == 12 & halt3 == 6) {
        var add = bar + seven + seven;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 10 & halt2 == 10 & halt3 == 2) {
        var add = ufd + ufd + tebar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 10 & halt2 == 2 & halt3 == 10) {
        var add = ufd + ufd + tebar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }
    if (halt1 == 2 & halt2 == 10 & halt3 == 10) {
        var add = ufd + ufd + tebar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 10 & halt2 == 2 & halt3 == 2) {
        var add = ufd + tebar + tebar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 2 & halt2 == 10 & halt3 == 2) {
        var add = ufd + tebar + tebar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }

    if (halt1 == 2 & halt2 == 2 & halt3 == 10) {
        var add = ufd + tebar + tebar;
        console.log(add);
        while (paid < add) {
            var coin = new Audio();
            paid += 5;
            credit += 5;
            credt.innerHTML = credit;
            wpaid.innerHTML = paid;
            coin.src = "reources/sounds/Coin.mp3";
            await sleep(150)
            coin.play();
        }
        paid = 0;
        spinav = true;
        if (credit >= 3) {
            spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
        }
    }
    if (credit >= 3) {
        spinav = true;
        spinbt.style.backgroundImage = "url('reources/slotimages/button_lit.png')";
    }
    else {
        gameover.style.opacity = "100%";
        console.log("Game Over!");
    }
}

const sl0t2 = async () => {
    while (se1 == true) {
        e = stop3(2, 3);
        eii = stop2(2, 3);
        eiii = stop2(2, 3);

        for (let i = 0; i < eiii; i++) {
            if (sltmv1 == 784) {
                i = 0;
                sltmv1 = 0;
                slot1.style.bottom = '0px';
            }
            if (sltmv1 >= 784) {
                i = 0;
                sltmv1 = 0;
                slot1.style.bottom = '0px';
            }

            if (sltmv2 == 784) {
                i = 0;
                sltmv2 = 0;
                slot2.style.bottom = '0px';
            }
            if (sltmv2 >= 784) {
                i = 0;
                sltmv2 = 0;
                slot2.style.bottom = '0px';
            }

            if (sltmv3 == 784) {
                i = 0;
                sltmv3 = 0;
                slot3.style.bottom = '0px';
            }
            if (sltmv3 >= 784) {
                i = 0;
                sltmv3 = 0;
                slot3.style.bottom = '0px';
            }
            await sleep(30)
            for (let i = 0; i < integr; i++) {
                sltmv1 += 2;
                slot1.style.bottom = sltmv1 + 'px';
                sltmv2 += 2;
                slot2.style.bottom = sltmv2 + 'px';
                sltmv3 += 2;
                slot3.style.bottom = sltmv3 + 'px';
                // console.log(i, integr, halt1, sltmv1, sltmv2, sltmv3);
                if (halt1 > 13) {
                    halt1 = 0;
                }
                if (halt2 > 13) {
                    halt2 = 0;
                }
                if (halt3 > 13) {
                    halt3 = 0;
                }
            }
            halt1 += 1;

            halt2 += 1;

            halt3 += 1;

            // wpaid.innerHTML = halt1 + " " + halt2 + " " + halt3;
        }
    }
    while (se2 == true) {

        for (let i = 0; i < eii; i++) {
            if (sltmv1 >= 784) {
                i = 0;
                sltmv1 = 0;
                slot1.style.bottom = '0px';
            }
            if (sltmv2 == 784) {
                i = 0;
                sltmv2 = 0;
                slot2.style.bottom = '0px';
            }
            if (sltmv2 >= 784) {
                i = 0;
                sltmv2 = 0;
                slot2.style.bottom = '0px';
            }
            if (sltmv3 == 784) {
                i = 0;
                sltmv3 = 0;
                slot3.style.bottom = '0px';
            }
            if (sltmv3 >= 784) {
                i = 0;
                sltmv3 = 0;
                slot3.style.bottom = '0px';
            }

            await sleep(30)
            for (let i = 0; i < integr; i++) {
                sltmv2 += 2;
                slot2.style.bottom = sltmv2 + 'px';
                sltmv3 += 2;
                slot3.style.bottom = sltmv3 + 'px';
                // console.log(i, integr, halt2, sltmv1, sltmv2, sltmv3);
                if (halt1 > 13) {
                    halt1 = 0;
                }
                if (halt2 > 13) {
                    halt2 = 0;
                }
                if (halt3 > 13) {
                    halt3 = 0;
                }
            }
            halt2 += 1;

            halt3 += 1;
            // wpaid.innerHTML = halt1 + " " + halt2 + " " + halt3;
        }
    }
    if (se2 == false) {
        while (se3 == true) {
            e = stop3(2, 3);
            eii = stop2(2, 3);

            for (let i = 0; i < e; i++) {
                if (sltmv2 >= 784) {
                    i = 0;
                    sltmv2 = 0;
                    slot2.style.bottom = '0px';
                }
                if (sltmv3 == 784) {
                    i = 0;
                    sltmv3 = 0;
                    slot3.style.bottom = '0px';
                }
                if (sltmv3 >= 784) {
                    i = 0;
                    sltmv3 = 0;
                    slot3.style.bottom = '0px';
                }

                await sleep(30)
                for (let i = 0; i < integr; i++) {
                    sltmv3 += 2;
                    slot3.style.bottom = sltmv3 + 'px';
                    if (halt2 > 13) {
                        halt2 = 0;
                    }
                    if (halt3 > 13) {
                        halt3 = 0;
                    }
                }

                halt3 += 1;

                // wpaid.innerHTML = halt1 + " " + halt2 + " " + halt3;
            }
        }
    }
}
const sl0t3 = async () => {

    while (se3 == true) {
        e = stop3(2, 3);
        if (sltmv3 == 784) {
            i = 0;
            sltmv3 = 0;
            slot3.style.bottom = '0px';
        }
        if (sltmv3 >= 784) {
            i = 0;
            sltmv3 = 0;
            slot3.style.bottom = '0px';
        }
        for (let i = 0; i < e; i++) {
            await sleep(30)
            for (let i = 0; i < integr; i++) {
                sltmv3 += 2;
                slot3.style.bottom = sltmv3 + 'px';
            }
            // console.log(i, integr, sltmv3)
        }
    }
}
// }

const roll = async () => {
    while (rolle == true) {
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        i = getRndInteger(1, 4);
        if (i == 1) {
            var sts = new Audio();
            sts.src = "reources/sounds/1.mp3";
            sts.play();
        }
        if (i == 2) {
            var sts = new Audio();
            sts.src = "reources/sounds/2.mp3";
            sts.play();
        }
        if (i == 3) {
            var sts = new Audio();
            sts.src = "reources/sounds/3.mp3";
            sts.play();
        }
        if (i == 4) {
            var sts = new Audio();
            sts.src = "reources/sounds/4.mp3";
            sts.play();
        }
        await sleep(110)
    }
}