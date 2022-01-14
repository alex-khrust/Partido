var LoginUrl = "auth/login.html";
var Dashboard = "user/dashboard.html";

$(function () {
    var startpage = "index.html#/sign-up";

    var app = $.sammy(function() {

        this.element_selector = '#content';
       
        //not authorized
        this.get('#/login', function (context) {
            AccessValidate(context, 'auth/login.html', false);
        });
        this.get('#/registration', function (context) {
            AccessValidate(context, 'auth/registration.html',false);
        });
        this.get('#/sign-up', function(context) {
            AccessValidate(context, 'auth/sign-up.html', false);
        });
        this.get('#/forgot-password', function (context) {
            AccessValidate(context, 'auth/forgot-password.html', false);
        });

        this.get('#/resetpassword/:token/', function (context) {
            console.log('respass');
            AccessValidate(context, 'auth/reset-password.html', false);
        });
        this.get('#/resetpassword/:token/:email/', function (context) {
            console.log('respass'); 
            AccessValidate(context, 'auth/reset-password.html', false);
        });
        
        //authorized only

        this.get('#/dashboard', function(context) {
                AccessValidate(context,'user/dashboard.html', true);
            });

        this.get('#/profile', function (context) {
                  AccessValidate(context,'user/profile.html', true);
             });
        this.get('#/createroom', function (context) {
            AccessValidate(context, 'room/createroom.html', true);
        });



        this.get('#/rooms',
            function (context) { context.$element().load('auth/registration.html', function () { }); });



        this.get('#/addroom', function (context) { context.$element().load('/auth/registration.html', function () { }); });
        this.get('#/roominvite', function (context) { context.$element().load('/auth/registration.html', function () { }); });

        this.get('#/transactions', function (context) { context.$element().load('/auth/registration.html', function () { }); });
        this.get('#/addtransaction', function (context) { context.$element().load('/auth/registration.html', function () { }); });

        this.get('#/todos', function (context) { context.$element().load('/auth/registration.html', function () { }); });
        this.get('#/addtodos', function (context) { context.$element().load('/auth/registration.html', function () { }); });

        this.notFound = function (context) {
            console.log(context);
           
        }
    });
    
   
    app.run(startpage);
    app.log();
    app.debug = true;
    
});



function AccessValidate(context, url, needLogin) {
    console.log(url);
    console.log(needLogin);
    
    var token = GetFromStore(Token);
    if (token != null) {
        TokenTicker();
    }
    console.log(token);
    //auth only,redirect to login
    if (needLogin && token === null) {
        console.log('res 1');
        context.$element().load(LoginUrl + "?" + RandomNumber(), RedirectCallBack);
        return;
    }
    
    //any
    if (!needLogin && token == null) {
       
        context.$element().load(url + "?" + RandomNumber(), RedirectCallBack);
        return;
    }
    //
   // if (!needLogin && token != null) {
        console.log('res 3:' + url);
        if (url === undefined) {
            url = Dashboard;
        }
        
        context.$element().load(url + "?" + RandomNumber(), RedirectCallBack);
        return;
    //}
}


function RedirectCallBack() {
    var msg = GetFromStoreJson('msg');
    if (msg != null) {
        ShowToastr(msg.Message, msg.IsSuccess);
        DeleteFromStorage('msg');
    }
    
}

