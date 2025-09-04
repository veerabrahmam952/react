import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '',
    dangerouslyAllowBrowser: true
})

const getAiSummary = async()=> {
    const prompt = 'generate summary of Iphone product Iphone 15 pro';
    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: prompt}]
    });

    return completion.choices[0].message.content;
}

export default getAiSummary;