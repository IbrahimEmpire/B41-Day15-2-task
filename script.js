

function submitButton(){
    let firstName = document.getElementById("fname").value
    console.log(firstName)
    let LastName = document.getElementById("lname").value
    console.log(LastName)
    let Address = document.getElementById("address").value
    console.log(Address)
    let Pincode = document.getElementById("pincode").value
    console.log(Pincode)
    let Male = document.getElementById("male").value
   
    let female = document.getElementById("female").value
    
   
    let State = document.getElementById("state").value
    console.log(State)
    let country = document.getElementById("country").value
    console.log(country)

    let td1 = document.getElementById("td1")
    td1.innerHTML=firstName
    let td2 = document.getElementById("td2")
    td2.innerHTML=LastName
    let td3 = document.getElementById("td3")
    td3.innerHTML=Address
    let td4 = document.getElementById("td4")
    td4.innerHTML=Pincode
    if(document.getElementById("male").checked){
        let td5 = document.getElementById("td5")
        td5.innerHTML=Male
    }else if(document.getElementById("female").checked){
        let td5 = document.getElementById("td5")
        td5.innerHTML=female
    
    }

    let td6 = document.getElementById("td6")
    let checkbox = document.getElementsByName("foodItems")

    var checkeditems= 0;
    var list = []
    for(let i=0; i<checkbox.length; i++){
        if(checkbox[i].checked){
            checkeditems++;
            console.log(checkbox[i].value)
            list.push(checkbox[i].value)
        }
    }
    td6.innerHTML=list
    console.log(list.length)

    if(list.length<2){
        alert("Please Select Atleast 2 Food Items")
        td6.innerHTML=""
    }
   
    let td7 = document.getElementById("td7")
    td7.innerHTML=State
    let td8 = document.getElementById("td8")
    td8.innerHTML=country
  }
 