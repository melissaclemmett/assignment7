$(document).ready(function(){
  // alert("TEST");
  // $(".hide").hide();
  $(".sectionLink").click(function(event){
    event.preventDefault();
    alert("Sorry, we're not taking any new submissions right now!");
  });
  $(".headerLink").click(function(event){
    event.preventDefault();
    alert("Sorry, we're not taking any new submissions right now.");
  });
  $(".readMore").click(expandBlogPost1);
  $("#readLess").click(collapseBlogPost1);
  $(".learnMore").click(expandAboutRelaxr);
});

function expandBlogPost1(event) {
  event.preventDefault();
  $("#showThisOnClick").slideDown();
  $("#readLess").show();
  $(".readMore").hide();
}

function collapseBlogPost1(event) {
  event.preventDefault();
  $("#showThisOnClick").slideUp("slow", function(){
    $(".readMore").show();
  });
  $("#readLess").hide();
}

function expandAboutRelaxr(event) {
  event.preventDefault();
  $("#learnMoreText").slideDown();
  $(".learnMore").hide();
}
