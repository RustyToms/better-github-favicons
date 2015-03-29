chrome.extension.onMessage.addListener(function (request, sender, callback) {
    var response = {};
    callback(response);
});
