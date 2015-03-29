var prStatus = function(status) {
  return $(".branch-status .status-description .text-" + status).length;
};

chrome.extension.sendMessage({}, function(response) {
  $("body").bind("DOMSubtreeModified", function() {
    var link = document.querySelector("link[rel~='icon']");

    var faviconUrl = "https://assets-cdn.github.com/favicon.ico";

    if($(".tabnav-pr").length) {
      var icon = "pr";

      if(prStatus("success")) { icon = "pr_pass"; }
      if(prStatus("failure")) { icon = "pr_fail"; }

      faviconUrl = chrome.extension.getURL("icons/" + icon + ".ico");
    }

    link.href = faviconUrl;
  });
});
