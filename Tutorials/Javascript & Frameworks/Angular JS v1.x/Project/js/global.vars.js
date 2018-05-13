var mailProviders = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "aol.co",
    "hotmail.co.uk",
    "hotmail.fr",
    "msn.com",
    "yahoo.fr",
    "wanadoo.f",
    "orange.fr",
    "comcast.net",
    "yahoo.co.uk",
    "yahoo.com.br",
    "yahoo.co.i",
    "live.com",
    "rediffmail.com",
    "free.fr",
    "gmx.de",
    "web.de",
    "yandex.ru",
    "ymail.com",
    "libero.it",
    "outlook.com",
    "uol.com.br",
    "bol.com.br",
    "mail.ru",
    "cox.net",
    "hotmail.it",
    "sbcglobal.net",
    "sfr.fr",
    "live.fr",
    "verizon.net",
    "live.co.uk",
    "googlemail.co",
    "yahoo.e",
    "ig.com.br",
    "live.nl",
    "bigpond.com",
    "terra.com.br",
    "yahoo.it",
    "neuf.fr",
    "yahoo.de",
    "alice.it",
    "rocketmail.com",
    "att.net",
    "laposte.net",
    "facebook.com",
    "bellsouth.net",
    "yahoo.in",
    "hotmail.es",
    "charter.net",
    "yahoo.ca",
    "yahoo.com.au",
    "rambler.ru",
    "hotmail.de",
    "tiscali.i",
    "shaw.c",
    "yahoo.co.j",
    "sky.co",
    "earthlink.net",
    "optonline.net",
    "freenet.de",
    "t-online.de",
    "aliceadsl.fr",
    "virgilio.it",
    "home.nl",
    "qq.com",
    "telenet.be",
    "me.com",
    "yahoo.com.ar",
    "tiscali.co.uk",
    "yahoo.com.mx",
    "voila.fr",
    "gmx.net",
    "mail.com",
    "planet.nl",
    "tin.it",
    "live.it",
    "ntlworld.com",
    "arcor.de",
    "yahoo.co.id",
    "frontiernet.net",
    "hetnet.nl",
    "live.com.au",
    "yahoo.com.sg",
    "zonnet.nl",
    "club-internet.fr",
    "juno.com",
    "optusnet.com.au",
    "blueyonder.co.uk",
    "bluewin.ch",
    "skynet.be",
    "sympatico.ca",
    "windstream.net",
    "mac.com",
    "centurytel.net",
    "chello.nl",
    "live.ca",
    "aim.com",
    "bigpond.net.au"];

var invalidSpecialChars = ["!","@","#","$","%","^","&","*","(",")","-","+","=","/",".",",","?","<",">",":",";","|","~","`"];

var errors = {
    "formEmpty": {
        "username": "You must type a username, none special characters minimum of 6 characters in length...",
        "password": "You must type a password, none special characters minimum of 6 characters in length, numbers and letters...",
        "rpassword": "You must repeate the password above...",
        "email": "You must type the email and also the provider..."
    },
    "invalidLength": {
        "username": "The length of the username is invalid! You need to type at least 6 characters...",
        "password": "The length of the password is invalid! You need to type at least 6 characters...",
        "rpassword": "The length of the retyped password is invalid! You need to type at least 6 characters...",
        "email": "The length of the email is invalid! You need to type at least 3 characters..."
    },
    "invalidChars": {
        "username": "The username cannot contain special characters...",
        "password": "The password cannot contain special characters...",
        "rpassword": "The retyped password cannot contain special characters..."
    },
    "invalidRpass" : "The retyped password and password field mismatch! Please type the same password on both fields..."
};
