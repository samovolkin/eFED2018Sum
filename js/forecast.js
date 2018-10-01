const APPID_KEY = "e33262cd6a432b1c3dc5181a736dbc41";

var search = new Search("search-input");

var dailyFetcher = new Fetcher(
    "http://api.openweathermap.org/data/2.5/forecast",
    {
        param: {
            units: "metric",
            APPID: APPID_KEY,
        },
        transformer: DailyData,
    },
    search
);

var dailyRenderer = new rDaily(null, dailyFetcher);
