﻿if (!corbulo.services.userOnboard) {

    corbulo.services.userOnboard = {};
}

// AJAX PUT
corbulo.services.userOnboard.update1 = function (id, myData, onSuccess, onError) {

    var url = "/api/user/onboard/tab1/" + id;
    var setting = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: myData,
        success: onSuccess,
        dataType: "json",
        type: "PUT",
        error: onError
    };
    $.ajax(url, setting);
};

corbulo.services.userOnboard.update2 = function (id, myData, onSuccess, onError) {

    var url = "/api/user/onboard/tab2/" + id;
    var setting = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: myData,
        success: onSuccess,
        dataType: "json",
        type: "PUT",
        error: onError
    };
    $.ajax(url, setting);
};

corbulo.services.userOnboard.update3 = function (id, myData, onSuccess, onError) {

    var url = "/api/user/onboard/tab3/" + id;
    var setting = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: myData,
        success: onSuccess,
        dataType: "json",
        type: "PUT",
        error: onError
    };
    $.ajax(url, setting);
};

corbulo.services.userOnboard.update4 = function (id, myData, onSuccess, onError) {

    var url = "/api/user/onboard/tab4/" + id;
    var setting = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: myData,
        success: onSuccess,
        dataType: "json",
        type: "PUT",
        error: onError
    };
    $.ajax(url, setting);
};

corbulo.services.userOnboard.update5 = function (id, myData, onSuccess, onError) {

    var url = "/api/user/onboard/tab5/" + id;
    var setting = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: myData,
        success: onSuccess,
        dataType: "json",
        type: "PUT",
        error: onError
    };
    $.ajax(url, setting);
};


// AJAX GET
corbulo.services.userOnboard.get = function (id, onSuccess, onError) {

    var url = "/api/user/onboard/" + id;

    var setting = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    };
    $.ajax(url, setting);
};



