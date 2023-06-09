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
                if(data.status == '200'){
                    document.querySelector("#message").innerHTML= ""
                    document.querySelector("#filasDeUrl").innerHTML= ""
                    return document.querySelector("#filasDeUrl").innerHTML= `
                        <tr>
                            <th scope="row">1</th>
                            <td>${data.input} <a href="${data.input}" target="_blank">ver</a></td>
                            <td>${data.urlShort} <a href="${data.urlShort}" target="_blank">ver</a></td>
                        </tr>
                    `;
                }else{

                    document.querySelector("#message").innerHTML= ""
                    document.querySelector("#filasDeUrl").innerHTML= ""

                    return document.querySelector("#message").innerHTML= `
                    <div class="alert alert-danger" role="alert" style="width: 400px;">
                        ${data.mensaje.toUpperCase()}
                    </div>
                    `;
                }
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
                //console.log(data);
                if (data.status == 200) {
                    document.querySelector("#message").innerHTML= ""
                    document.querySelector("#filasDeUrl").innerHTML= ""

                    for (let i = 0; i < data.inputs.length; i++) {
                        document.querySelector("#filasDeUrl").innerHTML+= `
                            <tr>
                                <th scope="row">${i+1}</th>
                                <td>${data.inputs[i]} <a href="${data.inputs[i]}  " target="_blank">ver</a></td>
                                <td>${data.urlsShort[i]} <a href="${data.urlsShort[i]}  " target="_blank">ver</a></td>
                            </tr>
                        `;
                        console.log(i)
                    }
                } else {
                    document.querySelector("#message").innerHTML= ""
                    document.querySelector("#filasDeUrl").innerHTML= ""

                    document.querySelector("#message").innerHTML= `
                        <div class="alert alert-danger" role="alert" style="width: 400px;">
                            ${data.mensaje.toUpperCase()}
                        </div>
                    `;
                    
                }
            })
            .catch(err => console.log(err));
}
