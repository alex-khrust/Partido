function SaveToStore(key, value) {
    localStorage[key] = value;

}


function GetFromStore(key) {
    return localStorage[key];
}


function SaveToStoreJson(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function RemoveFromStore(key) {
    localStorage.removeItem(key);
}

function GetFromStoreJson(key) {
    var value = localStorage[key];
    if (value === null || value === undefined) {
        return null;
    }
    return JSON.parse(value);
}

function DeleteFromStorage(key) {
    localStorage.removeItem(key);
}