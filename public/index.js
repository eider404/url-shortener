function SendUrl (){
    let formUrl = document.querySelector( '#form-url' );

    const obj = {};
    new FormData( formUrl ).forEach( ( value, key ) => obj[ key ] = value );

    fetch( `http://localhost:3000/set-url`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( obj )
            })
            .then(res => res.json())
            .then( data =>{
                console.log(data);
            })
            .catch(err => console.log(err));
}



function SendBulkUrl (){
    let fd = new FormData();
    fd.append("archivo", document.getElementById("archivo").files[0]);

    fetch( `http://localhost:3000/bulk-url`, {
                method: 'POST',
                body: fd
            })
            .then(res => res.json())
            .then( data =>{
                console.log(data);
            })
            .catch(err => console.log(err));
}
