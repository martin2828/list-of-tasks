let $global = document.getElementById("global");
let $name = document.getElementById("name");
let $description = document.getElementById("description");
let $accept = document.getElementById("accept");
let $dataUser = document.getElementById("dataUser");
let $alert = document.getElementById("alert");


if (localStorage.getItem('content')) {
    let get = localStorage.getItem('content');
    $dataUser.insertAdjacentHTML('beforeend', get);
}

$accept.addEventListener('click', () => {
    if ($name.value == "" || $description.value == "") {
        alert("Please enter a name or description")
    }else if($name.value.length >= 14 || $description.value.length >= 23) {
        alert("Cannot be recorded because the data is too extensive")
    }else {
        let content = `
            <center><div style="margin: 10px;height: 90px;width: 300px;background-color: #fc8f8f;border-radius: 10px;">
                <h1>${$name.value}</h1>
                <h3>${$description.value}</h3>
                <a href="#" onclick="done(this)"><span class="material-icons">done</span></a>
                <a href="#" onclick="notDone(this)"><span class="material-icons">close</span></a>
                <a href="#" onclick="delet(this)"><span class="material-icons">delete</span></a>
            </div></center>
        `

        $dataUser.insertAdjacentHTML('beforeend', content)
        $name.value = ""
        $description.value = ""
        let contentAlert = `
        <center><div style="margin: 10px;width: 310px; height: 30px;background-color: #88ff88;border-radius: 5px;">Successfully added task</div></center>
        `
        $alert.insertAdjacentHTML('beforeend', contentAlert)
        setTimeout(() => {$alert.innerHTML = ""},3000)
    }
})

let done = (element) => {
    element.parentElement.style.backgroundColor = "#88ff88";
}

let notDone = (element) => {
    element.parentElement.style.backgroundColor = "#fc8f8f";
}

let delet = (element) => {
    element.parentElement.remove()
    let contentAlert = `
    <center><div style="margin: 10px;width: 310px; height: 30px;background-color: #fc8f8f;border-radius: 5px;">Task successfully removed</div></center>
    `
    $alert.insertAdjacentHTML('beforeend', contentAlert)
    setTimeout(() => {$alert.innerHTML = ""},3000)
}


window.onbeforeunload = () => {
    return localStorage.setItem('content', $dataUser.innerHTML)
}
