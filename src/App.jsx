// 1.  // function first letter :capital
// 2.{/* <tag>{expression}</tag> */}
// 3.  // retutrn single root tag means k ak tag k andr doosra tag use ni krskty
// is ko likhny k liy div ka use kry gy
//  fragment <> </> is k ander bhi more than one stetment likh skty he div ki jgha
//  4. // close all tags------------------
//               loop----------------------------------


//  function app(){

//   let marks=[90,80,30,40,50]

//   return(
//     <>
//     <h1>this is grade sheet</h1>    
//          <ul>
//           {
//             // advance loop
//                marks.map(m=><li key={m}>{m>=50?"pass":"fail"}</li>)
//           }

//          </ul> 
//          </>    
//   )
//         }
//  export default app;

// function app(){

//   let marks=[90,80,30,40,50]

//   return(
//     <>
//     <h1>this is grade sheet</h1>    
//          <ul>
//           {
              //  marks.map(m=><li key={m}>{m}</li>)
//           }

//          </ul> 
//          </>    
//   )
//         }
//  export default app;

// if  statement   ---------------------
// function app(){

//   let marks=[90,80,30,40,50]

//   return(
//         <div>
//           <h1>grades sheet</h1>
//           <hr></hr>
//          <ol>
//         <li>{marks[0] >=50? "pass" :"fail"} as marks are {marks[0]}</li>
//         <li>{marks[1] >=50? "pass" :"fail"}</li>
//         <li>{marks[2] >=50? "pass" :"fail"}</li>
//         <li>{marks[3]}</li>
//         <li>{marks[4]}</li>
//          </ol>
//          </div>
//   )
// }
//  export default app

// function app(){

//   let marks=[10,20,30,40,50]

//   return(
//         <div>
//           <h1>grades sheet</h1>
//           <hr></hr>
//          <ol>
//         <li>{marks[0]}</li>
//         <li>{marks[1]}</li>
//         <li>{marks[2]}</li>
//         <li>{marks[3]}</li>
//         <li>{marks[4]}</li>
//          </ol>
//          </div>
//   )
// }
//  export default app
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// function sum(x,y){

//   return(x+y) 
// }


// function Cv(){
//    let x=111
//    let y=10
//    let z=1
//    let q="GUJJAR"
//   return(

//     <ul>
//       <li>{q}</li>
//       <li> sum of {z} and {y} is{sum(z,y)}</li>
//       <li>{z}</li>
//       {/* <li>five</li> */}
//     </ul>
//   )
// }
// export  default Cv;


// for styling inline in javascript
function heading() {

  return (
    <h1
      style={{

        color: "green",
        fontSize: "40px",
        backgroundColor: "pink",
        boxShadow: "5px 10px 10px 10px",
        // textAlign: "center",


      }}
    >this is pakstan</h1>
  )
}
export default heading;