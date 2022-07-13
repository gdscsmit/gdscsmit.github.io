const url = "https://docs.google.com/spreadsheets/d/1-71L5UMaEToRF-AnXCnMrInHRkJIPrvX1XdUCA-fnb0/export?format=csv"
        const main = document.querySelector("main");
        //main.innerHTML="<p> Loading... </p>";

        fetch(url).then(result=>result.text()).then(function(csvtext){
            return csv().fromString(csvtext);
        }).then(function(csv){
           // main.innerHTML = "<code>" + JSON.stringify(csv) + "</code>"
           csv.forEach(function(row){
            main.innerHTML += "<span><h4 style='font-weight: bolder;'>" + row.Event + "</h4>";
            main.innerHTML += "<p>" + row.Description ;
            main.innerHTML += "<strong>" + row.Time + "</strong>";
            main.innerHTML += "</p></span><hr>";
           });
           // 
        });
        //https://www.youtube.com/watch?v=I-sf2ojxgQ0