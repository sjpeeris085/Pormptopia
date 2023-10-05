import { connectToDB } from "@utils/database";

import Prompt from "@models/prompt";

//Note: every NextJS route is serverless route (Lambda function) (thats open up only when it  get called). thus need to connected to db for each call

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
