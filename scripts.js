let currentMarker = 'X'



const board = [
   ["", "", ""],
   ["", "", ""],
   ["", "", ""]
]

board[0][0] = document.getElementById("0-0")


const row = parseInt(element.id.charAt(0))
const column = parseInt(element.id.charAt(2))


const handleClick = (element) => {

  
  console.log(`The element you clicked on has an id:  ${element.id}`)

  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}



const addMarker = (id) => {

  
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  
  document.getElementById(id).innerHTML = currentMarker
  board[row][column] = currentMarker

  changeMarker()
}

const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}


const resetBoard = (button) => {
  
  
    const squares = document.getElementsByTagName('td') 
  
  for (i=0; i < squares.length; i++) {

    
    console.log(squares[i].id)

    squares[i].innerHTML = null
  }  
}