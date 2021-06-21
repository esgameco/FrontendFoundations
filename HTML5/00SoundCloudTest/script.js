window.addEventListener('load', () => {
    const searchForm = document.getElementById('search');
    const queryInput = document.getElementById('query');
    const queryOutput = document.getElementById('results');
    console.log('test')

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        queryString = 'Look it up yourself';

        const data = await fetch(queryString, {
            "sec-ch-ua": " Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91",
            Accept: "application/json, text/javascript, */*; q=0.01",
            Referer: "https://soundcloud.com/",
            DNT: 1,
            "sec-ch-ua-mobile": "?0",
            "User-Agent": "Find your own"
        });

        queryOutput.innerHTML = data.json();
    });
});