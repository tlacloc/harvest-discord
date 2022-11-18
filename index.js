import dotenv from 'dotenv'
dotenv.config()

import { 
  Client,
  ButtonBuilder,
  ButtonStyle,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle
 } from 'discord.js'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ]
})

client.login(process.env.DISCORD_TOKEN)

const btn = new ButtonBuilder()
  .setCustomId('Hola mundo')
  .setLabel('Hola mundo')
  .setStyle(ButtonStyle.Primary)

client.on("messageCreated", async (message) => {
  console.log(message)
  if (!message?.author?.bot) {
    message.author.send({
      content: 'Push my buttons!',
      components: [btn]
    })
  }
});

client.on("interactionCreate", async (interaction) => {
  console.log(interaction)
  if (interaction.customId === 'Hola mundo') {
    interaction.reply({
      content: 'Hola mundo',
      ephemeral: true
    })
  }
})