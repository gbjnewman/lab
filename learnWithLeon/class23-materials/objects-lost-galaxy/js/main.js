//Create a dog object that has four properties and three methods
let dogObj = {
  color: "blue",
  height: 70,
  weight: 29,
  eye_color: "blue",


  woof() {
    console.log("woof");
  },

  bark() {
    console.log("bark");
  },

  tailWag() {
    console.log("tail wag");
  },

}

dogObj.breed = "poodle"
dogObj.name = "fido"
dogObj.rollOver = function() {
  console.log("i rolled over")
}
