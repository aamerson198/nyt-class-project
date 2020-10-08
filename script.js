$(document).ready(function () {
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Gms5hdGE2Z6E38cDKYjQNkz3Ge1KfneE";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    // console.log(response.status);
    // console.log(response.response);
    // console.log(response.response.docs[2].web_url);
    // console.log(response.response.docs[0]);
    // console.log(response.response.docs[0].uri);
    // console.log(response.response.docs[1].web_url);
    // console.log(response.docs);
    var newKey = response.response.docs;
    console.log(newKey);
    console.log(newKey[0].web_url);
    for (let i = 0; i < newKey[i].web_url; i++) {
      $("id").text(newKey[i]);
      console.log(newKey[i].web_url);
    }
  });
});
