const { Client } = require("@langchain/langgraph-sdk");

async function main() {
// only set the apiUrl if you changed the default port when calling langgraph dev
const client = new Client({ apiUrl: "http://localhost:2024"});

const streamResponse = client.runs.stream(
    null, // Threadless run
    "agent", // Assistant ID
    {
        input: {
            "question": "Show me the top 10 yields for USDC. Show all columns except rewardType, isAvailable, canEnter, canExit, updatedAt, createdAt"
        },
        streamMode: "updates",
    }
);

for await (const chunk of streamResponse) {
        console.log(JSON.stringify(chunk, null, 2));
        console.log("chunk.data", chunk.data);

        if (chunk.data && chunk.data.execute_query && chunk.data.execute_query.result) {
          console.log("chunk.data.execute_query", chunk.data.execute_query.result);
        }
        // console.log(`Receiving new event of type: ${chunk.event}...`);
        // console.log(JSON.stringify(chunk.data, null, 2));
        // console.log("\n\n");
    }
}

main();