let users =[
    {
        "name":"phakkharaphon",
        "lastname":"numnue",
        "email":"phakharaphonn64@nu.ac.th",
        "from":"Thailand"
    
    },
    {
        "name":"jakgrit",
        "lastname":"wongsaray",
        "from":"USA"
    
    }
    ]

    let userA =
    {
        "name":"AAA",
        "lastname":"aaa",
        "from":"england"
    }

    let userB =
    {
        "name":"BBB",
        "lastname":"bbb",
        "from":"Chaina"
    }

    users.push(userA)
    users.push(userB)

    // delete user splice(0,1)

    for(let i=0 ; i<users.length ; i++){
        console.log('name :' +users[i].name +' '+users[i].lastname)
    }

  

    delete users.splice(0,1)
    console.log('\n** After Delete\n')

    for(let i=0 ; i<users.length ; i++){
        console.log('name :' +users[i].name +' '+users[i].lastname)
    }
