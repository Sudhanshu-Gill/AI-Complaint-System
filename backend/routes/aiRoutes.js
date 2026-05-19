const express = require("express");

const router = express.Router();

const OpenAI = require("openai");

const client = new OpenAI({

  baseURL:
    "https://openrouter.ai/api/v1",

  apiKey:
    process.env.OPENROUTER_API_KEY

});

router.post(
  "/analyze",

  async (req, res) => {

    try {

      const { description } =
        req.body;

      const completion =
        await client.chat.completions.create({

          model:
            "openai/gpt-3.5-turbo",

          messages: [

            {
              role: "system",

              content:
                `Analyze complaint and provide:

1. Priority
2. Category
3. Department
4. Suggested Action`
            },

            {
              role: "user",

              content: description
            }

          ]

        });

      res.json({

        result:
          completion.choices[0]
          .message.content

      });

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

      res.status(500).json({

        message:
          "AI Failed"
      });

    }

  }

);

module.exports = router;