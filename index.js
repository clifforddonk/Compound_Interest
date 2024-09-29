function Calculate(){
    const principalinput=document.getElementById("principal");
    const rateinput=document.getElementById("rate");
    const yearsinput=document.getElementById("years");
    const totalamount=document.getElementById("tot-amount");

    let principal=Number(principalinput.value);
    let rate=Number(rateinput.value/100);
    let years=Number(yearsinput.value);


    if(principal<0 || isNaN(principal)){
       principal=0;
       principalinput.value=0;
    }
    if(rate<0 || isNaN(principal)){
        rate=0;
        rateinput.value=0;
    }
    if(years<0 || isNaN(principal)){
        years=0;
        yearsinput.value=0; 
    }
 
    const result=(principal*rate*years) + principal;
    totalamount.textContent = result.toLocaleString(undefined,
                                                    {style: "currency",
                                                     currency:"USD"});

}

