//////////////Batcher Sorter//////////////

//*******Breaks up the array by even and odd index places*******//
  function breakUp(randomNum){

    let lengthArray = randomNum.length / 2;
    for (var i = 0; i < randomNum.length; i += 2){ //Add two to i every iteration
            tempArrayOne.push(randomNum[i]) //Add the element at index i to a temporary array
        }
    for (var i = 1; i < randomNum.length; i += 2){ //Add two to i every iteration
        tempArrayTwo.push(randomNum[i]) //Add the element at index i to a temporary array
    }

    //console.log(tempArrayOne ,tempArrayTwo);
}

//This puts the even and odd values back in their respective places
function putBack(lengthArray, randomNum, zeroOneUpdate, twoThreeUpdate){
  var secArray = [];
  var secArrayOther = [];
  for (var i = 0; i < lengthArray; i++){ //Add two to i every iteration
          secArray.push(zeroOneUpdate[i], twoThreeUpdate[i]); //Add the element at index i to a temporary array
      }
    finalNum = secArray;
    //console.log("other random " + finalNum);
  }

//*******This sorts each half of the array*******//
  function sortPart(lengthArray, zeroOne, twoThree){
    for (i = 0; i < lengthArray; i++)
    {
      for (j = 0; j < lengthArray + 1; j++)
      {
        if (zeroOne[j] > zeroOne[i])
        {
          let ele1 = zeroOne[j];
          let ele2 = zeroOne[i];
          zeroOne[j] = ele2;
          zeroOne[i] = ele1;
          //console.log(zeroOne);
        }
        if (twoThree[j] > twoThree[i])
        {
          let ele1 = twoThree[j];
          let ele2 = twoThree[i];
          twoThree[j] = ele2;
          twoThree[i] = ele1;
          //console.log(twoThree);
        }
      }
    }
//*******This code is used only the second time around*******//
    zeroOneUpdate = zeroOne;
    twoThreeUpdate = twoThree;

//*******This code is used only the first time around*******//
    randomNum = [];
    randomNum.push(...zeroOne);
    randomNum.push(...twoThree);
  }

  function sortAll(fullLength, finalNum){
    for (i = 0; i < fullLength; i++)
    {
      for (j = 0; j < fullLength+1; j++)
      {
        if (finalNum[13]>finalNum[14]){
          let ele1 = finalNum[13];
          let ele2 = finalNum[14];
          finalNum[13] = ele2;
          finalNum[14] = ele1;
        }else if (finalNum[11]>finalNum[12]){
          let ele1 = finalNum[11];
          let ele2 = finalNum[12];
          finalNum[11] = ele2;
          finalNum[12] = ele1;
        }else if (finalNum[9]>finalNum[10]){
          let ele1 = finalNum[9];
          let ele2 = finalNum[10];
          finalNum[9] = ele2;
          finalNum[10] = ele1;
        }else if (finalNum[7]>finalNum[8]){
          let ele1 = finalNum[7];
          let ele2 = finalNum[8];
          finalNum[7] = ele2;
          finalNum[8] = ele1;
        }else if (finalNum[5]>finalNum[6]){
          let ele1 = finalNum[5];
          let ele2 = finalNum[6];
          finalNum[5] = ele2;
          finalNum[6] = ele1;
        }else if (finalNum[3]>finalNum[4]){
          let ele1 = finalNum[3];
          let ele2 = finalNum[4];
          finalNum[3] = ele2;
          finalNum[4] = ele1;
        }else if(finalNum[1]>finalNum[2]){
          let ele1 = finalNum[1];
          let ele2 = finalNum[2];
          finalNum[1] = ele2;
          finalNum[2] = ele1;
        }else if(finalNum[0]>finalNum[1]){
          let ele1 = finalNum[0];
          let ele2 = finalNum[1];
          finalNum[0] = ele2;
          finalNum[1] = ele1;}
      }
    }
  console.log("final num: " + finalNum);
  }


//*******Random Number Generator*******//
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  //This runs the random number generator
var randomNum = Array.from({length: 16}, () => getRandomInt(16));
console.log("Starting Random Numbers: " + randomNum);

/*
//This is a different random number generator that only prints out 0 through 16
function generateRan(){
    var nums = [16];
    var max = nums[Math.floor(Math.random()*nums.length)];
    //var max = 8;

    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);
        if(randomNum.indexOf(temp) == -1){
            randomNum.push(temp);
        }
        else
         i--;
    }
    //console.log(randomNum)
} */
    //var randomNum = [];
//generateRan(randomNum);


  //*******Sets up some values*******//
  var tempArrayOne = [];
  var tempArrayTwo = [];
  let finalNum = [];
  let lengthArray = randomNum.length / 2;
  let fullLength = randomNum.length;

  //*******Splits up the array*******//
  let zeroOne = randomNum.slice(0,lengthArray);
  //console.log(zeroOne);
  let twoThree = randomNum.slice(lengthArray,fullLength);
  //console.log(twoThree);

//*******Runs the batcher sorter*******//
  sortPart(lengthArray, zeroOne, twoThree);
  breakUp(randomNum);
  sortPart(lengthArray, tempArrayOne, tempArrayTwo);
  //console.log("zeronetwothree: " + zeroOneUpdate + "," + twoThreeUpdate);
  putBack(lengthArray, randomNum, zeroOneUpdate, twoThreeUpdate);
  sortAll(fullLength, finalNum);


//////////////Banyan Network//////////////
function AtoB(input, binary){
  if(input=="A1"){
    if(binary[0]=='0'){
      path1 = "B1"
    }else{
      path1="B5"
    }
  }

  if(input=="A2"){
    if(binary[0]=='0'){
      path1 = "B2"
    }else{
      path1="B6"
    }
}
    if(input=="A3"){
      if(binary[0]=='0'){
        path1 = "B3"
      }else{
        path1="B7"
      }
  }

  if(input=="A4"){
    if(binary[0]=='0'){
      path1 = "B4"
    }else{
      path1="B8"
    }
  }
  if(input=="A5"){
    if(binary[0]=='0'){
      path1 = "B1"
    }else{
      path1="B5"
    }
  }
  if(input=="A6"){
    if(binary[0]=='0'){
      path1 = "B2"
    }else{
      path1="B6"
    }
  }
  if(input=="A7"){
    if(binary[0]=='0'){
      path1 = "B3"
    }else{
      path1="B7"
    }
  }
  if(input=="A8"){
    if(binary[0]=='0'){
      path1 = "B4"
    }else{
      path1="B8"
    }
  }
return path1;
}
function BtoC(input, binary){
  if(input=="B1"){
    if(binary[1]=='0'){
      path2 = "C1"
    }else{
      path2="C3"
    }
  }

  if(input=="B2"){
    if(binary[1]=='0'){
      path2 = "C2"
    }else{
      path2="C4"
    }
}
    if(input=="B3"){
      if(binary[1]=='0'){
        path2 = "C1"
      }else{
        path2="C3"
      }
  }

  if(input=="B4"){
    if(binary[1]=='0'){
      path2 = "C2"
    }else{
      path2="C4"
    }
  }
  if(input=="B5"){
    if(binary[1]=='0'){
      path2 = "C5"
    }else{
      path2="C7"
    }
  }
  if(input=="B6"){
    if(binary[1]=='0'){
      path2 = "C6"
    }else{
      path2="C8"
    }
  }
  if(input=="B7"){
    if(binary[1]=='0'){
      path2 = "C5"
    }else{
      path2="C7"
    }
  }
  if(input=="B8"){
    if(binary[1]=='0'){
      path2 = "C6"
    }else{
      path2="C8"
    }
  }
return path2;
}
      function CtoD(input, binary){
        if(input=="C1"){
          if(binary[2]=='0'){
            path3 = "D1"
          }else{
            path3 ="D2"
          }
        }

        if(input=="C2"){
          if(binary[2]=='0'){
            path3 = "D1"
          }else{
            path3 ="D2"
          }
      }
          if(input=="C3"){
            if(binary[2]=='0'){
              path3 = "D3"
            }else{
              path3 ="D4"
            }
        }

        if(input=="C4"){
          if(binary[2]=='0'){
            path3 = "D3"
          }else{
            path3 ="D4"
          }
        }


      if(input=="C5"){
        if(binary[2]=='0'){
          path3 = "D5"
        }else{
          path3 ="D6"
        }
      }

      if(input=="C6"){
        if(binary[2]=='0'){
          path3 = "D5"
        }else{
          path3 ="D6"
        }
    }
        if(input=="C7"){
          if(binary[2]=='0'){
            path3 = "D7"
          }else{
            path3 ="D8"
          }
      }

      if(input=="C8"){
        if(binary[2]=='0'){
          path3 = "D7"
        }else{
          path3 ="D8"
        }
      }
return path3;
    }

function DtoOut(input, binary){
  if(input=="D1"){
    if(binary[3]=='0'){
      path4 = "0"
    }else{
      path4 ="1"
    }
  }

  if(input=="D2"){
    if(binary[3]=='0'){
      path4 = "2"
    }else{
      path4 ="3"
    }
}
    if(input=="D3"){
      if(binary[3]=='0'){
        path4 = "4"
      }else{
        path4 ="5"
      }
  }

  if(input=="D4"){
    if(binary[3]=='0'){
      path4 = "6"
    }else{
      path4 ="7"
    }
  }
  if(input=="D5"){
    if(binary[3]=='0'){
      path4 = "8"
    }else{
      path4 ="9"
    }
  }

  if(input=="D6"){
    if(binary[3]=='0'){
      path4 = "10"
    }else{
      path4 ="11"
    }
}
    if(input=="D7"){
      if(binary[3]=='0'){
        path4 = "12"
      }else{
        path4 ="13"
      }
  }

  if(input=="D8"){
    if(binary[3]=='0'){
      path4 = "14"
    }else{
      path4 ="15"
    }
  }
  return path4;
}

//*******Set up our values******//
      let newNum = finalNum;
      let input;
      let path1;
      let path2;
      let path3;
      let path4;
      var bin = [];
      var firstNum = [];
      var temp;

//*******Loop for our inputs from Batcher******//
      for (i = 0; i < newNum.length; i++){

//*******Starting values*******//
        sv = [
          [0, 'A1'],
          [1, 'A2'],
          [2, 'A3'],
          [3, 'A4'],
          [4, 'A5'],
          [5, 'A6'],
          [6, 'A7'],
          [7, 'A8'],
          [8, 'A1'],
          [9, 'A2'],
          [10, 'A3'],
          [11, 'A4'],
          [12, 'A5'],
          [13, 'A6'],
          [14, 'A7'],
          [15, 'A8'],
        ]

//*******Converts inputs to 4 bit binary******//
bin = (newNum[i]).toString(2).padStart(4,0)

//*******Sorts through the Batcher array******//
//*******Returns values for the ******//
if(newNum[i] = sv[i])
{
  temp = sv[i][1]
}
        path1 = AtoB(temp,bin)
        path2 = BtoC(path1, bin)
        path3 = CtoD(path2, bin)
        path4 = DtoOut(path3, bin)
        console.log("Binary value: " + bin);
        console.log("Starting at: " + temp + " --> " + path1 + " --> " + path2 + " --> " + path3 + " --> " + path4);
        console.log(" ");
  }
