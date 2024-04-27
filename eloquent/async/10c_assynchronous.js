

async function getData() {

    url = "https://cat-fact.herokuapp.com/facts?animal_type=cat,horse"

    // we need use await to fetch, because it's a promisse
    const petdata = await fetch(url).then(
        (res) => res.json() // .json is a promisse too 
    )

    console.log(petdata)

}

getData()


async function toPromisse(){
    // async change this function into a promisse.
    // now you'll need use .then to send callback to execut when
    // data will be ready
    
    //OR

    // you may create a function that use await to wait
    // result inside of function and after use
    // execute the next after that
}