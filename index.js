function update_count(){
    var statusbox = document.getElementById("status");
    var sourcebox = document.getElementById("source");
    var target1box = document.getElementById("target1");
    var target2box = document.getElementById("target2");
    var sourceCount = sourcebox.children.length;
    var target1Count = target1box.children.length;
    var target2Count = target2box.children.length;
    statusbox.innerHTML = "Source has " + sourceCount + " pictures.<br>" 
        + "Target1 has " + target1Count + " pictures.<br>"
        + "Target2 has " + target2Count + " pictures.";
}

function dragstart_handler(ev){
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragover_handler(ev){
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
    update_count();
}

for(let i = 1; i < 8; i++){
    window.addEventListener('DOMContentLoaded', () => {
        const element = document.getElementById("p" + i.toString());
        element.addEventListener("dragstart", dragstart_handler);
    });
}
