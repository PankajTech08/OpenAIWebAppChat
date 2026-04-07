using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Identity.Client;
using OpenAI;
using OpenAI.Chat;

namespace OpenAIWebApp.Controllers
{
    [ApiController]
    public class ChatController : ControllerBase
    {
        //test with swagger added in startup for testing purpose

        private readonly IConfiguration _config;
        string OPENAI_API_KEY = string.Empty;
        public ChatController(IConfiguration config)
        {
            _config = config;
            OPENAI_API_KEY = _config["OPENAI_API_KEY"] ?? string.Empty;
        }

        [HttpGet("getChatdata")]
        public async Task<JsonResult> GetChatdata(string question)
        {
            var chatClient = new ChatClient("gpt-3.5-turbo", OPENAI_API_KEY);
            var messages = new List<ChatMessage>
            {
                new UserChatMessage(question)
            };
            ChatCompletion completion = await chatClient.CompleteChatAsync(messages);
            var response = completion.Content[0].Text;
            var jsonResult = new JsonResult(new { message = $"Chat response from OpenAI : {response}" });

            return jsonResult;
        }

      
    }
}
