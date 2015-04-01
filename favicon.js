var prStatus = function(status) {
  return $(".branch-status .text-" + status).length;
};

var merged = function() {
  return $(".state.state-merged").length;
};

$("body").bind("DOMSubtreeModified", function() {
  var link = document.querySelector("link[rel~='icon']");

  var faviconUrl = "https://assets-cdn.github.com/favicon.ico";

  if($(".tabnav-pr").length) {
    var icon = "pr";

    if(merged()) {
      icon = "pr_merged";
    } else {
      if(prStatus("success")) { icon = "pr_pass"; }
      if(prStatus("failure")) { icon = "pr_fail"; }
      if(prStatus("pending")) { icon = "pr_pending"; }
    }

    faviconUrl = chrome.extension.getURL("icons/" + icon + ".ico");
  }

  link.href = faviconUrl;
});
