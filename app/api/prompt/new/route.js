import { connectToDB } from "@utils/database";

import Prompt from "@models/prompt";

//Note: every NextJS route is serverless route (Lambda function) (thats open up only when it  get called). thus need to connected to db for each call

export const POST = async (req) => {
  const { prompt, userId, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new prompt", { status: 500 });
  }
};
