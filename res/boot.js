var versionInfo = {};
versionInfo.jquery = "1.11.1";
versionInfo.easyui = "1.4.1";
versionInfo.angularjs = "1.2.15";

var scripts = [
    { url: "res/js/jquery-" + versionInfo.jquery + ".min.js" },
    { url: "res/js/angularjs." + versionInfo.angularjs + ".min.js" },
    { url: "res/FreeLib/jq.extension.js" },
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/jquery.easyui.min.js" },
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/locale/easyui-lang-zh_CN.js" },
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/extension/datagrid-editor.js" },
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/extension/datagrid-inlineEditingHelper.js" },
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/extension/datagrid-other.js" },
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/extension/validatebox-extension.js" },
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/extension/combobox-extension.js" },
    { url: "res/FreeLib/js.extension.js" }
];

var styles = [
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/themes/metro/easyui.css" },
    { url: "res/jquery-easyui-" + versionInfo.easyui + "/themes/icon.css" }
];

var path = window.location.pathname;

var isSubPath = false;

path = path.substring(1, path.length);
if (path.indexOf("/") != -1) {
    isSubPath = true;
}
else path = "/";

function loadCss(url, pos, async) {
    if (isSubPath) {
        url = "../../" + url;
    }
    document.write(['<link rel="stylesheet" href="', url, '" type="text/css">', '</link>'].join(""));
}

for (var idx = 0; styles[idx]; idx++) {
    styles[idx].url && loadCss(styles[idx].url, "head", false);
}



function loadJs(url, pos, async) {
    if (isSubPath) {
        url = "../../" + url;
    }

    document.write(['<script src="', url, '" type="text/javascript">', '</script>'].join(""));
}

for (var idx = 0; scripts[idx]; idx++) {
    scripts[idx].url && loadJs(scripts[idx].url, "head", false);
}