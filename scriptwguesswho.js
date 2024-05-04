var actionVar = "chooseyourcharacter";
var chosenVar = 0;
var luffyVar = '<img id="box1Id" style="width: 100%; height: 100%;" src="image/luffy.jpg" alt="">';
var state=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Choose your character</p>';
document.getElementById("title2").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Start removing</p>';
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

function fbox1(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/luffy.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=1;
        document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
    }
    else if (actionVar=="removecharacter"){
        if (state[0]==1){
            document.getElementById("box1Id").style.opacity="0.2";
            state[0]=0;
        }
        else if (state[0]==0){
            document.getElementById("box1Id").style.opacity="1";
            state[0]=1;
        }
    }
}

function fbox2(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/nami.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=2;
    }
    else if (actionVar=="removecharacter"){
        if (state[1]==1){
            document.getElementById("box2Id").style.opacity="0.2";
            state[1]=0;
        }
        else if (state[1]==0){
            document.getElementById("box2Id").style.opacity="1";
            state[1]=1;
        }
    }
}

function fbox3(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/zoro.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=3;
    }
    else if (actionVar=="removecharacter"){
        if (state[2]==1){
            document.getElementById("box3Id").style.opacity="0.2";
            state[2]=0;
        }
        else if (state[2]==0){
            document.getElementById("box3Id").style.opacity="1";
            state[2]=1;
        }
    }
}

function fbox4(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/usopp.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=4;
    }
    else if (actionVar=="removecharacter"){
        if (state[3]==1){
            document.getElementById("box4Id").style.opacity="0.2";
            state[3]=0;
        }
        else if (state[3]==0){
            document.getElementById("box4Id").style.opacity="1";
            state[3]=1;
        }
    }
}

function fbox5(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/sanji.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=5;
    }
    else if (actionVar=="removecharacter"){
        if (state[4]==1){
            document.getElementById("box5Id").style.opacity="0.2";
            state[4]=0;
        }
        else if (state[4]==0){
            document.getElementById("box5Id").style.opacity="1";
            state[4]=1;
        }
    }
}

function fbox6(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/chopper.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=6;
    }
    else if (actionVar=="removecharacter"){
        if (state[5]==1){
            document.getElementById("box6Id").style.opacity="0.2";
            state[5]=0;
        }
        else if (state[5]==0){
            document.getElementById("box6Id").style.opacity="1";
            state[5]=1;
        }
    }
}

function fbox7(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/robin.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=7;
    }
    else if (actionVar=="removecharacter"){
        if (state[6]==1){
            document.getElementById("box7Id").style.opacity="0.2";
            state[6]=0;
        }
        else if (state[6]==0){
            document.getElementById("box7Id").style.opacity="1";
            state[6]=1;
        }
    }
}

function fbox8(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/franky.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=8;
    }
    else if (actionVar=="removecharacter"){
        if (state[7]==1){
            document.getElementById("box8Id").style.opacity="0.2";
            state[7]=0;
        }
        else if (state[7]==0){
            document.getElementById("box8Id").style.opacity="1";
            state[7]=1;
        }
    }
}

function fbox9(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/brook.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=9;
    }
    else if (actionVar=="removecharacter"){
        if (state[8]==1){
            document.getElementById("box9Id").style.opacity="0.2";
            state[8]=0;
        }
        else if (state[8]==0){
            document.getElementById("box9Id").style.opacity="1";
            state[8]=1;
        }
    }
}

function fbox10(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/jimbei.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=10;
    }
    else if (actionVar=="removecharacter"){
        if (state[9]==1){
            document.getElementById("box10Id").style.opacity="0.2";
            state[9]=0;
        }
        else if (state[9]==0){
            document.getElementById("box10Id").style.opacity="1";
            state[9]=1;
        }
    }
}

function fbox11(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/rebecca.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=11;
    }
    else if (actionVar=="removecharacter"){
        if (state[10]==1){
            document.getElementById("box11Id").style.opacity="0.2";
            state[10]=0;
        }
        else if (state[10]==0){
            document.getElementById("box11Id").style.opacity="1";
            state[10]=1;
        }
    }
}

function fbox12(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/laboon.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=12;
    }
    else if (actionVar=="removecharacter"){
        if (state[11]==1){
            document.getElementById("box12Id").style.opacity="0.2";
            state[11]=0;
        }
        else if (state[11]==0){
            document.getElementById("box12Id").style.opacity="1";
            state[11]=1;
        }
    }
}

function fbox13(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/vivi.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=13;
    }
    else if (actionVar=="removecharacter"){
        if (state[12]==1){
            document.getElementById("box13Id").style.opacity="0.2";
            state[12]=0;
        }
        else if (state[12]==0){
            document.getElementById("box13Id").style.opacity="1";
            state[12]=1;
        }
    }
}

function fbox14(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/law.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=14;
    }
    else if (actionVar=="removecharacter"){
        if (state[13]==1){
            document.getElementById("box14Id").style.opacity="0.2";
            state[13]=0;
        }
        else if (state[13]==0){
            document.getElementById("box14Id").style.opacity="1";
            state[13]=1;
        }
    }
}

function fbox15(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/akainu.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=15;
    }
    else if (actionVar=="removecharacter"){
        if (state[14]==1){
            document.getElementById("box15Id").style.opacity="0.2";
            state[14]=0;
        }
        else if (state[14]==0){
            document.getElementById("box15Id").style.opacity="1";
            state[14]=1;
        }
    }
}

function fbox16(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/kaido.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=16;
    }
    else if (actionVar=="removecharacter"){
        if (state[15]==1){
            document.getElementById("box16Id").style.opacity="0.2";
            state[15]=0;
        }
        else if (state[15]==0){
            document.getElementById("box16Id").style.opacity="1";
            state[15]=1;
        }
    }
}


function fbox17(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/ace.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=17;
    }
    else if (actionVar=="removecharacter"){
        if (state[16]==1){
            document.getElementById("box17Id").style.opacity="0.2";
            state[16]=0;
        }
        else if (state[16]==0){
            document.getElementById("box17Id").style.opacity="1";
            state[16]=1;
        }
    }
}


function fbox18(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/sabo.png')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=18;
    }
    else if (actionVar=="removecharacter"){
        if (state[17]==1){
            document.getElementById("box18Id").style.opacity="0.2";
            state[17]=0;
        }
        else if (state[17]==0){
            document.getElementById("box18Id").style.opacity="1";
            state[17]=1;
        }
    }
}


function fbox19(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/kizaru.jpeg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=19;
    }
    else if (actionVar=="removecharacter"){
        if (state[18]==1){
            document.getElementById("box19Id").style.opacity="0.2";
            state[18]=0;
        }
        else if (state[18]==0){
            document.getElementById("box19Id").style.opacity="1";
            state[18]=1;
        }
    }
}

function fbox20(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/teach.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=20;
    }
    else if (actionVar=="removecharacter"){
        if (state[19]==1){
            document.getElementById("box20Id").style.opacity="0.2";
            state[19]=0;
        }
        else if (state[19]==0){
            document.getElementById("box20Id").style.opacity="1";
            state[19]=1;
        }
    }
}

function fbox21(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/buggy.png')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=21;
    }
    else if (actionVar=="removecharacter"){
        if (state[20]==1){
            document.getElementById("box21Id").style.opacity="0.2";
            state[20]=0;
        }
        else if (state[20]==0){
            document.getElementById("box21Id").style.opacity="1";
            state[20]=1;
        }
    }
}

function fbox22(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/newgate.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=22;
    }
    else if (actionVar=="removecharacter"){
        if (state[21]==1){
            document.getElementById("box22Id").style.opacity="0.2";
            state[21]=0;
        }
        else if (state[21]==0){
            document.getElementById("box22Id").style.opacity="1";
            state[21]=1;
        }
    }
}

function fbox23(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/doflamingo.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=23;
    }
    else if (actionVar=="removecharacter"){
        if (state[22]==1){
            document.getElementById("box23Id").style.opacity="0.2";
            state[22]=0;
        }
        else if (state[22]==0){
            document.getElementById("box23Id").style.opacity="1";
            state[22]=1;
        }
    }
}

function fbox24(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/crocodile.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=24;
    }
    else if (actionVar=="removecharacter"){
        if (state[23]==1){
            document.getElementById("box24Id").style.opacity="0.2";
            state[23]=0;
        }
        else if (state[23]==0){
            document.getElementById("box24Id").style.opacity="1";
            state[23]=1;
        }
    }
}

function fbox25(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/bigmom.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=25;
    }
    else if (actionVar=="removecharacter"){
        if (state[24]==1){
            document.getElementById("box25Id").style.opacity="0.2";
            state[24]=0;
        }
        else if (state[24]==0){
            document.getElementById("box25Id").style.opacity="1";
            state[24]=1;
        }
    }
}

function fbox26(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/shanks.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=26;
    }
    else if (actionVar=="removecharacter"){
        if (state[25]==1){
            document.getElementById("box26Id").style.opacity="0.2";
            state[25]=0;
        }
        else if (state[25]==0){
            document.getElementById("box26Id").style.opacity="1";
            state[25]=1;
        }
    }
}

function fbox27(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/hancock.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=27;
    }
    else if (actionVar=="removecharacter"){
        if (state[26]==1){
            document.getElementById("box27Id").style.opacity="0.2";
            state[26]=0;
        }
        else if (state[26]==0){
            document.getElementById("box27Id").style.opacity="1";
            state[26]=1;
        }
    }
}

function fbox28(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/koala.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=28;
    }
    else if (actionVar=="removecharacter"){
        if (state[27]==1){
            document.getElementById("box28Id").style.opacity="0.2";
            state[27]=0;
        }
        else if (state[27]==0){
            document.getElementById("box28Id").style.opacity="1";
            state[27]=1;
        }
    }
}

function fbox29(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/perona.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=29;
    }
    else if (actionVar=="removecharacter"){
        if (state[28]==1){
            document.getElementById("box29Id").style.opacity="0.2";
            state[28]=0;
        }
        else if (state[28]==0){
            document.getElementById("box29Id").style.opacity="1";
            state[28]=1;
        }
    }
}

function fbox30(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/mihawk.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=30;
    }
    else if (actionVar=="removecharacter"){
        if (state[29]==1){
            document.getElementById("box30Id").style.opacity="0.2";
            state[29]=0;
        }
        else if (state[29]==0){
            document.getElementById("box30Id").style.opacity="1";
            state[29]=1;
        }
    }
}

function fbox31(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/coby.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=31;
    }
    else if (actionVar=="removecharacter"){
        if (state[30]==1){
            document.getElementById("box31Id").style.opacity="0.2";
            state[30]=0;
        }
        else if (state[30]==0){
            document.getElementById("box31Id").style.opacity="1";
            state[30]=1;
        }
    }
}

function fbox32(){
    if (actionVar=="chooseyourcharacter"){
        document.getElementById("yourcharacterId").style.backgroundImage="url('image/garp.jpg')";
        document.getElementById("yourcharacterId").style.opacity="0.6"; document.getElementById("title1").innerHTML='<p class="Montserrat" style="opacity: 2; margin-top: 20px;">Tap here to choose this character</p>';
        chosenVar=32;
    }
    else if (actionVar=="removecharacter"){
        if (state[31]==1){
            document.getElementById("box32Id").style.opacity="0.2";
            state[31]=0;
        }
        else if (state[31]==0){
            document.getElementById("box32Id").style.opacity="1";
            state[31]=1;
        }
    }
}
