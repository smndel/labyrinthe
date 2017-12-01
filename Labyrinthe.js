
    <script>

  //    let labyrinthe = [
  //    ["depart",1,0,0,0,0,0,0,0,0,0,0],
        // ["Thésée",1,0,1,1,1,1,1,1,0,1,0],
        // [0,0,0,1,0,0,0,0,0,0,1,0],
        // [1,1,1,1,1,1,0,1,1,1,1,1],
        // [0,0,0,0,0,1,0,0,0,0,0,1],
        // [0,1,1,1,0,1,1,1,1,1,0,0],
        // [0,0,0,1,0,1,0,0,0,1,1,0],
        // [1,1,0,1,0,1,0,1,0,0,1,0],
        // [0,0,0,1,0,0,0,1,1,0,1,0],
        // [0,1,1,1,1,1,0,1,0,0,1,0],
        // [0,1,0,0,0,1,0,1,0,1,1,0],
        // ["arrive",1,0,1,0,0,0,1,0,0,0,0],
        // ];

        let labyrinthe =
        [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,"Thésée",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
        [1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
        [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
        [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
        [1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1],
        [1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1],
        [1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1],
        [1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
        [1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1],
        [1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,"arrive",1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1],
        [1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1],
        [1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1],
        [1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1],
        [1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1],
        [1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1],
        [1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1],
        [1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1],
        [1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1],
        [1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]


        let x = 1;
        let y = 1;

    function creerLaby(tablaby){

        tablaby = labyrinthe;

        for (ligne of tablaby){     

            for (box of ligne){

                switch(box){

                    case 0 : 
                    let casevide = document.createElement("div");
                    casevide.setAttribute("class", "case");
                    casevide.setAttribute("id", "casevide");
                    document.getElementById("labyrinthe").appendChild(casevide);
                    break;

                    case 1  : 
                    let casepleine = document.createElement("div");
                    casepleine.setAttribute("class", "case");
                    casepleine.setAttribute("id", "casepleine");
                    document.getElementById("labyrinthe").appendChild(casepleine);
                    break;

                    case "depart" : 
                    let depart = document.createElement("div");
                    depart.setAttribute("class", "case");
                    depart.setAttribute("id", "depart");
                    document.getElementById("labyrinthe").appendChild(depart);
                    break;

                    case "arrive" : 
                    let arrive = document.createElement("div");
                    arrive.setAttribute("class", "case");
                    arrive.setAttribute("id", "arrive");
                    document.getElementById("labyrinthe").appendChild(arrive);
                    break;

                    case "Thésée" : 
                    let Thésée = document.createElement("div");
                    Thésée.setAttribute("class", "case");
                    Thésée.setAttribute("id", "Thésée");
                    document.getElementById("labyrinthe").appendChild(Thésée);
                    break;

                }
            }
        }       
    }

    function tailleLaby(mesure){

        let box = [];

        mesure = 15;

        taille = mesure + "px";

        box = document.getElementsByClassName("case");

            for (i=0; i<box.length; i++){
        
                box[i].style.width = taille;
                box[i].style.height = taille;
            }

        let tablaby = document.getElementById("labyrinthe");
        
            tablaby.style.width = ((labyrinthe[1].length)*mesure)+ "px";

            // il n'est pas indispensable de préciser la hauteur
            // tablaby.style.height = ((labyrinthe[1].length)*mesure)+ "px";
    }

    function deplacement(e){


        let deplacement = e.keyCode;
    

        switch (deplacement){
            
            

            case 37 : //left
                if (labyrinthe[y][x-1] == 0){

                        labyrinthe[y][x-1] = "Thésée";
                        labyrinthe[y][x] = 0;
                        trouverEtPeindreLaDivPassage(x,y);
                        x--;
                        trouverEtPeindreLaDivJoueur(x,y);   
                
                }else if (labyrinthe[y][x-1] == "arrive"){  
                        document.getElementById("gagne").style.display = "block";
            
                }else{  
                        labyrinthe[y][x]= "Thésée";
                        let laby = document.getElementById("labyrinthe");
                        laby.style.transform = 'rotate('+90+'deg)';
    
                }

            break;

            
            case 38 : //up
                if (labyrinthe[y-1][x] == 0){

                        labyrinthe[y-1][x]  = "Thésée";
                        labyrinthe[y][x] = 0;
                        trouverEtPeindreLaDivPassage(x,y)
                        y--;
                        trouverEtPeindreLaDivJoueur(x,y);

                }else if (labyrinthe[y-1][x] == "arrive"){
                        
                        document.getElementById("gagne").style.display = "block";
                }else{  
                        labyrinthe[y][x] = "Thésée";
                        let laby = document.getElementById("labyrinthe");
                        laby.style.transform = 'rotate('+90+'deg)';

                }
            break;

            
            case 39 : //right
                if (labyrinthe[y][x+1] == 0){

                        labyrinthe[y][x+1] = "Thésée";
                        labyrinthe[y][x] = 0;
                        trouverEtPeindreLaDivPassage(x,y)
                        x++;
                        trouverEtPeindreLaDivJoueur(x,y);
                
                }else if (labyrinthe[y][x+1] == "arrive"){  
                        document.getElementById("gagne").style.display = "block";
                
                }else{
                        labyrinthe[y][x]= "Thésée";
                        let laby = document.getElementById("labyrinthe");
                        laby.style.transform = 'rotate('+90+'deg)';
                }

            break;


            case 40 : //down

                if (labyrinthe[y+1][x] == 0){

                        labyrinthe[y+1][x] = "Thésée";
                        labyrinthe[y][x] = 0;
                        trouverEtPeindreLaDivPassage(x,y)
                        y++;
                        trouverEtPeindreLaDivJoueur(x,y);
                }else if (labyrinthe[y+1][x] == "arrive"){
                        
                        document.getElementById("gagne").style.display = "block";
                }else{
                        labyrinthe[y][x] = "Thésée";
                        let laby = document.getElementById("labyrinthe");
                        laby.style.transform = 'rotate('+90+'deg)';

                }
            break;  
        }
    }
        
    function trouverEtPeindreLaDivJoueur(x,y){

        let laDiv = (y)*(labyrinthe[1].length)+(x+1);

        let leChangement =document.querySelector("div:nth-child("+laDiv+")");

        leChangement.style.backgroundColor = "blue";

    }

    function trouverEtPeindreLaDivPassage(x,y){

        let laDiv = (y)*(labyrinthe[1].length)+(x+1);

        document.querySelector("div:nth-child("+laDiv+")").style.backgroundColor = "white";
    }







window.addEventListener("keydown", deplacement,)
window.addEventListener("load", creerLaby)
window.addEventListener("load", tailleLaby)
