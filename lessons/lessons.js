"use strict"

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed!"); },
    function () { alert("We canceled the execution!"); }
);

