const cheat = async () => {
           console.log("This Slot Machine was hacked by --- Anonomker7899 ---");
           console.log("Screw the Flaslandian Government!!!");
           gameover.innerHTML="MACHINE <br> NUKED";
           gameover.style.opacity = "100%";
           var click = new Audio();
           click.src = "reources/sounds/click.mp3";
           await sleep(700)
           halt1 = 0;
           halt2 = 0;
           halt3 = 0;
           sltmv1 = 0;
           sltmv2 = 0;
           sltmv3 = 0;
          accepted.style.opacity = "0%";
          for (let i = 0; i < 25; i++) {
            roll();
            sl0t2();
            await sleep(200)
            click.play();
            se1 = false;
            se2 = false;
            se3 = false;
            rolle = false;
            await sleep(100)
            se1 = true;
            se2 = true;
            se3 = true;
            rolle = true;
            if (sltmv3 >= 784) {
                i = 0;
                sltmv3 = 0;
                slot3.style.bottom = '0px';
            } 
            jackpot();
            // cheat();
        }
    }
