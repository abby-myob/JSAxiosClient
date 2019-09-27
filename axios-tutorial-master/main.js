function performGetRequest1(){
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = '';

  axios.get('http://localhost:8080/geocode/json')
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
}

function generateSuccessHTMLOutput(response) {
  return  '<h4>Result:</h4>' +
          '<h5>Status:</h5>' +
          '<pre>' + response.status + '</pre>' +
          '<h5>Headers:</h5>' +
          '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
          '<h5>Data:</h5>' +
          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateErrorHTMLOutput(error) {
  return  '<h4>Result:</h4>' +
          '<h5>Message:</h5>' +
          '<pre>' + error.message + '</pre>' +
          '<h5>Status:</h5>' +
          '<pre>' + error.response.status +  '</pre>' +
          '<h5>Headers:</h5>' +
          '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
          '<h5>Data:</h5>' +
          '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}


function performGetRequest2(){
  var resultElement = document.getElementById('getResult2');
  var nameGet = document.getElementById('nameGet').value;
  resultElement.innerHTML = '';

  axios.get('http://localhost:8080/geocode/json', {
    params: {
      Address: nameGet
    }
  })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
}

document.getElementById('postInputForm').addEventListener('submit', performPostRequest);
function performDeleteRequest(e) {
  var resultElement = document.getElementById('postResult');
  var addressName = document.getElementById('addressName').value;
  var latitude = document.getElementById('latitudeString').value;
  var longitude = document.getElementById('longitudeString').value;
  resultElement.innerHTML = '';

/*
  axios.put('http://localhost:8080/geocode/json', {
    Address: addressName,
    Latitude: latitude,
    Longitude: longitude
  })
  .then(function(response) {
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function(error) {
    resultElement.innerHTML = generateErrorHTMLOutput(error);
  })
  e.preventDefault();
*/

/*    const params = new URLSearchParams();
    params.append('Address', addressName);
    params.append('Latitude', latitude);
    params.append('Longitude', longitude);
    axios(
        {
        method: 'post',
        url: '/api/event/item',
        data: params,
        { headers: { "Access-Control-Allow-Origin": "*", } }
    })
        .then(function(response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
        .catch(function(error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
    e.preventDefault();

    axios.post(
        "http://localhost:5050/search",
        { data: "data" },
        { headers: { "Access-Control-Allow-Origin": "*", } } )
        .then(resp => (this.info = resp));*/
}

document.getElementById('deleteInputForm').addEventListener('submit', performDeleteRequest);
function performPostRequest(e) {
    var resultElement = document.getElementById('deleteResult');
    var addressName = document.getElementById('addressName').value;
    var latitude = document.getElementById('latitudeString').value;
    var longitude = document.getElementById('longitudeString').value;
    resultElement.innerHTML = '';

    axios.delete('http://localhost:8080/geocode/json', {
        Address: addressName,
        Latitude: latitude,
        Longitude: longitude
    })
        .then(function(response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function(error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
    e.preventDefault();
}

function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
}
