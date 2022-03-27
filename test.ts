// function add(number1:number, numner2:number){    //пробная функция на TS
//     return console.log(number1+number2)
// }
// add(2,3);


//задача №1      поменять массив в обратном порядке

function reverseArray(arr1:any){
    return console.log(arr1.reverse());
}
reverseArray([5,4,3,2,1]);


// //задача №2     найти максимальное число в массиве

function findingMax(arr2:any){
    return console.log(Math.max(...arr2));
}
findingMax([1,12,5,22,6,101,6,2,17]);


// //задача №3     записать в массив ряд фибаначи начиная с N члена с длинной массива M


  let n = fib(6);
let m = 4;
let array:any = [];
createArray(array, n, m,);
console.log(array);

function fib(n:any):any {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function createArray(array:any, n:any, m:any) {
    let nextN = n;
    let i:any;
    for (i = 0; i < m; i++) {
        array.push(nextN);
        nextN = fib(n + 1);
        n++;
      }
  }


//задача №4     даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают
// по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )


function sravnenie(num1:any, num2:any){
    let qual1:number = 0;
    let qual2:number = 0;
    for(let i=0; i<num1.length; i++){
        if(num1[i]===num2[i]){
            qual1++
        }
        for(let j=0; j<num2.length; j++){
            if(num1[i]===num2[j]){
                qual2++
            }
        }
    }
    console.log(qual1,qual2);
}
sravnenie("12345","34567");


//задача №5     сортировка массива по возрастанию/убыванию


function sortirovka(arr5:any){
    return console.log(arr5.sort((a:any,b:any)=>a-b));      //по возрастанию
    // return console.log(arr5.sort((a,b)=>b-a));      //по убыванию
}
sortirovka([3,17,5,22,2,76,67,34,1,5]);


//задача №6     удалить из массива все повторяющиеся элементы


function deletePovtor(arr6:any){
    let arr61=arr6.filter((item:any,index:any)=>{
      return arr6.indexOf(item)===index
    });
    console.log(arr61);
    }
deletePovtor([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6])

      //TYPESCRIPT установка
//npm init
//npm install typescript --save -dev
//npm install ts-node --save -dev
//npx tsc   это будет компиляция проекта
//npx tsc --build --clean     очистка компилятора
//node filename.js    запуск скомпилированного файла js из ts


      //ESlint установка
//npm install eslint --save-dev
//npm init @eslint/config     создает файл конфига .eslintrc.{js,yml,json}
//npx eslint yourfile.js


      //Prettier установка
//npm install --save-dev --save-exact prettier
//echo {}> .prettierrc.json
//npx prettier --write
//prettier --write app/components/Button.js
//Or use a glob like prettier --write "app/**/*.test.js" to format all
// tests in a directory (see fast-glob for supported glob syntax).
//npx prettier --check

//!!!!!! не забывай делать ИГНОР файлы    .gitignore  .eslintignore   .prettierignore
    