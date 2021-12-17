let res = ""
document.querySelectorAll(".thing").forEach(i => {
    res += i.children[2].children[0].innerHTML +":"+ i.children[3].children[0].innerHTML + "555"
})