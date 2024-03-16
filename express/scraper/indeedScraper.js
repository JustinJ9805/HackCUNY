const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeIndeed() {
    try {
        const baseURL = 'https://www.indeed.com';
        let nextPage = '/jobs?q=software+developer&l=New+York%2C+NY';
        let jobs = [];

        // Loop through each page of job listings
        // while (nextPage) {
        const response = await axios.get(baseURL + nextPage,{
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15'
            }
        });
        const html = response.data;
        const $ = cheerio.load(html);

        // Target specific list items and extract information
        // $('#mosaic-provider-jobcards > ul > li').each((index, element) => {
        //     const title = $(element).find('.title > a').text().trim();
        //     const company = $(element).find('.company').text().trim();
        //     const location = $(element).find('.location').text().trim();
        //     const summary = $(element).find('.summary').text().trim();
        //     const datePosted = $(element).find('.date').text().trim();

        //     jobs.push({
        //         title,
        //         company,
        //         location,
        //         summary,
        //         datePosted
        //     });
        // });
        const text = $('#mosaic-provider-jobcards > ul > li:nth-child(1) > div > div.slider_container.css-12igfu2.eu4oa1w0 > div > div > div > table.big6_visualChanges.css-1v79ar.eu4oa1w0 > tbody > tr > td > div.css-dekpa.e37uo190 > h2').text().trim();
        
        console.log('Text inside the <h2> tag:', text);

        // fs.writeFile('indeed_jobs.json', JSON.stringify(jobs, null, 2), (err) => {
        //     if (err) throw err;
        //     console.log('Data has been written to indeed_jobs.json file');
        // });

        // return jobs;
    } catch (error) {
        console.error('Error:', error);
    }
}

scrapeIndeed();
