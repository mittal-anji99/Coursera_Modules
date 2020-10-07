(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var name in names) {
    var n =names[name]
    n=n.toLowerCase()
    var firstLetter =n.charAt(0);
    if (firstLetter=='j') {
      byeSpeaker.speak(names[name])
    }
    else {
      helloSpeaker.speak(names[name])
    }
  }
})();
