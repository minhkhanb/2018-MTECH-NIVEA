var MT = window.MT || {};
var frmOrderCart ;
MT.isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (MT.isMobile.Android() || MT.isMobile.BlackBerry() || MT.isMobile.iOS() || MT.isMobile.Opera() || MT.isMobile.Windows());
    }
}
MT.isBrowser = {
    Opera: function () {
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        return isOpera;
    },
    Firefox: function () {
        var isFirefox = typeof InstallTrigger !== 'undefined';
        return isFirefox;
    },
    Safari: function () {
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        return isSafari;
    },
    IE: function () {
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        return isIE;
    },
    Edge: function () {
        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        return isEdge;
    },
    Chrome: function () {
        var isChrome = !!window.chrome && !!window.chrome.webstore;
        return isChrome;
    }
}


MT.init = function () {
}
$(document).ready(MT.init);





