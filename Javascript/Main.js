let UrlsToSearch = 0;
let baseUrls = [];
let baseUrlParents = [];
let currentBaseUrl = "";
let runningCalls = 0;
let running = false;

$('#stop').hide();

async function startScrape() {
    $('#start').hide();
    $('#stop').show();
    running = true;

    needSearchUrls = [];
    baseUrls = [];
    UrlsToSearch = 1;

    var startingUrl = new URL($('#UserUrl').val());

    baseUrls.push(startingUrl.origin);
    baseUrlParents.push("");

    searchBaseUrl(startingUrl.origin);
}

function stopScrape() {
    $('#start').show();
    $('#stop').hide();
    running = false;
    createPlot();
}

function searchBaseUrl(url) {
    $('#UrlsFound').text(baseUrls.length);
    $('#UrlsSearch').text(UrlsToSearch);
    $('#UrlsCurrent').text(url);

    currentBaseUrl = url;
    $.ajax({
        url: "http://no-cors.epizy.com/no-cors.php?url=" + url,
        success: function(data) {
            var urls = data.split('href="');

            if (running) {
                for (let i = 1; i < urls.length; i++) {

                    try { //Who knows what we will scrape
                        var finalUrl = new URL(urls[i].split('"')[0]);

                        if (!baseUrls.includes(finalUrl.origin)) {
                            UrlsToSearch += 1;
                            baseUrls.push(finalUrl.origin);
                            baseUrlParents.push(url);
                            console.log(finalUrl.origin);
                            searchBaseUrl(finalUrl.origin);
                        }
                    } catch {

                    }
                }
            }
            UrlsToSearch -= 1;
        },
        error: function(data) {
            UrlsToSearch -= 1;
            console.log("error");
        }
    })
}

function createPlot() {
    data = [{
        type: "treemap",
        labels: baseUrls,
        parents: baseUrlParents
    }];

    Plotly.newPlot("outputPlot", data);
}