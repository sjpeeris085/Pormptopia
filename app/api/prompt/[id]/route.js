import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//Note: every NextJS route is serverless route (Lambda function) (thats open up only when it  get called). thus need to connected to db for each call

// Get Prompt By ID
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the prompt", { status: 500 });
  }
};

// Update Prompt By ID
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the prompt", { status: 500 });
  }
};

// Delete Prompt By ID
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the prompt", { status: 500 });
  }
};
