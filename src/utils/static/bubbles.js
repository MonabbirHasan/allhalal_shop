class Bubble {
  static bubble() {
    const front_signup = document.getElementById("front_signup");
    for (let index = 0; index < 500; index++) {
      var i = document.createElement("i");
      var x = Math.random() * window.innerWidth + "px";
      var y = Math.random() * window.innerHeight + "px";
      var transform = Math.random() * new Date().getMilliseconds();
      var size = Math.random() * 10;
      var motion = Math.random() * 5;
      i.style.transitionDelay = motion + "s";
      i.style.transitionBehavior = "smoth";
      i.style.transform = `translateY(${transform}px)` / 5;
      i.style.top = y;
      i.style.left = x;
      i.style.width = 1 + size + "px";
      i.style.height = 1 + size + "px";
      front_signup.appendChild(i);
    }
  }
}
export default Bubble;