function myFunction() {
    var i;
    var evenNo=[];
    for (i=2;i<=50;i++)
    {
        if(i%2==0)
            evenNo.push(i);
    }
        alert(evenNo.join(", "));
}