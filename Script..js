var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;



function _(x)
{
    return document.getElementById(x);
}

function renderQuestion()
{
    test = _("test");

    if(pos >= questions.length)
    {
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2> <button id='button'> <a href='index.html'>Done</a> </buton>";

        _("test_status").innerHTML = "Test Completed !";

        pos = 0;
        correct = 0;

        return false;
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;

    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];

    //puts question in its place
    test.innerHTML = "<h3>"+question+"</h3>";

    //puts options in their places
    test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'>"+chD+"<br><br>";

    //saves selected option & also used to proceed to next question
    test.innerHTML += "<button onclick='checkAnswer()' id='button' >Next Question</button>";

}

function checkAnswer()
{
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++)
    {
        if(choices[i].checked)
        {
            choice = choices[i].value;
        }
    }
    //if you want to let a user know if they got each answer correctly, this is where you put that work 
    if(choice == questions[pos][5])
    {
        correct++;
    }
    
    pos++;
    renderQuestion();
}

window.addEventListener("load", renderQuestion, false);


