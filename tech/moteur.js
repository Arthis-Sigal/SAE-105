window.onload = function () {
    //Recupération de l'url de la page et du paramètre "page"
    // (1 page par centre d'interêt)
    console.log("->"+window.location.href);
    var url = new URL(window.location.href);
    var page = url.searchParams.get("page");
    console.log("->"+ page);
    console.log(url.pathname);
    //Gestion des pages dynamiques disponibles sur le site
    switch (url.pathname) {
        case "/football.html" :
            recupereJsonEtAffiche("foot_template", "foot");
            break;

        case "/SC.html" :
            recupereJsonEtAffiche("SC_template", "SC");
            break;

        case "/CSGO.html" :
            recupereJsonEtAffiche("CSGO_template", "CSGO");
            break;
        
        default :
            //Si le parammètre page n'est pas fourni ou d'une valeur inconnue, alors nous sommes sur la page d'accueil
            recupereJsonEtAffiche("interets_template", "index");
    }
    function recupereJsonEtAffiche(template, fichier) {
        // Récupération des données au format JSON à l'aide d'une requête Ajax
        $.ajax({
            dataType: "json", // Type des données : ici JSON
            type: "GET", // Requête GET
            url:  "JSON/"+ fichier +".json", // Chemin du fichier
            cache:false,
          // Chargement avec succès
          success: function(json) {
            // Récupération des données
            afficheTemplate(template, json);
          },
          // En cas d'erreur
          error : function(result, statut, error) {
            //document.getElementById("contenu").innerHTML = "<h1>Oups.. Une erreur est survenue ...</h1>";
            document.getElementById("contenu").innerHTML = error;
          }
        })
    }
    
    function afficheTemplate(template, data) {
        //Template rendering
        var src = document.getElementById(template).innerHTML;
        var tpl = Handlebars.compile(src);
        var html = tpl({ donnees: data });
        
        //HTML appending
        console.log("->"+ html);
        document.getElementById("contenu").innerHTML = html;        
    }
}

