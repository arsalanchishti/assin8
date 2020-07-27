// ==== 38-42 =====




//==== task no 1 =====


// function calc(a,b){
//     alert(a+b)
// }

// calc(5,5);





// ===== task no 2 ====

// function leye(){
//     var val1 = prompt('Enter the year');
//     var sli = val1.slice(3)
//     if(sli === '0' || sli === '2' || sli === '4' || sli === '6' || sli === '8' ){
//         alert('This is leap year')
//     }else{
//         alert('Sorry this is not leap year')
//     }
// }

// leye();










// ===== chepter no 43-48 ========




// ===== task no 1 =====

// function clickbtn(){
//     alert('this is on click')
// }






// ===== task no 2 ====

// answer of this task is on HTML page







// ===== task no 3 =====

// function delet(num){
//     var table = document.getElementById('mytab');
//     table.deleteRow(num)
// }





// ===== task no 4 =====

// function swepping(id,src){
//     var image = document.getElementById(id);
//     image.src =src
// }





// ===== task no 5 =====

// var val1 = 0;
// function incre(){
//     val1++
//     var inc = document.getElementById('counter');
//     inc.innerHTML = val1
// }


// function decre(){
//     val1--
//     var inc = document.getElementById('counter');
//     inc.innerHTML = val1
// }








// ==== chepter no 49-52=====


//===== task no 1 =====

// function send(){
//     var un = document.getElementById('firstn')
//     var un1 = document.getElementById('first-n')
//     un1.innerHTML = un.value

//     var ln = document.getElementById('lastn')
//     var ln1 = document.getElementById('last-n')
//     ln1.innerHTML = ln.value

//     var dob = document.getElementById('dob')
//     var dob1 = document.getElementById('do-b')
//     dob1.innerHTML = dob.value

//     var usr = document.getElementById('usern')
//     var usr1 = document.getElementById('user-n')
//     usr1.innerHTML = usr.value

//     var ps = document.getElementById('pass')
//     var ps1 = document.getElementById('pass1')
//     ps1.innerHTML = ps.value
// }


//===== task no 2 =====

var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, sed, repudiandae, quia quod fugit ratione amet voluptatum corrupti doloremque ipsum libero rem mollitia soluta dolorem asperiores dolore laudantium. Saepe, ad? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, sed, repudiandae, quia quod fugit ratione amet voluptatum corrupti doloremque ipsum libero rem mollitia soluta dolorem asperiores dolore laudantium. Saepe, ad?'
function readmore(){
    var pera = document.getElementById('pera')
    pera.innerHTML =text
}