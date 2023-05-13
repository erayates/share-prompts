import { connectToDB } from "@utils/database";
import Prompt from "@app/models/prompt";

export const POST = async (req) => {
    const { userId, prompt, tag} = await req.json();  // extract all of the data

    try{
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {status: 201});
    
    }catch(err){
        return new Response("Failed to create a new prompt.", {status: 500});
    }
        
    
}