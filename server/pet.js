let users =[]

    let userA =
    {
        "name":"parrot",
        "color":"green",
        "from":"south amarica"
    }
    let userB =
    {
        "name":"Lion",
        "color":"light brown",
        "from":"south africa"
    }
    let userC =
    {
        "name":"Tiger",
        "color":"orange and black",
        "from":"china"
        
    }

    users.push(userA)
    users.push(userB)
    users.push(userC)

    // delete user splice(1,1)
    console.log('\n************** Before Delete **************\n')

    for(let i=0 ; i<users.length ; i++){
        console.log('name :' +users[i].name + ' , ' + 'color :'+users[i].color + ' , ' + 'from :'+users[i].from)
    }

  

    delete users.splice(1,1)
    console.log('\n************** After Delete *************\n')

    for(let i=0 ; i<users.length ; i++){
        console.log('name :' +users[i].name + ' ' + 'color :'+users[i].color + ' , ' + 'from :'+users[i].from)
    }
