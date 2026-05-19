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

      if (!description) {

        return res.status(400).json({

          message:
            "Description Required"

        });

      }

      const completion =
        await client.chat.completions.create({

          model:
            "openai/gpt-3.5-turbo",

          messages: [

            {
              role: "system",

              content:
                `Analyze complaints and provide:

1. Priority
2. Category
3. Suggested Department
4. Recommended Action`
            },

            {
              role: "user",

              content: description
            }

          ]

        });

      res.status(200).json({

        result:
          completion.choices[0]
          .message.content

      });

    } catch (error) {

      console.log(
        "AI ERROR:",
        error.message
      );

      res.status(500).json({

        message:
          "AI Analysis Failed"

      });

    }

  }

);

module.exports = router;