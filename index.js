


function playMusic1(e){
    let audio1 = new Audio('./sounds/crash.mp3')
    audio1.play()
}


document.addEventListener('keydown',function(e){
    
    if (e.keyCode == '87'){
        playMusic1()
        myEl1 =document.querySelector('.w')
        myEl1.style.boxShadow = "0px 0px 100px grey"
        
    }
    else{
        myEl1.style.boxShadow = "none"
    }
},)


// 2nd key

function playMusic2(e){
    let audio2 = new Audio('./sounds/kick-bass.mp3')
    audio2.play()
}


document.addEventListener('keydown',function(e){
    
    if (e.keyCode == '65'){
        playMusic2()
        myEl2 = document.querySelector(".a")
        
        myEl2.style.boxShadow="0px 0px 100px grey "
        
    }
    else{
        myEl2.style.boxShadow = "none"
    }
})

//3

function playMusic3(e){
    let audio3 = new Audio('./sounds/snare.mp3')
    audio3.play()
}


document.addEventListener('keydown',function(e){
    
    if (e.keyCode == '83'){
        playMusic3()
        myEl3 = document.querySelector(".s")
        
        myEl3.style.boxShadow="0px 0px 100px grey "
    }
    else{
        myEl3.style.boxShadow = "none"
    }
})

//4

function playMusic4(e){
    let audio4 = new Audio('./sounds/tom-1.mp3')
    audio4.play()
}


document.addEventListener('keydown',function(e){
    
    if (e.keyCode == '68'){
        playMusic4()
        myEl4 = document.querySelector(".d")
        
        myEl4.style.boxShadow="0px 0px 100px grey "
    }
    else{
        myEl4.style.boxShadow = "none"
    }
})

//5

function playMusic5(e){
    let audio5 = new Audio('./sounds/crash.mp3')
    audio5.play()
}


document.addEventListener('keydown',function(e){
    
    if (e.keyCode == '74'){
        playMusic5()
        myEl5 = document.querySelector(".j")
        
        myEl5.style.boxShadow="0px 0px 100px grey "
    }
    else{
        myEl5.style.boxShadow = "none"
    }
})

//6
function playMusic6(e){
    let audio6 = new Audio('./sounds/crash.mp3')
    audio6.play()
}


document.addEventListener('keydown',function(e){
    
    if (e.keyCode == '75'){
        playMusic6()
    myEl6 = document.querySelector(".k")
        
        myEl6.style.boxShadow="0px 0px 100px grey "
    }
    else{
        myEl6.style.boxShadow = "none"
    }
})


//7
function playMusic7(e){
    let audio7 = new Audio('./sounds/crash.mp3')
    audio7.play()
}



document.addEventListener('keydown',function(e){
    
    if (e.keyCode == '76'){
        playMusic7()
        myEl7 = document.querySelector(".l")
        
        myEl7.style.boxShadow="0px 0px 100px grey "
    }
    else{
        myEl7.style.boxShadow = "none"
    }
})


//background shadow


function shadow(){
    
    
    let myEl = document.querySelectorAll(".drum")
        
    myEl.style.boxShadow="0px 0px 100px grey "
        

    
}


