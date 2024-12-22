const axios = require('axios');

const apiKey = 'your_openai_api_key';

const data = {
    model: 'gpt-4',
    messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Hello!' }
    ]
};

axios.post('https://api.openai.com/v1/chat/completions', data, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
