document.addEventListener("DOMContentLoaded", function (event) {
    var person = {
        firstName: "Arjun",
        lastName: "Shetty",
        blogURL: "http://bitsmonkey.in"
    };
    // var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
    var fetchTemplate = async () => {
        let response = await fetch('/template.html');
        let template = await response.text();
        var html = Mustache.render(template, person);
        var div = document.createElement("div");
        div.innerHTML = html;
        document.body.appendChild(div);
    }

    fetchTemplate();
});