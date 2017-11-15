function start() {

    var name = document.getElementById("Name").value;
    var month= document.getElementById("month").value;
    var day = document.getElementById("day").value;

    var today = new Date;
    var d = today.getMonth()+1;
    var m = today.getDate();
    if(m == day && d == month) {
        document.getElementById("Birthday").innerHTML= "Happy Birthday Human! You hella old.";
    }
    document.getElementById("horoscope").innerHTML = sign(month, day);
    document.getElementById("Text").innerHTML = message();
    document.getElementById("photo").innerHTML = images();

}


    function sign(month, day) {
        if (name = "") {
            type = 0;
            return "Enter Name";
        }
        if (month == 12 && day >= 22 || month == 1 && day <= 19) {
            type = 1;
            return "You are a Capricorn";
        } else if (month == 1 && day >= 20 || month == 2 && day <= 18) {
            type = 2;
            return "You are an Aquarius ";
        }else if (month == 2 && (day == 30 || day == 31)){
                return "No date my dudes";
        } else if (month == 2 && day >= 19 || month == 3 && day <= 20) {
            type = 3;
            return "You are a Pisces";
        } else if (month == 3 && day >= 21 || month == 4 && day <= 19) {
            type = 4;
            return "You are an Aries";
        } else if (month == 4 && day >= 20 || month == 5 && day <= 20) {
            type = 5;
            return "You are a Taurus";
        } else if (month == 5 && day >= 21 || month == 6 && day <= 20) {
            type = 6;
            return "You are a Gemini";
        } else if (month == 6 && day >= 21 || month == 7 && day <= 22) {
            type = 7;
            return "You are a Cancer";
        } else if (month == 7 && day >= 23 || month == 8 && day <= 22) {
            type = 8;
            return "You are a Leo";
        } else if (month == 8 && day >= 23 || month == 9 && day <= 22) {
            type = 9;
            return "You are a Virgo";
        } else if (month == 9 && day >= 23 && month == 10 && day <= 22) {
            type = 10;
            return "You are a Sagittarius";
        } else if (month == 10 && day >= 22 || month == 11 && day <= 21) {
            type = 11;
            return "You are a Scorpio";
        }
}

function message() {
        if (type==0){
            return "";
        }
        if(type==1){
            return "You are the same sign as Lebron James, Martin Luther King, and Blue Ivy Carter ";

        }
        if(type==2){
            return "You are the same sign as Shakira, Michael Jordan, and President Lincoln";
        }
        if(type==3){
            return "You are the same sign as YG 400, Steph Curry, and Rihanna ";
        }
        if(type==4){
            return "You are the same sign as Emma Watson, Quavo, and The Catch Me Outside Girl";
        }
        if(type==5){
            return "You are the same sign as John Cena, The Rock, Adele, Queen Elizabeth ";
        }
        if(type==6){
            return "You are the same sign as Donald Trump (not my president), Kanye West, Angelie Jolie ";
        }
        if(type==7){
            return "You are the same sign as Lionel Messi, Tom Hanks, Kevin Hart";
        }
        if(type==8){
            return "You are the same sign as OBAMA, Kylie Jenner, JLO, Lil Uzi Vert";
        }
        if(type==9){
            return "You are the same sign as Queen Beyonce, Jada Pinkett Smith, Blake Lively, Prince Harry";
        }
        if(type==10){
            return "You are the same sign as Picasso, Hilary Clinton, Bill Gates";
        }
        if(type==11){
            return "You are the same sign as Jay Z, Taylor Swift, Brittney Spears";
        }
}

function images() {
    if (type==0){
        return "";
    }
    if(type==1){
        return "<img src='img/Capricon.jpg'>";

    }
    if(type==2){
        return "<img src='img/aquarius.jpg'>";
    }
    if(type==3){
        return "<img src='img/Pisces.jpg'>";
    }
    if(type==4){
        return "<img src='img/Ares.jpg'>";
    }
    if(type==5){
        return "<img src='img/taurus.jpg'>";
    }
    if(type==6){
        return "<img src='img/gemini.jpg'>";
    }
    if(type==7){
        return "<img src='img/Cancer.jpg'>";
    }
    if(type==8){
        return "<img src='img/Leo.jpg'>";
    }
    if(type==9){
        return "<img src='img/Virgo.jpg'>";
    }
    if(type==10){
        return "<img src='img/Sag.jpg'>";
    }
    if(type==11){
        return "<img src='img/Socrpio.jpg'>";
    }
}

