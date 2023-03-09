function factorial(){
    let n = parseInt(document.getElementById('n'));
    let factorial=1;
    let i=2;

    while(i<=n){

        factorial=factorial*i;
        i=i=1;
        // i++;
        // i+=1;
    }
    return factorial;
}