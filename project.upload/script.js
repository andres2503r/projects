let xhr;


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener('submit', (e) => {
        e.preventDefault();
        startUpload();
    });
})


function refresh() {
    // document.getElementById("form").style.boxShadow = "1px 5px 20px 2px red"
    // alert("file upload error")
    // location.reload()
    window.location.href = "/project.upload/Error.html"
}


const startUpload = () => {
    document.getElementById("buttonUpdate").disabled = true
    document.getElementById("buttonCancel").disabled = false
    document.getElementById("buttonUpdate").style.display = `none`;
    document.getElementById("buttonCancel").style.display = `block`;

    xhr = new window.XMLHttpRequest();
    const files = document.querySelector('[name=file]').files
    const formData = new FormData();
    formData.append("file", files[0]);
    xhr.open('POST', 'http://192.168.0.178:8080/provider/update', true);
    xhr.upload.onprogress = (evt) => {
        if (evt.lengthComputable) {
            const progress = Math.round((evt.loaded / evt.total) * 100);
            document.getElementById("progressbar").value = progress;
        }
    }
    xhr.send(formData);
}

const cancelUpload = () => {
    if (xhr) xhr.abort();
    const focus = setInterval(() => {
        document.getElementById("form").style.boxShadow = "1px 5px 20px 2px red"
        setTimeout(() => {
            document.getElementById("form").style.boxShadow = "none";
            console.log('interval');
        }, 500)
    }, 1000)

    setTimeout(() => {
        clearInterval(focus)
        document.getElementById("form").style.boxShadow = "0px 0px 10px 1px  #1D85FF;";
        console.log('reset');
        alert("firmware upgrade was canceled")
        refresh()
    }, 4000)
    

}

document.getElementById("return").addEventListener("click", () =>{
    window.location.href = "/project.upload/index.html";
})