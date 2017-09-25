$(document).ready(function () {
    $('[data-localize]').localize("application", {pathPrefix: "../json", skipLanguage: "en-US"});
    $('.btn-localize').bind('click', function() {
        //console.log(navigator.language);
        //console.log(navigator.userLanguage);
        $('[rel*=localize]').localize("application",{pathPrefix: "../json", skipLanguage: "en-US"});
    });
});
