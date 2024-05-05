document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 1; margin-top: 20px;">Choose your character</p>';
document.getElementById("title2").innerHTML='<p class="Montserrat" style="opacity: 1; margin-top: 20px;">Start removing</p>';

var actionVar = "chooseyourcharacter";
var chosenVar = 0;
var iVar = 0;
var state=[];
for (let i=0; i<43; i++){
    state[i]=1;}

function fyourcharacter(){
    if (chosenVar>0){
        document.getElementById("yourcharacterId").style.opacity="1";
        actionVar="chosen";
        document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;"></p>';
        chosenVar=0;
    }
}

function fremovecharacter(){
    if (actionVar=="chosen"){
        actionVar="removecharacter";
        document.getElementById("title2").innerHTML="";
        document.getElementById("removeId").style.opacity="0";
    }
}

function fbox(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image11a/"+iVar+".jpeg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=iVar;
    }
    else if (actionVar=="removecharacter"){
        if (state[iVar-1]==1){
            document.getElementById("box"+iVar+"Id").style.opacity="0.2";
            state[iVar-1]=0;
        }
        else if (state[iVar-1]==0){
            document.getElementById("box"+iVar+"Id").style.opacity="1";
            state[iVar-1]=1;
        }
    }
}

function fbox1(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('imagerel/"+iVar+".jpeg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=iVar;
    }
    else if (actionVar=="removecharacter"){
        if (state[iVar-1]==1){
            document.getElementById("box"+iVar+"Id").style.opacity="0.2";
            state[iVar-1]=0;
        }
        else if (state[iVar-1]==0){
            document.getElementById("box"+iVar+"Id").style.opacity="1";
            state[iVar-1]=1;
        }
    }
}
