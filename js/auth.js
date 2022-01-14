

var tokenInterval;
var interval = window.setTimeout(UpdateTokenTicker, 0);

function TokenTicker() {

   console.log('ticker');
   var res = GetFromStoreJson(Token);
    if (res == null) {
        return;
    }
    if (interval != null) {
        console.log('interval not  null');
        return;
    }
    if (interval == null) {

        var now = new Date().getTime();
        console.log('now: ' + now);

        console.log('timespamp: ' + res.expireTimestamp );
        var when =( res.expireTimestamp +5000)- now;
        console.log(when);
        interval = window.setTimeout(UpdateTokenTicker, when);
    }
}

function UpdateTokenTicker() {
    UpdateToken();
    interval = null;
}

function LogOut(url) {
    console.log('logout');
    console.log(url);
    RemoveFromStore(Token);
    if (url ===undefined || url === null) {
        url = HomePage;
    }
    location.href = url;
}


function Authorize(token, url) {
    SaveToStoreJson(Token, token);
    if (url === null) {
        location.href = "index.html#/dashboard";
    }
    TokenTicker();
}



function UpdateToken() {
    var res = GetFromStoreJson(Token);
    
    if (res == null) {
        console.log('res is null');
        return false;
    }
    var now = new Date().getTime();
    if (res.expireTimestamp + 5000 > now) {
        console.log('Not yet');
        return false;
    }

    var settings = {
        "url": "https://auth.partido.pp.ua/refreshtoken",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "Token": res.token,
            "RefreshToken": res.refreshToken
        })
    };

    $.ajax(settings)
        .done(function (response) {
            console.log('token updated!');
            Authorize(response.data, null);
        })
        .fail(function (resp) {
            console.log('fail update token.');
            console.log(resp);
            if (resp != null) {
                if (resp.success === false) {
                    console.log(resp.errors[0].message);
                    return;
                }
                console.log(resp);
                console.log(resp.responseJSON.errors[0]);
                console.log(resp.responseJSON.errors[0].message);
            }

        });
}
