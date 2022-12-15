// Arrays methods
//Push method
//eg.1)
console.log("Push method")
let colors=["red", "yellow", "green"];
console.log("Orignal input is :"+colors);
let newcolors=colors.push("orange");
console.log(("After using push method output is :"+colors))

//Unshift
//eg.1
let numbers=['20','30','40','50'];
console.log(numbers);
let addnumbers=numbers.unshift('10');
console.log(numbers);

//pop
//eg.2
let Colours=["red", "yellow", "green"];
console.log(Colours);
let NewColours=Colours.pop('');
console.log(Colours);

//shift
//eg.1)
let colours=["red","pink","black"];
console.log(colours);
let newcolours=colours.shift();
console.log(colours); 
//eg.2)
let color=["orange","green","yellow","white"];
console.log(color);
let newcolour=color.shift("");
console.log(color);

//Modifying array method
//1)Slice
//eg1).
let fruit=['banana','mango','orange','corn'];
console.log(fruit);
let favfruit=fruit.splice(1,2,'grephs');
console.log(fruit);

//2Slice
//eg1)
let favsub=["MERN","MEAN","DEVOPS","PHP",".NET"];
console.log(favsub);
let myfavsub=favsub.slice(1,0);
console.log(favsub);


//3) fill
//eg1)
let Name=['Shubhankar','Vasudev','Hitesh'];
console.log(Name);
console.log(Name.fill('Shubhankar'));

//4)To-string
//eg1)
let flower=['Rose','Lotus','Mogra','Hibiscus']
console.log(flower);
console.log(flower.toString());


//serching and sorting method
//1) sort()
//eg1)
let stringValue=['Shubhankar','Vasudev','Hitesh'];
console.log(stringValue);
console.log(stringValue.sort());
//eg2)
let string=['Shubhankar','Vasudev','Hitesh'];
console.log(string);
console.log(string.sort());

//2)reverse
//eg1)
let stringValues=['Shubhankar','Vasudev','Hitesh'];
console.log(stringValues);
console.log(stringValues.sort());
//eg2)
let classNames=['Shubhankar','Vasudev','Hitesh'];
console.log(classNames);
//console.log(classNames.sort());
console.log(classNames.reverse());

//3) include
//eg1)
let food=["noodles","pizza","eggrice"];
console.log(food);
console.log(food.includes("pizza"));
//eg2)
console.log(food.includes("maggie"));
console.log(" ");

//4)indexof
let favFood=["pizza","roti","maggie","eggrice"];
console.log(favFood);
console.log(favFood.indexOf("eggrice"));

// eg 2
console.log(favFood.indexOf("bhel"));
console.log(" ");

//4) Static Array method 
   //1)Array.of
   let myNames=Array.of('Shubhankar','Vasudev','Hitesh');
  console.log(myNames);
  //eg 2
  let animals=Array.of("Dog","Cat","Pig","Goat");
  console.log(animals);

// 2) Array.from 
//eg 1
  let favName=("Shubhankar");
  console.log(favName);
  console.log(Array.from(favName));
  //eg2)
  let animal=("Leopord");
  console.log(animal);
  console.log(Array.from(animal));

//3)Array isArray
//eg1)
console.log(Array.isArray(['Shubhankar','Vasudev','Hitesh']));
console.log(Array.isArray("Shivanand"));
console.log(" ");

// 5) Array Iterrator Method 
//1) every method
//eg1)
let price=[100,78,60,80,45,20];
console.log(price);
const checkprice=price.every((currentvalue,index)=>{
      return currentvalue >30;
});
console.log(checkprice);

//2) some method
let prices=[25,78,59,40,98,67];
console.log(prices);
const newprices=prices.some((currentvalue)=>{
    return currentvalue >78;
});
console.log(newprices);
console.log(" ");

//3) find 
//eg1)
let studMark=[45,90,78,56,59,95];
console.log(studMark);
const checkstudMark=studMark.find((currentvalue)=>{
     return currentvalue >70;
});
console.log(checkstudMark);
console.log(" ");

//4) filter 
//eg1)
let studMarks=[45,90,78,56,59,95];
console.log(studMarks);
const checkstudMarks=studMark.filter((currentvalue)=>{
     return currentvalue >70;
});
console.log(checkstudMarks);

const mobile=[
    {
        brand:"vivo",
        model:"vivo 30",
        price:"15000",
    },
    {
        brand:"mi",
        model:"8 pro",
        price:"40000",
    },
    {
        brand:"oppo",
        model:"opp0 30",
        price:"20000",
    },
    {
        brand:"mi",
        model:"6 pro",
        price:"30000",
    },
    {
        brand:"vivo",
        model:"vivo 20",
        price:"8000",
    }
];

const mimobile=mobile.filter((mobile)=>{
    //   console.log(mobile);
         if(mobile.brand === "mi"){
             return true ;
         }
});
console.log(mimobile);
console.log(" ");

// 5) Map Method  
console.log("map method");
let numArray=[30,78,56,98,58];
console.log(numArray);
const mapnum=numArray.map((currentvalue)=>{
         return currentvalue *2;
});
console.log(mapnum);
console.log(" ");

// 6) foreach 
console.log("for each method");
let numArrays=[47,89,30,78,56,98,58];
console.log(numArrays);
const mapnums=numArrays.forEach((currentvalue)=>{
         console.log(currentvalue+2);   
});
console.log(" ");
// eg 2
console.log("reduce method");

let numReduce=[2,4,7,5];
const totalnum=numReduce.reduce((total,number)=>{
     sum=total+number;
     return sum;
});
console.log(totalnum);

