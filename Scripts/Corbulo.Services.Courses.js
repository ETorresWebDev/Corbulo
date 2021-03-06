﻿//Seperation of concerns
if (!corbulo.services.courses) {
    corbulo.services.courses = {}
}

//Calls from Index View
//AJAX Post Call
corbulo.services.courses.add = function (courseData, onSuccess, onError) {

    var url = "/api/courses";
    //var myData = $("#courses-input-form").serialize();

    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: courseData
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };

    $.ajax(url, settings);
}


//AJAX Update Call
corbulo.services.courses.update = function (id, courseData, onSuccess, onError) {
    console.log(courseData);
    //var id = $("#id").val();
    var url = "/api/courses/" + id;
    //var updateData = $("#courses-input-form").serialize();

    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: courseData
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "PUT"
    };

    $.ajax(url, settings);

}


//AJAX Get Call
corbulo.services.courses.get = function (id, onSuccess, onError) {

    //var id = $("#id").val();
    var url = "/api/courses/" + id;

    var setting = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, setting);


}


//AJAX Delete Call
corbulo.services.courses.delete = function (id, onSuccess, onError) {

    //var id = $("#id").val();
    var url = "/api/courses/" + id;
    alert("Record #" + " " + id + " " + "has been deleted");
    var setting = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "DELETE"
    };
    $.ajax(url, setting);

}

//AJAX calls from list view
//AJAX Get all Call
corbulo.services.courses.getAll = function (onSuccess, onError) {

    var url = "/api/Courses/";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };

    $.ajax(url, settings);

}
