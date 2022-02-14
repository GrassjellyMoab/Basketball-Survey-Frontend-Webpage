function checkboxClicked() {
    event.stopPropagation;
    event.preventDefault();
}

function check(checkbox) { 
    if (document.getElementById(checkbox).checked == false) {
      document.getElementById(checkbox).checked = true;
    } else {
      document.getElementById(checkbox).checked = false;
    } 
  }




$(function() {
    var checkname = false;
    var checkplayer = false;
    var checkcomments = false;
    var checkanswer = false;
    var checkskills = false;
    // make sure textbox has been clicked once then can show red error
    $("#name").click(function() {
        // change container border to orange when first click textbox
        if (!(checkname)){
            $("#name-container").css({'border-color':'#F19955'});
        }
        checkname = true;
    });
    // make sure textbox has been clicked once then can show red error
    $("#player").click(function() {
        // change container border to orange when first click textbox
        if (!(checkplayer)){
            $("#player-container").css({'border-color':'#F19955'});
        }
        checkplayer = true;    
    });
     // make sure commentbox has been clicked once then can show red error
    $('#comments').click(function(){
        // change container border to orange when first click comment box
        if(!(checkcomments)){   
            $("#why-container").css({'border-color':'#F19955'});
        }
        checkcomments = true;
    });
    // make sure answerbox has been clicked at least once then can show red error
    $('#answer').click(function(){
        // change container border to orange when first click textbox
        if(!(checkanswer)){
            $("#reason-container").css({'border-color':'#F19955'})
        }
        checkanswer = true;
    });

    $("#skills").click(function() {
        // change container border to orange when first click textbox
        if (!(checkskills)) {
            $("#skill-container").css({'border-color':'#F19955'});
            console.log(123);
        }
        checkskills = true;
    });
//----------------------------------------------------------------------------------------------------------------------
    //prevent pressing enter from submitting form
    $('form input').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });
//----------------------------------------------------------------------------------------------------------------------  
    // $("#myForm").submit(function(event) {
    //     // this takes care of disabling the form's submission
    //     event.preventDefault();
    //     // the rest of your code...
    // });

//----------------------------------------------------------------------------------------------------------------------
    $("body").click(function(e) {
        console.log(e.target);
//----------------id:name-----------------------------------------------------------------------------------------------
        // click anyone outside of the textbox
        if (e.target.id != "name" && checkname) {
            // if textbox is empty then red
            if (!($("#name").val())){      
                $("#name-container").css({'border-color':'red'});
                $("#name").css({'border-color':'red', 'border-width':'0 0 1px'});
                $("#wrong1") .css({'display':'block'});             
            }
            // if textbox is not empty then gray
            else{
                $("#name-container").css({'border-color':'lightgray'});
                $("#name").css({'border-color':'lightgray','border-width':'0 0 1px'});
                $("#wrong1") .css({'display':'none'});    
            }
        }
        // click inside the textbox bold the bottom border when textbox empty(red)
        else if (!($("#name").val()) && e.target.id == "name"){
            $("#name").css({'transition': 'border-width 0.1s ease'});
            $("#name").css({'border-width':'0 0 2px'});
        }
        // click inside the textbox bold bottom border when textbox not empty(orange)
        else if ($("#name").val() && e.target.id == "name"){
            $("#name-container").css({'border-color':'#F19955'});
            $("#name").css({'border-color':'#F19955','border-width':'0 0 2px'});
        }
//----------------id:player------------------------------------------------------------------------------------------------------
        // click anywhere outside textbox
        if (e.target.id != "player" && checkplayer) {
            // if textbox is empty then red
            if (!($("#player").val())){                
                $("#player-container").css({'border-color':'red'});
                $("#player").css({'border-color':'red', 'border-width':'0 0 1px'});  
                $("#wrong2") .css({'display':'block'});            
            }
            // if textbox not empty then gray
            else{
                $("#player-container").css({'border-color':'lightgray'});
                $("#player").css({'border-color':'lightgray','border-width':'0 0 1px'});
                $("#wrong2") .css({'display':'none'});    
            }
        }
        // click inside the textbox bold the bottom border when textbox empty(red)
        else if (!($("#player").val()) && e.target.id == "player"){
            $("#player").css({'transition': 'border-width 0.1s ease'});
            $("#player").css({'border-width':'0 0 2px'});
                 
        }
        // click inside the textbox bold bottom border when textbox not empty(orange)
        else if ($("#player").val() && e.target.id == "player"){
            $("#player-container").css({'border-color':'#F19955'});
            $("#player").css({'border-color':'#F19955', 'border-width':'0 0 2px'});   
        }
//----------------id:comments---------------------------------------------------------------------------------------------------
        // click anywhere outside the commentbox
        if (e.target.id != "comments" && checkcomments){
            // if commentbox is empty then red
            if (!($("#comments").val())){
                $("#why-container").css({'border-color':'red'});
                $("#comments").css({'border-color':'red', 'border-width':'1px'});  
                $("#wrong3") .css({'display':'block'});   
            }
            // if textbox not empty then gray
            else{
                $("#why-container").css({'border-color':'lightgray'});
                $("#comments").css({'border-color':'lightgray','border-width':'1px'});
                $("#wrong3") .css({'display':'none'});
            }
        } 
//----------------radiobuttons-if-checked-cancel-red------------------------------------------------------------------------------------------------
        if(document.getElementById("radio1.1").checked || document.getElementById("radio1.2").checked){
            $("#radio1-container").css({'border-color':'lightgray'});
            $("#wrong4") .css({'display':'none'});
        }
        
        if(document.getElementById("radio2.1").checked || document.getElementById("radio2.2").checked || document.getElementById("radio2.3").checked || document.getElementById("radio2.4").checked || document.getElementById("radio2.5").checked){
            $("#radio2-container").css({'border-color':'lightgray'});
            $("#wrong5") .css({'display':'none'});
        }



//----------------id=answer----------------------------------------------------------------------------------------------------

        if (e.target.id != "answer" && checkanswer){
            // if commentbox is empty then red
            if (!($("#answer").val())){
                $("#reason-container").css({'border-color':'red'});
                $("#answer").css({'border-color':'red', 'border-width':'1px'});  
                $("#wrong6") .css({'display':'block'});   
            }
            // if textbox not empty then gray
            else{
                $("#reason-container").css({'border-color':'lightgray'});
                $("#answer").css({'border-color':'lightgray','border-width':'1px'});
                $("#wrong6") .css({'display':'none'});
            }
        }
//----------------id=skills-----------------------------------------------------------------------------------------------------
       // try find a way such that first time press option 0 will cause red error
        if (e.target.id !="skills" && checkskills){
            // if no option is selected
            if(document.getElementById("skills").value == 0){  
                $("#skill-container").css({'border-color':'red'});
                $("#skills").css({'border-color':'red'});  
                $("#wrong7") .css({'display':'block'});   
            }
            else{
                $("#skill-container").css({'border-color':'lightgray'});
                $("#skills").css({'border-color':'lightgray'});
                $("#wrong7") .css({'display':'none'});
            }
        }
    });

    $('#skills').change(function(){
        if(document.getElementById("skills").value == 0){
            $("#skill-container").css({'border-color':'red'});
            $("#skills").css({'border-color':'red'});  
            $("#wrong7") .css({'display':'block'});   
        }
        else{   
            $("#skill-container").css({'border-color':'lightgray'});
            $("#skills").css({'border-color':'lightgray'});
            $("#wrong7") .css({'display':'none'});
        }
    });
    
//------------------keypress-events------------------------------------------------------------------------------------------------------------
   
    $('#name').keypress(function(e){
        // orange when text typed into textbox
        $("#name").css({'border-color':'#F19955', 'border-width':'0 0 2px'}); 
        $("#name-container").css({'border-color':'#F19955'});
        $("#wrong1") .css({'display':'none'}); 
    });
    $('#player').keypress(function(e){
        $("#player").css({'border-color':'#F19955', 'border-width':'0 0 2px'}); 
        $("#player-container").css({'border-color':'#F19955'});
        $("#wrong2") .css({'display':'none'}); 
    });

    $('#comments').keypress(function(e){
        $("#comments").css({'border-color':'#F19955'}); 
        $("#why-container").css({'border-color':'#F19955'});
        $("#wrong3") .css({'display':'none'});
    });

    $('#answer').keypress(function(e){
        $("#answer").css({'border-color':'#F19955'}); 
        $("#reason-container").css({'border-color':'#F19955'});
        $("#wrong6") .css({'display':'none'});   
    });

    
//------------------submit button------------------------------------------------------------------------------------------------------------

    var elements = document.getElementById("myForm").elements;
    $('#sub').click(function(){
        var count = 0;
        console.log("inside");
        for (var i = 0, element; element= elements[i++];){
            if(element.value){
                count += 1;
            }

            if(element.id=="name" && !(element.value)){
                $("#name-container").css({'border-color':'red'});
                $("#name").css({'border-color':'red', 'border-width':'0 0 1px'});
                $("#wrong1") .css({'display':'block'})
                document.getElementById("name").scrollIntoView(({behavior: 'auto',block: 'center',inline: 'center'}));
                break;
            }
            else if (element.id=="player" && !(element.value)){
                $("#player-container").css({'border-color':'red'});
                $("#player").css({'border-color':'red', 'border-width':'0 0 1px'});  
                $("#wrong2") .css({'display':'block'});
                document.getElementById("player").scrollIntoView(({behavior: 'auto',block: 'center',inline: 'center'}));
                break;   
            }
            else if (element.id=="comments" && !(element.value)){
                $("#why-container").css({'border-color':'red'});
                $("#comments").css({'border-color':'red', 'border-width':'1px'});  
                $("#wrong3") .css({'display':'block'});   
                document.getElementById("comments").scrollIntoView(({behavior: 'auto',block: 'center',inline: 'center'}));
                break;
            }

            else if ((element.getAttribute("name") == "exe") && !(document.getElementById("radio1.1").checked) && !(document.getElementById("radio1.2").checked)){
                $("#radio1-container").css({'border-color':'red'}); 
                $("#wrong4") .css({'display':'block', 'top': '15px'});  
                document.getElementById("radio1-container").scrollIntoView(({behavior: 'auto',block: 'center',inline: 'center'}));
                break;
            }
        
            else if ((element.getAttribute("name") == "exe1") && !(document.getElementById("radio2.1").checked) && !(document.getElementById("radio2.2").checked) && !(document.getElementById("radio2.3").checked) && !(document.getElementById("radio2.4").checked) && !(document.getElementById("radio2.5").checked)){
                $("#radio2-container").css({'border-color':'red'});
                $("#wrong5") .css({'display':'block'});  
                $("#radio2-container").css({'border-color':'red'});
                $("#wrong5") .css({'display':'block', 'top': '15px'});  
                document.getElementById("radio2-container").scrollIntoView(({behavior: 'auto',block: 'center',inline: 'center'}));
                break;
            }

            else if (element.id=="answer" && !(element.value)){
                console.log("HELLO?")
                $("#reason-container").css({'border-color':'red'});
                $("#answer").css({'border-color':'red', 'border-width':'1px'});  
                $("#wrong6") .css({'display':'block'});  
                document.getElementById("answer").scrollIntoView(({behavior: 'auto',block: 'center',inline: 'center'}));
                break;
            }

            else if ( element.id=="skills" && element.value == 0){
                console.log("SKILL SECTIOn")
                $("#skill-container").css({'border-color':'red'});
                $("#skills").css({'border-color':'red'});  
                $("#wrong7") .css({'display':'block'});   
                break;
            }
            if(count == 7){
                location.replace("After.html");
            }
        }
        count = 0;
    })
});