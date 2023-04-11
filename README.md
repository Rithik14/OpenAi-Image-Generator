# OpenAI Image Generator

This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

<img src="screen.png" width="500">

## Usage

Rename the `example.env` file to `.env`.

Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.

Install the dependencies

```bash
npm install
```

Run server

```bash
npm start
```

Visit `http://localhost:5000` in your browser.

The endpoint is at `POST http://localhost:5000/openai/generateimage`.

<h2 style="color:"><a href="https://jolly-onesies-moth.cyclic.app/" target="_blank">website link <img src="https://img.icons8.com/emoji/20/null/link-emoji.png"/></a></h2>
