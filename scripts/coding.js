


//This eventlistener toggles between the description and title when a tile is clicked
$(".fullGridItem").click(function () {
    //We see if our h2 element is hidden to know which way we are toggling
    if ($(".shownTitle", this).is(":hidden")) {
        $(".hiddenDesc", this).hide();
        $(".shownTitle", this).show();
    }
    else {
        $(".shownTitle", this).hide();
        $(".hiddenDesc", this).show();
    }
});

$(document).ready(function () {
    $(".hiddenDesc").hide();
});