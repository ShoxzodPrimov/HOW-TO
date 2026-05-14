const data = {
  cars: ['BMW', 'Volvo' , 'Ford'],
  animal:['Cat' , 'Dog' , 'Kiwi' , "Cow"],
  fruits:['Orange' , 'Melon' , 'Kiwi' , 'Banana' , 'Lemon'],
  colors:['Orange' , 'Red' , 'Blue'],
};

const { cars , animal , fruits , colors } = data;

const supportData = {
  all:[...cars , ...animal , ...fruits , ...colors].sort(() => 0.5 - Math.random()),
  cars,
  animal,
  fruits,
  colors,
}

export default supportData;