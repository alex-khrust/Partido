
function ValidateForm(form,resetAll) {

    var valid = true;
    if (resetAll) {
        $(form).children().removeClass('invalid');
    }
    $(form).find('span.error-inner').each(function(i, obj) {
        $(obj).html('');
        $(obj).removeClass('active');
    });

    $(form).find('.required').each(function (i, obj) {
        if ($(obj).val() === '') {
            $(obj).addClass('invalid');
            valid = false;
        } else {
            $(obj).removeClass('invalid');
        }
    });
    return valid;
}

function ButtonAddAnimation(btn) {
    $(btn).addClass('loading');
    
}


function ButtonRemoveAnimation(btn) {
    setTimeout(function () {
        $(btn).removeClass('loading');
    }, 5000);
}

function CopyToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
}

function ShowToastr(msg, isSuccess) {
    if (isSuccess) {
        ShowSuccessToastr(msg);
        return;
    }
    ShowErrorToastr(msg);
}

function ShowSuccessToastr(msg) {
    console.log('toastsr:' + msg);  
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",//toast-bottom-center
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr["success"](msg);
}


function ShowErrorToastr(msg) {
    
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",//toast-bottom-center
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr["error"](msg);
}


function RandomNumber(min=100, max=250000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}



const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
}