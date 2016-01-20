//SEPARATION OF CONCERNS

if (!corbulo.services.modules) {
    corbulo.services.modules = {};
}

corbulo.services.modules.getSectionModules = function (sectionId, onSuccess, onError) {

    var url = "/api/admin/modules/section/" + sectionId;
    var setting = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"

    };
    $.ajax(url, setting);
}

//AJAX Call POST                
corbulo.services.modules.addModule = function (modulesData, onSuccess, onError)
{
    var url = "/api/admin/modules";

    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: modulesData
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings);
}

//AJAX Call GET                 R
corbulo.services.modules.getModuleDetail = function (id, onSuccess, onError)
{ 
    var url = "/api/Modules/" + id;
  
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

//AJAX Call PUT                 U
corbulo.services.modules.updateModule = function (id, moduleData, onSuccess, onError)
{
    var url = "/admin/Modules/" + id;

    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: moduleData
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "PUT"
    };
    $.ajax(url, settings);
}

//AJAX Call Delete              D
corbulo.services.modules.deleteModule = function (id, onSuccess, onError) {

    var url = "/admin/Modules/" + id;

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

//AJAX Call Get List
corbulo.services.modules.getList = function (onSuccess, onError) {
   
        var url = "/admin/modules";
        var setting = {
            cache: false,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType: "json",
            success: onSuccess,
            error: onError,
            type: "GET"

        };
        $.ajax(url, setting);
}

//gets all the wiki pages     
corbulo.services.modules.getAllPages = function (onSuccess, onError) {

    var url = "/api/Wiki/pages";
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

corbulo.services.modules.getModuleTree = function (moduleId, onSuccess, onError) {

    var url = "/api/admin/modules/" + moduleId + "/tree";
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

//add a wikipage to a module
corbulo.services.modules.addWikiPage = function (moduleId, wikipageId, onSuccess, onError) {

    var url = "/api/admin/modules/" + moduleId + "/page";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
        , data: { wikiPageId: wikipageId }
    };
    $.ajax(url, settings);
}

//delete a wikipage to a module
corbulo.services.modules.deleteWikiPage = function (id, wikipageId, onSuccess, onError) {

    var url = "/admin/modules/" + id + "/wiki/" + wikipageId;

    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "Delete"
    };
    $.ajax(url, settings);
}

//gets all the wiki pages associated with the module
corbulo.services.modules.getModuleWikis = function (id, onSuccess, onError) {

    var url = "/admin/Modules/wiki/" + id;

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
